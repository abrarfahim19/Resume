import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <div className="button-single-container">
        <a href="https://drive.google.com/file/d/1I149fW1uycSwK3pNXWjNOjH3k2EcAZ_O/view" rel="noreferrer" target="_blank" className="btn  pri">
          Resume
        </a>
      </div>
      <div className="button-single-container">
        <a href="#contact" className="btn sec">
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default Buttons;
