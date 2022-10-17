import RouteSwitch from "./RouteSwitch";
import { AuthProvider } from "@context/AuthProvider";
import GlobalStyle from "@styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <RouteSwitch />
      </AuthProvider>
    </>
  );
}

export default App;
