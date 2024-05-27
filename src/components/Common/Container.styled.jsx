import styled from "@emotion/styled";

export const Container = styled.section`
  max-width: 375px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
`;
