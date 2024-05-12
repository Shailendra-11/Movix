import "./footer.scss"
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          The Movie Database (TMDb) is like a massive digital library for movies and TV shows.
          It's a website where you can find all sorts of information about your favorite films and series,
          like who stars in them, when they were released, and even user ratings and reviews. It's like having a
          giant catalog of everything you'd want to know about movies, all in one place. People use TMDb to discover new films,
          keep track of what they've watched, and connect with other movie buffs. It's a go-to resource for anyone who loves to
          dive into the world of cinema.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
           <Link  to="https://www.linkedin.com/in/shailendra-rai-a103b420" target="_blank"  rel="noopener noreferrer">
          <span className="icon">
            <FaLinkedin />
          </span>
          </Link>
        </div>
      </ContentWrapper>
    </footer>
  )
}

export default Footer
