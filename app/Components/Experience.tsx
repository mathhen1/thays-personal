const Experience = () => {
    const liStyle = "reveal2 opacity-0 text-sm p-2 border-2 border-l-4 border-b-4 font-black border-black bg-fuchsia-400 text-black"

    return (
        <div id="experience" className="flex flex-col items-center gap-3 border-t bg-pink-200 text-black">
            <h1 className="reveal2 opacity-0 text-center mt-2 text-xl border-b-2 font-black text-fuchsia-700 max-lg:font-roboto">
                Experiência
            </h1>

            <div className="flex flex-col lg:flex-row gap-3 w-11/12">
                <ul className="flex flex-col gap-3 lg:w-11/12">
                    <li className={liStyle}>
                        &mdash;&gt; Instrutora de Treino Funcional
                    </li>

                    <li className={liStyle}>
                        &mdash;&gt; Instrutora Líder de Musculação
                    </li>

                    <li className={liStyle}>
                        &mdash;&gt; Especialista em Exercicio Clinico
                    </li>
                    <li className={liStyle + " lg:hidden"}>
                        &mdash;&gt; Preparadora Fisica
                    </li>
                    <li className={liStyle + " lg:hidden"}>
                        &mdash;&gt; Auxiliar Tecnica de Futsal
                    </li>
                    <li className={liStyle + " lg:hidden"}>
                        &mdash;&gt; Monitoria de Educação Fisica
                    </li>
                </ul>

                <ul className="flex flex-col gap-3 lg:w-11/12">

                    <li className={liStyle + " hidden lg:block"}>
                        &mdash;&gt; Preparadora Fisica
                    </li>
                    <li className={liStyle + " hidden lg:block"}>
                        &mdash;&gt; Auxiliar Tecnica de Futsal
                    </li>
                    <li className={liStyle + " hidden lg:block"}>
                        &mdash;&gt; Monitoria de Educação Fisica
                    </li>
                </ul>
            </div>

            <h2 className="reveal2 opacity-0 text-lg lg:text-xl border-b-2 font-black tracking-tighter text-fuchsia-700">
                Onde já trabalhei?
            </h2>

            <div className="flex flex-row w-11/12 mb-5">
                <ul className="reveal2 opacity-0 flex flex-col items-start gap-1 flex-1 border-2 border-r-1 text-xs lg:text-sm text-nowrap bg-fuchsia-400">
                    <li className="reveal2 opacity-0 text-black font-black p-2 tracking-tighter text-black">
                        &bull; Planet Club Academia
                    </li>
                    <li className="reveal2 opacity-0 text-black font-black p-2 tracking-tighter text-black">
                        &bull; UNISÃOMIGUEL
                    </li>
                    <li className="reveal2 opacity-0 text-black font-black p-2 tracking-tighter text-black">
                        &bull; Clube do Movimento
                    </li>
                </ul>
                <ul className="reveal2 opacity-0 flex flex-col items-start gap-1 flex-1 border-2 border-l-1 border text-xs lg:text-sm text-nowrap bg-fuchsia-400">
                    <li className="reveal2 opacity-0 text-black font-black p-2 tracking-tighter text-black">
                        &bull; Bodytech Recife
                    </li>
                    <li className="reveal2 opacity-0 text-black font-black p-2 tracking-tighter text-black">
                        &bull; Gladiadoras Futsal
                    </li>
                    <li className="reveal2 opacity-0 text-black font-black p-2 tracking-tighter text-black">
                        &bull; ESEF / UPE - Doce Vida
                    </li>
                </ul>
            </div>

            <span className="reveal opacity-0 border-b w-full"></span>
        </div>
    )
}

export default Experience