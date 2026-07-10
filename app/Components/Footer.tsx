import { linkIconEmailBlack, linkIconInstaBlack, linkIconTelBlack, linkIconWpp } from "../Utils/links"

const Footer = () => {

    const actualDate = new Date().getFullYear()

    const sublimeAnimate = "hidden lg:block reveal2 opacity-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:transition-all group-hover:duration-500 group-hover:w-full"
    const itemStyle = "group w-max transition duration-300 hover:transition hover:transition-300 hover:text-black"

    return (
        <div className="reveal opacity-0 flex flex-col items-center bg-purple-400 border-t-2 max-lg:font-roboto gap-2">
            <div className="reveal opacity-0 flex flex-col items-center gap-2 lg:w-3/4">
                {/* links */}

                <div className="w-full flex flex-row items-center mt-2">

                    <div className="flex flex-col gap-1 w-1/2">
                        <h1 className="reveal2 opacity-0 font-black text-lg pl-3">
                            Links rapidos
                        </h1>

                        <ul className="reveal opacity-0 flex flex-col text-sm text-nowrap pl-5 font-black text-violet-900">

                            <a href="#home" className={itemStyle}>
                                &#45; Inicio
                                <span className={sublimeAnimate}></span>
                            </a>
                            <a href="#about-me" className={itemStyle}>
                                &#45; Sobre mim
                                <span className={sublimeAnimate}></span>
                            </a>
                            <a href="#results" className={itemStyle}>
                                &#45; Resultados
                                <span className={sublimeAnimate}></span>
                            </a>
                            <a href="#services" className={itemStyle}>
                                &#45; Serviços
                                <span className={sublimeAnimate}></span>
                            </a>
                            <a href="#team-th" className={itemStyle}>
                                &#45; Team TH
                                <span className={sublimeAnimate}></span>
                            </a>
                            <a href="#experience" className={itemStyle}>
                                &#45; Experiência
                                <span className={sublimeAnimate}></span>
                            </a>
                            <a href="#contact" className={itemStyle}>
                                &#45; Contato
                                <span className={sublimeAnimate}></span>
                            </a>
                        </ul>
                    </div>

                    <div className="flex justify-center w-1/2">
                        <img src="thays-foto.jpg" alt="" className="w-2/3 sm:w-1/3 border-2 rounded-full" />
                    </div>
                </div>

                <span className="reveal opacity-0 border-t w-11/12"></span>

                {/* contact area */}

                <div className="flex flex-col gap-2 w-full">

                    <h1 className="reveal2 opacity-0 font-black text-lg pl-3">
                        Social
                    </h1>

                    <ul className="reveal2 opacity-0 flex flex-col gap-2 text-xs text-nowrap pl-5">
                        <li className="reveal2 opacity-0 flex flex-row gap-2">
                            <img src={linkIconInstaBlack} alt="" className="w-10" />
                            <div className="flex flex-col justify-center">
                                <h3>
                                    Instagram
                                </h3>
                                <p className="font-bold">
                                    @thayshelena_personaltrainer
                                </p>
                            </div>
                        </li>
                        <li className="reveal2 opacity-0 flex flex-row gap-2">
                            <img src={linkIconTelBlack} alt="" className="brightness-0 w-10" />
                            <div className="flex flex-col justify-center">
                                <h3>
                                    Telefone
                                </h3>
                                <p className="font-bold">
                                    +5581999219592
                                </p>
                            </div>
                        </li>
                        <li className="reveal2 opacity-0 flex flex-row gap-2">
                            <img src={linkIconEmailBlack} alt="" className="w-10" />
                            <div className="flex flex-col justify-center">
                                <h3>
                                    E-Mail
                                </h3>
                                <p className="font-bold">
                                    thayshelena.personaltrainer@gmail.com
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <span className="reveal opacity-0 border-t w-11/12"></span>

                {/* copyright rules */}

                <div className="reveal opacity-0 flex flex-col items-center w-full">

                    <img src="thays-logo1.png" alt="" className="reveal opacity-0 w-2/3 sm:w-1/3 lg:w-1/4" />
                    <p className="reveal opacity-0 font-black text-fuchsia-800 mb-1">
                        Developed by Mathhen &#59;&#41;
                    </p>
                    <h2 className="reveal opacity-0 text-sm font-extrabold mb-2">
                        Copyright © {actualDate}; Todos os Direitos Reservados.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Footer