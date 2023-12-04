
export default function Contact(){

    return(
      <section>
       <div className="h-auto min-h-auto max-h-auto 1080:max-h-[700px] 1220:max-h-[890px] px-0 lg:px-24">
          <div className="pl-64 pt-20">
            <p className="text-[16px] font-mono uppercase hover:animate-pulse dark:text-white text-black"><span className="custom-underline">Contacts</span></p>
          </div>
          <div className="flex-line items-center space-y-1 py-14 px-8 lg:px-24 dark:text-white text-black">
            <div className="item w-full h-auto">
                <div className="basis-full sm:basis-6/12 lg:basis-2/6"><span className="text-[#6246ea] font-bold">Email:</span> vneilsherwin123@gmail.com</div>
            </div>
            <div className="item w-full h-auto">
                <div className="basis-full sm:basis-6/12 lg:basis-2/6"><span className="text-[#6246ea] font-bold">Phone:</span> ---</div>
            </div>
            <div className="item w-full h-auto">
                <div className="basis-full sm:basis-6/12 lg:basis-2/6"><span className="text-[#6246ea] font-bold">Location:</span> Nueva Ecija, Philippines</div>
            </div>
        </div>    
          <div className="h-auto flex flex-col pb-[50px] items-center flex-wrap overflow-hidden w-full gap-4 px-8 lg:px-24">
                <input
                    type="text"
                    className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        dark:text-white text-black
                        dark:bg-black bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="exampleFormControlInput1"
                    placeholder="Your name..."
                />

                <textarea
                    className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        dark:text-white text-black
                        dark:bg-black bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Message me here...">
                </textarea>

                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 bg-[#6246ea] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out hover:animate-pulse"
                >Hit me!</button>
          </div>
       </div>
      </section>
    )
  }