import { decodeEntity } from "html-entities"



export default function MemoryCard({ handleClick , data }) {

    console.log("emojiData",data)

    const emojiArray = ['🐶', '🐷', '🐙', '🐛', '🐵', '🐶', '🐷', '🐙', '🐛', '🐵']

    const emojiEl = data.map((emoji ,index) => (
        <li key={index} className='catd-item'>
            <button onClick={handleClick} className="btn btn--emoji">
                {decodeEntity(emoji.htmlCode[0]) }
            </button>
        </li>
    ))


    return (
        <ul className="card-container">
            {emojiEl}
        </ul>
    )
}