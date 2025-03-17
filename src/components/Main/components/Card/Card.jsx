import trashIcon from "../../../../images/trash_icon.png";
import cardImage from "../../../../images/valle de yosemite.jpg";
import likeButton from "../../../../images/Vector_corazon.svg";

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const handleClick = () => {
    props.handleOpenImagePopup(name, link);
  };

  return (
    <>
      <div className="element__card">
        <img
          className="element__trash"
          src={trashIcon}
          alt="botecitodebasura"
          id="trash-button"
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
            className="element__like-button"
            src={likeButton}
            alt="botonlike"
            id="like-button"
          />
        </div>
      </div>
    </>
  );
}
