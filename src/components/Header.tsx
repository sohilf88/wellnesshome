

function Header() {
  return (
    <header className="bg-blue-700 flex items-center px-4 md:px-6 lg:px-8 justify-between lg:mb-10 md:mb-6 sm:mb-4 mb-2">
      <div className="logo flex justify-center items-center gap-4 md:font-mono text-white text-xs">
        <img className="md:w-20 w-16" src="/logo.png" alt="logo" />
        <h6 className="md:block hidden">Your Digital Mental Health Record</h6>
      </div>
      <div className="menu  ">
        <ul className="flex gap-3 text-xs sm:text-sm md:text-lg text-slate-100">
          <li>About</li>
          <li>Sign Up</li>
          <li>Login</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
