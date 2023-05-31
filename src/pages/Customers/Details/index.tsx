import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

import Page from "../../../components/Page/Page";
import Info from "./Info";
import Receipts from "./Receipts";
import Actions from "./Actions";

const CustomerDetails = () => {
  const { id } = useParams(); // Customer id

  return (
    <Page title="مشخصات مشتری" hasBack>
      <Info />
      <Receipts />
      <Actions />
    </Page>
  );
};

export default CustomerDetails;
