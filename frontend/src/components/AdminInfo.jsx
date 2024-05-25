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

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/product/getProducts"
      );
      setProducts(data?.products);
      console.log(data?.products[0].images[0]);
      
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/product/delete/${id}`);
      fetchProducts()
    } catch (error) {
      console.log(" Error in fetchinf products ", error);
    }
  };


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <Grid container>
              {products?.map((p) => (
                <>
                  <Grid item sm={12} md={4} lg={4}>
                    <div class="card" style={{ width: "18rem" }}>
                      <Link
                        className="link"
                        to={`/productDetail/${p._id}`}
                      >
                      <img
                        class="card-img-top"
                        style={{ height: "200px", left: "0px" }}
                        src={`http://localhost:8080/${p.images[0]}`}
                        alt="Card image cap"
                      />
                      </Link>
                      <div class="card-body">
                        <h5 class="card-title">{p.name}</h5>
                        <p class="card-text">{p.description.slice(0, 30)}...</p>
                        <p class="card-text">{p.price}</p>
                      </div>
                      <div className="buttons">
                        <Link to={`/update-product/${p._id}`}>
                        <button type="submit" className="btn btn-secondary">
                          Update Product
                        </button>
                        </Link>
                        <button type="submit" onClick={() => handleDelete(p._id)} className="btn btn-danger">
                          Delete Product
                        </button>
                      </div>
                    </div>
                  </Grid>
                </>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminInfo;
