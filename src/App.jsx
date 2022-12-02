import "./App.css";
import Home from "./components/home/Home";
import {EmailShareButton, TelegramShareButton} from 'react-share'

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
              <span>1-modul</span>
              <span>2-modul</span>
              <span>3-modul</span>
              <span>4-modul</span>
              <span>5-modul</span>
              <span>6-modul</span>
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
      <Home />
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
