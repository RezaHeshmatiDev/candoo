import { Grid, Typography, Box, useTheme } from "@mui/material";
import { HeaderHeight } from "../../../utils/Constants";

const Info = () => {
  const theme = useTheme();

  const data = [
    { id: 1, key: "نام", value: "هتل تست" },
    { id: 2, key: "فروشگاه", value: "شرکت" },
    { id: 3, key: "کد مشتری", value: "228409" },
    { id: 4, key: "تلفن", value: "05131234567" },
    { id: 5, key: "موبایل", value: "09151234567" },
    { id: 6, key: "مسئول خرید", value: "مطهره" },
    { id: 7, key: "خرید", value: "مشهد - بلوار جانباز - برج مروارد" },
  ];

  return (
    <Grid container spacing={2} py={2} px={1}>
      {data.map((item, index) => {
        const isLastItem = index === data.length - 1;
        return <Item key={item.id} item={item} isLastItem={isLastItem} />;
      })}
    </Grid>
  );
};

const Item = ({ item, isLastItem }: { item: any; isLastItem: boolean }) => {
  const theme = useTheme();

  const grid = { xs: isLastItem ? 12 : 6 };

  return (
    <Grid item {...grid}>
      <Box display={"flex"}>
        <Typography fontWeight={"bold"} ml={1}>
          {item.key + ":"}
        </Typography>
        <Typography fontWeight={"bold"} color={theme.palette.error.dark}>
          {item.value}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Info;
