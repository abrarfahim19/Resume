import "./qualifications.css";

const Qualifications = () => {
  return (
    <div>
      <span className="quali-text">My Qualifications</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content html"></div>
          <h1>html</h1>
        </div>
        <div className="qualification">
          <div className="content css"></div>
          <h1>css</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>javascript</h1>
        </div>
        <div className="qualification">
          <div className="content tailwind"></div>
          <h1>Tailwind</h1>
        </div>
        <div className="qualification">
          <div className="content react"></div>
          <h1>react</h1>
        </div>
        <div className="qualification">
          <div className="content python"></div>
          <h1>Python</h1>
        </div>
        <div className="qualification">
          <div className="content matlab"></div>
          <h1>Matlab</h1>
        </div>
        <div className="qualification">
          <div className="content tensorflow"></div>
          <h1>Tensorflow</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
