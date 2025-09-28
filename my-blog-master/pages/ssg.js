// SSG Example: getStaticProps
export async function getStaticProps() {
  // Simulate fetching data
  return {
    props: {
      message: 'This page was statically generated at build time (SSG).',
    },
  };
}

export default function SSGPage({ message }) {
  return (
    <div className="p-8 text-white bg-slate-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Static Site Generation (SSG)</h1>
      <p>{message}</p>
    </div>
  );
}
