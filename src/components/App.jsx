import { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import ".././index.css";
import api from "../utils/api.js";
import NewCard from "../components/Main/Popup/NewCard/NewCard.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  const handleOpenPopup = (popup) => {
    setPopup(popup);
  };

  const handleClosePopup = () => {
    console.log("cerrando popup");
    setPopup(null);
  };

  const handleUpdateUser = async (userData) => {
    try {
      console.log("Enviando datos de usuario a la API:", userData);
      const updateUser = await api.editUser(userData);
      setCurrentUser(updateUser);
      handleClosePopup();
    } catch (error) {
      console.error("Error updating user info", error);
    }
  };

  const handleUpdateAvatar = async ({ avatar }) => {
    try {
      const updatedUser = await api.changeAvatar(avatar);
      setCurrentUser(updatedUser);
      handleClosePopup();
    } catch (error) {
      console.error("Error updating avatar", error);
    }
  };

  const handleCardLike = async (card) => {
    try {
      const newCard = await api.likeButton(card._id);
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    } catch (error) {
      console.error("Error updating like status", error);
    }
  };

  const handleCardDelete = async (card) => {
    try {
      await api.deleteCard(card._id);
      setCards((state) =>
        state.filter((currentCard) => currentCard._id !== card._id)
      );
    } catch (error) {
      console.error("Error deleting card", error);
    }
  };

  const handleAddPlaceSubmit = async (newCardData) => {
    try {
      const newCard = await api.addCard(newCardData);
      setCards([newCard, ...cards]);
    } catch (error) {
      console.error("Error adding new card", error);
    }
  };

  useEffect(() => {
    api.getUser().then((data) => {
      setCurrentUser(data);
    });

    api.getCards().then((data) => {
      setCards(data);
    });
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateAvatar }}>
      <div className="page">
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
          setPopup={setPopup}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          handleUpdateUser={handleUpdateUser}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
