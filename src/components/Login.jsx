import styled from 'styled-components';
import bgimg from '../assets/images/login-background.jpg';
import ctalogoOne from '../assets/images/cta-logo-one.svg';
import ctalogoTwo from '../assets/images/cta-logo-two.png';

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CallToAction>
          <CTALogoOne src={ctalogoOne} alt="cta logo" />
          <SignUp>GET ALL THERE</SignUp>
          <Desc>
            Get Premier Access to Dragon Ball Z for an additional fee with a
            Disney+ subscription. As of 17/8/22, the price of Disney+ and The
            Disney Bundle will increase by $1
          </Desc>
          <CTALogoTwo src={ctalogoTwo} alt="cta logo" />
        </CallToAction>
        <BackgroundImg />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
`;

const BackgroundImg = styled.div`
  height: 100%;
  background-image: url('${bgimg}');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const CallToAction = styled.div`
  margin-bottom: 2vw;
  width: 100%;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 17px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #0483ee;
  }
`;

const Desc = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
