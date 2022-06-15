import styled from "styled-components";

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  header {
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px;
    width: 100%;
    border-bottom: 1px solid #212529;

    button {
      width: 56px;
      height: 32px;

      border-radius: 4px;
      border: none;

      background-color: #212529;
      color: white;
    }
  }

  section {
    height: 120px;
    text-align: left;
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding: 35px 13px;
    color: white;
    border-bottom: 1px solid #212529;

    h1 {
      color: #f8f9fa;
      font-size: 18px;
    }
    span {
      font-size: 12px;
      color: #868e96;
    }
  }

  main {
    padding: 0px 13px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 20px 0px;

      h2 {
        font-size: 16px;
        color: white;
      }

      button {
        width: 33px;
        height: 33px;
        background-color: #212529;
        border: none;
        border-radius: 4px;
        color: white;
      }
    }

    ul {
      height: calc(100vh - 280px);
      background-color: #212529;
      border-radius: 4px;
      padding: 22px 9px;

      display: flex;
      flex-direction: column;
      gap: 16px;

      overflow: auto;
    }
  }

  @media screen and (min-width: 768px) {
    header {
      padding: 13px 10vw;
    }
    section {
      padding: 35px 10vw;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    main {
      padding: 0px 10vw;
    }
  }
  @media screen and (min-width: 1024px) {
    header {
      padding: 13px 15vw;
    }
    section {
      padding: 35px 15vw;
    }
    main {
      padding: 0px 15vw;
    }
  }

  @media screen and (min-width: 1440px) {
    header {
      padding: 13px 25vw;
    }
    section {
      padding: 35px 25vw;
    }
    main {
      padding: 0px 25vw;
      ul {
        height: calc(100vh - 310px);
      }
    }
  }
`;

export default HomePage;
