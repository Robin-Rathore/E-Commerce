import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "./AdminSidebar";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid/Grid";
import Header from "./Header";
import TopSlider from "./TopSlider";
import Footer from "./Footer";
const AdminInfo = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoadin] = useState(false);
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        "https://ej-backend.onrender.com/api/v1/product/product-count"
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchProducts = async () => {
    try {
      setLoadin(true);
      const { data } = await axios.get(
        `https://ej-backend.onrender.com/api/v1/product/productList/${page}`
      );
      setLoadin(false);
      setProducts(data?.products);
      console.log(data?.products[0].images[0]);
    } catch (error) {
      setLoadin(false);
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    if (page == 1) {
      return;
    }
    loadMore();
  }, [page]);
  const loadMore = async () => {
    try {
      setLoadin(true);
      const { data } = await axios.get(
        `https://ej-backend.onrender.com/api/v1/product/productList/${page}`
      );
      setLoadin(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      setLoadin(false);
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://ej-backend.onrender.com/api/v1/product/delete/${id}`);
      fetchProducts();
      toast.success("Product Deleted Sucessfully");
    } catch (error) {
      console.log(" Error in fetchinf products ", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    getTotal();
  }, []);

  return (
    <>
      <Header />
      <TopSlider />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            {products && (
              <Grid container>
                {products?.map((p) => (
                  <>
                    <Grid item sm={12} md={4} lg={4}>
                      <Link
                        to={`/productDetail/${p._id}`}
                        className="product_Card_Wrapper max-w-lg bg-gray-50 rounded overflow-hidden m-4 border-[1px] border-gray-150 rounded"
                      >
                        <img
                          className="w-full"
                          src={p.images[0]}
                          alt={p.name}
                        />
                        <div className="more-images flex">
                          <a
                            href=""
                            className="w-1/5 m-2 shining-blue rounded border-[1px] border-blue"
                          >
                            <img
                              className="rounded"
                              src={p.images[1]}
                              alt={p.name}
                            />
                          </a>

                          <a
                            href=""
                            className="w-1/5 m-2 shining-blue rounded border-[1px] border-blue"
                          >
                            <img
                              className="rounded"
                              src={p.images[2]}
                              alt={p.name}
                            />
                          </a>
                        </div>

                        <div className="product_card_Font px-2 py-2">
                          <div className="product_card_Font_Title font-bold text-[#002D46] text-lg mb-2">
                            {p.name}
                          </div>
                          <p className="text-gray-400 text-base">
                            {p.ScreenSize} {p.Type} {p.DisplayType}
                          </p>
                        </div>

                        <div className="pricing flex flex-wrap ">
                          <div className="font-bold text-[#002D46] text-lg mb-2 ml-2">
                            &#8377;{p.price - p.price * (p.discount / 100)} M.R.P.: ₹{p.price}{" "}
                          </div>
                          <div
                            className="old ml-2 my-auto ml-2 text-gray-400"
                            style={{ textDecoration: "line-through" }}
                          >
                            &#8377;{p.discount}
                          </div>
                          <div
                            className="discount mr-2 my-auto ml-3 font-bold"
                            style={{ color: "#FF6D5C" }}
                          >
                            {" "}
                            {"("}
                            {p?.discount} %
                            {")"}{" "}
                          </div>
                        </div>

                        <div className="offer px-2 py-2 flex flex-wrap  text-[#002D46] ">
                          <img
                            className="h-12 w-12"
                            src="https://www.pebblecart.com/cdn/shop/files/wow-removebg-preview.png?v=1707281388&width=100"
                            alt=""
                          />
                          <div className="second  my-auto ml-3 font-bold ">
                            {" "}
                            &#8377;{p.price}
                          </div>
                          <div className="third my-auto ml-2">
                            {" "}
                            with Bank offer
                          </div>
                        </div>
                      </Link>
                      <div className="buttons">
                        <Link to={`/updateProduct/${p._id}`}>
                          <button type="submit" className="btn btn-secondary">
                            Update Product
                          </button>
                        </Link>
                        <button
                          type="submit"
                          onClick={() => handleDelete(p._id)}
                          className="btn btn-danger"
                        >
                          Delete Product
                        </button>
                      </div>
                    </Grid>
                  </>
                ))}
              </Grid>
            )}
            <button
              className="btn btn-secondary"
              onClick={(e) => {
                
                setPage(page + 1);
              }}
            >
              {loading ? "loading..." : "loadmore"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminInfo;
