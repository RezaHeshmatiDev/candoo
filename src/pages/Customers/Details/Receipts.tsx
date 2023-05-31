import {
  TableCell,
  Typography,
  SxProps,
  useTheme,
  TableRow,
} from "@mui/material";

import Table from "../../../components/Table/Table";

interface Props {
  sx?: SxProps;
}

const Receipts = ({ sx }: Props) => {
  const data = [
    { id: 1, serial: 1000, price: 8028000, registered: false },
    { id: 2, serial: 30021158, price: 5568000, registered: true },
    { id: 3, serial: 30021158, price: 5568000, registered: true },
    { id: 4, serial: 30021158, price: 5568000, registered: true },
    { id: 5, serial: 30021158, price: 5568000, registered: true },
    { id: 6, serial: 30021158, price: 5568000, registered: true },
    { id: 7, serial: 30021158, price: 5568000, registered: true },
    { id: 8, serial: 30021158, price: 5568000, registered: true },
    { id: 9, serial: 30021158, price: 5568000, registered: true },
    { id: 10, serial: 30021158, price: 5568000, registered: true },
    { id: 11, serial: 30021158, price: 5568000, registered: true },
    { id: 12, serial: 30021158, price: 5568000, registered: true },
    { id: 13, serial: 30021158, price: 5568000, registered: true },
    { id: 14, serial: 30021158, price: 5568000, registered: true },
    { id: 15, serial: 30021158, price: 5568000, registered: true },
    { id: 16, serial: 30021158, price: 5568000, registered: true },
  ];
  const tableColumns = [
    { text: "ردیف" },
    { text: "شماره فاکتور" },
    { text: "مبلغ سفارش" },
  ];

  const theme = useTheme();

  const renderItem = (item: any) => {
    const align = "right";

    let bgcolor = theme.palette.success.light; // Registered online
    if (!item.registered) {
      bgcolor = theme.palette.error.light; // Not registered yet - offline
    }

    return (
      <TableRow key={item.id} sx={{ bgcolor }}>
        <TableCell align={align}>
          <Typography fontWeight={"bold"}>{item.id}</Typography>
        </TableCell>
        <TableCell align={align}>
          <Typography fontWeight={"bold"}>{item.serial}</Typography>
        </TableCell>
        <TableCell align={align}>
          <Typography fontWeight={"bold"}>{item.price}</Typography>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Table
      data={data}
      tableColumns={tableColumns}
      renderItem={renderItem}
      sx={sx}
    />
  );
};

export default Receipts;
