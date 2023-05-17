import { Box, Grid, Card, Typography, useTheme } from "@mui/material";

import ReactIcon from "../../assets/react.svg";

import Header from "../../components/Header/Header";
import Drawer from "../../components/Drawer/Drawer";

interface HomeItem {
  icon?: string;
  title: string;
  onClick?(): void;
}

const Home = () => {
  const theme = useTheme();

  const items: HomeItem[] = [
    { title: "مشتریان ارسال نشده: 0" },
    { title: "سفارشات ارسال نشده: 0" },
    { icon: "something", title: "دریافت اطلاعات" },
    { icon: "something", title: "سفارشات" },
    { icon: "something", title: "مشتریان" },
    { icon: "something", title: "تحویل سمپل ها" },
    { icon: "something", title: "کاتالوگ" },
    { icon: "something", title: "ثبت اسناد دریافتی" },
    { icon: "something", title: "گزارشات" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.common.black,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Header title={"سیستم آرمان (کندو)"} />
      {/* <Grid container spacing={1.5} padding={1.5}>
        {items.map((item, index) => {
          return (
            <Grid
              key={item.title}
              item
              xs={6}
              minWidth={index === items.length - 1 ? "100%" : "auto"}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingY: 1,
                }}
              >
                {!!item.icon && (
                  <Box mb={0.5}>
                    <img alt={item.title} src={ReactIcon} />
                  </Box>
                )}
                <Typography>{item.title}</Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid> */}
      <Drawer>
        <p>Hiiii</p>
      </Drawer>
    </Box>
  );
};

export default Home;
