const IconText = ({ icon, text }) => {
  return (
    <p>
      <i className={icon}>
      </i>
      {text}
    </p>
  );
}

export default IconText;