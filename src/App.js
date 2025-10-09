import { useEffect, useState } from "react";
import AssistiveTechInfo from "./components/AssistiveTechInfo";
import ErrorCard from "./components/ErrorCard";
import Form from "./components/Form";
import GameOver from "./components/GameOver";
import MemoryCard from "./components/MemoryCard";



export default function App() {


  const initialFormData = {
    category: "animals-and-nature",
    number: 10
  }
  const [formData, setFormData] = useState(initialFormData)
  const [isGameOn, setIsGameOn] = useState(false)
  const [emojiData, setEmojiData] = useState([])
  const [selectedCards, setSelectedCards] = useState([])
  const [matchingCards, setMatchingCards] = useState([])
  const [areAllCardsMatched, setAreAllCardsMatched] = useState(false)
  const [isError, setIsError] = useState(false)


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
      const res = await fetch(`https://emojihub.yurace.pro/api/all/category/${formData.category}`)
      if (!res.ok) {
        throw new Error("could not fetch data from API")
      }
      const response = await res.json()
      const dataSlice = getDataSlice(response)
      const shuffledDublicateEmojiArray = getEmojiArray(dataSlice)
      setEmojiData(shuffledDublicateEmojiArray)
      setIsGameOn(true)
    } catch (e) {
      setIsError(true)
      console.log("error", e)
    }
  }



  function getRandomIndices(data) {
    const randomIndicesArray = []
    for (let i = 0; i < formData.number / 2; i++) {
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
  function resetGame() {
    setIsGameOn(false)
    setAreAllCardsMatched(false)
    setSelectedCards([])
    setMatchingCards([])
  }
  function resetError() {
    setIsError(false)
  }
  function handleFormChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && !isError &&
        <Form handleSubmit={startGame} handleChange={handleFormChange} />}
      {isGameOn && !areAllCardsMatched &&
        <AssistiveTechInfo
          emojiData={emojiData}
          matchingCards={matchingCards}
        />}
      {areAllCardsMatched && <GameOver
        handleClick={resetGame}
      />}
      {isGameOn && <MemoryCard
        handleClick={turnCard}
        data={emojiData}
        selectedCards={selectedCards}
        matchingCards={matchingCards}
      />
      }
      {isError && <ErrorCard
        handleClick={resetError} />
      }

    </main>
  )
}