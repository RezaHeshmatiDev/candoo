import { forwardRef, useImperativeHandle, useState } from "react";
import { Drawer as MaterialDrawer } from "@mui/material";
import Content from "./Content";

const Drawer = forwardRef((_props, ref) => {
  const [open, setOpen] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    toggleDrawer() {
      toggleDrawer();
    },
  }));

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <MaterialDrawer
      anchor={"left"}
      open={open}
      onClose={toggleDrawer}
      SlideProps={{
        style: { width: "50%", maxWidth: "250px", left: "auto", right: 0 },
      }}
    >
      <Content />
    </MaterialDrawer>
  );
});

export default Drawer;
