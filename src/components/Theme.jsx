import { useEffect, useState } from 'react'
import { MoonSvg, SunSvg } from '../Utility/Svg'


const Theme = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme : "light";
    });

    useEffect(()=>{
        localStorage.setItem("theme", theme)
        const html = document.querySelector("html")
        html.setAttribute("data-theme",theme)
        // console.log(html)
    },[theme])
    const handleTheme = (e)=>{
        if(e.target.checked){
            setTheme("cyberpunk")
        }else{
            setTheme("light")
        }
    }
    console.log(theme)
  return (
    <>
       <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input 
            type="checkbox"
            onChange={handleTheme}
            checked={theme === "cyberpunk"}
             />
            {
                theme == "light" ? <MoonSvg/> : <SunSvg/>
            }
          </label>
    </>
  )
}

export default Theme
