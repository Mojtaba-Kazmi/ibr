import Welcome from './about-page/Welcome';
import WhyChoose from './about-page/WhyChoose';
import HomeAbout from './home-about/HomeAbout';


const About = ({ homeAboutInfo, welcomeData, whyChooseData }) => {
  return (
    <>
      {homeAboutInfo && <HomeAbout homeAboutInfo={ homeAboutInfo } />}
      {welcomeData && <Welcome welcomeData={ welcomeData } />}
      {whyChooseData && <WhyChoose whyChooseData={ whyChooseData } />}
    </>
  );
};

export default About;
