import { Outlet } from "react-router";
import { Header, Footer } from "./pages";

function App({}) {
  return (
    <>
      <Header />
      <div className="py-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
