import { Footer, Navbar, SearchBar } from "@components/ui";
import { Outlet } from "@tanstack/react-router";

function MainLayout() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vm]">
      <Navbar />
      <SearchBar/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
