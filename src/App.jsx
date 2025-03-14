import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Popup from "./components/Main/Popup/Popup.jsx";
import NewCard from "./components/Main/Popup/NewCard/NewCard.jsx";
import BottonClose from "./images/close_icon.png";
import "./index.css";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />

        <section className="element">
          <template id="element-template" />
        </section>
      </div>
    </>
  );
}

export default App;
