// import Link from "next/link";

// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

// export default async function Blog() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   // const posts = await res.json();
//   const posts: Post[] = await res.json();

//   return (
//     <div>
//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-col">
//             <div className="h-1 bg-gray-200 rounded overflow-hidden">
//               <div className="w-24 h-full bg-indigo-500"></div>
//             </div>
//             <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
//               <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
//                 My Blog
//               </h1>
//               <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
//                 Blog articles fetched from JSONPlaceholder.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
//             {posts.slice(0, 6).map((post) => (
//               <div className="p-4 md:w-1/3 sm:mb-0 mb-6" key={post.id}>
//                 <div className="rounded-lg h-64 overflow-hidden">
//                   <img
//                     alt="content"
//                     className="object-cover object-center h-full w-full"
//                     // src={`https://dummyimage.com/1203x503?text=Post+${post.id}`}
//                     src={`https://picsum.photos/id/${post.id+20}/1203/503`}
//                   />
//                 </div>
//                 <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{post.title}</h2>
//                 <p className="text-base leading-relaxed mt-2">{post.body}</p>
//                 <Link href={`/blog/${post.id}`} className="text-indigo-500 inline-flex items-center mt-3">
//                   Learn More
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-4 h-4 ml-2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M5 12h14M12 5l7 7-7 7"></path>
//                   </svg>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import Link from "next/link";

type Post = {
  userId: number;
  id: string; // Use string to match the ID type from your API
  title: string;
  body: string;
};

export default async function Blog() {
  const res = await fetch('http://localhost:3000/api/blog', { cache: 'no-store' });
  const posts: Post[] = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Mystery movie-style header with film strip */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      </div>
      <section className="text-white body-font relative py-16">
        <div className="container px-8 py-8 mx-auto">
          <div className="text-center mb-16">
            <h1 className="title-font sm:text-6xl text-5xl font-bold text-white bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent drop-shadow-2xl mb-4">
              MYSTERY BLOG FILES
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              Dive into articles with a cinematic, mysterious twist.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.slice(0, 6).map((post, idx) => (
              <div
                key={post.id}
                className={`relative bg-white/95 rounded-2xl shadow-2xl border-2 border-red-400 p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-red-700/40 ${idx % 2 === 0 ? 'rotate-1' : '-rotate-2'}`}
                style={{ minHeight: 420 }}
              >
                {/* Pin on top */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-7 h-7 bg-red-600 rounded-full flex items-center justify-center shadow-lg z-20">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="w-full h-48 bg-gray-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center w-full h-full rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                    src={`https://picsum.photos/id/${Number(post.id)+20}/400/300`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl"></div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent drop-shadow-xl">
                  {post.title}
                </h2>
                <p className="text-base leading-relaxed text-gray-700 mb-4 text-center">
                  {post.body}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg font-semibold shadow-md hover:from-red-700 hover:to-red-600 transition-all duration-300 mt-auto"
                >
                  Read More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Mystery movie-style footer strip */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      </div>
    </div>
  );
}