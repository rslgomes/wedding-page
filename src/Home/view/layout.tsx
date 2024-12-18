import React, { useRef } from "react";
import "../../globals.css";
import NavLike from "../layout/NavLike";
import Hero from "../layout/Hero";
import ScrollBar from "../layout/ScrollBar";

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-col min-h-screen bg-primary-100 ">
      <NavLike contentRef={contentRef} />
      {/* <Hero /> */}
      <div
        ref={contentRef}
        className="flex-grow mt-10 p-4 min-h-screen-navbar lg:min-h-screen-navbar-lg"
      >
        {children}
      </div>
      <div className="fixed h-screen-scrollbar w-2 top-10 right-0 md:opacity-0">
        <ScrollBar />
      </div>
    </div>
  );
};
export default Layout;
