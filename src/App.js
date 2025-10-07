import { useEffect, useState } from "react";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";



export default function App() {

  const [isGameOn, setIsGameOn] = useState(false)
  const [emojiData, setEmojiData] = useState([])
  const [selectedCards, setSelectedCards] = useState([])
  const [matchingCards, setMatchingCards] = useState([])
  const [areAllCardsMatched, setAreAllCardsMatched] = useState(false)


  useEffect(() => {
    if (selectedCards.length === 2 && selectedCards[0].name === selectedCards[1].name) {
      setMatchingCards((prevMatchingCards) => [...prevMatchingCards, ...selectedCards])
    }
  }, [selectedCards])

  useEffect(() => {
    if (emojiData.length && emojiData.length === matchingCards.length) {
      console.log("Game is Over ")
      setAreAllCardsMatched(true)
    }
  }, [matchingCards])


  async function startGame(e) {
    e.preventDefault()

    try {
      const res = await fetch("https://emojihub.yurace.pro/api/all/category/animals-and-nature")
      if (!res.ok) {
        throw new Error("could not fetch data from API")
      }
      const response = await res.json()
      const dataSlice = getDataSlice(response)
      const shuffledDublicateEmojiArray = getEmojiArray(dataSlice)
      setEmojiData(shuffledDublicateEmojiArray)
      setIsGameOn(true)
    } catch (e) {
      console.log("error", e)
    }
  }



  function getRandomIndices(data) {
    const randomIndicesArray = []
    for (let i = 0; i < 5; i++) {
      const randomNum = Math.floor(Math.random() * data.length)
      if (!randomIndicesArray.includes(randomNum)) {
        randomIndicesArray.push(randomNum)
      } else {
        i--
      }
    }
    return randomIndicesArray
  }

  function getDataSlice(data) {
    const randomIndices = getRandomIndices(data)
    const dataSlice = randomIndices.map((item) => data[item])
    return dataSlice
  }

  function shuffleArray(array) {
    let arr = [...array]
    for (let i = array.lengh - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * array.length)
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }

  function getEmojiArray(data) {
    const pairedEmojiArray = [...data, ...data]
    return shuffleArray(pairedEmojiArray)
  }


  function turnCard(name, index) {
    if (selectedCards.length < 2) {
      setSelectedCards((prevSelectedCards) => [...prevSelectedCards, { name, index }])
    } else if (selectedCards.length === 2) {
      setSelectedCards([{ name, index }])
    }
  }
  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard
        handleClick={turnCard}
        data={emojiData}
        selectedCards={selectedCards}
        matchingCards={matchingCards}
      />
      }

    </main>
  )
}