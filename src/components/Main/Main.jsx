import lapiz from "../../images/lapicito.png";
import userImage from "../../images/image.jpg";
import editProfileButton from "../../images/edit_button.png";
import addButton from "../../images/addCard_button.svg";
import { useState } from "react";
import Popup from "./Popup/Popup";
import NewCard from "./Popup/NewCard/NewCard";
import EditProfile from "./Popup/EditProfile/EditProfile";
import EditAvatar from "./Popup/EditAvatar/EditAvatar";
import Card from "../Main/components/Card/Card.jsx";
import ImagePopup from "./Popup/ImagePopup/ImagePopup";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const EditProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const EditAvatarPopup = { title: "Editar avatar", children: <EditAvatar /> };
  const imagePopup = { children: <ImagePopup name={name} link={link} /> };
  const handleClosePopup = () => setPopup(null);
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  const cards = [
    {
      isLiked: false,
      _id: "5d1f0611d321eb4bdcd707dd",
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:10:57.741Z",
    },
    {
      isLiked: false,
      _id: "5d1f064ed321eb4bdcd707de",
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:11:58.324Z",
    },
  ];

  console.log(cards);

  const handleOpenImagePopup = (name, link) => {
    setPopup(imagePopup);
    setName(name);
    setLink(link);
  };

  return (
    <>
      <main>
        <div className="profile">
          <div className="profile__avatar">
            <div className="profile__overlay" />
            <img
              className="profile__pencil-avatar"
              src={lapiz}
              id="lapicito-editor"
              alt="icono de lapiz"
            />
            <img
              className="profile__image"
              src={userImage}
              alt="imagen del usuario"
              onClick={() => handleOpenPopup(EditAvatarPopup)}
            />
          </div>
          <div>
            <div className="profile__info">
              <div className="profile__name">
                <div className="profile__edit">
                  <p id="profile-name">Jacques Cousteau</p>
                  <button className="profile__button" id="pencil-editor">
                    <img
                      src={editProfileButton}
                      alt="iconodelapiz>"
                      onClick={() => handleOpenPopup(EditProfilePopup)}
                    />
                  </button>
                </div>
                <p className="profile__info-explorador" id="profile-info">
                  Explorador
                </p>
              </div>
              <img
                className="profile__add-button"
                src={addButton}
                alt="botonagregar"
                id="add-button"
                onClick={() => handleOpenPopup(newCardPopup)}
              />
            </div>
          </div>
        </div>
        <section className="cards">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              handleOpenImagePopup={handleOpenImagePopup}
            />
          ))}
        </section>
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}
