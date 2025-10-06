export default function EmojiButton({
    content,
    handleClick,
    selectedCardEntry,
    matchingCardEntry
}) {

    console.log("selectedCardEntry", selectedCardEntry)

    const btnContent = selectedCardEntry || matchingCardEntry ? content : "?"
    return (
        <button className='btn btn--emoji'
            onClick={handleClick}>
            {btnContent}
        </button>
    )
}