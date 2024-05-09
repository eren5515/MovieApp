import "@/components/Footer/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <footer>
      <div>
        <div>
          <a href="https://github.com/eren5515" target="_blank">
          Github
          </a>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/mehmet-eren-kılıç-82a5781ba/"
            target="_blank"
          >
          LinkedIn
          </a>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
        <div>
          <a href="https://www.erenkilic.com" target="_blank">
          Portfolio
          </a>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
      </div>
      <h1>
        <span>MovieApp</span> by <span>Mehmet Eren Kılıç</span>
      </h1>
      <h1>© 2024</h1>
    </footer>
  );
}

export default Footer;
