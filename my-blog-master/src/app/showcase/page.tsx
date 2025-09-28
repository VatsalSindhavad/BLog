
import Image from "next/image";

export default function Showcase() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            </div>
            <section className="text-white body-font relative py-16">
                <div className="container px-8 py-8 mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="title-font sm:text-6xl text-5xl font-bold text-white bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent drop-shadow-2xl mb-4">
                            MYSTERY CASE FILES
                        </h1>
                        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                            Evidence board of my ML projects and investigations
                        </p>
                    </div>
                    {/* Centralized Graph Layout */}
                    <div className="relative bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl p-8 shadow-2xl border-4 border-amber-300 min-h-[470px] max-w-[1160px] mx-auto flex items-center justify-center">
                                    {/* SVG lines connecting to center */}
                                                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{zIndex: 5}}>
                                                    {/* Top left to center */}
                                                    <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" opacity="0.7"/>
                                                    {/* Top right to center */}
                                                    <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" opacity="0.7"/>
                                                    {/* Bottom left to center */}
                                                    <line x1="25%" y1="80%" x2="50%" y2="50%" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" opacity="0.7"/>
                                                    {/* Bottom right to center (Aspect-Based Sentiment) */}
                                                    <line x1="75%" y1="80%" x2="50%" y2="50%" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" opacity="0.7"/>

                                                    {/* Cross connections for visual clarity */}
                                                    {/* Plant Disease <-> E-commerce */}
                                                    <line x1="20%" y1="20%" x2="80%" y2="20%" stroke="#dc2626" strokeWidth="1" strokeDasharray="3,3" opacity="0.4"/>
                                                    {/* Plant Disease <-> Sarcasm Detection */}
                                                    <line x1="20%" y1="20%" x2="25%" y2="80%" stroke="#dc2626" strokeWidth="1" strokeDasharray="3,3" opacity="0.4"/>
                                                    {/* E-commerce <-> Aspect-Based Sentiment */}
                                                    <line x1="80%" y1="20%" x2="75%" y2="80%" stroke="#dc2626" strokeWidth="1" strokeDasharray="3,3" opacity="0.4"/>
                                                    {/* Sarcasm Detection <-> Aspect-Based Sentiment */}
                                                    <line x1="25%" y1="80%" x2="75%" y2="80%" stroke="#dc2626" strokeWidth="1" strokeDasharray="3,3" opacity="0.4"/>
                                                </svg>
                        {/* Grid for projects */}
                        <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-4 relative z-10 place-items-center" style={{minHeight:'350px'}}>
                                            {/* Top left: Plant Disease */}
                                            <div className="col-start-1 row-start-1 flex flex-col items-center">
                                                                <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200 w-64 relative">
                                                                    {/* Pin on top */}
                                                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-7 h-7 bg-red-600 rounded-full flex items-center justify-center shadow-lg z-20">
                                                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                                                    </div>
                                                    <div className="w-full h-40 bg-gray-100 rounded mb-4 flex items-center justify-center overflow-hidden">
                                                        <Image
                                                            src="/images/plant-disease.jpg"
                                                            alt="Plant Disease Diagnosis"
                                                            width={256}
                                                            height={160}
                                                            className="object-cover w-full h-full rounded"
                                                        />
                                                    </div>
                                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Plant Disease Diagnosis from Leaf Images</h3>
                                                    <p className="text-sm text-gray-600">Neural network model for identifying plant diseases from leaf images using computer vision</p>
                                                </div>
                                            </div>
                                            {/* Top right: E-commerce */}
                                            <div className="col-start-3 row-start-1 flex flex-col items-center">
                                                                <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200 w-64 relative">
                                                                    {/* Pin on top */}
                                                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-7 h-7 bg-red-600 rounded-full flex items-center justify-center shadow-lg z-20">
                                                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                                                    </div>
                                                    <div className="w-full h-40 bg-gray-100 rounded mb-4 flex items-center justify-center overflow-hidden">
                                                        <Image
                                                            src="/images/ecommerce-segmentation.jpg"
                                                            alt="E-commerce Analysis"
                                                            width={256}
                                                            height={160}
                                                            className="object-cover w-full h-full rounded"
                                                        />
                                                    </div>
                                                    <h3 className="font-bold text-gray-800 text-lg mb-3">E-commerce Customer Segmentation</h3>
                                                    <p className="text-sm text-gray-600">Machine learning model for segmenting customers based on purchasing behavior and preferences</p>
                                                </div>
                                            </div>
                                            {/* Center: Weather Forecasting */}
                                            <div className="col-start-2 row-start-2 flex flex-col items-center">
                                                                <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200 w-72 relative">
                                                                    {/* Pin on top */}
                                                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-7 h-7 bg-red-600 rounded-full flex items-center justify-center shadow-lg z-20">
                                                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                                                    </div>
                                                    <div className="w-full h-48 bg-gray-100 rounded mb-4 flex items-center justify-center overflow-hidden">
                                                        <Image
                                                            src="/images/weather-forecasting.jpg"
                                                            alt="Weather Prediction"
                                                            width={288}
                                                            height={192}
                                                            className="object-cover w-full h-full rounded"
                                                        />
                                                    </div>
                                                    <h3 className="font-bold text-gray-800 text-xl mb-3">Weather Forecasting</h3>
                                                    <p className="text-base text-gray-600">Time series analysis and machine learning for accurate weather prediction models</p>
                                                </div>
                                            </div>
                                            {/* Bottom left: Sarcasm Detection */}
                                            <div className="col-start-1 row-start-3 flex flex-col items-center">
                                                                <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200 w-64 relative">
                                                                    {/* Pin on top */}
                                                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-7 h-7 bg-red-600 rounded-full flex items-center justify-center shadow-lg z-20">
                                                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                                                    </div>
                                                    <div className="w-full h-40 bg-gray-100 rounded mb-4 flex items-center justify-center overflow-hidden">
                                                        <Image
                                                            src="/images/sarcasm-detection.jpg"
                                                            alt="Content Moderation"
                                                            width={256}
                                                            height={160}
                                                            className="object-cover w-full h-full rounded"
                                                        />
                                                    </div>
                                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Sarcasm and Harmful Content Detection</h3>
                                                    <p className="text-sm text-gray-600">NLP model for detecting sarcasm and harmful content in social media text</p>
                                                </div>
                                            </div>

                                            {/* Bottom right: Aspect-Based Sentiment Analysis */}
                                            <div className="col-start-3 row-start-3 flex flex-col items-center">
                                                                <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200 w-64 relative">
                                                                    {/* Pin on top */}
                                                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-7 h-7 bg-red-600 rounded-full flex items-center justify-center shadow-lg z-20">
                                                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                                                    </div>
                                                    <div className="w-full h-40 bg-gray-100 rounded mb-4 flex items-center justify-center overflow-hidden">
                                                        <Image
                                                            src="/images/aspect.jpg"
                                                            alt="Aspect-Based Sentiment Analysis"
                                                            width={256}
                                                            height={160}
                                                            className="object-cover w-full h-full rounded"
                                                        />
                                                    </div>
                                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Aspect-Based Sentiment Analysis of Product Reviews</h3>
                                                    <p className="text-sm text-gray-600">Deep learning model for extracting aspect-based sentiment from product reviews to understand customer opinions in detail</p>
                                                </div>
                                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            </div>
        </div>
    );
}
