import {BlockQuote, BlockQuoteDifferent} from "./BlockQuote";
import Work from "./Work";
import School from "./School";

const work = {}

work.eon = 'Developed functional and interactive Java-based web applications using Spring boot framework and React. Designed and implemented a SQL database. Provided technical support to the site suitability team.'

const Content = () => {

    return (
    <div className="w3-twothird">
      <Work icon='suitcase' title='Work Experience'/>
      <School icon='certificate' title='Education'/>
    </div>  
    )
  
    
}

export default Content;