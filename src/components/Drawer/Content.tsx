import { Box, Typography, Button, Grid, useTheme } from "@mui/material";

import Logo from "../../assets/images/logo.avif";
import { getCurrentDate } from "../../utils/Functions";
import CurrentTime from "../CurrentTime/CurrentTime";

const Content = () => {
  const theme = useTheme();

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
    <Grid>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        p={1}
        pt={6}
        sx={{ backgroundColor: theme.palette.secondary.main }}
      >
        <Typography
          color={theme.palette.common.white}
          mb={2}
          variant={"caption"}
        >
          {"سیستم آرمان (کندو)"}
        </Typography>
        <img
          src={Logo}
          alt="logo"
          width={60}
          height={60}
          style={{ borderRadius: "50%" }}
        />
        <Box display={"flex"} alignItems={"center"} mt={2}>
          <Typography
            color={theme.palette.common.white}
            variant={"caption"}
            mr={0.5}
          >
            {user.name}
          </Typography>
          <Typography color={theme.palette.common.white} variant={"caption"}>
            {":کاربر وارد شده"}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
          mt={2}
        >
          <Typography color={theme.palette.common.white} variant={"caption"}>
            {getCurrentDate("monthByNumber")}
          </Typography>
          <CurrentTime />
        </Box>
      </Box>
      <Box m={1}>
        {drawerList.map((item) => {
          return (
            <Button
              fullWidth
              key={item.id}
              sx={{ paddingX: 1 }}
              onClick={item.onClick}
            >
              <Typography
                variant={"button"}
                textAlign={"right"}
                sx={{ width: "100%" }}
                color={theme.palette.secondary.contrastText}
              >
                {item.title}
              </Typography>
            </Button>
          );
        })}
      </Box>
    </Grid>
  );
};

export default Content;
