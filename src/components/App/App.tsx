import { Routes, Route, Navigate } from "react-router-dom";
import AppStyled from "./AppStyled";
import UsersPage from "../../pages/UsersPage/UsersPage";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <h1>DoggyFace</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
