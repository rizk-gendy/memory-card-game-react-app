import { decodeEntity } from "html-entities"
import EmojiButton from "./EmojiButton"



export default function MemoryCard({ handleClick, data, selectedCards, matchingCards }) {
    const cardEl = data.map((emoji, index) => {

        const selectedCardEntry = selectedCards.find((emoji) => emoji.index === index)
        const matchingCardEntry = matchingCards.find((emoji) => emoji.index === index)

        const cardStyle =
            matchingCardEntry ? "card-item--matched" :
                selectedCardEntry ? "card-item--selected" :
                    ""
        return (
            <li key={index} className={` card-item ${cardStyle} `}>
                <EmojiButton
                    emoji={emoji}
                    handleClick={() => handleClick(emoji.name, index)}
                    selectedCardEntry={selectedCardEntry}
                    matchingCardEntry={matchingCardEntry}
                />
            </li>
        )
    }
    )

    return (
        <ul className="card-container">
            {cardEl}
        </ul>
    )
}