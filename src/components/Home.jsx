import styled from 'styled-components';

import HomeBackground from '../assets/images/home-background.png';
import ImageSlider from './ImageSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';

const Home = () => {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  background: url('${HomeBackground}') no-repeat center center / cover fixed;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url('${HomeBackground}') no-repeat center center / cover fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
