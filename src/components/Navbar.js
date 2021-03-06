import logo from "../images/logo.png";

function Navbar() {
  return (
    <div className="fixed z-50 flex items-center justify-center w-screen bg-gray-darker h-1/16">
      <div className="hidden w-2/12 md:block"></div>
      <header className="flex flex-wrap items-center justify-center px-6 py-2 md:w-10/12 lg:px-4 lg:py-3">
        <img src={logo} style={{ verticalAlign: "middle" }} className="inline pr-2 md:hidden" />
        <h1 className="hidden text-2xl font-medium text-white md:inline">
          poutingemoji's Song Timeline
        </h1>
      </header>
    </div>
  );
}

export default Navbar;
