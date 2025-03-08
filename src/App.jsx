import { Outlet } from "react-router";
import { Header, Footer } from "./pages";

function App({}) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
