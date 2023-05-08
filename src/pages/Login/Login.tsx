import {
  Box,
  Card,
  CardContent,
  CardHeader,
  TextField,
  styled,
  Typography,
  InputAdornment,
  useTheme,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  const theme = useTheme();

  const BoxWrapper = styled(Box)(
    ({ theme }) => `
      background-color: ${theme.palette.primary.dark};
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    `
  );

  return (
    <BoxWrapper>
      <Card sx={{ m: 6 }}>
        <CardHeader
          sx={{ backgroundColor: theme.palette.primary.main }}
          title={"فرم ورودی کاربر"}
          titleTypographyProps={{
            textAlign: "center",
          }}
        />
        <CardContent>
          <TextField
            sx={{ mb: 1 }}
            fullWidth
            size="small"
            placeholder="نام کاربری"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          >
            <Typography>{"نام کاربری"}</Typography>
          </TextField>
          <TextField
            fullWidth
            size="small"
            placeholder="رمز ورود"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          >
            <Typography>{"رمز عبور"}</Typography>
          </TextField>
          {/* <Checkbox title="مرا بخاطر بسپار" /> */}
          <FormGroup sx={{ paddingX: 1 }}>
            <FormControlLabel
              control={
                <Checkbox color="primary" name="remember-me" size="small" />
              }
              label="بخاطر بسپار"
            />
          </FormGroup>
          <Button variant="contained" size="small" fullWidth sx={{ mt: 2 }}>
            <Typography>{"ورود"}</Typography>
          </Button>
          <Typography variant="body2" mt={2} textAlign={"center"}>
            {`Version 1.0.0`}
          </Typography>
        </CardContent>
      </Card>
    </BoxWrapper>
  );
};

export default Login;
