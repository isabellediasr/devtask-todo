import { LaptopMinimalCheck } from "lucide-react";

function Header() {
   return (
      <header className="flex justify-center gap-x-3 p-5">
         <LaptopMinimalCheck color="#3e9392" size={45} className="" />
         <h1 className="text-3xl font-bold content-center">
            Dev<span className="text-secundaria">Task</span>
         </h1>
      </header>
   );
}

export default Header;
