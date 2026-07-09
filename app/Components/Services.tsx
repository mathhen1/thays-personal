

const Services = () => {


    return (
        <div id="services" className="flex flex-col gap-3 items-center pt-3 bg-white">

            {/* serviços gerais */}

            <h1 className="reveal opacity-0 font-black text-purple-700 text-xl text-nowrap text-center border-b-2">
                Serviços
            </h1>

            <h2 className="reveal opacity-0 text-2xl text-nowrap text-center text-pink-600 
                font-black tracking-wide font-nz">
                Conheça mais do meu trabalho
            </h2>

            <div className="flex flex-col gap-3 items-center sm:grid sm:grid-cols-2 sm:justify-items-center sm:items-stretch sm:w-11/12">

                <div className="reveal opacity-0 border p-3 text-lg w-10/12 text-center 
                rounded-xl border-b-4 bg-purple-100
                flex flex-col items-center gap-3">

                    <h2 className="reveal opacity-0 font-extrabold text-fuchsia-800 tracking-wide">
                        Treinamento Personalizado para Patologias Clinicas
                    </h2>
                    <p className="reveal opacity-0 text-xs w-10/12 text-black font-normal tracking-tighter">
                        &bull; Protocolo para pessoas com diabetes, hipertensão,
                        obesidade e outras condições.
                    </p>

                </div>

                <div className="reveal opacity-0 border p-3 text-lg w-10/12 text-center 
                rounded-xl border-b-4 bg-purple-100
                flex flex-col items-center gap-3">

                    <h2 className="reveal opacity-0 font-extrabold text-fuchsia-800 tracking-wide">
                        Reabilitação Física
                    </h2>
                    <p className="reveal opacity-0 text-xs w-10/12 text-black font-normal tracking-tighter">
                        &bull; Treinos para recuperar mobilidade, força e equilíbrio após lesões ou cirurgias.
                    </p>

                </div>

                <div className="reveal opacity-0 border p-3 text-lg w-10/12 text-center 
                rounded-xl border-b-4 bg-purple-100
                flex flex-col items-center gap-3">

                    <h2 className="reveal opacity-0 font-extrabold text-fuchsia-800 tracking-wide">
                        Programa de Emagrecimento
                    </h2>
                    <p className="reveal opacity-0 text-xs w-10/12 text-black font-normal tracking-tighter">
                        &bull; Acompanhamento voltado à perda de peso de forma saudável e sustentável.
                    </p>

                </div>

                <div className="reveal opacity-0 border p-3 text-lg w-10/12 text-center 
                rounded-xl border-b-4 bg-purple-100
                flex flex-col items-center gap-3">

                    <h2 className="reveal opacity-0 font-extrabold text-fuchsia-800 tracking-wide">
                        Treinamento Funcional
                    </h2>
                    <p className="reveal opacity-0 text-xs w-10/12 text-black font-normal tracking-tighter">
                        &bull; Foco em melhorar o condicionamento físico, postura e fortalecimento muscular.
                    </p>

                </div>

            </div>

            {/* info extra frase */}

            <div className="reveal opacity-0 w-full text-center border-t border-b p-2 italic bg-pink-100
            text-lg text-black font-thin flex justify-center">
                <h2 className="reveal opacity-0 w-10/12 lg:w-1/2 tracking-tight lg:p-2">
                    O exercício físico é uma ferramenta poderosa para recuperação e
                    prevenção de doenças, mas precisa ser feito
                    com planejamento e cuidado.
                </h2>
            </div>


        </div>
    )
}

export default Services