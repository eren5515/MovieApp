import "@/components/Header/Header.scss";
import Link from "next/link";
function Header() {
  return (
    <header>
      <Link href="/">
        <img
          src="https://raw.githubusercontent.com/eren5515/asd/main/Elegant_Beige_Black_Film_Maker_Cinematography_Business_Logo__2_-removebg-preview.png"
          alt=""
        />
      </Link>

      <div className="nav-menu">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </header>
  );
}

export default Header;
