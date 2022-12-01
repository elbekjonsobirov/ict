import "./App.css";
import Home from "./components/home/Home";

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
    </div>
  );
}

export default App;
