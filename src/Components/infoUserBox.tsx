import { InfoBoxProps } from "../model/types";

const InfoUserBox = ({ infoBox,onCloseInfoBox }: InfoBoxProps) => {
  if (infoBox.active) {
    return (
      <div className="infoBx">
        <div >
          <span>UserID : {infoBox.id}</span>
          <span>UserName : {infoBox.name}</span>
          <span>NikeName : {infoBox.username}</span>
          <span>Email : {infoBox.email}</span>
          <button onClick={onCloseInfoBox} className="btn btn-sm btn-danger mt-3">CLOSE</button>
        </div>
      </div>
    );
  }
};

export default InfoUserBox;
