import Image from 'next/image'

export default function Projects() {
    return (
      <>
        <section>
          <div className="pl-64 pt-20 pb-16">
              <p className="text-[16px] font-mono uppercase hover:animate-pulse  dark:text-white text-black"><span className="custom-underline">Projects I have worked on as Junior Web Developer</span></p>
          </div>
          <div className="h-auto min-h-auto max-h-auto 1080:max-h-[700px] 1220:max-h-[890px] px-8 lg:px-44 pb-14">
              <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 font-mono">
              
                  <div className="bg-[#e3e1ed] dark:bg-[#6246ea] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <a href="https://mytryangle.com/" target="_blank">
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
  
                  <div className="bg-[#e3e1ed] dark:bg-[#6246ea] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <a href="https://www.teddysladder.com/" target="_blank">
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
  
                  <div className="bg-[#e3e1ed] dark:bg-[#6246ea] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <a href="https://kemprugegreen.com/" target="_blank">
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
  
                  <div className="bg-[#e3e1ed] dark:bg-[#6246ea] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <a href="https://drnewmanbeverlyhills.com/" target="_blank"><div className="h-12 w-52 text-[18px] font-bold hover:animate-pulse">drnewmanbeverlyhills.com</div></a>
                      <h3 className="text-22 font-bold uppercase">drnewmanbeverlyhills.com</h3>
                      <p className="text-body">Tags: wordpress, react js</p>
                  </div>

                  <div className="bg-[#e3e1ed] dark:bg-[#6246ea] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <a href="https://amalfi-outfitters.com/" target="_blank"><div className="h-12 w-52 text-[18px] font-bold hover:animate-pulse">amalfi-outfitters.com</div></a>
                      <h3 className="text-22 font-bold uppercase">amalfi-outfitters.com</h3>
                      <p className="text-body">Tags: shopify, shopify liquid</p>
                  </div>

                  <div className="bg-[#e3e1ed] dark:bg-[#6246ea] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <a href="https://hollywoodpc.com/" target="_blank"><div className="h-12 w-52 text-[18px] font-bold hover:animate-pulse">hollywoodpc.com</div></a>
                      <h3 className="text-22 font-bold uppercase">HollywoodPC</h3>
                      <p className="text-body">Tags: wordpress</p>
                  </div>

                  <div className="bg-[#e3e1ed] dark:bg-[#6246ea] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <a href="https://wemploymentlaw.com/" target="_blank"><div className="h-12 w-52 text-[18px] font-bold hover:animate-pulse">wemploymentlaw.com</div></a>
                      <h3 className="text-22 font-bold uppercase">W Employment Law</h3>
                      <p className="text-body">Tags: wordpress</p>
                  </div>

                  <div className="bg-[#e3e1ed] dark:bg-[#6246ea] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <a href="https://laguardians.org/" target="_blank"><div className="h-12 w-52 text-[18px] font-bold hover:animate-pulse">laguardians.org</div></a>
                      <h3 className="text-22 font-bold uppercase">LA Guardians</h3>
                      <p className="text-body">Tags: Joomla, bootstrap, html, CSS</p>
                  </div>

                  <div className="bg-[#e3e1ed] dark:bg-[#6246ea] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <a href="https://trampolinesdownunder.com" target="_blank"><div className="h-12 w-52 text-[18px] font-bold hover:animate-pulse">trampolinesdownunder.com</div></a>
                      <h3 className="text-22 font-bold uppercase">Trampolines DownUnder</h3>
                      <p className="text-body">Tags: Shopify, Liquid, CSS</p>
                  </div>

                  <div className="bg-[#e3e1ed] dark:bg-[#6246ea] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <a href="https://www.lgcypower.com/" target="_blank"><div className="h-12 w-52 text-[18px] font-bold hover:animate-pulse">lgcypower.com</div></a>
                      <h3 className="text-22 font-bold uppercase">LGCY Power</h3>
                      <p className="text-body">Tags: wordpress, php, cakephp</p>
                  </div>

                  <div className="bg-[#e3e1ed] dark:bg-[#6246ea] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <a href="https://mimarosso.com/" target="_blank"><div className="h-12 w-52 text-[18px] font-bold hover:animate-pulse">mimarosso.com</div></a>
                      <h3 className="text-22 font-bold uppercase">Mima Rosso</h3>
                      <p className="text-body">Tags: Shopify, Liquid, CSS</p>
                  </div>

                  <div className="bg-[#e3e1ed] dark:bg-[#6246ea] dark:text-white p-7 rounded-lg grid grid-flow-row gap-5 hover:shadow-md hover:scale-110 trasition duration-300 ease-in-out">
                      <a href="https://recollectionbrand.com/" target="_blank"><div className="h-12 w-52 text-[18px] font-bold hover:animate-pulse">recollectionbrand.com</div></a>
                      <h3 className="text-22 font-bold uppercase">recollectionbrand</h3>
                      <p className="text-body">Tags: Shopify, Liquid, CSS</p>
                  </div>
                </div>
              </div>
        </section>
      </>
    )
  }