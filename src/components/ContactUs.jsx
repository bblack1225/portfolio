import styled from 'styled-components';

function ContactUs() {
  return (
    <ContactUsWrapper>
      <ContactInfo>
        <h3>聯絡資訊</h3>
        <p>劉昱廷</p>
        <p>新北市永和區XXXXX</p>
        <p>black60137@gmail.com</p>
        <p>0919775622</p>
      </ContactInfo>
      <ContactForm>
        <h3>聯絡我</h3>
        <InputBox>
          <label htmlFor="forName">姓名</label>
          <input id="formName" />
        </InputBox>
        <InputBox>
          <label htmlFor="forEmail">Email</label>
          <input id="forEmail" />
        </InputBox>
        <TextAreaBox>
          <label htmlFor="message">想說的話</label>
          <textarea id="message"></textarea>
        </TextAreaBox>
        <ButtonBox>
          <button onClick={() => alert('Send!')}>送出</button>
        </ButtonBox>
      </ContactForm>
    </ContactUsWrapper>
  );
}

const ContactUsWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  padding-left: 3vw;
  padding-right: 3vw;

  @media (max-width: 892px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const ContactInfo = styled.div`
  width: 30vw;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContactForm = styled.div`
  width: 30vw;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InputBox = styled.div`
  padding-bottom: 10px;

  input {
    margin-top: 5px;
    width: 100%;
    height: 5vh;
    border-radius: 5px;
    font-size: large;
    font-weight: 700;
    outline: none;
    box-sizing: border-box;

    &:focus {
      outline-width: 2px;
      outline-style: solid;
      outline-color: #fff;
    }

    /* @media (max-width: 768px) {
      width: 80%;
      margin-left: 5px;
    } */
  }
`;

const TextAreaBox = styled.div`
  textarea {
    width: 100%;
    height: 13vh;
    font-size: large;
    font-weight: 700;
    outline: none;
    margin-top: 5px;
    box-sizing: border-box;
    &:focus {
      outline-width: 2px;
      outline-style: solid;
      outline-color: #fff;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-top: 10px;
    width: 25%;
    color: #fff;
    font-size: 1.2rem;
    background-color: transparent;
    border-color: #fff;
    border-radius: 5px;
    font-weight: 700;

    @media (max-width: 768px) {
      margin: 10px auto 0 auto;
    }
    cursor: pointer;

    &:hover {
      color: #ccc;
    }
  }
`;

export default ContactUs;
