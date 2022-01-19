import { Routes, Route } from 'react-router-dom';

import ListOfUsers from '../../Components/ListOfUsers/ListOfUsers.component';

const UsersManagement: React.FC = () => {
  return (
    <Routes>
      <Route path="listofusers" element={<ListOfUsers />} />
    </Routes>
  );
};

export default UsersManagement;
