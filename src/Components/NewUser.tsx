import { useState } from "react";
import { AddUserWindowPropsType } from "../model/types";

const NewUser = ({
  addUserWindow,
  onCloseWindowNewUser,
  onAddUser,
}: AddUserWindowPropsType) => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const submitUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !userName || !email) return;
    onAddUser(name, userName, email);
    setEmail("");
    setName("");
    setUserName("");
  };

  if (addUserWindow) {
    return (
      <div className="newUser">
        <form onSubmit={submitUser}>
          <div className="closeBtn" onClick={onCloseWindowNewUser}></div>
          <div className="mt-2">
            <label htmlFor="name">name :</label>
            <input onChange={(e) => setName(e.target.value)} type="text" id="name" value={name}/>
          </div>
          <div className="mt-2">
            <label htmlFor="userName">user name :</label>
            <input onChange={(e) => setUserName(e.target.value)} type="text" id="userName" value={userName}/>
          </div>
          <div className="mt-2">
            <label htmlFor="email">email :</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" value={email}/>
          </div>
          <div className="mt-4 ">
            <input className="btn btn-success" type="submit" value="submit" />
          </div>
        </form>
      </div>
    );
  }
};

export default NewUser;
