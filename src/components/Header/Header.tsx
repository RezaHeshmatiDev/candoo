import { useRef } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PrintIcon from "@mui/icons-material/Print";
import { HeaderHeight } from "../../utils/Constants";
import Drawer from "../Drawer/Drawer";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export interface HeaderProps {
  title: string;
  hasMenu?: boolean;
  hasPrint?: boolean;
  hasBack?: boolean;
}

const Header = ({ title, hasMenu, hasPrint, hasBack = true }: HeaderProps) => {
  const drawerRef = useRef<any>(null);
  const navigate = useNavigate();

  const theme = useTheme();

  const toggleMenu = () => {
    drawerRef.current.toggleDrawer();
  };

  const back = () => {
    navigate(-1);
  };

  return (
    <>
      <Grid
        container
        alignItems={"center"}
        display={"flex"}
        paddingX={2}
        position={"fixed"}
        top={0}
        height={HeaderHeight}
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        }}
      >
        <Box flex={0.28}>{hasMenu && <MenuIcon onClick={toggleMenu} />}</Box>
        <Box flex={1} display={"flex"} justifyContent={"center"}>
          <Typography>{title}</Typography>
        </Box>
        <Box flex={0.28} display={"flex"} justifyContent={"flex-end"}>
          {hasPrint && <PrintIcon />}
          {hasBack && <ArrowBackIcon onClick={back} />}
        </Box>
      </Grid>

      <Drawer ref={drawerRef} />
    </>
  );
};

export default Header;
