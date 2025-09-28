// CSR Example: Client-Side Rendering
import { useEffect, useState } from 'react';

export default function CSRPage() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    setTimeout(() => {
      setMessage('This page was rendered on the client (CSR).');
    }, 500);
  }, []);

  return (
    <div className="p-8 text-white bg-slate-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Client-Side Rendering (CSR)</h1>
      <p>{message}</p>
    </div>
  );
}
