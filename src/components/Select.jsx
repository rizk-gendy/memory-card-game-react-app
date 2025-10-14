export default function Select({ label, handleChange, options }) {
    return (
        <div className="form__inner-wrapper">
            <label htmlFor="number">{label}</label>
            <select name="number" id="number" onChange={handleChange}>
                {options.map((option) => (
                    <option value={option.name}>{option.value}</option>
                ))}
            </select>
        </div>
    )
}