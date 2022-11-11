import { BrowserRouter } from "react-router-dom";
import RouteSwitch from "./RouteSwitch";
import { AuthProvider } from "src/context/AuthProvider";
import { SocketProvider } from "src/context/Socket";
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
