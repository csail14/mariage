import styled from "styled-components";
import Nous from "../../assets/IMG_1272.jpeg";

const Home = () => {
  return (
    <Container>
      <div>Home</div>
      <div className="user-container"></div>
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
  justify-content: flex-end;
  flex-direction: column;

  .more-link {
    background-color: #ffffffc4;
  }
`;

export default Home;
