import {
  FaBook,
  FaBasketballBall,
  FaRobot,
  FaHeartbeat,
  FaFlask,
  FaGlassCheers,
  FaBriefcase,
} from "react-icons/fa";
import { useState } from "react";
import logo from "../logo.svg";
function Aside({mobilAside, getMobilAside}) {
  const categories = [
    { id: 2, name: "Sports", key: "sports", icon: <FaBasketballBall /> },
    { id: 3, name: "Technology", key: "technology", icon: <FaRobot /> },
    { id: 4, name: "Health", key: "health", icon: <FaHeartbeat /> },
    { id: 5, name: "Science", key: "science", icon: <FaFlask /> },
    {
      id: 6,
      name: "Entertainment",
      key: "entertainment",
      icon: <FaGlassCheers />,
    },
    { id: 7, name: "Business", key: "business", icon: <FaBriefcase /> },
  ];
  const [search, setSearch] = useState("");
  return (
    <div className={`${mobilAside ? "block" : "hidden"} md:block  w-72 z-[2] fixed md:relative`}>
        <div className="w-72">
      <div
        className="bg-slate-100 dark:bg-slate-700 flex flex-col justify-between  w-full rounded-2xl p-2 pt-3 overflow-auto"
        style={{ height: "calc(100vh - 100px)" }}
      >
        <ul className="space-y-10 text-center mt-10 ">
          <a href="/">
            <div className="flex items-center">
              <img src={logo} alt="HeaderImage" width={100} />
              <span className="text-2xl font-bold">React News</span>
            </div>
          </a>
          <input
          type="text"
          value={search}
          onInput={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => { if(e.key == 'Enter') window.location.pathname = '/' +search}}
          className="hidden sm:block bg-transparent h-10   rounded-2xl border-2 border-slate-700 dark:bg-slate-600 dark:border-slate-500 text-lg p-2 px-4"
          placeholder="Ara"
        />
          {categories.map((category) => (
            <li
              onClick={() => (window.location.pathname = "/" + category.key)}
              className={
                (window.location.pathname == "/" + category.key
                  ? "dark:bg-slate-600 dark:hover:bg-slate-500 hover:bg-slate-300 bg-slate-300 "
                  : " dark:hover:bg-slate-600 hover:bg-slate-200") +
                `  rounded-2xl px-3 p-2 text-xl mb-1.5 cursor-pointer`
              }
              key={category.id}
            >
              <div className="flex items-center justify-between mx-4">
                <span className="mr-2 text-3xl">{category.icon}</span>
                <span className="text-cyan-900 dark:text-cyan-400 mr-3 text-xxl">
                  {category.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
    </div>
  );
}

export default Aside;
