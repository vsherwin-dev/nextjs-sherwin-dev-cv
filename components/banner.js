import bg from '../public/img/banner4.png'

export default function Banner(){

    return(
      <section>
       <div className="relative bg-right-bottom md:bg-center bg-cover h-auto min-h-auto max-h-auto 1080:max-h-[700px] 1220:max-h-[890px] w-full" style={{
      backgroundImage: `url(${bg.src})`,
      width: '100%'
    }}>
          <div className="h-[50vh] md:h-[100vh] flex flex-col justify-center items-center flex-wrap overflow-hidden">
              
          <h1 className="uppercase text-[24px] md:text-[68px] text-white font-mono line">Hi, I am <span className="text-[#4bffa5] hover:animate-pulse">Neil Sherwin</span> ...</h1>
          <p className="text-white font-mono text-[16px] md:text-[24px] tracking-tighter hover:animate-spin">Web Developer / QA Analyst</p>
          <p className="text-white font-mono text-[12px] md:text-[16px] tracking-tighter">I design and code simple things, and I love what I do.</p>
  
          </div>
       </div>
      </section>
    )
  }