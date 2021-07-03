import {BlockQuote, BlockQuoteDifferent} from "./BlockQuote";

const School = ({ icon, title }) => {
  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">        
      <h2 className="w3-text-grey w3-padding-16">
        <i className={`fa fa-${icon} fa-fw w3-margin-right w3-xxlarge w3-text-teal`}></i>
        {title}
      </h2>
      <BlockQuote
        position='M.Sc. Computational Engineering'
        institute='Ruhr University Bochum'
        details= 'Grade: 1.5 (Sehr Gut/Very Good)'
        start='Oct 2017'
        end='Feb 2020'
      />
      <BlockQuote
        position='B.Eng. Industrial/Production Engineering'
        institute='Nnamdi Azikiwe University'
        details= 'Grade: 1.52 (Gut/Good) and Best Graduation Student'
        start='Sept 2009'
        end='Aug 2014'
      />
    </div> 
  )  
}

export default School;