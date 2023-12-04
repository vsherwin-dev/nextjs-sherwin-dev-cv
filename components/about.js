import dp from '../public/img/profile-removebg.png'

export default function About(){

    return(
      <section>
       <div className="relative h-auto min-h-auto max-h-auto 1080:max-h-[700px] 1220:max-h-[890px] px-0 lg:px-24">
          <div className="pl-64 pt-20">
            <p className="text-[16px] font-mono uppercase hover:animate-pulse dark:text-white text-black"><span className="custom-underline">About Me</span></p>
          </div>    
          <div className="h-auto flex flex-col py-[50px] items-center flex-wrap overflow-hidden w-full dark:text-white text-black">
            <div className="flex flex-col md:flex-row w-[80%] md:w-[70%] gap-16">
              <div className="item w-auto h-auto">
                <div className="rounded-full bg-cover hover:animate-bounce" 
                style={{
                    backgroundImage: `url(${dp.src})`,
                    width: '112px',
                    height: '112px'
                }}>
                </div>
              </div>
              <div className="item w-full h-auto font-mono">
                <p className="font-mono pb-8">Hello! I’m Neil Sherwin. Web Developer from Philippines, Nueva Ecija. I have rich experience in web site building, also I am good at wordpress and shopify.</p>
                <div className="flex-inline flex-wrap text-[14px]">
                  <div className="basis-full"><span className="text-[#6246ea]">Name:</span> Neil Sherwin Velasquez</div>
                  <div className="basis-full"><span className="text-[#6246ea]">Age:</span> 24 Years</div>
                  <div className="basis-full"><span className="text-[#6246ea]">Job:</span> Web Developer</div>
                  <div className="basis-full"><span className="text-[#6246ea]">Citizenship:</span> Filipino</div>
                  <div className="basis-full"><span className="text-[#6246ea]">Residence:</span> Nueva Ecija, Philippines</div>
                  <div className="basis-full"><span className="text-[#6246ea]">Email:</span> vneilsherwin123@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
       </div>
      </section>
    )
  }