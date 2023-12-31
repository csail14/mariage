import styled from "styled-components";
import Nous from "../../assets/IMG_1272.jpeg";

const Programme = () => {
  return (
    <Container>
      <div>Programme</div>
      <div className="user-container"></div>
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
`;

export default Programme;
