import { goToUri } from "../Utils/funcs"
import { linkEmail, linkIconEmail, linkIconInsta, linkIconLinkedin, linkIconWpp, linkInsta, linkLinkedin, linkWppSimple } from "../Utils/links"

const Contact = () => {
    return (
        <div id="contact" className="reveal opacity-0 flex flex-col gap-3 items-center bg-pink-200">

            <span className="reveal opacity-0 border-t w-full"></span>

            <h1 className="reveal opacity-0 text-xl font-black text-fuchsia-700 border-b-2">
                Contato
            </h1>

            <h2 className="reveal opacity-0 text-sm text-fuchsia-800 italic tracking-tighter">
                Me acompanhe me minhas redes sociais
            </h2>

            <a onClick={() => goToUri(linkInsta)}
                className="reveal opacity-0 hover:cursor-pointer flex flex-row gap-2 justify-center text-base
                            p-3 border-3 border-b-6 border-l-6 w-2/3 
                            text-center rounded-4xl bg-fuchsia-200 items-center">
                <img src={linkIconInsta} alt="" className="w-5" />
                <h3 className="animate-pulse font-black">
                    Instagram
                </h3>
            </a>

            <a onClick={() => goToUri(linkWppSimple)}
                className="reveal opacity-0 hover:cursor-pointer flex flex-row gap-2 justify-center text-base
                            p-3 border-3 border-b-6 border-l-6 w-2/3 
                            text-center rounded-4xl bg-fuchsia-200 items-center">
                <img src={linkIconWpp} alt="" className="w-5" />
                <h3 className="animate-pulse font-black">
                    WhatsApp
                </h3>
            </a>

            <a onClick={() => goToUri(linkEmail)}
                className="reveal opacity-0 hover:cursor-pointer flex flex-row gap-2 justify-center text-base
                            p-3 border-3 border-b-6 border-l-6 w-2/3 
                            text-center rounded-4xl bg-fuchsia-200 items-center">
                <img src={linkIconEmail} alt="" className="w-5" />
                <h3 className="animate-pulse font-black">
                    E-Mail
                </h3>
            </a>

            <a onClick={() => goToUri(linkLinkedin)}
                className="reveal opacity-0 hover:cursor-pointer flex flex-row gap-2 justify-center text-base
                            p-3 border-3 border-b-6 border-l-6 w-2/3 
                            text-center rounded-4xl bg-fuchsia-200 items-center">
                <img src={linkIconLinkedin} alt="" className="w-5" />
                <h3 className="animate-pulse font-black">
                    Linkedin
                </h3>
            </a>

            <h2 className="reveal opacity-0 font-extrabold text-sm text-center mb-3 text-fuchsia-800 p-2 border-t-2 border-b-2 w-10/12">
                Estarei no seu aguardo
            </h2>

        </div>
    )
}

export default Contact