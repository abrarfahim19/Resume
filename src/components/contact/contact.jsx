import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.youtube.com"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            youtube <span>Noob Bangali ML</span>
          </h2>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=+8801627038567&text=Hi"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+880 1627 038 567</span>
          </h2>
        </a>

        <a
          href="https://www.linkedin.com/in/imabrar/" className="contact instagram"
          target={"blank"}
          >
          <AiOutlineLinkedin className="icon" />
          <h2>
            Linked In <span>imabrar</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
