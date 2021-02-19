import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  padding: 200px 200px 200px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto; 
  justify-content: left;
`;

const InfoSection = ({ children }) => (
  <Container>
      {children}
  </Container>
);

export default InfoSection;
