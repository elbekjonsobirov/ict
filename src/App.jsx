import {Link} from 'react-router-dom';
import "./App.css";
import Home from "./components/home/Home";
import {EmailShareButton, TelegramShareButton} from 'react-share'
import { Routes, Route } from "react-router-dom";
import Module1 from "./components/moduls/Module1";
import Module2 from "./components/moduls/Module2";
import Module3 from "./components/moduls/Module3";
import Module4 from "./components/moduls/Module4";
import Module5 from "./components/moduls/Module5";
import Module6 from "./components/moduls/Module6";

function App() {
  return (
    <div className="app">
      <header className="home-header">
        <ul>
          <li>
            <span className="li-span">
              <p>bosh sahifa</p>
              <div className="home-line"></div>
            </span>
          </li>
          <li>
            <span className="li-span">
              <p>bosh sahifa</p>
              <div className="home-line"></div>
            </span>
          </li>
          <li className="moduls">
            <span className="li-span">
              <p>bosh sahifa</p>
              <div className="home-line"></div>
            </span>
            <div className="header-modul">
              <Link to="1-modul">1-modul</Link>
              <Link to="2-modul">2-modul</Link>
              <Link to="3-modul">3-modul</Link>
              <Link to="4-modul">4-modul</Link>
              <Link to="5-modul">5-modul</Link>
              <Link to="6-modul">6-modul</Link>
            </div>
          </li>
          <li>
            <span className="li-span">
              <p>bosh sahifa</p>
              <div className="home-line"></div>
            </span>
          </li>
          <li>
            <span className="li-span">
              <p>bosh sahifa</p>
              <div className="home-line"></div>
            </span>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="1-modul" element={<Module1/>}/>
        <Route path='2-modul' element={<Module2/>}/>
        <Route path='3-modul' element={<Module3/>}/>
        <Route path='4-modul' element={<Module4/>}/>
        <Route path='5-modul' element={<Module5/>}/>
        <Route path='6-modul' element={<Module6/>}/>
      </Routes>
      <footer className="home-footer">
        <div className="footer-title-card">
          <p className="footer-title">
            (mavzu nomi) Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, nobis.
          </p>
        </div>
        <div className="footer-share-card">
          <h3 className="footer-share-title">
            Aloqa uchun:
          </h3>
          <EmailShareButton url="/" className="footer-share-urls">
          <i class="fa-regular fa-envelope"></i>
            test@gmail.com
          </EmailShareButton>
          <TelegramShareButton url="/" className="footer-share-urls">
          <i class="fa-brands fa-telegram"></i>
            @testuchun
          </TelegramShareButton>
        </div>
      </footer>
    </div>
  );
}

export default App;
