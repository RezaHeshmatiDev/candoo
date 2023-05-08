import Login from "./pages/Login/Login";
import ThemeProvider from "./theme/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <Login />
    </ThemeProvider>
  );
};

export default App;
