import './waterio.css';
import buildHomePage from './homepage';
import Fab from './Fab.js';
import NavBar from './NavBar';

new Fab(document.body);

new NavBar(document.body);


let homePage = buildHomePage();
document.body.appendChild(homePage);