import { useState } from "react";
import trashIcon from "../../../../images/trash_icon.png";
import cardImage from "../../../../images/valle de yosemite.jpg";
import likeButton from "../../../../images/Vector_corazon.svg";

export default function Card(props) {
  const { name, link, isLiked, _id } = props.card;
  const handleClick = () => {
    props.handleOpenImagePopup(name, link);
  };

  const [liked, setLiked] = useState(isLiked);

  const handleLikeClick = () => {
    setLiked(!liked);
    props.onCardLike(props.card);
  };
  const cardLikeButtonClassName = `element__like-button ${
    liked ? "element__like-button_active" : ""
  }`;

  const handleDeleteClick = () => {
    props.onCardDelete(props.card);
  };

  return (
    <>
      <div className="element__card">
        <img
          className="element__trash"
          src={trashIcon}
          alt="botecitodebasura"
          id="trash-button"
          onClick={handleDeleteClick}
        />
        <img
          className="element__card-image"
          src={link}
          alt="fotovalleyosemite"
          onClick={handleClick}
        />
        <div className="element__content">
          <h2 className="element__place"> {name} </h2>
          <img
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            src={likeButton}
            alt="botonlike"
            id="like-button"
          />
        </div>
      </div>
    </>
  );
}
