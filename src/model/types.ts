export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface UserPropsType {
  users: UserType[];
  onRemoveUser: (id: number) => void;
  onInfoBox: (
    id: number,
    name: string,
    username: string,
    email: string
  ) => void;
}

export interface AddUserWindowPropsType {
  addUserWindow: boolean;
  onAddUser: (name: string, username: string, email: string) => void;
  onCloseWindowNewUser: () => void;
}

export interface ButtonNewUserProps {
  onOpenWindowNewUser: () => void;
}

export interface InfoBoxType {
  id: number;
  name: string;
  username: string;
  email: string;
  active: boolean;
}

export interface InfoBoxProps {
  infoBox: InfoBoxType;
  onCloseInfoBox: () => void;
}



