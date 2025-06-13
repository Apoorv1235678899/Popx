import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-purple-50 text-center p-4">
      <h1 className="text-4xl font-bold text-purple-700 mb-2">Welcome to PopX</h1>
      <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded mb-2"
        onClick={() => navigate('/register')}
      >
        Create Account
      </button>
      <button
        className="text-purple-600 underline"
        onClick={() => alert('Login Clicked')}
      >
        Already Registered? Login
      </button>
    </div>
  );
}

export default Welcome;