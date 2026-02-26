import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../ui/Loading';
import Navbar from './Navbar';

function AuthLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <Navbar variant="auth" />
      <main className="auth-main">
        {loading && <Loading />}
        <Outlet />
      </main>
    </>
  );
}

export default AuthLayout;
