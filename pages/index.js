import {useState, useEffect, useRef} from 'react'
import randomWords from 'random-words'
import Header from '../components/Header'
import SetUp from '../components/SetUp';
import TypeField from '../components/TypeField';
import Paragraph from '../components/Paragraph';
import Finished from '../components/Finished';
import Title from '../components/Tilte'
import styles from '../styles/Home.module.css'


export default function Home() {
  
  const [words, setWords] = useState([])
  const [time, setTime] = useState(60)
  const [wordsLenght, setWordsLenght] = useState(100)
  const [currInput, setCurrInput] = useState("")
  const [points, setPoints] = useState(0);
  const [currWordIndex, setCurrWordIndex] = useState(0)
  const [currCharIndex, setCurrCharIndex] = useState(-1)
  const [currChar, setCurrChar] = useState("")
  const [correct, setCorrect] = useState(0)
  const [incorrect, setIncorrect] = useState(0)
  const [status, setStatus] = useState("waiting")
  const textInput = useRef(null)

 
  useEffect(() => {
    setWords(generateWords())
  }, [])

  useEffect(() => {
    if (status === 'started') {
      textInput.current.focus()
    }
  }, [status])

  
  function generateWords() {
    return new Array(wordsLenght).fill(null).map(() => randomWords())
  }

  

  function start() {

    if (status === 'finished') {
      setWords(generateWords())
      setCurrWordIndex(0)
      setCorrect(0)
      setIncorrect(0)
      setCurrCharIndex(-1)
      setCurrChar("")
    }

    if (status !== 'started') {
      setStatus('started')
      let interval = setInterval(() => {
        setTime((prevCountdown) => {
          if (prevCountdown === 0) {
            clearInterval(interval)
            setStatus('finished')
            setCurrInput("")
            return time
          } else {
            return prevCountdown - 1
          }
        }  )
      } ,  1000 )
    }
    
  }

  function handleKeyDown({keyCode, key}) {
      // space bar 
      if (keyCode === 32) {
        checkMatch()
        setCurrInput("")
        setCurrWordIndex(currWordIndex + 1)
        setCurrCharIndex(-1)
      // backspace
      } else if (keyCode === 8) {
        setCurrCharIndex(currCharIndex - 1)
        setCurrChar("")
      } else {
        setCurrCharIndex(currCharIndex + 1)
        setCurrChar(key)
      }
  }

  function checkMatch() {
      const wordToCompare = words[currWordIndex]
      const doesItMatch = wordToCompare === currInput.trim()
      if (doesItMatch) {
        setCorrect(correct + 1)
        setPoints(points + 1)
      } else {
        setIncorrect(incorrect + 1)
        setPoints(0)
      }
  }

  function getCharClass(wordIdx, charIdx, char) {
      if (wordIdx === currWordIndex && charIdx === currCharIndex && currChar && status !== 'finished') {
        if (char === currChar) {
          return 'bg-success'
        } else {
          return 'bg-danger'
        }
      } else if (wordIdx === currWordIndex && currCharIndex >= words[currWordIndex].length) {
        return 'bg-danger'
      } else {
        return ''
      }
  }


  return (
    <div>
      <Title/>
      <Header/>
      <div className={styles.content}>
        <SetUp 
          points={points} 
          wordsLenght={wordsLenght} 
          time={time} 
          setTime={setTime}
          status={status}
        />

        <TypeField 
          textInput={textInput} 
          status={status} 
          handleKeyDown={handleKeyDown} 
          currInput={currInput} 
          start={start} 
          setCurrInput={setCurrInput}
        />

        <Paragraph 
          status={status} 
          words={words} 
          getCharClass={getCharClass}
        />

        <Finished 
          status={status} 
          correct={correct} 
          points={points} 
          incorrect={incorrect}
        />
      </div>
    </div>
  )
}
