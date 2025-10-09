import RegularButton from "./RegularButton";

export default function Form({ handleSubmit, handleChange }) {

    return (
        <div className="form-container" >
            <form className="wrapper">
            <div className="form__inner-wrapper">
                    <label htmlFor="category">Select Emoji Category</label>
                    <select name="category" id="category" onChange={handleChange}>
                        <option value="animals-and-nature">animals-and-nature</option>
                        <option value="food-and-drink">food-and-drink</option>
                        <option value="travel-and-places">travel-and-places</option>
                        <option value="objects">objects</option>
                        <option value="symbols">symbols</option>
                    </select>
                </div>
                <div className="form__inner-wrapper">
                    <label htmlFor="number">Select the number of  memory Card</label>
                    <select name="number" id="number" onChange={handleChange}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <RegularButton handleClick={handleSubmit}>
                    Start Game
                </RegularButton>
            </form>
        </div>
    )
}