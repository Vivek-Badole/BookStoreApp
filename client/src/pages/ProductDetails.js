import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import { AiTwotoneStar} from "react-icons/ai";
import {SiBookstack} from "react-icons/si"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [loading,setLoading] = useState(false);

  //inital details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setLoading(false);
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row container product-details">
        <div className="col-md-6">
          {loading ? (
                        <Skeleton
                            width="100%"
                            height={500}
                        />
                    ) : <img
                    src={`/api/v1/product/product-photo/${product._id}`}
                    className="card-img-top"
                    alt={product.name}
                    height="500"
                    width={"350px"}
                    loading="lazy"
                  /> }
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">Product Details</h1>
          <hr />
          <div className="card-name-info">
          {loading ? <Skeleton width={160} /> : <div className="card-name-category">Name : <h6>{product.name}</h6></div>}
          {loading ? <Skeleton width={160} /> : <div className="card-name-category">Author : <h6>{product.author}</h6></div>}
          </div>
          <h6>{loading ? <Skeleton count={4} /> :<>Description : {product.description}</>}</h6>
          <div className="card-name-info">
          {loading ? <Skeleton width={120} /> : <h6 className="card-name-prices1">
             Price :
             <p className="card-name-prices2">{product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}</p> </h6> }
            <div className="card-name-rating">{loading ? <Skeleton width={60} /> : <h6 className="card-name-rating-space"><AiTwotoneStar style={{color:"goldenrod"}} />{product.rating}/5</h6>}</div>
          </div>
          <div className="card-name-info">
          {loading ? <Skeleton width={120} /> : <div className="card-name-category">Category : <h6>{product?.category?.name}</h6></div>}
          <div className="card-name-rating">{loading ? <Skeleton width={60} /> : <h6 className="card-name-rating-space"><SiBookstack  />{product.quantity}M</h6>}</div>
          </div>
          {loading ? <Skeleton height={35} /> : <button
            className="btn btn-secondary ms-1"
            onClick={() => {
              setCart([...cart, product]);
              localStorage.setItem("cart", JSON.stringify([...cart, product]));
              toast.success("Item Added to cart");
            }}
          >
            ADD TO CART
          </button> }
        </div>
      </div>
      <hr />
      <div className="row container similar-products">
        <h4>Similar Products ➡️</h4>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" key={p._id}>
              {loading ? (
                        <Skeleton
                            width="100%"
                            height={200}
                        />
                    ) : <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    loading="lazy"
                  /> }
              <div className="card-body">
                <div className="card-name-price">
                  <h6 className="card-title">{loading ? <Skeleton width={120} /> : <>{p.name.substring(0, 20)}...</>}</h6>
                  <h6 className="card-title card-price">
                  {loading ? <Skeleton width={60}/> : p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                  </h6>
                </div>
                <p className="card-text ">
                  {loading ? <Skeleton count={2} /> : <>{p.description.substring(0, 60)}...</>}
                </p>
                <div className="card-name-price">
                  {loading ? <Skeleton width={250}  height={35} /> : <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>}
                  {/* <button
                  className="btn btn-dark ms-1"
                  onClick={() => {
                    setCart([...cart, p]);
                    localStorage.setItem(
                      "cart",
                      JSON.stringify([...cart, p])
                    );
                    toast.success("Item Added to cart");
                  }}
                >
                  ADD TO CART
                </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
