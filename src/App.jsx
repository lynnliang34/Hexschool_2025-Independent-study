import { Outlet } from "react-router";
import { Header, Footer } from "./pages";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
