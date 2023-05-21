import { ReactNode, useRef } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PrintIcon from "@mui/icons-material/Print";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { HeaderHeight } from "../../utils/Constants";
import Drawer from "../Drawer/Drawer";

export interface HeaderProps {
  title: string;
  hasMenu?: boolean;
  hasPrint?: boolean;
  hasBack?: boolean;
  rightContent?: ReactNode | ReactNode[];
  leftContent?: ReactNode | ReactNode[];
}

const Header = ({
  title,
  hasMenu,
  hasPrint,
  hasBack = true,
  rightContent,
  leftContent,
}: HeaderProps) => {
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
        paddingX={1}
        position={"fixed"}
        top={0}
        height={HeaderHeight}
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        }}
      >
        <Box flex={0.5}>
          {hasMenu && <MenuIcon onClick={toggleMenu} />}
          {!!rightContent && rightContent}
        </Box>
        <Box flex={1} display={"flex"} justifyContent={"center"}>
          <Typography>{title}</Typography>
        </Box>
        <Box flex={0.5} display={"flex"} justifyContent={"flex-end"}>
          {hasPrint && <PrintIcon />}
          {hasBack && <ArrowBackIcon onClick={back} />}
          {!!leftContent && leftContent}
        </Box>
      </Grid>

      <Drawer ref={drawerRef} />
    </>
  );
};

export default Header;
