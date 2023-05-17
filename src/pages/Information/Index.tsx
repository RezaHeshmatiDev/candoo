import { Typography, Grid, Card, Button } from "@mui/material";

import Page from "../../components/Page/Page";
import { generateUniqueID } from "../../utils/Functions";

interface ListItem {
  id: number;
  options: Option[];
}

interface Option {
  id: number;
  title: string;
  date: string;
  onClick(): void;
}

const Information = () => {
  const list: ListItem[] = [
    {
      id: generateUniqueID(),
      options: [
        {
          id: generateUniqueID(),
          title: "دریافت اطلاعات مشتریان",
          date: "13:09 - 1397/10/29",
          onClick: () => {
            console.log();
          },
        },
        {
          id: generateUniqueID(),
          title: "پاکسازی کلیه اطلاعات",
          date: "13:09 - 1397/10/29",
          onClick: () => {
            console.log();
          },
        },
      ],
    },
    {
      id: generateUniqueID(),
      options: [
        {
          id: generateUniqueID(),
          title: "دریافت محصولات",
          date: "13:09 - 1397/10/29",
          onClick: () => {
            console.log();
          },
        },
        {
          id: generateUniqueID(),
          title: "دریافت مسیرها",
          date: "13:09 - 1397/10/29",
          onClick: () => {
            console.log();
          },
        },
        {
          id: generateUniqueID(),
          title: "دریافت سوابق مشتریان",
          date: "13:09 - 1397/10/29",
          onClick: () => {
            console.log();
          },
        },
        {
          id: generateUniqueID(),
          title: "دریافت قیمت ها",
          date: "13:09 - 1397/10/29",
          onClick: () => {
            console.log();
          },
        },
      ],
    },
    {
      id: generateUniqueID(),
      options: [
        {
          id: generateUniqueID(),
          title: "دریافت تنظیمات",
          date: "13:09 - 1397/10/29",
          onClick: () => {
            console.log();
          },
        },
        {
          id: generateUniqueID(),
          title: "دریافت تصاویر",
          date: "13:09 - 1397/10/29",
          onClick: () => {
            console.log();
          },
        },
        {
          id: generateUniqueID(),
          title: "دریافت آخرین نسخه",
          date: "13:09 - 1397/10/29",
          onClick: () => {
            console.log();
          },
        },
        {
          id: generateUniqueID(),
          title: "دریافت گزارش آخرین خرید",
          date: "13:09 - 1397/10/29",
          onClick: () => {
            console.log();
          },
        },
      ],
    },
    {
      id: generateUniqueID(),
      options: [
        {
          id: generateUniqueID(),
          title: "دریافت موجودی انبار",
          date: "13:09 - 1397/10/29",
          onClick: () => {
            console.log();
          },
        },
      ],
    },
  ];

  return (
    <Page title={"دریافت اطلاعات"}>
      <Typography mb={2}>
        {
          "نکته: با انتخاب هرکدام از این گزینه ها تمامی اطلاعات سفارشات و مشتریان حذف میشود."
        }
      </Typography>
      <Grid container spacing={1}>
        {list.map((item) => {
          return <Container key={item.id} item={item} />;
        })}
      </Grid>
    </Page>
  );
};

const Container = ({ item }: { item: ListItem }) => {
  return (
    <Grid item xs={12}>
      <Card>
        <Grid container spacing={1} p={1}>
          {item.options.map((option) => {
            return (
              <Grid
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                item
                xs={item.options.length > 1 ? 6 : 12}
                key={option.id}
              >
                <Button size={"large"} variant={"contained"} fullWidth>
                  <Typography variant="caption">{option.title}</Typography>
                </Button>
                {!!option.date && (
                  <Typography variant="caption" mt={0.5}>
                    {option.date}
                  </Typography>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Card>
    </Grid>
  );
};

export default Information;
