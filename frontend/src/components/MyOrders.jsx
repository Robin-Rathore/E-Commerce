import React, { useEffect, useState } from "react";
import Header from "./Header";
import TopSlider from "./TopSlider";
import Footer from "./Footer";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import FormControl from "@mui/material/FormControl/FormControl";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Select } from "antd";
const { Option } = Select;
const MyOrders = () => {
  const [orders, setOrders] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const [status, setStatus] = useState();
  const getOrders = async () => {
    try {
      const o = await axios.get(
        `https://ej-backend.onrender.com/api/v1/order/getAllOrders`
      );
      console.log(o.data.orders);
      setOrders(o.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (newStatus, id) => {
    try {
      console.log(status);
      const updatedCart = await axios.put(
        `https://ej-backend.onrender.com/api/v1/order/updateOrder/${id}`,
        { newStatus }
      );
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    getOrders();
  }, []);
  return (
    <>
      <Header />
      <TopSlider />
      <div className="orders">
        {orders && (
          <>
            {orders?.map((order) => (
              <>
                <div className="orders">
                  {order?.products?.map((item) => (
                    <>
                      {item?.cart?.map((product) => (
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
                                    User Id
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    Status
                                  </StyledTableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <StyledTableRow
                                  className="ma"
                                  key={product.name}
                                >
                                  <StyledTableCell component="th" scope="row">
                                    <img
                                      src={product.image}
                                    />
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    {product.name}
                                  </StyledTableCell>

                                  <StyledTableCell align="right">
                                    {order.id}
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    <FormControl>
                                      <Select
                                        id="demo-simple-select"
                                        value={status ? status : item.status}
                                        label="qty"
                                        onChange={(value) =>
                                          handleUpdate(value, order._id)
                                        }
                                      >
                                        <Option value="packing">Packing</Option>
                                        <Option value="shipped">Shipped</Option>
                                        <Option value="delivered">
                                          Delivered
                                        </Option>
                                        <Option value="cancelled">
                                          Cancelled
                                        </Option>
                                      </Select>
                                    </FormControl>
                                  </StyledTableCell>
                                </StyledTableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </div>
                      ))}
                    </>
                  ))}
                </div>
              </>
            ))}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyOrders;
