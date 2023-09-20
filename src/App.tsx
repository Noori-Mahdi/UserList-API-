import { useEffect, useState } from "react";
import { UserType } from "./model/types";
import UsersList from "./Components/UsersList";
import NewUser from "./Components/NewUser";
import Buttnon from "./Components/button";
import UserService from "./services/users";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import InfoUserBox from "./Components/infoUserBox";

function App() {
  const [users, setUsers] = useState<UserType[]>([]);

  const [addUserWindow, setAddUserWindow] = useState(false);

  const [infoBox, setInfoBox] = useState({
    id: 0,
    name: "",
    email: "",
    username: "",
    active: false,
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const userlist = await UserService.getUsers();
    setUsers(userlist);
  };

  const handleRemoveUser = (userId: number) => {
    setUsers(users.filter((users) => users.id !== userId));
  };

  const handleAddUser = async (
    name: string,
    username: string,
    email: string
  ) => {
    let id = users.length + 1;
    let data = { id, name, username, email };
    const newUser = await UserService.addUser(data);
    setUsers([...users, newUser]);
  };

  const handleOpenWindowNewUser = () => {
    setAddUserWindow(true);
  };

  const handleCloseWindowNewUser = () => {
    setAddUserWindow(false);
  };

  const handleInfoBox = (
    userId: number,
    name: string,
    username: string,
    email: string
  ) => {
    const newInfoBox = {
      id: userId,
      name: name,
      username: username,
      email: email,
      active: true,
    };
    setInfoBox(newInfoBox);
  };

  const handleCloseInfoBox = () => {
    const newInfoBox = { ...infoBox };
    newInfoBox.active = false;
    setInfoBox(newInfoBox);
  };


  return (
    <div className="bg-dark h-100">
      <NewUser
        addUserWindow={addUserWindow}
        onCloseWindowNewUser={handleCloseWindowNewUser}
        onAddUser={handleAddUser}
      />
      <InfoUserBox onCloseInfoBox={handleCloseInfoBox} infoBox={infoBox} />
      <UsersList
        users={users}
        onRemoveUser={handleRemoveUser}
        onInfoBox={handleInfoBox}
      />
      <Buttnon onOpenWindowNewUser={handleOpenWindowNewUser} />
    </div>
  );
}

export default App;
