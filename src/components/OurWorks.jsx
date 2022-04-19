import kiImg from '../assets/ki.jpeg';
import cp3Img from '../assets/cp3.jpeg';
import curryImg from '../assets/curry.jpeg';
import embiidImg from '../assets/embiid.jpeg';
import bostonImg from '../assets/boston.jpeg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function OurWorks() {
  const imgList = [
    {
      id: 1,
      img: kiImg,
      text: 'Kyrie Irving,堅持不打疫苗的辣個男人，在附加上時碰上伊斯蘭教的齋戒月，在沒有進食的情況下狂砍30分',
      link: '/test1',
    },
    {
      id: 2,
      img: cp3Img,
      text: 'Chris Paul,今年究竟有沒有機會拿總冠軍呢',
      link: '/test2',
    },
    {
      id: 3,
      img: bostonImg,
      text: '今年波士頓賽爾提克的戰力很平均，有沒有辦法跨越公鹿隊那道高牆呢？',
      link: 'test3',
    },
    {
      id: 4,
      img: curryImg,
      text: 'Stephen Curry，咖哩神射，要趕快趕回來打進後賽啊，勇士需要你',
      link: '/test4',
    },
  ];

  return (
    <WorksWrapper>
      {imgList.map((item) => {
        return (
          <ImageLink key={item.id} to={item.link}>
            <ImageBox>
              <img src={item.img} alt="Kyrie" />
            </ImageBox>
            <TextBox>
              <p>{item.text}</p>
            </TextBox>
          </ImageLink>
        );
      })}
    </WorksWrapper>
  );
}

const WorksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: min-content;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  padding-left: 5rem;
  padding-right: 5rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 0.8rem;
  }
`;

const ImageLink = styled(Link)`
  position: relative;
`;

const ImageBox = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

const OpacityBox = styled.div`
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity ease 200ms;
  z-index: 99;
  background-color: black;
`;

const TextBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity ease 300ms;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  opacity: 1;
  overflow: auto;
  font-size: 1.1rem;

  @media (max-width: 1200px) {
    font-size: 0.8rem;
  }

  &:hover {
    opacity: 0;
  }

  p {
    padding: 4rem 2rem 2rem 2rem;
  }
`;

export default OurWorks;
