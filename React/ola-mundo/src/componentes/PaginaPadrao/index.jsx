import { Outlet } from "react-router-dom";
import Banner from "../Banner/index.jsx";

export default function PaginaPadrao() {
  return (
    <main>
      <Banner />

      <Outlet />
    </main>
  );
}
