import { useState } from "react"
import { Card } from "./components/Card"
import { useEffect } from "react"

const URL = "https://dragonball-api.com/api/characters"

function App() {
    const [data, setData] = useState(null)
    const [score, setScore] = useState(0)
    const [maxScore, setMaxScore] = useState(0)
    // Este estado se utiliza para comparar los ID de los personajes. Si el "prevId" coincide con el nuevo. El juego se detiene.a
    const [prevId, setPrevId] = useState([])
    const [isWin, setIsWin] = useState(false)

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    }, [score])

    const handleClick = id => {
        if(prevId.includes(id)) {
            setMaxScore(score);
            setScore(0)
            setPrevId([])
        }
        else {
            prevId.push(id)
            setPrevId(prevId)
            setScore(score + 1)
            // console.log(score)
            console.log(prevId.length)
        }

        if(prevId.length > 9) {
            alert("Ganaste")
        }

        if(maxScore > score) {
            setMaxScore(maxScore)
        }

        console.log(data.items.sort(() => Math.random() - 0.5).map(item => console.log(item)))
    }


    return (
        <>
            <main className="bg-orange-300 min-h-[100vh] bg-bg-dbz bg-cover bg-bottom">
                <header className="flex justify-around items-center bg-orange-400 h-16">
                    <h1 className="text-4xl">DragonBall Memory Card</h1>
                    <div className="">
                        <p>Score: {score}</p>
                        <span>Max score: {maxScore}</span>
                    </div>
                </header>
                <div className="w-[90%] mx-auto p-2 flex justify-center gap-4 items-center flex-wrap">
                    <Card data={data} handleClick={handleClick} />
                </div>
            </main>
        </>
    )
}

export default App
