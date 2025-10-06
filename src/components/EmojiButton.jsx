export default function EmojiButton({
    content,
    style,
    handleClick,
    selectedCardEntry,
    matchingCardEntry
}) {

    console.log("selectedCardEntry", selectedCardEntry)

    const btnContent = selectedCardEntry || matchingCardEntry ? content : "?"
    return (
        <button className={style} onClick={handleClick}>
            {btnContent}
        </button>
    )
}