import { useState, forwardRef, useImperativeHandle } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
  TextFieldProps,
  Typography,
  Button,
} from "@mui/material";
import { useFormik } from "formik";

enum FormKeys {
  NAME = "name",
  COMPANY = "company",
  CODE = "code",
  MOBILE = "mobile",
  TELEPHONE = "telephone",
}

const CustomerSearch = forwardRef((_props, ref) => {
  const [open, setOpen] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    toggleDialog() {
      setOpen(!open);
    },
  }));

  const handleClose = () => {
    setOpen(!open);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      company: "",
      code: "",
      mobile: "",
      telephone: "",
    },
    onSubmit(values, formikHelpers) {
      console.log();
    },
  });

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle align="center" fontSize={"medium"}>
        {"جستجوی مشتری"}
      </DialogTitle>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Grid container spacing={1} sx={{ p: 1.5 }}>
          <GridTextField
            title="نام"
            name={FormKeys.NAME}
            onChange={formik.handleChange}
          />
          <GridTextField
            title="نام فروشگاه"
            name={FormKeys.COMPANY}
            onChange={formik.handleChange}
          />
          <GridTextField
            title="کد مشتری"
            name={FormKeys.CODE}
            onChange={formik.handleChange}
          />
          <GridTextField
            title="موبایل"
            name={FormKeys.MOBILE}
            onChange={formik.handleChange}
          />
          <GridTextField
            title="تلفن ثابت"
            name={FormKeys.TELEPHONE}
            onChange={formik.handleChange}
          />
        </Grid>
        <DialogActions>
          <Button fullWidth variant={"contained"} color={"error"}>
            {"نمایش همه"}
          </Button>
          <Button
            type="submit"
            fullWidth
            variant={"contained"}
            color={"success"}
          >
            {"جستجو"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
});

const GridTextField = (props: TextFieldProps) => {
  return (
    <Grid item xs={12} sm={6} sx={{ direction: "rtl" }} display={"flex"}>
      <Typography
        mt={1.1}
        width={"50%"}
        variant="subtitle2"
        fontWeight={"bold"}
      >
        {props.title}
      </Typography>
      <TextField {...(props as TextFieldProps)} fullWidth size="small" />
    </Grid>
  );
};

export default CustomerSearch;
