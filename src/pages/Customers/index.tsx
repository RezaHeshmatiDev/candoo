import TopTabbar from "../../components/Tabbar/TopTabbar";
import Marketer from "./Marketer";

const Customers = () => {
  return (
    <TopTabbar
      headerTitle={"مشتریان"}
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
  );
};

export default Customers;
