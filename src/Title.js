const Title = ({ icon, text, classDef }) => {
  return (
    <p className={classDef}><b><i className={icon}></i>{text}</b></p>
  );
}
export default Title;