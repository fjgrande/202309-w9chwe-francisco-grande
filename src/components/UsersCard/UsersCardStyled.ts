import styled from "styled-components";

const UsersCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 20px;
  min-width: 320px;
  background-color: ${({ theme }) => theme.colors.tertiaryBackground};
  color: ${({ theme }) => theme.colors.dark};
  border: 5px solid #a3208e;
  border-radius: 20px;

  .card {
    &__picture {
      object-fit: cover;
      border: 2px solid #a3208e;
      border-radius: 20px;
      gap: 20px;
    }

    &__title {
      padding: 20px;
      text-transform: uppercase;
      max-width: min-content;
    }

    &__nickname {
      text-transform: uppercase;
      padding: 20px;
    }

    &__relationship {
      text-transform: uppercase;
    }
  }
`;

export default UsersCardStyled;
