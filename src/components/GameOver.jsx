import { useEffect, useRef } from "react";
import RegularButton from "./RegularButton";

export default function GameOver({ handleClick }) {

    const gameOverRef = useRef(null)
    useEffect(() => {
        gameOverRef.current.focus()

    }, [])
    return (
        <div className="wrapper wrapper--accent" ref={gameOverRef} tabIndex={-1}>
            <p className="p--large">
                You've matched all the memory cards!
            </p>
            <RegularButton handleClick={handleClick}>
                Start Game
            </RegularButton>
        </div>

    )
}