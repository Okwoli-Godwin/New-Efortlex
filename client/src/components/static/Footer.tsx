import { Link } from "react-router-dom";
import styles from "../components.module.scss";
import { gsap } from "gsap";
import {
  Copyright,
  Instagram,
  MessageCircle,
  MoveRight,
  Twitter,
} from "lucide-react";
import Icon from "../../assets/iconwhite.webp";

const Footer = () => {
  const openMenu = () => {
    const main = document.getElementsByTagName("main")[0];
    const body = document.getElementsByTagName("body")[0];
    const navbar = document.querySelector("#navbar");
    const menubar = document.querySelector("#menubar");
    const close = document.querySelector("#closeMenubar");

    let tl = gsap.timeline();
    const menuOpen = () => {
      window.scrollTo(0, 0);
      main.classList.add("makeBlurred");
      body.classList.add("noScroll");
      menubar?.classList.add("open");
    };
    tl.to(navbar, { y: -100, opacity: 0, duration: 0.3 })
      .add(function () {
        menuOpen();
      })
      .to(close, { rotate: 90, duration: 0.2 });
  };

  return (
    <div className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.footer_main}>
          {/* Footer header */}
          <div className={styles.footer_header}>
            <div className={styles.logo}>
              <img src={Icon} alt="Efortlex logo icon" />
              <h1>efortlex</h1>
            </div>
            <h5>
              Bringing comfort to your doorstep <br />
              <p>
                At Efortlex, our mission is to revolutionize the housing
                experience for students, professionals, and landlords across
                Africa. We are committed to providing hassle-free accommodation
                solutions that redefine the rental industry. By leveraging
                cutting-edge technology and a customer-centric approach, we aim
                to connect the right tenants with their dream homes and help
                landlords find reliable occupants effortlessly. With a focus on
                trust, transparency, and innovation, we strive to create a
                seamless and rewarding housing journey for all
                our valued clients.
              </p>
            </h5>
          </div>
          {/* Company */}
          <div className={styles.company}>
            <h2>Company</h2>
            <div className={styles.company_links}>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <p onClick={openMenu}>Services</p>
              <Link to="/faqs">FAQs</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
          {/* Get in touch */}
          <div className={styles.get_in_touch}>
            <h2>GET IN TOUCH</h2>
            <div className={styles.socials}>
              <span>
                <h3>Socials</h3>
                <MoveRight size={16} />
              </span>
              <ul>
                <li>
                  <Link to="https://instagram.com/efortlexlimited?igshid=ZDc4ODBmNjlmNQ==">
                    <Instagram size={18} />
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com/efortlexlimited?t=oxb5HhnqsSa7w_bnPv76NQ&s=09">
                    <Twitter size={18} />
                  </Link>
                </li>
                <li>
                  <Link to="https://wa.link/9dib7x">
                    <MessageCircle size={18} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.contact}>
              <h3>Phone:</h3>
              <p>+2348028765683</p>
            </div>
            <div className={styles.email}>
              <h3>Email:</h3>
              <Link to="mailto:info@efortlex.com">info@efortlex.com</Link>
            </div>
            <div className={styles.address}>
              <h3>Address:</h3>
              <Link to="https://www.google.com/maps?q=16,+IGBOGO+ROAD,+OPPOSITE+ALKAHIA+TOWN+HALL,+ALAKAHIA,+PORT-HARCOURT,+RIVERS+STATE,+NIGERIA">
                <p>
                  16, IGBOGO ROAD, OPPOSITE ALKAHIA TOWN HALL, ALAKAHIA,
                  PORT-HARCOURT, RIVERS STATE, NIGERIA
                </p>
              </Link>
            </div>
          </div>
        </div>
        {/* Footer footer */}
        <div className={styles.footer_footer}>
          <span>
            <Copyright size={16} /> <p>Efortlex Limited</p>
          </span>
          <span>
            <Link to="/T&C.pdf" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </Link>
            &nbsp; | &nbsp;
            <Link
              to="/Privacypolicy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
