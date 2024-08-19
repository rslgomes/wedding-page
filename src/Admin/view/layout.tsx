import NavLike from 'Admin/layout/Navlike';
import { FC, PropsWithChildren, useState } from 'react';

const AdminLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [pin, setPin] = useState('');
  const correctPin = 'chuchuzi1';

  const handlePinSubmit = () => {
    setIsLogged(pin === correctPin);
    if (pin !== correctPin) alert('Senha Incorreta!');
  };

  return (
    <>
      {isLogged ? (
        <div className="min-h-screen flex flex-col">
          <NavLike />
          <main className="flex-grow p-4 bg-primary-100">{children}</main>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-primary-100 p-6 rounded shadow-lg">
            <h2 className="text-lg mb-4">Enter PIN to Access</h2>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="border p-2 rounded w-full bg-primary-50"
              placeholder="Enter PIN"
            />
            <button
              onClick={handlePinSubmit}
              className="mt-4 bg-primary-700 text-primary-100 py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminLayout;
