import { useState } from "react";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";



export default function App() {

  const [isGameOn, setIsGameOn] = useState(false)
  const [emojiData, setEmojiData] = useState([])
  console.log('emojiData AT app', emojiData)


  async function startGame(e) {
    e.preventDefault()

    try {
      const res = await fetch("https://emojihub.yurace.pro/api/all/category/animals-and-nature")
      if (!res.ok) {
        throw new Error("could not fetch data from API")
      }
      const response = await res.json()
      const dataSlice = getDataSlice(response)
      setEmojiData(dataSlice)
      setIsGameOn(true)
    } catch (e) {
      console.log("error", e)
    }
  }

  function turnCard() {
    console.log("Memory Card clicked")
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
  
  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard handleClick={turnCard} data={emojiData} />}

    </main>
  )
}