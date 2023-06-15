import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CategoryProductStyles.css";
import axios from "axios";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setLoading(false);
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={`${category?.name} Books`}>
      <div className="container mt-3 category">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found </h6>
        <div className="row">
          <div className="col-md-9 offset-1">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div className="card m-2" key={p._id}>
                  {loading ? (
                        <Skeleton
                            width="100%"
                            height={250}
                        />
                    ) : <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                /> }
                  <div className="card-body">
                    <div className="card-name-price">
                      <h6 className="card-title">{loading ? <Skeleton width={120} /> : <>{p.name.substring(0, 30)}</>}</h6>
                      <h6 className="card-title card-price">
                      {loading ? <Skeleton width={60}/> : p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                      </h6>
                    </div>
                    <p className="card-text ">
                    {loading ? <Skeleton count={3} /> : <>{p.description.substring(0, 60)}...</>}
                    </p>
                    <div className="card-name-price">
                    {loading ? <Skeleton width={250}  height={35} /> : <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;