import { decodeEntity } from "html-entities"

export default function EmojiButton({
    emoji,
    index,
    handleClick,
    selectedCardEntry,
    matchingCardEntry
}) {



    const btnContent = selectedCardEntry || matchingCardEntry ? decodeEntity(emoji.htmlCode[0]) : "?"
    const btnStyle =
        matchingCardEntry ? "btn--emoji__back--matched" :
            selectedCardEntry ? "btn--emoji__back--selected" :
                "btn--emoji__front"

    const btnAria =
        matchingCardEntry ? `${decodeEntity(emoji.name)}. Matched.` :
            selectedCardEntry ? `${decodeEntity(emoji.name)}. Not matched yet.` :
                "Card upside down."
    return (
        <button
            disabled={matchingCardEntry}
            className={`btn btn--emoji ${btnStyle}`}
            onClick={selectedCardEntry ? null : handleClick}
            aria-label={`Postition ${index + 1} : ${btnAria}`}
            aria-live ="polite"

        >
            {btnContent}
        </button>
    )
} 