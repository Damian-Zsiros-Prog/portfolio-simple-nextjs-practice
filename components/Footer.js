const Footer = () => {
  return (
    <footer className="navbar navbar-expand-md navbar-dark bg-dark text-light">
      <h5 className="text-center m-auto">
        Hecho por{" "}
        <a
          href="http://www.damian-zsiros.tech/"
          className="nav-item"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          Damian Zsiros
        </a>
        .Todos los derechos reservados &copy; 2021
      </h5>
    </footer>
  );
};

export default Footer;
