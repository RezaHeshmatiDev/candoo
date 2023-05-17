import { useRef } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PrintIcon from "@mui/icons-material/Print";
import { HeaderHeight } from "../../utils/Constants";
import Drawer from "../Drawer/Drawer";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  const drawerRef = useRef<any>(null);

  const theme = useTheme();

  const toggleMenu = () => {
    drawerRef.current.toggleDrawer();
  };

  return (
    <>
      <Grid
        container
        alignItems={"center"}
        display={"flex"}
        paddingX={2}
        height={HeaderHeight}
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        }}
      >
        <Box flex={0.28} onClick={toggleMenu}>
          <MenuIcon />
        </Box>
        <Box flex={1} display={"flex"} justifyContent={"center"}>
          <Typography>{title}</Typography>
        </Box>
        <Box flex={0.28} display={"flex"} justifyContent={"flex-end"}>
          <PrintIcon />
        </Box>
      </Grid>

      <Drawer ref={drawerRef}>
        <p>Hello</p>
      </Drawer>
    </>
  );
};

export default Header;
