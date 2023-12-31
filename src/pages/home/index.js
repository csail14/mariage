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
          href="https://freehtml5.co"
          title="What a cute template"
          target="_self"
        >
          Répondre
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
    color: #f08c79;

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
    width: 100%;
    bottom: 10px;
  }
`;

export default Home;
