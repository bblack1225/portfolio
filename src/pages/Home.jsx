import styled from 'styled-components';
import images from '../images';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import Slider from 'react-slick';

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const windowSize = useWindowSize();

  //   useEffect(() => {
  //     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  //   }, []);

  return (
    <HomeBox>
      {/* <Carousel ref={carousel}>
        <InnerCarousel
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {images.map((image, index) => {
            return (
              <ImageItem key={index}>
                <img src={image} />
              </ImageItem>
            );
          })}
        </InnerCarousel>
      </Carousel> */}

      <Slider {...settings}>
        {images.map((image, index) => {
          return (
            <ImageItem key={index}>
              <img src={image} />
            </ImageItem>
          );
        })}
      </Slider>

      <MainContent>
        <h2>Blake</h2>
        <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
        <article>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </article>
        <br />
        <br />
        <article>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </article>
        <h3>1914 translation by H. Rackham</h3>
        <article>
          "But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure?"
        </article>
      </MainContent>
    </HomeBox>
  );
}

const HomeBox = styled.div`
  color: aliceblue;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Carousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
`;

const InnerCarousel = styled(motion.div)`
  display: flex;
`;

const ImageItem = styled.div`
  /* min-width: 10rem; */
  /* padding: 20px; */
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: grab;
  @media (max-width: 768px) {
    /* min-width: 20rem; */
    /* padding: 10px; */
  }
  img {
    width: 100%;
    height: 100%;
    pointer-events: none;
    object-fit: cover;
  }
`;

const MainContent = styled.div`
  margin: 0 20%;

  @media (max-width: 768px) {
    margin: 0 5%;
    padding: 10px;
  }

  article {
    font-size: 1.1rem;
    letter-spacing: 1px;
  }
`;

export default Home;
