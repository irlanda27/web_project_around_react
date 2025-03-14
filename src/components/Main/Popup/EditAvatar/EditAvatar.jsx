const EditAvatar = () => {
  return (
    <form className="popup__form" id="form-profile-avatar">
      <input
        className="popup__input"
        name="avatar"
        type="url"
        placeholder="URL de la imagen"
        id="input-url"
        required
      />
      <span id="input-url-error" className="input__message-error"></span>
      <button className="popup__button" id="button-save-avatar">
        {" "}
        Guardar{" "}
      </button>
    </form>
  );
};

export default EditAvatar;
