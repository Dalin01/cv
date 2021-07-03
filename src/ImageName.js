const ImageName = ({ name, width }) => {
  return (
    <div className="w3-display-container">
      <img src={ require("./images/darlington.jpeg") } alt="Avatar" style={{width: width}}/>
      <div className="w3-display-bottomleft w3-container w3-text-black">
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default ImageName;