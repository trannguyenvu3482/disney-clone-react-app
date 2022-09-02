import styled from 'styled-components';

import HomeIcon from '../assets/images/home-icon.svg';
import DisneyLogo from '../assets/images/logo.svg';
import MovieIcon from '../assets/images/movie-icon.svg';
import OriginalIcon from '../assets/images/original-icon.svg';
import SearchIcon from '../assets/images/search-icon.svg';
import SeriesIcon from '../assets/images/series-icon.svg';
import WatchListIcon from '../assets/images/watchlist-icon.svg';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from '../features/user/userSlice';
import { auth, provider, signInWithPopup } from '../firebase';

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => console.log(error));
    } else {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate('/');
        })
        .catch((e) => console.log(e));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        photo: user.photoURL,
        email: user.email,
      })
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate('/home');
      } else {
        navigate('/');
      }
    });
  }, [userName]);

  return (
    <Nav>
      <Logo>
        <img src={DisneyLogo} alt="Disney+" />
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src={HomeIcon} alt="Home" />
              <span>HOME</span>
            </a>
            <a href="/search">
              <img src={SearchIcon} alt="Search" />
              <span>SEARCH</span>
            </a>
            <a href="/watchlist">
              <img src={WatchListIcon} alt="Watchlist" />
              <span>WATCHLIST</span>
            </a>
            <a href="/originals">
              <img src={OriginalIcon} alt="Originals" />
              <span>ORIGINALS</span>
            </a>
            <a href="/movies">
              <img src={MovieIcon} alt="Movies" />
              <span>MOVIES</span>
            </a>
            <a href="/series">
              <img src={SeriesIcon} alt="Series" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <Dropdown>
              <span onClick={handleAuth}>Sign out</span>
            </Dropdown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #090b13;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
  }

  img {
    width: 20px;
    height: 20px;
    min-width: 20px;
    z-index: auto;
    margin-right: 8px;
  }

  span {
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0;
    position: relative;
    white-space: nowrap;
    &:before {
      content: '';
      display: block;
      background-color: rgb(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      height: 2px;
      left: 0;
      right: 0;
      opacity: 0;
      position: absolute;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
    }
  }

  a:hover {
    span:before {
      transform: scaleX(1);
      opacity: 1 !important;
      visibility: visible !important;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease-out 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: rgba(0, 0, 0, 0.6);
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 60px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0, 0, 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  width: 100px;
  opacity: 0;

  span {
    letter-spacing: 1.5px;
  }
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${Dropdown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    background-color: transparent;
    height: 20px;
    width: 45px;
    top: 40px;
    left: 0;
  }
`;

export default Header;
