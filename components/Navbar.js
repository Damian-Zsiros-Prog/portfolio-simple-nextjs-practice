import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Portfolio Practice</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <ul className="navbar-nav  mr-auto">
          <li className="nav-item ">
            <Link href="/blog">
              <a className="nav-link">Blog</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/github">
              <a className="nav-link">Github</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
