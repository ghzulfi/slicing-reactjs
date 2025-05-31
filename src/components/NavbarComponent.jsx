import "../styles/style.css";

function NavbarComponent() {
  return (
    <header className="header">
      <nav className="nav-header">
        <a href="#" className="test">
          <img src="/images/logo.png" alt="" className="logo" />
        </a>
      </nav>
      <div className="navbar">
        <a href="#" className="dmsans">
          Kategori
        </a>
        <div className="prof">
          <a href="#">
            <img src="/images/profile.png" alt="" className="profile" />
          </a>
          <a href="#">
            <img src="/images/menu.png" alt="" className="menu" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavbarComponent;
