
export default function Timeline(){

    return(
      <section>
       <div className="relative main-banner h-auto min-h-auto max-h-auto 1080:max-h-[700px] 1220:max-h-[890px] pb-24 font-mono text-black">

        <div className="flex flex-col md:flex-row items-start space-x-1 px-0 lg:px-24">
            <div className="item w-full md:w-1/2 h-auto">
                <div className="pl-64 pt-20">
                    <p className="text-[16px] font-mono uppercase hover:animate-pulse dark:text-white text-black"><span className="shadow-[0_3px_0_0_rgba(0,0,0,0.3)] shadow-[#f26b38]">Experience</span></p>
                </div>
                <div className="w-auto flex flex-col justify-center items-center overflow-hidden mx-auto py-14 px-14">
                    <ol className="relative border-l border-[#f26b38]"> 
                        <li className="mb-10 ml-6">            
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-[#f26b38] bg-gray-800">
                            <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                        </span>
                            <h3 className="flex items-center mb-1 text-[18px] font-bold text-[#f26b38]">FREELANCE WEB DEVELOPER</h3>
                            <time className="block mb-2 text-[12px] font-semibold leading-none dark:text-white text-black">OCT 2018 – PRESENT</time>
                        </li>

                        <li className="mb-10 ml-6">            
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-[#f26b38] bg-gray-800">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-[18px] font-bold text-[#f26b38]">PROJECT ANALYST / QUALITY ASSURANCE</h3>
                            <h3 className="flex items-center mb-1 text-[14px] font-semibold dark:text-white text-black">FurtherEdge Corp.</h3>
                            <time className="block mb-2 text-[12px] font-semibold leading-none dark:text-white text-black">MAY 2021 – FEB 2022</time>
                            <ul className="mb-4 text-[12px] font-normal list-disc pl-8 dark:text-white text-black">
                                <li>Review functional and design specifications to ensure full understanding of individual deliverables</li>
                                <li>Develop, document and maintain functional test cases and other test artifacts like the test data, data validation, harness scripts and automated scripts</li>
                                <li>Execute and evaluate manual test cases and report test results</li>
                                <li>Backend database testing in a Microsoft SQL environment, including validating jobs and triggers.</li>
                            </ul>
                        </li>

                        <li className="mb-10 ml-6">            
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-[#f26b38] bg-gray-800">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-[18px] font-bold text-[#f26b38]">DATA ANALYST</h3>
                            <h3 className="flex items-center mb-1 text-[14px] font-semibold dark:text-white text-black">Datahold Philippines Inc.</h3>
                            <time className="block mb-2 text-[12px] font-semibold leading-none dark:text-white text-black">MAR. 2019 – SEPT. 2019</time>
                            <ul className="mb-4 text-[12px] font-normal list-disc pl-8 dark:text-white text-black">
                                <li>Interpreted data, analyzed results and provided ongoing reports</li>
                                <li>Identified, analyzed and interpreted trends or pattern in complex data sets</li>
                                <li>Filtered and scrubbed data review reports and performance indicators to locate and correct code problems</li>
                            </ul>
                        </li>

                                    
                        <li className="mb-10 ml-6">            
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-[#f26b38] bg-gray-800">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-[18px] font-bold text-[#f26b38]">OJT – IT SUPPORT</h3>
                            <h3 className="flex items-center mb-1 text-[14px] font-semibold dark:text-white text-black">National Irrigation Administration –Upper Pampanga River Integrated Irrigation Systems</h3>
                            <time className="block mb-2 text-[12px] font-semibold leading-none dark:text-white text-black">SEPT. 2017 – APR. 2018</time>
                            <p className="mb-4 text-[12px] font-normal dark:text-white text-black">Clerical job</p>
                        </li>
                    </ol>
                </div> 
            </div>


            <div className="item w-full md:w-1/2 h-auto">
                <div className="pl-64 pt-20">
                    <p className="text-[16px] font-mono uppercase hover:animate-pulse dark:text-white text-black"><span className="shadow-[0_3px_0_0_rgba(0,0,0,0.3)] shadow-[#f26b38]">Education</span></p>
                </div>
                <div className="w-auto flex flex-col justify-center overflow-hidden mx-auto py-14 px-14">
                    <ol className="relative border-l border-[#f26b38]"> 
                        <li className="mb-10 ml-6">            
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-[#f26b38] bg-gray-800">
                            <svg  className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" xmlns="https://www.subpng.com/png-7roxmq/download.html" viewBox="0 0 640 512"><path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"/></svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-[18px] font-bold text-[#f26b38]">TERTIARY LEVEL:</h3>
                            <h3 className="flex items-center mb-1 text-[14px] font-bold dark:text-white text-black">BACHELOR OF SCIENCE IN COMPUTER SCIENCE</h3>
                            <h3 className="flex items-center mb-1 text-[14px] font-semibold dark:text-white text-black">AMA COMPUTER COLLEGE, CABANATUAN CITY NUEVA ECIJA</h3>
                            <time className="block mb-2 text-[12px] font-semibold leading-none dark:text-white text-black">2015-2018</time>
                        </li>

                        <li className="mb-10 ml-6">            
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-[#f26b38] bg-gray-800">
                            <svg  className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" xmlns="https://www.subpng.com/png-7roxmq/download.html" viewBox="0 0 640 512"><path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"/></svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-[18px] font-bold text-[#f26b38]">SECONDARY LEVEL:</h3>
                            <h3 className="flex items-center mb-1 text-[14px] font-bold dark:text-white text-black">GABALDON ESSENTIAL ACADEMY, GABALDON NUEVA ECIJA</h3>
                        </li>
                    </ol>
                </div> 
            </div>
        </div>

            
            
       </div>
      </section>
    )
  }