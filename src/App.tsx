import MainRouter from "./router/MainRouter";
import ThemeProvider from "./theme/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <MainRouter />
    </ThemeProvider>
  );
};

export default App;
