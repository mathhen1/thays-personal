const Achieves = () => {

    const card = `w-11/12 flex overflow-x-auto flex-shrink-0 
    self-stretch snap-center snap-always
    rounded-lg border-3`

    return (
        <div id="results" className="flex flex-col items-center justify-center w-full h-full border-t-2 gap-3">

            <h1 className="reveal opacity-0 font-black text-purple-700 text-xl tracking-wide border-b-2 pt-2">
                Resultados
            </h1>

            <h3 className="reveal opacity-0 text-gray-900 text-xs">
                <span className="animate-pulse">
                    &lt; arraste para os lados &gt;
                </span>
            </h3>

            {/* imagens resultados */}

            <div className="reveal opacity-0 relative flex flex-row items-stretch w-full h-full gap-2 
            scrollbar-none overflow-x-auto snap-x snap-mandatory">

                <div className={card}>
                    <img src="result1.jpg" alt="" className="object-fill pointer-events-none" />
                </div>

                <div className={card}>
                    <img src="result2.jpg" alt="" className="object-fill pointer-events-none" />
                </div>

                <div className={card}>
                    <img src="result3.jpg" alt="" className="object-fill pointer-events-none" />
                </div>

                <div className={card}>
                    <img src="result4.jpg" alt="" className="object-fill pointer-events-none" />
                </div>

                <div className={card}>
                    <img src="result5.jpg" alt="" className="object-fill pointer-events-none" />
                </div>

            </div>

            <h1 className="reveal opacity-0 w-10/12 tracking-tight text-base font-semibold text-center 
                border p-3 bg-gradient-to-r from-fuchsia-500 via-fuchsia-600 to-purple-500 rounded-md
                text-white mt-2">
                O próximo pode ser você
            </h1>

            <h1 className="reveal opacity-0 w-10/12 p-3 tracking-tight text-base font-extrabold text-center
                border-2 border-b-3 border-l-3 border-black bg-fuchsia-200 text-purple-700">
                O que está esperando?
            </h1>

            <h1 className="reveal opacity-0 w-10/12 tracking-wider text-base font-black text-center 
            rounded-4xl border p-3 bg-emerald-500 text-white">
                Entre em contato
            </h1>

            <div className="reveal opacity-0 flex flex-col items-center bg-purple-100">
                <span className="reveal opacity-0 w-full border-b border-purple-500"></span>

                <h3 className="reveal opacity-0 text-base w-10/12 font-extrabold
                text-lg text-center tracking-wide text-fuchsia-900 pt-5">
                    Transformando vidas através do movimento e da saúde
                </h3>

                <img src="thays-logo1.png" alt="" className="reveal opacity-0 w-1/2" />

                <span className="reveal opacity-0 w-full border-b border-purple-500"></span>
            </div>

        </div>
    )
}

export default Achieves