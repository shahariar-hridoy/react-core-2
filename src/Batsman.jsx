import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0)
    const handleSingles = () => {
        const updateRuns = runs + 1;
        setRuns(updateRuns)
    }
    const handleSix = () => {
        const updateRuns = runs + 6;
        setRuns(updateRuns)
    }
    const handleFour = () => {
        const updateRuns = runs + 4;
        setRuns(updateRuns)
    }
    return (
        <div>
            {
                runs>=50 && <p>Congoo!! You Score 50</p>
            }
            <h3>Player : Bangla Batsman</h3>
            <h1>Score: {runs}</h1>
            <button onClick={handleSingles}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}