import { useState } from "react";
import { AppBar, Paper, Tab, Tabs, Typography } from "@mui/material";

import Page from "../Page/Page";
import { HeaderHeight } from "../../utils/Constants";

interface Props {
  headerTitle: string;
  tabs: {
    component: any;
    label: string;
  }[];
}

const TopTabbar = ({ tabs, headerTitle }: Props) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Page title={headerTitle}>
      <AppBar
        position="fixed"
        style={{ marginTop: HeaderHeight, boxShadow: "none" }}
      >
        <Tabs
          variant="fullWidth"
          textColor="inherit"
          value={value}
          onChange={(event: any, value: number) => handleChange(value)}
        >
          {tabs.map((item, index) => {
            const id = `nav-tab-${index + 1}`;
            return <LinkTab key={id} label={item.label} id={id} />;
          })}
        </Tabs>
      </AppBar>
      {/* <SwipeableViews
          axis={"x-reverse"}
          index={value}
          onChangeIndex={handleChange}> */}
      {tabs.map((item, index) => {
        const ItemComponent = item.component;
        return (
          <TabPanel key={index} value={value} index={index}>
            <ItemComponent />
          </TabPanel>
        );
      })}
      {/* </SwipeableViews> */}
    </Page>
  );
};

const LinkTab = (props: any) => {
  return (
    <Tab
      onClick={(event) => event.preventDefault()}
      {...props}
      label={<Typography variant="caption">{props.label}</Typography>}
    />
  );
};

const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props;

  return (
    <Paper
      elevation={0}
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      style={{ marginTop: "100px" }}
      {...other}
    >
      {value === index && <>{children}</>}
    </Paper>
  );
};

export default TopTabbar;
