export default async function Footer() {
    return (
        <footer className="text-gray-400 body-font bg-black">
            <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-col items-center text-center">
                    <div className="flex title-font font-medium items-center justify-center text-white mb-8">
                        <div className="relative">
                            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-lg transform rotate-12">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-white" viewBox="0 0 24 24">
                                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                                </svg>
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-800 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-2 h-2 text-white" viewBox="0 0 24 24">
                                    <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.5V22H12.5V16H18V14L16,12Z"/>
                                </svg>
                            </div>
                        </div>
                        <span className="ml-3 text-xl">Vatsal Sindhavad</span>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <h2 className="title-font font-medium text-white text-2xl mb-6 tracking-wider">ABOUT THE ML ENGINEER</h2>
                        
                        {/* Description in a styled box */}
                        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-600 rounded-xl p-8 shadow-2xl relative overflow-hidden">
                            {/* Decorative corner elements */}
                            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-red-400 rounded-tl-lg"></div>
                            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-red-400 rounded-tr-lg"></div>
                            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-red-400 rounded-bl-lg"></div>
                            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-red-400 rounded-br-lg"></div>
                            
                            <p className="text-gray-300 leading-relaxed text-lg font-light relative z-10">
                                I'm a student at <span className="text-red-400 font-semibold">DJ Sanghvi</span> currently pursuing my degree in <span className="text-red-400 font-semibold">AI/ML</span>. My fascination with turning data into impactful solutions has led me to the field of Machine Learning. I enjoy the entire process, from cleaning data and training models to thinking about how they can be used in the real world. I'm always eager to learn new things and apply what I've learned in my coursework and personal projects to solve interesting problems.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-gray-800 w-full">
                        <p className="text-gray-500 text-sm text-center">
                            © 2024 Vatsal Sindhavad - ML Engineer & Mystery Solver
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}