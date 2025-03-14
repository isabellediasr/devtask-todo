function App() {
   return (
      <div className="w-screen h-screen bg-[#1c1a1d]">
         <div className="flex justify-center items-center">
            <header>
               <h1 className="font-jetbrains text-white">
                  Dev<span>Task</span>
               </h1>
            </header>
            <section className="w-[50%] bg-[#2b2e33]">
               <input type="text" placeholder="Digite o título da tarefa" />
               <input type="text" placeholder="Digite a descrição da tarefa" />
            </section>
         </div>
      </div>
   );
}

export default App;
