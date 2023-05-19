import { Box, SxProps } from "@mui/material";
import loadable from "@loadable/component";

import { HeaderProps } from "../../components/Header/Header";
import { ReactNode } from "react";
import { ResponsivePropertyParams } from "@mui/material/styles/cssUtils";

/**
 * Lazy import components
 */
const Header = loadable(() => import("../../components/Header/Header"));

interface Props extends HeaderProps {
  children?: ReactNode | ReactNode[];
  sx?: SxProps;
}

const Page = ({ children, sx, ...props }: Props) => {
  return (
    <>
      <Header {...props} />
      <Box sx={sx}>{children}</Box>
    </>
  );
};

export default Page;
