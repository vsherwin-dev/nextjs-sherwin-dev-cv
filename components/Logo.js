import { LightningBoltIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
        <a className="my-4 flex items-center space-x-1 text-indigo-500">
          {/* <LightningBoltIcon  className="h-8 w-8 flex-shrink-0 mr-1 animate-spin"/> */}
           <span className="text-white text-[22px] font-bold animate-bounce pt-[25px] md:pt-0 font-mono">&#60;sherwin-dev /&#62;</span> 
        </a>      
        </Link>
    )
}

export default Logo;
