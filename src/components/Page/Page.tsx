import { Box } from "@mui/material";
import loadable from "@loadable/component";

import { HeaderProps } from "../../components/Header/Header";
import { ReactNode } from "react";

/**
 * Lazy import components
 */
const Header = loadable(() => import("../../components/Header/Header"));

interface Props extends HeaderProps {
  children?: ReactNode | ReactNode[];
}

const Page = ({ children, ...props }: Props) => {
  return (
    <Box>
      <Header {...props} />
      <Box p={1}>{children}</Box>
    </Box>
  );
};

export default Page;
