import { ReactNode } from "react";
import {
  Table as MaterialTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  SxProps,
} from "@mui/material";

interface Props {
  data: any[];
  renderItem(item: any, index: number): ReactNode | ReactNode[];
  tableColumns: {
    text: string;
    align?: "inherit" | "left" | "center" | "right" | "justify";
  }[];
  sx?: SxProps;
}

const Table = ({ data, renderItem, tableColumns, sx }: Props) => {
  const align = "right";

  return (
    <TableContainer sx={{ maxHeight: 510, ...sx }}>
      <MaterialTable stickyHeader>
        <TableHead>
          <TableRow>
            {tableColumns.map((item, index) => {
              return (
                <TableCell key={index} align={item.align || align}>
                  <Typography fontWeight={"bold"}>{item.text}</Typography>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return renderItem(item, index);
          })}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
};

export default Table;
