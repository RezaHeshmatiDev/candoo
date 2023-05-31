import { Grid, Button, useTheme } from "@mui/material";

const Actions = () => {
  const theme = useTheme();

  const actions = [
    { id: 1, title: "ثبت سفارش", onClick: undefined },
    { id: 2, title: "ثبت دلیل عدم سفارش", onClick: undefined },
    { id: 3, title: "اصلاح اطلاعات مشتری", onClick: undefined },
    { id: 4, title: "ثبت یادآوری", onClick: undefined },
  ];

  return (
    <Grid
      container
      position={"fixed"}
      bottom={0}
      bgcolor={theme.palette.primary.main}
      spacing={1}
      p={1}
      pt={0}
    >
      {actions.map((item) => {
        return (
          <Grid key={item.id} item xs={6}>
            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor: theme.palette.primary.dark }}
              onClick={item.onClick}
            >
              {item.title}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Actions;
