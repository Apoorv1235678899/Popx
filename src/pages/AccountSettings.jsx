import { useEffect, useState } from 'react';
import profileImg from '../assets/profile.jpg';
function AccountSettings() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  if (!user) {
    return <p className="text-center mt-10">No user data found.</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <img
        src={profileImg}
        alt="Profile"
        className="w-28 h-28 rounded-full mb-4 border-4 border-purple-300"
      />
      <h1 className="text-2xl font-bold text-purple-800">{user.name}</h1>
      <p className="text-gray-600 mb-2">{user.email}</p>
      <p className="text-gray-500 text-center max-w-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at eros vitae risus tincidunt placerat.
      </p>
    </div>
  );
}

export default AccountSettings;