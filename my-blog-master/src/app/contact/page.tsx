export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Mystery movie-style header with film strip */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      </div>
      <section className="text-white body-font relative py-16">
        <div className="container px-8 py-8 mx-auto flex flex-col items-center">
          <div className="text-center mb-12">
            <h1 className="title-font sm:text-6xl text-5xl font-bold text-white bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent drop-shadow-2xl mb-4">
              CONTACT THE DETECTIVE
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              Got a clue, a case, or a mystery to solve? Reach out below.
            </p>
          </div>
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info Card */}
            <div className="relative bg-white/95 rounded-2xl shadow-2xl border-2 border-red-400 p-8 flex flex-col justify-between min-h-[320px]">
              {/* Pin on top */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-7 h-7 bg-red-600 rounded-full flex items-center justify-center shadow-lg z-20">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="mb-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mb-2">ADDRESS</h2>
                <p className="mt-1 text-gray-700">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
              </div>
              <div className="mb-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mb-2">EMAIL</h2>
                <a className="text-red-500 leading-relaxed">example@email.com</a>
              </div>
              <div>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mb-2">PHONE</h2>
                <p className="leading-relaxed text-gray-700">123-456-7890</p>
              </div>
            </div>
            {/* Contact Form Card */}
            <form className="relative bg-white/95 rounded-2xl shadow-2xl border-2 border-red-400 p-8 flex flex-col min-h-[320px]">
              {/* Pin on top */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-7 h-7 bg-red-600 rounded-full flex items-center justify-center shadow-lg z-20">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-center">Send a Message</h2>
              <p className="leading-relaxed mb-5 text-gray-600 text-center">Your tip could crack the case.</p>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="text-white bg-gradient-to-r from-red-600 to-red-500 border-0 py-2 px-6 focus:outline-none hover:from-red-700 hover:to-red-600 rounded text-lg font-semibold shadow-md transition-all duration-300">Send</button>
              <p className="text-xs text-gray-500 mt-3 text-center">All messages are confidential. The detective will be in touch soon.</p>
            </form>
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