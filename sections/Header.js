import Logo from "../components/Logo";
import {useTheme} from "next-themes";
import{SunIcon ,MoonIcon} from "@heroicons/react/solid";
import {useState, useEffect} from "react";

const Header = () => {

  const {systemTheme , theme, setTheme} = useTheme ();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() =>{
    setMounted(true);
  },[])

   const renderThemeChanger= () => {
      if(!mounted) return null;

      const currentTheme = theme === "system" ? systemTheme : theme ;

      if(currentTheme ==="dark"){
        return (
          <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
        )
      }

      else {
        return (
          <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
        )
      }
   };

  return (
    <div className="fixed z-40 w-screen">
      <header className={`z-50 px-5 py-2 w-full transition duration-300 ease-in-out sticky top-0 left-0`}>
          <div className="max-w-screen-xl m-auto grid grid-flow-col items-center gap-5">
            <div>
              <Logo />
            </div>
            <div className="ml-auto">
              <div className="transform transition ease-in-out hover:scale-105 flex items-center space-x-5">
                {/* Logo */}
                {renderThemeChanger()}
              </div>
            </div>
          </div>
        </header>
    </div>
  );
};

export default Header;

