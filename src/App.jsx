import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Register from './pages/Register';
import AccountSettings from './pages/AccountSettings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;