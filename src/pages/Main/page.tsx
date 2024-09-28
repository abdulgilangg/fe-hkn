import React from 'react';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <h1 className="mb-8 text-4xl font-bold">Welcome👋</h1>
      <div className="space-x-4">
        <Link
          className="rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
          to="/auth/signin"
        >
          SignIn
        </Link>
        <Link
          className="rounded bg-green-500 px-6 py-2 text-white hover:bg-green-600"
          to="/auth/signup"
        >
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Main;
