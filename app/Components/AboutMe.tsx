import { goToUri } from "../Utils/funcs"
import { linkEmail, linkIconEmail, linkIconEmailBlack, linkIconInsta, linkIconInstaBlack, linkIconLinkedin, linkIconWpp, linkInsta, linkLinkedin, linkWppSimple } from "../Utils/links"

const AboutMe = () => {

    return (
        <div id="home" className="h-full w-screen flex flex-col lg:flex-row text-black items-center gap-5 lg:mt-3 lg:mb-3">
            <div className="flex flex-col items-center gap-5 lg:gap-7 lg:w-1/2">
                <h1 className="reveal opacity-0 text-xl lg:text-3xl w-10/12 font-semibold text-center tracking-tight pt-2">
                    Olá, sou <span className="reveal opacity-0 text-fuchsia-900 font-black tracking-wide">Thays Helena</span>
                </h1>

                <img src="thays-profile.jpg" alt="" className="animate-opacity rounded-full w-3/4 sm:w-1/4 border-3 border-fuchsia-800 lg:hidden" />

                <h2 className="reveal opacity-0 text-base lg:text-2xl w-10/12 font-black tracking-wide text-center text-fuchsia-950">
                    Personal Trainer e Especialista em exercício clínico
                </h2>

                <div className="flex flex-col items-center gap-3">

                    <h2 className="reveal opacity-0 text-sm lg:text-base w-10/12 p-3 text-center 
                    bg-purple-100 border-2 border-b-4 font-bold">
                        Você busca evolução física ou melhoria na saúde?
                    </h2>

                    <span onClick={() => goToUri(linkWppSimple)}
                        className="reveal opacity-0 hover:cursor-pointer text-base lg:text-lg border-2 border-black rounded-md p-3 w-10/12 transition duration-500 hover:transition hover:duration-500
                        text-center font-extrabold tracking-wider text-white bg-purple-500
                        hover:bg-emerald-500 hover:text-black">
                        <span className="animate-pulse">
                            Fale comigo
                        </span>
                    </span>

                </div>

                {/* Links Rapidos */}

                <ul className="flex flex-row gap-5 text-center font-semibold tracking-wide pb-3">
                    <span onClick={() => goToUri(linkWppSimple)} className="hover:cursor-pointer reveal opacity-0 flex flex-col items-center gap-1">
                        <img src={linkIconWpp} alt="" className="w-10 h-10" />
                    </span>

                    <span onClick={() => goToUri(linkInsta)} className="hover:cursor-pointer reveal opacity-0 flex flex-col items-center gap-1">
                        <img src={linkIconInsta} alt="" className="w-10 h-10" />
                    </span>

                    <span onClick={() => goToUri(linkEmail)} className="hover:cursor-pointer reveal opacity-0 flex flex-col items-center gap-1">
                        <img src={linkIconEmail} alt="" className="w-10 h-10" />
                    </span>

                    <span onClick={() => goToUri(linkLinkedin)} className="hover:cursor-pointer reveal opacity-0 flex flex-col items-center gap-1">
                        <img src={linkIconLinkedin} alt="" className="w-10 h-10" />
                    </span>
                </ul>

                <span className="reveal opacity-0 hidden lg:block h-px border-t border-gray-400 w-2/3"></span>
            </div>

            <img src="thays-profile.jpg" alt="" className="animate-opacity rounded-full w-1/3 border-3 border-fuchsia-800 hidden lg:block" />

            {/* <span className="w-full border-b border-purple-500"></span>

            <h3 className="text-base w-10/12 font-bold text-center tracking-wide text-fuchsia-900">
                Ajudo você a conquistar suas metas de forma saudavel sob suas condições
            </h3>

            <span className="w-full border-b border-purple-500"></span> */}

        </div>
    )
}

export default AboutMe