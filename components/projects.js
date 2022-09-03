import Image from 'next/image'

export default function Projects() {
    return (
      <>
        <section>
          <div className="pl-64 pt-20 pb-16">
              <p className="text-[16px] font-mono uppercase hover:animate-pulse text-black"><span className="shadow-[0_3px_0_0_rgba(0,0,0,0.3)] shadow-[#f26b38]">Projects I have worked on as Junior Web Developer</span></p>
          </div>
          <div className="h-auto min-h-auto max-h-auto 1080:max-h-[700px] 1220:max-h-[890px] px-12 lg:px-44 pb-14">
              <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 font-mono">
              
                  <div className="bg-[#ececec] dark:bg-[#111111] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <a href="https://mytryangle.com/">
                        <span className="hover:animate-pulse">
                            <Image 
                                src="/img/tryangle.png"
                                alt="mytryangle"
                                width={208}
                                height={48}
                            />
                        </span>
                      </a>
                      <h3 className="text-22 font-bold uppercase">MyTryangle</h3>
                      <p className="text-body">Tags: shopify, react js</p>
                  </div>
  
                  <div className="bg-[#ececec] dark:bg-[#111111] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <a href="https://www.teddysladder.com/">
                        <span className="hover:animate-pulse">
                            <Image 
                                src="/img/teddys.png"
                                alt="teddysladder"
                                width={208}
                                height={48}
                            />
                        </span>  
                      </a>
                      <h3 className="text-22 font-bold uppercase">Teddy&apos;s Ladder</h3>
                      <p className="text-body">Tags: Joomla, bootstrap, html, CSS</p>
                  </div>
  
                  <div className="bg-[#ececec] dark:bg-[#111111] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <a href="https://kemprugegreen.com/">
                        <span className="hover:animate-pulse">
                            <Image 
                                src="/img/krg.png"
                                alt="kemprugegreen"
                                width={208}
                                height={48}
                            />
                        </span>
                      </a>
                      <h3 className="text-22 font-bold uppercase">Kemp, Ruge &amp; Green Law Group</h3>
                      <p className="text-body">Tags: wordpress</p>
                  </div>
  
                  <div className="bg-[#ececec] dark:bg-[#111111] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <a href="https://drnewmanbeverlyhills.com/"><div className="h-12 w-52 text-[18px] font-bold hover:animate-pulse">drnewmanbeverlyhills.com</div></a>
                      <h3 className="text-22 font-bold uppercase">drnewmanbeverlyhills.com/</h3>
                      <p className="text-body">Tags: wordpress, react js</p>
                  </div>
  
                </div>
              </div>
        </section>
      </>
    )
  }