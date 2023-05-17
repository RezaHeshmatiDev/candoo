import { Box, Typography, Button, Grid } from "@mui/material";

import Logo from "../../assets/images/logo.avif";
import { getCurrentDate } from "../../utils/Functions";
import CurrentTime from "../CurrentTime/CurrentTime";

const Content = () => {
  const user = {
    name: "امیر ثریایی",
  };

  const drawerList = [
    {
      id: 1,
      title: "بارکد خوان",
      onClick: () => {
        console.log("بارکد خوان");
      },
    },
    {
      id: 2,
      title: "کیو آر کد خوان",
      onClick: () => {
        console.log("کیو آر کد خوان");
      },
    },
    {
      id: 3,
      title: "موجودی انبار",
      onClick: () => {
        console.log("موجودی انبار");
      },
    },
    {
      id: 4,
      title: "داشبورد",
      onClick: () => {
        console.log("داشبورد");
      },
    },
  ];

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography>{"سیستم آرمان (کندو)"}</Typography>
      <img
        src={Logo}
        alt="logo"
        width={60}
        height={60}
        style={{ borderRadius: "50%" }}
      />
      <Box display={"flex"} alignItems={"center"}>
        <Typography mr={1}>{user.name}</Typography>
        <Typography>{":کاربر وارد شده"}</Typography>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography>{getCurrentDate("monthByNumber")}</Typography>
        <CurrentTime />
      </Box>

      {drawerList.map((item) => {
        return (
          <Button fullWidth key={item.id} sx={{ paddingX: 2 }}>
            <Typography textAlign={"right"} sx={{ width: "100%" }}>
              {item.title}
            </Typography>
          </Button>
        );
      })}
    </Box>
  );
};

export default Content;
