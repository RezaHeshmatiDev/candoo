import { useState, forwardRef, useImperativeHandle } from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Grid,
  TextField,
  TextFieldProps,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
  Typography,
  ButtonProps,
  Select,
  MenuItem,
  SelectProps,
  RadioGroupProps,
  FormControl,
} from "@mui/material";
import { useFormik } from "formik";

enum FormKeys {
  FIRST_NAME = "firstName",
  LAST_NAMe = "lastName",
  COMPANY = "company",
  AGENT = "agent",
  MOBILE = "mobile",
  TELEPHONE = "telephone",
  PRICE_TYPE = "priceType",
  SEX = "sex",
  ADDRESS = "address",
}

const AddCustomer = forwardRef((_props, ref) => {
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
      firstName: "",
      lastName: "",
      company: "asdasdd",
      agent: "",
      mobile: "",
      telephone: "",
      priceType: "branches",
      sex: "male",
      address: "",
    },
    onSubmit(values, formikHelpers) {
      console.log(values);
    },
  });

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle align="center" fontSize={"medium"}>
        {"درج مشتری"}
      </DialogTitle>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Grid container spacing={1} sx={{ p: 1.5 }}>
          <GridTextField
            title="نام"
            name={FormKeys.FIRST_NAME}
            onChange={formik.handleChange}
          />
          <GridTextField
            title="فامیل"
            name={FormKeys.LAST_NAMe}
            onChange={formik.handleChange}
          />
          <GridTextField
            title="نام فروشگاه"
            name={FormKeys.COMPANY}
            onChange={formik.handleChange}
          />
          <GridTextField
            title="نام مسئول خرید"
            name={FormKeys.AGENT}
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
          <GridTextField
            title="منطقه و مسیر"
            type="button"
            placeholder={"انتخاب منطقه و مسیر"}
          />
          <GridTextField
            title="نوع قیمت گذاری مشتری"
            name={FormKeys.PRICE_TYPE}
            onChange={formik.handleChange}
            type="select"
            defaultValue={formik.values.priceType}
          />
          <GridTextField
            title="جنسیت"
            name={FormKeys.SEX}
            onChange={formik.handleChange}
            type="radio"
          />
          <GridTextField
            title="آدرس"
            multiline
            InputProps={{ style: { minHeight: "100px" } }}
            name={FormKeys.ADDRESS}
            onChange={formik.handleChange}
          />
        </Grid>
        <DialogActions>
          <Button
            fullWidth
            variant={"contained"}
            color={"error"}
            onClick={handleClose}
          >
            {"انصراف"}
          </Button>
          <Button
            type="submit"
            fullWidth
            variant={"contained"}
            color={"success"}
          >
            {"ثبت"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
});

const GridTextField = ({
  type = "textfield",
  ...props
}: TextFieldProps & { type?: "textfield" | "radio" | "button" | "select" }) => {
  const renderField = () => {
    switch (type) {
      case "textfield":
        return (
          <TextField {...(props as TextFieldProps)} fullWidth size="small" />
        );
      case "button":
        return (
          <Button
            {...(props as ButtonProps)}
            fullWidth
            size="small"
            variant={"contained"}
            color={"success"}
            sx={{ p: 0 }}
          >
            {props.placeholder}
          </Button>
        );
      case "radio":
        return (
          <RadioGroup
            {...(props as RadioGroupProps)}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <FormControlLabel value="female" control={<Radio />} label="زن" />
            <FormControlLabel value="male" control={<Radio />} label="مرد" />
          </RadioGroup>
        );
      case "select":
        return (
          <Select {...(props as SelectProps)} fullWidth size="small">
            <MenuItem value={"branches"}>{"قیمت نمایندگی ها"}</MenuItem>
            <MenuItem value={"mashhad"}>{"قیمت مشهد"}</MenuItem>
          </Select>
        );
    }
  };

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
      {renderField()}
    </Grid>
  );
};

export default AddCustomer;
