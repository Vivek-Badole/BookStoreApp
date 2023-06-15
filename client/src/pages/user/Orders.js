import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const [loading,setLoading] = useState(false);

  const getOrders = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/v1/auth/orders");
      setLoading(false);
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  return (
    <Layout title={"Your Orders"}>
      <div className="container-flui p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Orders</h1>
            {orders?.map((o, i) => {
              return (
                <div className="border shadow" key={o._id}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col"> date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{i + 1}</td>
                        <td>{o?.status}</td>
                        <td>{o?.buyer?.name}</td>
                        <td>{moment(o?.createAt).fromNow()}</td>
                        <td>{o?.payment.success ? "Success" : "Failed"}</td>
                        <td>{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container">
                    {o?.products?.map((p) => (
                      <div className="row mb-2 p-3 card flex-row" key={p._id}>
                        <div className="col-md-4">
                
                          {loading ? (
                        <Skeleton
                            width="100%"
                            height={200}
                        />
                    ) : <img
                  src={`/api/v1/product/product-photo/${p?._id}`}
                  className="card-img-top"
                  alt={p?.name}
                  width="30px"
                  height="200px"
                /> }
                        </div>
                        <div className="col-md-8">
                          <h6>{loading ? <Skeleton width={160} /> : p?.name.substring(0, 40)}</h6>
                          <p>{loading ? <Skeleton width={160} /> : p?.author}</p>
                          <p>{loading ? <Skeleton count={3} /> : <>{p?.description.substring(0, 60)}...</>}</p>
                         <p> {loading ? <Skeleton width={100}/> : (<>Price : {p?.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}</>)}
                      </p>
                      <p>{loading ? <Skeleton width={160} /> : p?.category?.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
