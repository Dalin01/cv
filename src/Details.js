import ImageName from './ImageName';
import IconText from './IconText';
import Title from './Title';
import Skill from './Skill';

const customClass = 'fa-fw w3-margin-right w3-large w3-text-teal'
const skillSet = {}
skillSet.React = '70%'
skillSet.Angular = '80%'
skillSet.Python = '90%'
skillSet.Java = '50%'
skillSet.JaveScript = '70%'
const LanguageSet = {}
LanguageSet.English = 'C1'
LanguageSet.German = 'A2'
LanguageSet.Igbo = 'Native'

const Details = () => {

  return (
    <div className="w3-third">
      <div className="w3-white w3-text-grey w3-card-4">
      <ImageName name="Darlington Onwuama" width="100%"/>
        <div className="w3-container">
          <IconText icon={`fa fa-briefcase ${customClass}`} text='Software Engineer'/>
          <IconText icon={`fa fa-home ${customClass}`} text='Essen, Germany'/>
          <IconText icon={`fa fa-envelope ${customClass}`}
            text={
              <a href="mailto:darlingtonsomto@gmail.com" rel="noreferrer">
                darlingtonsomto@gmail.com
              </a>
            }
          />
          <IconText icon={`fa fa-linkedin ${customClass}`}
            text={
              <a href="https://www.linkedin.com/in/darlington-onwuama/" rel="noreferrer">
                linkedin.com/in/darlington-onwuama
              </a>
            }
          />
          <IconText icon={`fa fa-github ${customClass}`}
            text={
              <a href="https://github.com/Dalin01" rel="noreferrer">
                Dalin01
              </a>
            }
          />
          <IconText icon={`fa fa-twitter ${customClass}`}
            text={
              <a href="https://twitter.com/Somtodarlington" rel="noreferrer">
                @Somtodarlington
              </a>
            }
          />
          <IconText icon={`fa fa-phone ${customClass}`} text='+49 163 638 3246'/>
          <hr/>
          <Title icon='fa fa-asterisk fa-fw w3-margin-right w3-text-teal' text='My skills' classDef='w3-large'/>

          {
            Object.entries(skillSet).map((value) => {
              return (
                <div key={value[0]}>
                  <p>{value[0]}</p>
                  <Skill proficiency={value[1]} />
                </div>
              );
            })
          }

          <br/>
          <hr/>

          <Title icon='fa fa-globe fa-fw w3-margin-right w3-text-teal' text='Languages'
          classDef='w3-large'/>

          {
            Object.entries(LanguageSet).map((value) => {
              return (
                <div key={value[0]}>
                  <p>{value[0]}</p>
                  <Skill proficiency={value[1]} />
                </div>
              );
            })
          }
          <br/>
        </div>
      </div><br/>

    </div>
  );
}

export default Details;