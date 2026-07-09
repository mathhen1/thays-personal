import { linkConfirm } from "../Utils/links"

const TeamTH = () => {

    const imgW = "reveal opacity-0 w-3"
    const liStyle = "reveal opacity-0 flex flex-col gap-1 rounded-md border-2 border-purple-700 bg-white p-3 gap-2 text-nowrap lg:w-full"
    const titleTH = "reveal opacity-0 font-bold text-wrap text-lg lg:text-xl text-fuchsia-800"


    return (
        <div id="team-th">
            {/* consultoria */}

            <h1 className="reveal opacity-0 w-full font-semibold text-3xl lg:text-4xl p-5 lg:p-10 bg-pink-500
                text-nowrap text-center text-white font-nz border-t border-black">
                Faça parte do <span className="italic font-black text-4xl lg:text-5xl">&#35;TeamTH</span>
            </h1>

            <div className="reveal opacity-0 w-full bg-purple-300 flex flex-col items-center border-t border-black">

                {/* abordagem e metodologia */}

                <h1 className="reveal opacity-0 p-3 pb-2 font-bold tracking-wide text-lg lg:text-xl">
                    Abordagem e Metodologia
                </h1>

                <ul className="reveal opacity-0 flex flex-col items-center gap-2 w-full">

                    <li className="reveal opacity-0 flex flex-col w-10/12 items-start p-2 text-center border-b">
                        <h2 className="reveal opacity-0 text-lg lg:text-xl font-extrabold tracking-wide text-emerald-600">
                            1. Avaliação Individual:
                        </h2>
                        <p className="reveal opacity-0 text-xs lg:text-sm tracking-tight p-2">
                            &mdash; Busco entender seu histórico, suas necessidades específicas e seus objetivos
                        </p>
                    </li>

                    <li className="reveal opacity-0 flex flex-col w-10/12 items-start p-2 text-center border-b">
                        <h2 className="reveal opacity-0 text-lg lg:text-xl font-extrabold tracking-wide text-rose-600">
                            2. Plano Personalizado:
                        </h2>
                        <p className="reveal opacity-0 text-xs lg:text-sm tracking-tight p-2">
                            &mdash; Elaboro um programa de treinamento seguro e eficaz, levando em consideração suas condições físicas e clínicas.
                        </p>
                    </li>

                    <li className="reveal opacity-0 flex flex-col w-10/12 items-start p-2 text-center border-b">
                        <h2 className="reveal opacity-0 text-lg lg:text-xl font-extrabold tracking-wide text-blue-600">
                            3. Acompanhamento Contínuo:
                        </h2>
                        <p className="reveal opacity-0 text-xs lg:text-sm tracking-tight p-2">
                            &mdash; Monitoro todo seu progresso e ajusto os treinos conforme necessário, garantindo uma evolução segura e uma boa adaptação pro seu corpo
                        </p>
                    </li>

                    <li className="reveal opacity-0 flex flex-col w-10/12 items-start p-2 text-center border-b">
                        <h2 className="reveal opacity-0 text-lg lg:text-xl font-extrabold tracking-wide text-purple-800">
                            4. Apoio e Motivação:
                        </h2>
                        <p className="reveal opacity-0 text-xs lg:text-sm tracking-tight p-2">
                            &mdash; Sempre estarei presente como uma parceira, oferecendo suporte emocional e técnico para que você se sinta motivado a continuar buscando evolução
                        </p>
                    </li>

                </ul>

                {/* o que sera oferecido? */}

                <h1 className="reveal opacity-0 p-3 pb-2 font-bold tracking-wide text-lg lg:text-xl">
                    O que está incluso?
                </h1>

                <ul className="reveal opacity-0 flex flex-col gap-2 w-10/12 rounded-md text-sm text-start p-2">

                    <div className="flex flex-col lg:flex-row gap-2">
                        <li className={liStyle}>
                            <h2 className={titleTH}>
                                Acompanhamento individual
                            </h2>

                            <div className="flex flex-row gap-1">
                                <img src={linkConfirm} alt="" className={imgW} />
                                <p className="reveal opacity-0 text-xs lg:text-sm">
                                    Metodo de treino individualizado
                                </p>
                            </div>
                            <div className="flex flex-row gap-1">
                                <img src={linkConfirm} alt="" className={imgW} />
                                <p className="reveal opacity-0 text-xs lg:text-sm">
                                    Treino voltado pro seu objetivo
                                </p>
                            </div>
                            <div className="flex flex-row gap-1">
                                <img src={linkConfirm} alt="" className={imgW} />
                                <p className="reveal opacity-0 text-xs lg:text-sm">
                                    Acompanhamento e análise de Evolução
                                </p>
                            </div>
                        </li>

                        <li className={liStyle}>
                            <h2 className={titleTH}>
                                Plano de Treino Exclusivo
                            </h2>

                            <div className="flex flex-row gap-1">
                                <img src={linkConfirm} alt="" className={imgW} />
                                <p className="reveal opacity-0 text-xs lg:text-sm">
                                    Condicionamento físico
                                </p>
                            </div>
                            <div className="flex flex-row gap-1">
                                <img src={linkConfirm} alt="" className={imgW} />
                                <p className="reveal opacity-0 text-xs lg:text-sm">Emagrecimento</p>
                            </div>
                            <div className="flex flex-row gap-1">
                                <img src={linkConfirm} alt="" className={imgW} />
                                <p className="reveal opacity-0 text-xs lg:text-sm">
                                    Ganho de massa muscular
                                </p>
                            </div>
                        </li>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-2">
                        <li className={liStyle}>
                            <h2 className={titleTH}>
                                Parceria de jornada
                            </h2>

                            <div className="flex flex-row gap-1">
                                <img src={linkConfirm} alt="" className={imgW} />
                                <p className="reveal opacity-0 text-xs lg:text-sm">
                                    Te acompanho em cada etapa
                                </p>
                            </div>

                            <div className="flex flex-row gap-1">
                                <img src={linkConfirm} alt="" className={imgW} />
                                <p className="reveal opacity-0 text-xs lg:text-sm">
                                    Alavanco sua evolução de perto
                                </p>
                            </div>
                        </li>

                        <li className={liStyle}>
                            <h2 className={titleTH}>
                                Resultados sustentáveis
                            </h2>

                            <div className="flex flex-row gap-1">
                                <img src={linkConfirm} alt="" className={imgW} />
                                <p className="reveal opacity-0 text-xs lg:text-sm">
                                    Foco em beneficios a longo prazo
                                </p>
                            </div>

                            <div className="flex flex-row gap-1">
                                <img src={linkConfirm} alt="" className={imgW} />
                                <p className="reveal opacity-0 text-xs lg:text-sm">
                                    Melhora da saúde mental e fisica
                                </p>
                            </div>
                        </li>
                    </div>


                </ul>

            </div>
        </div>
    )
}

export default TeamTH