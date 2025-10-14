import { data } from "../data/data";
import RegularButton from "./RegularButton";
import Select from "./Select";

export default function Form({ handleSubmit, handleChange }) {

    return (
        <div className="form-container" >
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