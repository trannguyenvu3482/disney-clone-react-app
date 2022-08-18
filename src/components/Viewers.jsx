import styled from 'styled-components';

import DisneyImg from '../assets/images/viewers-disney.png';
import MarvelImg from '../assets/images/viewers-marvel.png';
import NationalImg from '../assets/images/viewers-national.png';
import PixarImg from '../assets/images/viewers-pixar.png';
import StarWarsImg from '../assets/images/viewers-starwars.png';
import DisneyVideo from '../assets/videos/1564674844-disney.mp4';
import MarvelVideo from '../assets/videos/1564676115-marvel.mp4';
import NationalVideo from '../assets/videos/1564676296-national-geographic.mp4';
import PixarVideo from '../assets/videos/1564676714-pixar.mp4';
import StarWarsVideo from '../assets/videos/1608229455-star-wars.mp4';

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src={DisneyImg} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={DisneyVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={MarvelImg} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={MarvelVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={NationalImg} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={NationalVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={PixarImg} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={PixarVideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={StarWarsImg} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={StarWarsVideo} type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
    transform: scale(1.2);
  }

  :hover {
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;

export default Viewers;
