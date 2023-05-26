import { Box, SxProps, Typography, useTheme } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

import CustomersData from "./Customers.json";

interface Customer {
  id: number;
  name: string;
  code: string;
  company: string;
  address: string;
  tags?: string[];
}

const List = () => {
  return (
    <Box pb={6}>
      {CustomersData.data.map((customer) => {
        return <Item key={customer.id} customer={customer} />;
      })}
      <TagsLabel />
    </Box>
  );
};

const Item = ({ customer }: { customer: Customer }) => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      borderTop={`1px solid ${theme.palette.common.black}`}
      py={3}
      px={1}
    >
      <Box>
        <Text>{`ردیف: ${customer.id}`}</Text>
        <Text>{`نام: ${customer.name}`}</Text>
        <Text>{`کد مشتری: ${customer.code}`}</Text>
        <Text>{`نام فروشگاه: ${customer.company}`}</Text>
        <Text>{`آدرس: ${customer.address}`}</Text>
      </Box>
      <Tags tags={customer.tags} />
    </Box>
  );
};

const Text = ({ children }: { children: string }) => {
  return (
    <Typography lineHeight={2} fontWeight={"bold"} variant="subtitle2">
      {children}
    </Typography>
  );
};

const Tags = ({ tags }: { tags?: string[] }) => {
  const theme = useTheme();

  const sx: SxProps = {
    flex: 1,
    px: 2,
    py: 0.7,
    color: theme.palette.primary.contrastText,
    fontSize: "large",
  };

  /**
   *
   * @param {string} key
   * @returns {string}
   */
  const getTagColor = (key: string): string => {
    return tags?.find((tag) => tag === key)
      ? theme.palette.primary.dark
      : theme.palette.primary.main;
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      borderRadius={1}
      overflow={"hidden"}
    >
      <LocationOnIcon sx={[sx, { backgroundColor: getTagColor("location") }]} />
      <ShoppingCartIcon
        sx={[sx, { backgroundColor: getTagColor("not-order") }]}
      />
      <RemoveRedEyeIcon sx={[sx, { backgroundColor: getTagColor("order") }]} />
      <ProductionQuantityLimitsIcon
        sx={[sx, { backgroundColor: getTagColor("visited") }]}
      />
    </Box>
  );
};

const TagsLabel = () => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      position={"fixed"}
      bottom={0}
      right={0}
      left={0}
      px={1}
      py={1.5}
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <TagsLabelItem title={"سفارش"} icon={ShoppingCartIcon} />
      <TagsLabelItem title={'عدم سفارش"'} icon={ProductionQuantityLimitsIcon} />
      <TagsLabelItem title={"مختصات"} icon={LocationOnIcon} />
      <TagsLabelItem title={"ویزیت شده"} icon={RemoveRedEyeIcon} />
    </Box>
  );
};

const TagsLabelItem = ({ title, icon }: { title: string; icon: any }) => {
  const theme = useTheme();

  const sx: SxProps = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    color: theme.palette.primary.contrastText,
  };

  const Icon = icon;
  return (
    <Box sx={sx}>
      <Typography ml={0.5} variant="caption">
        {title}
      </Typography>
      <Icon fontSize="small" />
    </Box>
  );
};

export default List;
