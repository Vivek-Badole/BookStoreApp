import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import { AiOutlineReload,AiTwotoneStar} from "react-icons/ai";
import "../styles/Homepage.css";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {SiBookstack} from "react-icons/si";



const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
       all = all.filter((c) => {});
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
      setTotal(data?.products.length)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"All Books - Best offers "}>
     
      <div className="container-fluid row mt-3 home-page">
        <div className="col-md-3 filters fixed-top one products1">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* price filter */}
          <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-9 offset-md-3 two mt-4 productsss">
          <h1 className="text-center mt-5">All Products</h1>
         { (checked.length > 0 || radio.length > 0) && (products.length === 0 ? <h2  className="text-center mt-5" style={{color:"red"}}>No Product Found</h2> : "")}
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-4" key={p._id}>
               {loading ? (
                        <Skeleton
                            width="100%"
                            height={300}
                        />
                    ) : <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
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
                    {loading ? <Skeleton count={3} /> : <>{p.description.substring(0, 60)}...</>}
                  </p>
                  <div className="card-name-price">
                    <h6 className="card-titles">{loading ? <Skeleton width={120} /> : <><SiBookstack />  {p.quantity}M</>}</h6>
                    <h6 className="card-title card-rating">
                      {loading ? <Skeleton width={60}/> : <> <AiTwotoneStar />  {p.rating}</>}
                    </h6>
                  </div>
                  <div className="card-name-price">
                    {loading ? <Skeleton width={100} height={35} /> : <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>}
                    {loading ? <Skeleton width={100} height={35} /> : <button
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
                    </button> }
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="m-2 p-3">
          {products.length > 0 ? 
           <> {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                    Loadmore <AiOutlineReload />
              </button>
            )} </> : (<h1 className="text-center text-danger" >Currently Unavailable</h1>) }
           
          </div>
        </div>
        
      </div>
    </Layout>
  );
};

export default HomePage;
