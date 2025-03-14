export default function EditProfile() {
  return (
    <form className="popup__form" id="form-profile" noValidate="">
      <input
        className="popup__input"
        type="text"
        placeholder="Nombre"
        name="name"
        id="input-name"
        minLength={2}
        maxLength={40}
        required=""
      />
      <span id="input-name-error" className="input__message-error" />
      <input
        className="popup__input"
        type="text"
        placeholder="Acerca de mí"
        name="about"
        id="input-about-me"
        minLength={2}
        maxLength={200}
        required=""
      />
      <span id="input-about-me-error" className="input__message-error" />
      <button className="popup__button" id="button-submitProfile">
        {" "}
        Guardar{" "}
      </button>
    </form>
  );
}
