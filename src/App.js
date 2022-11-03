import { BrowserRouter } from "react-router-dom";
import RouteSwitch from "./RouteSwitch";
import { AuthProvider } from "@context/AuthProvider";
import { SocketProvider } from "@context/Socket";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename="/">
        <SocketProvider>
          <AuthProvider>
            <RouteSwitch />
          </AuthProvider>
        </SocketProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
