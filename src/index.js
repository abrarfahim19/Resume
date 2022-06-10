import ReactDOM from 'react-dom';
import './style.css';
import WebContent from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter> <WebContent /></BrowserRouter>, document.getElementById('root'));

const toggle = document.querySelector('.hover-show');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
});

let Icons = document.querySelectorAll('.navigation .icon');

Icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    changeactive();
    icon.classList.add('active-nav');
  });
});

function changeactive() {
  Icons.forEach((icon) => {
    icon.classList.remove('active-nav');
  });
}
