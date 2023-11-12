import styled from "styled-components";

const UsersPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .page-title {
    font-family: ${({ theme }) => theme.typography.secondaryFont};
  }
`;

export default UsersPageStyled;
