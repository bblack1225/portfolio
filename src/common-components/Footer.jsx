import styled from 'styled-components';

function Footer() {
  return (
    <FooterBox>
      <div>Copyright © 2022 Blake</div>
      <div>
        <div>
          <div>
            <a href="#">Instagram</a>
            <span> | </span>
            <a href="#">Facebook</a>
          </div>
          <div>
            <a href="#">Power By XXXX</a>
          </div>
        </div>
      </div>
    </FooterBox>
  );
}

const FooterBox = styled.div`
  margin-top: 8rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  a {
    color: #fff;

    &:hover {
      color: #ccc;
    }
  }
`;

export default Footer;
