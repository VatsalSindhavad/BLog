export default function RenderingComparison() {
  return (
    <div className="bg-black text-white p-8 rounded-xl shadow-2xl max-w-2xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-4 text-red-400">SSR vs SSG vs CSR</h2>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li><b>SSR (Server-Side Rendering):</b> Page is rendered on every request. Good for dynamic data, SEO, but slower per request.</li>
        <li><b>SSG (Static Site Generation):</b> Page is rendered at build time. Fast, good for static content, but not real-time.</li>
        <li><b>CSR (Client-Side Rendering):</b> Page is rendered in the browser. Fast navigation, but slower first load and not SEO-friendly.</li>
      </ul>
      <div className="mt-6 text-gray-300 text-base">
        <p><b>When to use:</b></p>
        <ul className="list-disc pl-6">
          <li>SSR: User-specific or frequently changing data.</li>
          <li>SSG: Blogs, docs, marketing pages.</li>
          <li>CSR: Dashboards, apps with lots of interactivity.</li>
        </ul>
      </div>
    </div>
  );
}
