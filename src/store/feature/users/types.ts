export interface UsersStructure {
  id: number;
  name: string;
  nickname: string;
  picture: string;
  isFriend: boolean;
}

export interface UsersStateStructure {
  users: UsersStructure[];
}
