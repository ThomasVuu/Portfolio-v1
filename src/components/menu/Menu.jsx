import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#aboutMe">Me</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">tbc</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">tbc</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
