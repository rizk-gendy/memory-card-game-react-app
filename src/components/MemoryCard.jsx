import { decodeEntity } from "html-entities"
import EmojiButton from "./EmojiButton"



export default function MemoryCard({ handleClick, data, selectedCards, matchingCards }) {
    const cardEl = data.map((emoji, index) => {

        const selectedCardEntry = selectedCards.find((emoji) => emoji.index === index)
        const matchingCardEntry = matchingCards.find((emoji) => emoji.index === index)

        return (
            <li key={index} className='catd-item'>
                <EmojiButton
                    content={decodeEntity(emoji.htmlCode[0])}
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