import "@/components/Header/Header.scss";
function Header() {
  return (
    <header>
      <img
        src="https://cdn.discordapp.com/attachments/336171716126572548/1237913754226786375/Elegant_Beige_Black_Film_Maker_Cinematography_Business_Logo__2_-removebg-preview.png?ex=663d6086&is=663c0f06&hm=b6c420327aa4f14e9f1b4783b40357f44decc50c97695586e042c7af3d2b0906&"
        alt=""
      />
      <div className="nav-menu">
        <a>Home</a>
        <a>About</a>
      </div>
    </header>
  );
}

export default Header;
