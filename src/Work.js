import {BlockQuote, BlockQuoteDifferent} from "./BlockQuote";

const Work = ({ icon, title }) => {
  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">        
      <h2 className="w3-text-grey w3-padding-16">
        <i className={`fa fa-${icon} fa-fw w3-margin-right w3-xxlarge w3-text-teal`}></i>
        {title}
      </h2>
      <BlockQuoteDifferent />
      <BlockQuote
        position='Working Student'
        institute='EON Climate and Renewables'
        details= 'eon'
        start='June 2018'
        end='Oct 2019'
      />
      <BlockQuote
        position='Freelance Software Developer'
        institute='Freelance'
        details= 'freelance'
        start='May 2016'
        end='Oct 2017'
      />
      <BlockQuote
        position='Maintenance Officer'
        institute='Prima Telecommunications'
        details= 'prima'
        start='Oct 2016'
        end='Aug 2017'
      />
      <BlockQuote
        position='Teacher'
        institute='Institute of Continuing Education'
        details= 'ice'
        start='Oct 2015'
        end='Oct 2016'
      />
    </div> 
  )  
}

export default Work;