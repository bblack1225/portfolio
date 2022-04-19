import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import background from '../assets/me.jpg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderBox>
      <HLink to={'/'}>
        <Logo>
          <img src={background} />
          <div>BLAKE</div>
        </Logo>
      </HLink>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <LinkBox isOpen={isOpen}>
        <HLink to={'/about'}>關於我們</HLink>
        <HLink to={'/our-works'}>我們的作品</HLink>
        <HLink to={'/contact-us'}>聯絡我們</HLink>
      </LinkBox>
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  color: white;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Logo = styled.div`
  font-size: 2rem;
  width: 20vw;
  display: flex;
  align-items: center;
  font-weight: 800;

  @media (max-width: 768px) {
    width: 50vw;
  }

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 5px;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const LinkBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
    transition: all 0.2s ease-in;
  }

  a {
    transition: all 0.2s ease-in;

    &:hover {
      color: #ffffffd4;
    }

    &.active {
      text-decoration: underline;
      text-underline-offset: 7px;
    }
  }
`;

const HLink = styled(NavLink)`
  font-size: 1.2rem;
  margin: auto 10px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 768px) {
    overflow: hidden;
    /* flex-direction: column;
    width: 100%;
    min-height: ${({ isOpen }) => (isOpen ? '200px' : '0')}; */
  }
`;

export default Header;
