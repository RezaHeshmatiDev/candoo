import { ReactNode, forwardRef, useImperativeHandle, useState } from "react";
import { Drawer as MaterialDrawer } from "@mui/material";
import Content from "./Content";

interface Props {
  children: ReactNode | ReactNode[];
}

const Drawer = forwardRef(({ children }: Props, ref) => {
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
