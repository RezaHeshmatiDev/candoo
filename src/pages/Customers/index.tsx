import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

import TopTabbar from "../../components/Tabbar/TopTabbar";
import Marketer from "./Marketer";

const Customers = () => {
  const actions = (
    <>
      <SearchIcon />
      <AddIcon sx={{ mx: 1 }} />
      <AccessAlarmIcon />
    </>
  );

  return (
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
  );
};

export default Customers;
