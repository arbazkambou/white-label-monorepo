import Logo from "@/components/layout/Logo";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <header className="container mt-4 flex items-center justify-between bg-background">
      <Logo />
      <NavLinks pathName="/" />
      {/* <NavLinksWrapper /> */}
    </header>
  );
}

export default Navbar;
