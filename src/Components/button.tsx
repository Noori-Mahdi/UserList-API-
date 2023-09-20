import { ButtonNewUserProps } from "../model/types";

const Buttnon = ({onOpenWindowNewUser}:ButtonNewUserProps) => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      <button onClick={onOpenWindowNewUser} className="btn createBtn btn-info rounded-circle">+</button>
    </div>
  );
};

export default Buttnon;
