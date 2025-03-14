import Popup from "../Popup";

export default function ImagePopup(props) {
  const { onClose, title, children } = props;
  console.log(props);

  return (
    <div>
      <img
        className="popup__window-image"
        src={props.link}
        alt="parquelavanois"
        id="popup-window-image"
      />
      <p className="popup__window-text">{props.name}</p>
    </div>
  );
}
