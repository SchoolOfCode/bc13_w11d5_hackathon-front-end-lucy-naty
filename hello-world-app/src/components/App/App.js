import {Routes, Route, useNavigate} from 'react-router-dom';
import MainApp from './MainApp.js';
import Home from './StartPage.js';
import "./App.css"

export default function App() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    // 👇️ navigate to /start page
    navigate('/home');
  };

  const navigateToMain = () => {
    // 👇️ navigate to /main page
    navigate('/main');
  };

  return (
    <div>
      <div>
      <button className="button-49" onClick={navigateToHome}>Home</button>

        <hr />
       
        <button className="button-49" onClick={navigateToMain}>Main</button>

        <Routes>
          <Route path="/home" element={<Home />} />
            <Route path="/main" element={<MainApp />} />
        </Routes>
      </div>
    </div>
  );
}
