import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    padding-top: 81px;
  }
  h2 {
    margin-top: 20px;
    color: white;
    font-size: 1.3rem;
  }
  .container {
    padding: 18px;
    margin: 30px auto;
    width: calc(90vw - 60px);
    height: 70vh;
    max-width: 369px;
    max-height: 535px;
    background-color: #212529;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > span {
      color: #868e96;
      font-size: 12px;
    }

    & > button {
      background-color: #868e96;
      color: white;
      height: 40px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  form div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: left;
  }

  form label {
    color: white;
    align-self: baseline;
    text-align: left;
  }

  form input {
    background-color: #343b41;
    border: 1px solid #343b41;
    border-radius: 4px;
    &::placeholder {
      color: #868e96;
    }

    width: calc(100%);
    height: 40px;
    color: white;
    padding: 0px 13px;
  }

  form button {
    width: 100%;
    height: 40px;
    background-color: #ff577f;
    color: white;
    border: none;
    border-radius: 4px;
  }

  @media screen and (min-width: 768px) {
    .container {
      gap: 32px;
    }
    img {
      width: 200px;
    }
  }
`;
