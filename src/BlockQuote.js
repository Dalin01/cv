const BlockQuoteDifferent = () => {

  let text1 = 'Support in the development of Site Suitability Software. Support in assessing site suitability as part of software testing and validation.'
  let text2 = 'Software development using Python for Turbine Load Evaluation, LCOE KPI Benchmarking, and Floating Comparative LCOE. Software testing (unit and functional testing). Working extensively using Git. Designed and implemented a NoSQL database using MongoDB for Civil Foundation and BoP OEM specifications. Working with Azure Cloud services - Function/Logic apps, VMs, etc. Turbine foundation SCADA data acquisition, cleaning, and manipulation.'
  let text3 = 'Designed and developed a Balance of Plants CAPEX tool using Python. Documentation of Civil standards. Prepared and managed the weekly team dashboard in Excel/VB.'

  return (
    <div className="w3-container">
      <h5 className="w3-opacity"><b>RWE Renewables</b></h5>
      <h6 className="w3-opacity"><i>Site Suitability Software Engineer</i></h6>
      <h6 className="w3-text-teal">
        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
        May 2021 - <span className="w3-tag w3-teal w3-round">PRESENT</span>
      </h6>
      <p>{text1}</p>

      <h6 className="w3-opacity"><i>Computational Engineer/Tool Developer</i></h6>
      <h6 className="w3-text-teal">
        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
        July 2020 - April 2021
      </h6>
      <p>{text2}</p>

      <h6 className="w3-opacity"><i>Working Student</i></h6>
      <h6 className="w3-text-teal">
        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
        Oct 2019 - June 2020
      </h6>
      <p>{text3}</p>

      <hr/>
    </div>
  );
}

const BlockQuote = ({ position, institute, details, start, end }) => {

  let text = ''
  if (details === 'eon') text = 'Developed functional and interactive Java-based web applications using Spring boot framework and React. Designed and implemented a SQL database. Provided technical support to the site suitability team.'
  else if (details === 'freelance') text = 'Designed and built Web and Android mobile applications mostly using PHP and Java. Sample personal project on Google Play:  My Diary'
  else if (details === 'prima') text = 'Designed programs that were used on PABX, Switch telephones, and other Intercom equipment using mostly C++.'
  else if (details === 'ice') text = 'Taught Computer Science, Physics, Mathematics, Chemistry, and Basic technology.'
  else text = details;

  return (
    <div className="w3-container">
      <h5 className="w3-opacity"><b>{position}</b></h5>
      <h6 className="w3-opacity"><i>{institute}</i></h6>
      <h6 className="w3-text-teal">
        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
        {start} - {end}
      </h6>
      <p>
        {
          text
        }
      </p>
      <hr/>
    </div>
  );
}

export {BlockQuote, BlockQuoteDifferent};