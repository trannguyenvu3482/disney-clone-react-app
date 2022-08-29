import styled from 'styled-components';

import HomeBackground from '../assets/images/home-background.png';
import ImageSlider from './ImageSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';

import { collection, onSnapshot } from 'firebase/firestore';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import movieSlice from '../features/movie/movieSlice';
import userSlice, { selectUserName } from '../features/user/userSlice';
import db from '../firebase';

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const [recommends, setRecommends] = useState([]);
  const [newDisneys, setNewDisneys] = useState([]);
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, 'movies'), (snap) => {
      snap.docs.forEach((doc) => {
        switch (doc.data().type) {
          case 'recommend':
            // recommends.push({ id: doc.id, ...doc.data() });
            // recommends = [...recommends, { id: doc.id, ...doc.data() }];
            setRecommends([...recommends, { id: doc.id, ...doc.data() }]);
            break;
          case 'new':
            // newDisneys.push({ id: doc.id, ...doc.data() });
            // newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            setNewDisneys([...newDisneys, { id: doc.id, ...doc.data() }]);
            break;
          case 'original':
            // originals.push({ id: doc.id, ...doc.data() });
            // originals = [...originals, { id: doc.id, ...doc.data() }];
            setOriginals([...originals, { id: doc.id, ...doc.data() }]);
            break;
          case 'trending':
            // trending.push({ id: doc.id, ...doc.data() });
            // trending = [...trending, { id: doc.id, ...doc.data() }];
            setTrending([...trending, { id: doc.id, ...doc.data() }]);
            break;
          default:
            break;
        }
      });
    });

    dispatch(
      movieSlice.actions.setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trending,
      })
    );
  }, [userName]);

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
