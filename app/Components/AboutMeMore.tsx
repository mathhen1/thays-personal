const AboutMeMore = () => {
    return (
        <div id="about-me" className="reveal opacity-0 flex flex-col items-center w-screen h-full gap-5 text-black bg-purple-300">

            <span className="reveal opacity-0 border w-full"></span>

            <h2 className="reveal opacity-0 font-black text-purple-700 tracking-wide text-center text-xl border-b-2">
                Sobre mim
            </h2>

            <div className="flex flex-col items-center p-2 gap-3 w-full text-center font-semibold tracking-tighter">

                <h3 className="reveal opacity-0 text-sm p-1 w-11/12">
                    Meu nome é Thays Helena, tenho 28 anos, sou bacharel em Educação Física e especialista em exercício clínico.
                </h3>
                <h4 className="reveal opacity-0 text-sm p-2 w-11/12">
                    Meu foco principal é auxiliar pessoas com patologias ou condições clínicas a atingirem seus objetivos. Principalmente aqueles que almejam o emagrecimento, a reabilitação física e a melhoria da qualidade de vida.
                </h4>

                <img src="thays1.jpg" alt="" className="reveal opacity-0 rounded-full border-2 w-2/3" />

            </div>

            <span className="reveal opacity-0 border-t w-10/12 border-gray-500"></span>

            <div className="flex flex-col items-center p-2 gap-3 w-full text-center font-semibold tracking-tighter">

                <h3 className="reveal opacity-0 text-sm p-1 w-11/12">
                    Ao longo dos anos, desenvolvi uma abordagem personalizada para cada paciente, entendendo que cada corpo tem suas próprias necessidades e limitações.
                </h3>
                <h4 className="reveal opacity-0 text-sm p-1 w-11/12">
                    Já tive a oportunidade de ajudar mais de 100 pessoas a superarem desafios e alcançarem resultados surpreendentes, sempre com uma metodologia segura e eficiente!
                </h4>

            </div>
        </div>
    )
}

export default AboutMeMore