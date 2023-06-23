import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading,setLoading] = useState(false);
  //getall products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/v1/product/get-product");
      setLoading(false)
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout title={"All Product List"}>
      <div className="container-fluid m-3 p-3 dashboard">
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-3" style={{ width: "18rem" }}>
                {loading ? (
                        <Skeleton
                            width="100%"
                            height={250}
                        />
                    ) : <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                  height={300}
                    loading="lazy"
                /> }
                  <div className="card-body">
                    <h5 className="card-title">{loading ? <Skeleton width={120} /> : p.name.substring(0, 40)}</h5>
                    <p className="card-text">{loading ? <Skeleton count={3} /> : <>{p.description.substring(0, 60)}...</>}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Products;
