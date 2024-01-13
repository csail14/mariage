import styled from "styled-components";

const Location = () => {
  return (
    <Container>
      <div>Comment m'y rendre ? </div>
      <div className="user-container"></div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
`;

export default Location;
