import { BrowserRouter } from "react-router-dom";
import RouteSwitch from "./RouteSwitch";
import { AuthProvider } from "@context/AuthProvider";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename="/">
        <AuthProvider>
          <RouteSwitch />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
