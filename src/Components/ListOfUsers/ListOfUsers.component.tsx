import UsersSideBar from './UsersSideBar/UsersSideBar.component';
import UsersForm from './UsersForm/UsersForm.component';

import { UsersWrapperStyles } from './ListOfUsers.styles';

const ListOfUsers: React.FC = () => {
  return (
    <UsersWrapperStyles>
      <UsersSideBar />
      <UsersForm />
    </UsersWrapperStyles>
  );
};

export default ListOfUsers;
