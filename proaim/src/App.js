import './App.css';
import HomePage from './pages/HomePage';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
       <Routes>
       <Route path='' element={<HomePage></HomePage>}/>
       </Routes>
      
    </div>
  );
}

export default App;
