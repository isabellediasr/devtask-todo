import { LaptopMinimalCheck } from "lucide-react";

function Header() {
   return (
      <div>
         <header className="flex justify-center gap-x-3 p-5">
            <LaptopMinimalCheck color="#3e9392" size={45}/>
            <h1 className="text-3xl font-bold content-center">
               Dev<span className="text-main">Task</span>
            </h1>
         </header>
         <main></main>
      </div>
      
   );
}

export default Header;
