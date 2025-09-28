import Link from "next/link";

export default async function Navbar() {
    return (
        <>
            <header className="relative text-gray-600 body-font bg-transparent">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
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
                        <span className="ml-3 text-xl text-white">Vatsal Sindhavad</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="mr-5 hover:text-red-400 text-white transition-colors duration-300">Home</Link>
                        <Link href="/showcase" className="mr-5 hover:text-red-400 text-white transition-colors duration-300">Showcase</Link>
                        <Link href="/blog" className="mr-5 hover:text-red-400 text-white transition-colors duration-300">Blog</Link>
                        <Link href="/contact" className="mr-5 hover:text-red-400 text-white transition-colors duration-300">Contact</Link>
                    </nav>
                    {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button> */}
                </div>
            </header>
        </>
    )
}