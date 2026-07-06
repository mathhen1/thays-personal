import { Menu } from "lucide-react"
import { useState } from "react"

const NavBar = () => {

    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    const verifyMenu = menuIsOpen ? "block" : "hidden"

    const handleMenu = () => {
        if (menuIsOpen === false) {
            setMenuIsOpen(true)
        }

        if (menuIsOpen === true) {
            setMenuIsOpen(false)
        }
    }

    return (
        <div className="animate-opacity relative sticky z-10 top-0 w-screen flex flex-row text-fuchsia-100 border-b-2 border-black bg-purple-800 h-full">

            <a href="" className="reveal opacity-0 flex-1 flex-col font-bold tracking-wide text-3xl p-2 pl-3">
                <p className="reveal opacity-0 ">
                    Thays Helena
                </p>
                <p className="reveal opacity-0 text-base pl-2">
                    Personal Trainer
                </p>
            </a>

            <button className="reveal opacity-0 p-2 font-black flex-none pr-8"
                onClick={handleMenu}>
                <Menu />
            </button>

            <div className={verifyMenu + " text-black absolute z-20 w-full h-screen flex flex-col items-center backdrop-blur"}>

                <div className="absolute top-0 right-0 w-8/12 
                flex flex-col items-center gap-2
                border-2 bg-purple-400 h-screen">
                    <button className="p-2 font-black flex-none pr-8"
                        onClick={handleMenu}>
                        <Menu />
                    </button>
                    <span className="w-3/4 border"></span>
                    <img src="thays-full.jpg" alt="" className="rounded-full w-1/2" />
                    <a href="#home" onClick={() => setMenuIsOpen(false)}>
                        Inicio
                    </a>
                    <a href="#about-me" onClick={() => setMenuIsOpen(false)}>
                        Sobre mim
                    </a>
                    <a href="#results" onClick={() => setMenuIsOpen(false)}>
                        Resultados
                    </a>
                    <a href="#services" onClick={() => setMenuIsOpen(false)}>
                        Serviços
                    </a>
                    <a href="#team-th" onClick={() => setMenuIsOpen(false)}>
                        Team TH
                    </a>
                    <a href="#experience" onClick={() => setMenuIsOpen(false)}>
                        Experiência
                    </a>
                    <span className="w-3/4 border"></span>
                    <img src="thays-logo2.png" alt="" className="w-3/4 brightness-0" />
                </div>
            </div>

        </div>
    )
}

export default NavBar