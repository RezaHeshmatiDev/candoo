import { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

import TopTabbar from "../../components/Tabbar/TopTabbar";
import Marketer from "./Marketer";
import CustomerSearch from "../../components/CustomerSearch/CustomerSearch";
import AddCustomer from "../../components/AddCustomer/AddCustomer";

const Customers = () => {
  const customerSearchRef = useRef<any>(null);
  const addCustomerRef = useRef<any>(null);
  // const reminderRef = useRef<any>(null);

  const onClickSearch = () => {
    customerSearchRef.current.toggleDialog();
  };

  const onClickAdd = () => {
    addCustomerRef.current.toggleDialog();
  };

  const actions = (
    <>
      <SearchIcon onClick={onClickSearch} />
      <AddIcon sx={{ mx: 1 }} onClick={onClickAdd} />
      <AccessAlarmIcon />
    </>
  );

  return (
    <>
      <TopTabbar
        headerProps={{
          title: "مشتریان",
          rightContent: actions,
        }}
        tabs={[
          {
            label: "برنامه بازاریاب",
            component: Marketer,
          },
          {
            label: "ویزیت نشده",
            component: Marketer,
          },
          {
            label: "خرید کرده",
            component: Marketer,
          },
          {
            label: "عدم سفارش",
            component: Marketer,
          },
        ]}
      />

      <CustomerSearch ref={customerSearchRef} />
      <AddCustomer ref={addCustomerRef} />
    </>
  );
};

export default Customers;
