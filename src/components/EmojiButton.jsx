import { decodeEntity } from "html-entities"

export default function EmojiButton({
    emoji,
    handleClick,
    selectedCardEntry,
    matchingCardEntry
}) {



    const btnContent = selectedCardEntry || matchingCardEntry ? decodeEntity(emoji.htmlCode[0]) : "?"
    const btnStyle =
        matchingCardEntry ? "btn--emoji__back--matched" :
            selectedCardEntry ? "btn--emoji__back--selected" :
                "btn--emoji__front"
    return (
        <button
            disabled={matchingCardEntry}
            className={`btn btn--emoji ${btnStyle}`}
            onClick={selectedCardEntry  ? null : handleClick}>
            {btnContent}
        </button>
    )
} 