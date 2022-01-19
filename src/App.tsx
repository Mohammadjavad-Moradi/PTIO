import Home from './Pages/Home/Home.component';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Home />;
    </BrowserRouter>
  );
}

export default App;
