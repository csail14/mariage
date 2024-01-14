import styled from "styled-components";
import Nous from "../../assets/IMG_1272.jpeg";

const Home = () => {
  return (
    <Container>
      <div class="main-text">
        <h1 className="container">
          <div class="title">Bienvenue sur le site de notre mariage</div>
          <div className="date">Le 13 juillet 2024</div>
          <div className="lieu">
            Au Manoir des Prévanches - 27120 Boisset les Prévanches{" "}
          </div>
        </h1>
      </div>
      <div class="part-link">
        <a
          class="more-link"
          href="https://docs.google.com/forms/d/1X8ucvsn4vourY4t8z0ShQtSRorpH9NifVxrYSYa2ArE/prefill"
          title="Donner ma réponse à votre invitation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Répondre à l'invitation
        </a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${Nous});
  width: 100%;
  height: calc(100% - 64px);
  padding: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .main-text {
    color: #7c9f8e;

    display: flex;
    justify-content: flex-end;
    text-align: center;

    .container {
      background-color: #ffffffc4;
      padding: 20px;
      border-radius: 20px;

      .title {
        color: #737171;
        font-size: 45px;
        padding-bottom: 20px;
      }

      .date {
        padding-bottom: 20px;
        font-size: 70px;
      }

      .lieu {
        color: #737171;
        font-size: 40px;
      }
    }
  }

  .more-link {
    background-color: #ffffffc4;
  }

  .part-link {
    position: absolute;
    width: calc(100% - 80px);
    bottom: 10px;
  }

  @media only screen and (max-device-width: 1000px) {
    justify-content: flex-start;
    align-items: center;
  }
`;

export default Home;
