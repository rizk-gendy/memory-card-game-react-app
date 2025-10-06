import { decodeEntity } from "html-entities"



export default function MemoryCard({ handleClick, data }) {
    const emojiEl = data.map((emoji, index) => (
        <li key={index} className='catd-item'>
            <button onClick={() => handleClick(emoji.name, index)} className="btn btn--emoji">
                {decodeEntity(emoji.htmlCode[0])}
            </button>
        </li>
    ))

    return (
        <ul className="card-container">
            {emojiEl}
        </ul>
    )
}