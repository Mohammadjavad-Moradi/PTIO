import { Routes, Route } from 'react-router-dom';

import UsersManagement from '../Pages/UsersManagement/UsersManagement.component';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="usersmanagement/*" element={<UsersManagement />} />
        <Route path="*" element={<div></div>} />
      </Routes>
    </div>
  );
};

export default Router;
