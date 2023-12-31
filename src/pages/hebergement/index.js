import styled from "styled-components";

const Hebergement = () => {
  return (
    <Container>
      <div>Hébergement</div>
      <div className="user-container"></div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
`;

export default Hebergement;
