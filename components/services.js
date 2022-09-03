import Image from 'next/image'

export default function Services() {
    return (
      <>
        <section>
          <div className="pl-64 pt-20 pb-16">
              <p className="text-[16px] font-mono uppercase hover:animate-pulse dark:text-white text-black"><span className="shadow-[0_3px_0_0_rgba(0,0,0,0.3)] shadow-[#f26b38]">Services</span></p>
          </div>
          <div className="h-auto min-h-auto max-h-auto 1080:max-h-[700px] 1220:max-h-[890px] px-12 lg:px-44 pb-14">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 font-mono">
              
                  <div className="bg-[#ececec] dark:bg-[#111111] dark:text-white text-black p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <div className="bg-cover h-8 w-8 hover:animate-pulse">
                        <Image 
                            src="/img/fe-logo.png"
                            alt="frontend"
                            width={32}
                            height={32}
                        />
                      </div>
                      <h3 className="text-22 font-bold">Front-end</h3>
                      <p className="text-body">Front-end web development is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript.</p>
                  </div>
  
                  <div className="bg-[#ececec] dark:bg-[#111111] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <div className="hover:animate-pulse">
                        <Image 
                            src="/img/mobile.png"
                            alt="mobile"
                            width={32}
                            height={32}
                        />
                      </div>
                      <h3 className="text-22 font-bold">Mobile Application</h3>
                      <p className="text-body">A mobile application, most commonly referred to as an app, is a type of application software designed to run on a mobile.</p>
                  </div>
  
                  <div className="bg-[#ececec] dark:bg-[#111111] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <div className="hover:animate-pulse">
                      <Image 
                            src="/img/magn.png"
                            alt="magnify"
                            width={32}
                            height={32}
                        />
                      </div>
                      <h3 className="text-22 font-bold">Investigation</h3>
                      <p className="text-body">Investigation, examination, inquiry, research express the idea of an active effort to find out something.</p>
                  </div>
  
                  <div className="bg-[#ececec] dark:bg-[#111111] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <div className="hover:animate-pulse">
                      <Image 
                            src="/img/code.png"
                            alt="code"
                            width={32}
                            height={32}
                        />
                      </div>
                      <h3 className="text-22 font-bold">Programming</h3>
                      <p className="text-body">Computer programming is the process of designing and building an executable computer program to accomplish a specific.</p>
                  </div>
  
                  <div className="bg-[#ececec] dark:bg-[#111111] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <div className="hover:animate-pulse">
                        <Image 
                                src="/img/supp.png"
                                alt="support"
                                width={32}
                                height={32}
                            />
                      </div>
                      <h3 className="text-22 font-bold">Awesome Supports</h3>
                      <p className="text-body">Awesome Support is the most versatile and feature-rich. Get started for free and add premium features as your business grows.</p>
                  </div>
  
                  <div className="bg-[#ececec] dark:bg-[#111111] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <div className="hover:animate-pulse">
                      <Image 
                            src="/img/chrome.png"
                            alt="chrome"
                            width={32}
                            height={32}
                        />
                      </div>
                      <h3 className="text-22 font-bold">Web Development</h3>
                      <p className="text-body">Web development is the work involved in developing a Web site for the Internet or an intranet and social network services.</p>
                  </div>
                  </div>
              </div>
        </section>
      </>
    )
  }