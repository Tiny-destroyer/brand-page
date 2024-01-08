export default function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./public/images/brand_logo.png" alt="Logo" />
      </div>

      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button>Login</button>
    </nav>
  );
}
