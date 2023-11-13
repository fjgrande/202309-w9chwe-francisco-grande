import { UsersStructure } from "../../store/feature/users/types";
import UsersCardStyled from "./UsersCardStyled";

interface UsersCardProps {
  users: UsersStructure;
}

const UsersCard = ({
  users: { name, nickname, picture, isFriend },
}: UsersCardProps): React.ReactElement => {
  return (
    <UsersCardStyled>
      <img
        className="card__picture"
        src={picture}
        alt={name}
        width="225"
        height="300"
      />
      <h2 className="card__title">{name}</h2>
      <span className="card__nickname">@users: {nickname}</span>
      <span className="card__relationship">relationship:{isFriend} </span>
    </UsersCardStyled>
  );
};

export default UsersCard;
