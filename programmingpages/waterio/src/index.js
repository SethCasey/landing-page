import './waterio.css';
import buildHomePage from './homepage.js';
import Fab from './Fab.js';
import NavBar from './NavBar.js';

let homePage = buildHomePage();
document.body.appendChild(homePage);

const fab = new Fab(document.body);

const nav = new NavBar(document.body);

