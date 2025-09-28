// SSR Example: getServerSideProps
export async function getServerSideProps() {
  // Simulate fetching data
  return {
    props: {
      message: 'This page was server-side rendered on each request (SSR).',
    },
  };
}

export default function SSRPage({ message }) {
  return (
    <div className="p-8 text-white bg-slate-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Server-Side Rendering (SSR)</h1>
      <p>{message}</p>
    </div>
  );
}
