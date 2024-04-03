/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Avatar from "../assets/me.webp";
import Navigation from "./Navigation";

export default function Summary({ data, onPress }) {
  const [classNameId, setClassNameId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      setClassNameId(hash);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="relative w-[150px]">
        <img
          src={Avatar}
          alt="januar maksum"
          width={150}
          className="rounded-lg z-20 relative"
        />
        <div className="absolute border-primary rounded-lg z-10 top-2 -right-2 border w-[150px] h-[150px]" />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-primary mt-6">
        Januar Maksum
      </h1>
      <h2 className="text-lg md:text-xl mt-0 md:mt-2 text-slate-200 font-semibold">
        Frontend Developer
      </h2>
      <p className="mt-3 max-w-xs">
        I build pixel-perfect, engaging, and accessible digital experiences.
      </p>
      <nav className="hidden lg:flex flex-col mt-12">
        <ul className="w-max">
          {data?.map((item) => (
            <Navigation
              key={item?.nav_id}
              data={item}
              onPress={onPress}
              spyId={item.href}
              classNameId={classNameId}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}