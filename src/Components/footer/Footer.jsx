import footer from './footer.module.scss'
const Footer = () => {
  return (
    <footer className={footer.footer}>
      <div className={footer.group}>
      <div className={footer.socials}>
        <img src="/footerlogo.png" />
        <img src="/socials.png"/>
      </div>
      <ul className={footer.List}>
        <li className={footer.Items}>
          <a href="">Home</a>
        </li>
        <li className={footer.Items}>
          <a href="">Pricing</a>
        </li>
        <li className={footer.Items}>
          <a href="">Products</a>
        </li>
        <li className={footer.Items}>
          <a href="">About Us</a>
        </li>
      </ul>

      <ul className={footer.List}>
        <li className={footer.Items}>
          <a href="">Careers</a>
        </li>
        <li className={footer.Items}>
          <a href="">Community</a>
        </li>
        <li className={footer.Items}>
          <a href="">Privacy Policy</a>
        </li>
      </ul>

      <div className={footer.formSec}>
        <div className={footer.form}>
        <input className={footer.formInput} type="text" placeholder='Updates in your inbox...' />
        <button className={footer.formBtn}>Go</button>
        </div>
        <p className={footer.copyright}>Copyright 2020. All Rights Reserved</p>
      </div>
      </div>
    </footer>
  )
}

export default Footer
