import navbar from "./navbar.module.scss"

const Navbar = () => {
  return (
    <nav className={navbar.navbar}>
      <img src="/logo.svg" />
      <ul className={navbar.navList}>
        <li><a href="">Pricing</a></li>
        <li><a href="">Product</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Careers</a></li>
        <li><a href="">Community</a></li>
      </ul>
      <button className={navbar.btn}>Get Started</button>
    </nav>
  )
}

export default Navbar
