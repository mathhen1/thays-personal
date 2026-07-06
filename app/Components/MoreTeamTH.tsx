import { ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { linkWpp } from "../Utils/links"

const MoreTeamTH = () => {
    const [count, setCount] = useState<number>(0)
    const [count2, setCount2] = useState<number>(0)
    const countRef = useRef(null)

    const handleCount = () => {
        const interval = setInterval(() => {
            setCount(count => {
                if (count > 98) {
                    clearInterval(interval)
                }
                return (
                    count + 1
                )
            })
        }, 20);

        const interval2 = setInterval(() => {
            setCount2(count2 => {
                if (count2 > 3) {
                    clearInterval(interval2)
                }
                return (
                    count2 + 1
                )
            })
        }, 400);
    }

    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    handleCount()
                    obs.unobserve(entry.target)
                }
            })
        }, { threshold: 0.8 })
        if (countRef.current) {
            obs.observe(countRef.current)
        }

        if (!countRef.current) {
            return obs.disconnect()
        }
    }, [])

    return (
        <div className="flex flex-col items-center gap-2 bg-purple-300">

            <span className="reveal opacity-0 w-10/12 border-t"></span>

            <div ref={countRef} className="reveal opacity-0 flex flex-col items-center">
                <h2 className="reveal opacity-0 text-5xl font-tangerine text-purple-800 font-black">
                    {count}&#43;
                </h2>
                <h3 className="reveal opacity-0 text-lg text-fuchsia-700 tracking-tighter font-bold tracking-wide">
                    Vidas transformadas
                </h3>
            </div>

            <div ref={countRef} className="reveal opacity-0 flex flex-col items-center">
                <h2 className="reveal opacity-0 text-5xl font-tangerine text-purple-800 font-black">
                    {count2}&#43;
                </h2>
                <h3 className="reveal opacity-0 text-lg text-fuchsia-700 tracking-tighter font-bold tracking-wide">
                    Anos de Experiência
                </h3>
            </div>

            <img src="thays-pe.jpg" alt="" className="reveal opacity-0 reveal opacity-0 w-3/4 rounded-full border-2 mt-2" />

            <h1 className="reveal opacity-0 italic text-5xl font-nz
                    tracking-tighter font-thin text-purple-800 mt-1">
                &#35;TeamTH
            </h1>

            <h2 className="reveal opacity-0 text-base w-10/12 text-center text-fuchsia-900
                font-bold tracking-tighter font-roboto">
                Se você busca evolução real, esse é o caminho.
            </h2>

            <span className="reveal opacity-0 border-t w-3/4 border-black"></span>

            <a href={linkWpp} target="_blank"
            className="reveal opacity-0 flex flex-row gap-1 justify-center
            text-base p-3 border rounded-2xl w-10/12 bg-black mt-2 mb-2
                tracking-widest text-center font-roboto font-black text-white border border-black">
                <span className="animate-pulse">Faça parte do meu time</span>
                <ArrowUpRight className="animate-pulse" />
            </a>

        </div>
    )
}

export default MoreTeamTH