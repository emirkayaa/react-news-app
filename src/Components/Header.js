import logo from "../logo.svg";
import {useEffect, useState} from "react";
import {TiThMenuOutline} from "react-icons/ti";
export default function Header({mobileAside, getMobileAside}) {

    const tailwind = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png";
    const [search, setSearch] = useState("");
    useEffect(() => {
        setSearch(window.location.pathname.replace('/',''))
    }, [])
    return (
        <header className=" w-full  p-3">
            <div className="flex justify-between p-3 bg-slate-700 dark:bg-slate-700 rounded-2xl px-6">
                <div className="flex items-center">
                    <button onClick={() => getMobileAside(mobileAside = !mobileAside)} className="block md:hidden text-2xl bg-slate-500/30 rounded-full p-2.5 mr-3">
                        <TiThMenuOutline/>
                    </button>
                    <img src={logo} className="h-10" alt="logo"  />
                    <img src={tailwind} className="h-10 mr-2" alt="logo"  />

                </div>
               

<div className="flex justify-between mb-3 border rounded-3xl p-1 dark:border-slate-500">
                            <div className="flex items-center">
                                <img src="https://avatars.githubusercontent.com/u/95496971?v=4" className="h-10 rounded-full" alt="logo"  />
                                <span className="ml-2 text-xl font-medium text-white">Emir Kaya</span>
                            </div>
                        </div>

            </div>
        </header>
    )
}