export default ({ proficiency }) => {
  let text = proficiency;
  if (proficiency === 'A1') text = '10%'
  if (proficiency === 'A2') text = '30%'
  if (proficiency === 'B1') text = '55%'
  if (proficiency === 'B2') text = '70%'
  if (proficiency === 'C1') text = '90%'
  if (proficiency === 'Native') text = '100%'
  return (
    <div className="w3-light-grey w3-round-xlarge w3-small">
      <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: text}}>
        {proficiency}
      </div>
    </div>
  );
}