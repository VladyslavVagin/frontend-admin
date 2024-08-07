// @ts-nocheck
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrders, getOrdersByQuery } from "../../redux/orders/operations";
import { PageContainer } from "../../components/Common/PageContainer";
import FilterBar from "../../components/FilterBar/FilterBar";
import OrdersTable from "../../components/OrdersTable/OrdersTable";

const Orders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <PageContainer>
      <FilterBar fn={getOrders} fnQuery={getOrdersByQuery} placeholder="User Name" />
      <OrdersTable />
    </PageContainer>
  );
};

export default Orders;
