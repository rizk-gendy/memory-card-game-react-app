import { useEffect, useRef } from "react";
import { data } from "../data/data";
import RegularButton from "./RegularButton";
import Select from "./Select";

export default function Form({ handleSubmit, handleChange, isFirstRender }) {


    const difRef = useRef()


    useEffect(() => {
        !isFirstRender && difRef.current.focus()

    }, [])


    return (
        <div className="form-container" ref={difRef} tabIndex={-1} >
            <p className="p--regular">
                Customize the game by selecting an emoji category and a number of memory cards.
            </p>
            <form className="wrapper">
                <Select
                    label="Select Emoji Category"
                    handleChange={handleChange}
                    options={data.category}
                />
                <Select
                    label="Select the number of  memory Card"
                    handleChange={handleChange}
                    options={data.number}
                />
                <RegularButton handleClick={handleSubmit}>
                    Start Game
                </RegularButton>
            </form>
        </div>
    )
}