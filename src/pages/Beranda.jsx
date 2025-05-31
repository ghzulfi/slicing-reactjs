import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import SectionComponent from "../components/SectionComponent";
import "../styles/style.css";

function Beranda() {
  return (
    <>
      <main className="container">
        <NavbarComponent />
        <SectionComponent />
        <FooterComponent />
      </main>
    </>
  );
}

export default Beranda;
