import { memo, useEffect } from 'react';
import assets from '../assets/assets';

const ThemeToggleBtn = ({theme,settheme}) => {
    useEffect(()=> {
        const prefersDarkMode =window.matchMedia('(prefers-color-scheme : dark)').matches;
        settheme(theme || (prefersDarkMode ? 'dark' :'light')
        )
    },[])
    useEffect(()=> {
        if(theme === 'dark')
        {
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme',theme)
    },[theme])
  return (
    <div>
     <button>
        {theme === 'dark' ? (<img onClick={()=> settheme('light')} src={assets.sun_icon} className='size-8.5 p-1.5 border-gray-500 rounded-full'/> ) :
         (<img onClick={()=> settheme('dark')} src={assets.moon_icon}className='size-8.5 p-1.5 border-gray-500 rounded-full'/>) }
     </button>
    </div>
  );
};

export default memo(ThemeToggleBtn);