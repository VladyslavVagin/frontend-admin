// @ts-nocheck
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCustomers, getCustomersByQuery } from "../../redux/customers/operations";
import FilterBar from "../../components/FilterBar/FilterBar";
import CustomerList from "../../components/Customers/CustomersList";
import { PageContainer } from "../../components/Common/PageContainer";

const Customers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  return (
    <PageContainer>
      <FilterBar fn={getCustomers} fnQuery={getCustomersByQuery} placeholder="User Name"  />
      <CustomerList />
    </PageContainer>
  );
};

export default Customers;
