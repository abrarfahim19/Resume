import './header.css';

function Header() {
  return (
    <div id='home' className='container header-container'>
      <h3>
        <p>
          I<span>'</span>m
        </p>
        Abrar
      </h3>
      <h2>Web Developer | ML Engineer</h2>
      <div className="button-single-container">
        <a href="https://drive.google.com/file/d/1I149fW1uycSwK3pNXWjNOjH3k2EcAZ_O/view" rel="noreferrer" target="_blank" className="btn  pri">
          Resume
        </a>
      </div>
    </div>
  );
}
export default Header;
