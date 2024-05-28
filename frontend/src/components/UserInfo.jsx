import React, { useEffect, useState } from "react";
import "../styles/userInfo.scss";
import emptyCart from "../images/empty-cart.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
const UserInfo = () => {
  const [orders, setOrders] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const getOrder = async () => {
    try {
      const data = await axios.get(
        `https://ej-backend.onrender.com/api/v1/order/getOrder/${user?._id}`
      );
      setOrders(data?.data?.o);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrder();
  }, [user?._id]);
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="top">
        <h1>My Orders</h1>
        <Link
          to={"/login"}
          onClick={() => {
            localStorage.removeItem("user");
          }}
        >
          <p>Logout</p>
        </Link>
      </div>
      <div className="orders">
        {orders?.length > 0 ? (
          <>
            {orders?.map((order) => (
              <>
                {order?.products.map((item) =>
                  item?.cart.map((product) => (
                    <div className="product">
                      <TableContainer component={Paper}>
                        <Table
                          sx={{ minWidth: 700 }}
                          aria-label="customized table"
                        >
                          <TableHead>
                            <TableRow>
                              <StyledTableCell>Image</StyledTableCell>
                              <StyledTableCell align="right">
                                Product
                              </StyledTableCell>

                              <StyledTableCell align="right">
                                Customer Name
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                Status
                              </StyledTableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <StyledTableRow className="ma" key={product.name}>
                              <StyledTableCell component="th" scope="row">
                                <img
                                  src={product.image}
                                />
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                {product?.name}
                              </StyledTableCell>

                              <StyledTableCell align="right">
                                {user?.firstName}
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                {item?.status}
                              </StyledTableCell>
                            </StyledTableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  ))
                )}
              </>
            ))}
          </>
        ) : (
          <>
            <div className="empty">
              <img src={emptyCart} alt="empty image" srcset="" />
              <div className="write">
                <h1>Hey!, it feels so empty!</h1>
                <span>Continue Shopping and Start Ordering</span>
              </div>
              <button
                className='button_cart1
                relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
                  px-4 py-4 absolute top-4 font-semibold
                uppercase transition-all duration-500
                
                before:absolute before:inset-0
                before:-z-10 before:translate-x-[150%]
                before:translate-y-[150%] before:scale-[2.5]
                before:rounded-[100%] before:bg-SecondaryColor
                before:transition-transform before:duration-1000
                before:content-[""]

                hover:scale-105 hover:text-PrimaryColor
                hover:before:translate-x-[0%]
                hover:before:translate-y-[0%]
                active:scale-95'
              >
                <span> Continue Shopping</span>
              </button>
              {/* <button type="button"> Continue Shopping</button> */}
            </div>
          </>
        )}
      </div>
      <hr />
      <div className="user">
        <h1>ACCOUNT DETAILS</h1>
        <div className="top-user">
          <h4>{user?.firstName}  {" "}  {user?.lastName} </h4>
          <h4>{user?.email}</h4>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
