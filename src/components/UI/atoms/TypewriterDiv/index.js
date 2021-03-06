import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import './index.css';

const TypewriterDiv = ({textDiv, classDiv}) => {

  const {text} = useTypewriter({
    words: [textDiv],
    loop: 0,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  })

  return (
    <h2 className={'typewriter '+ classDiv}>
      <span>{text}</span>
      <Cursor/>
    </h2>
  )
}

export default TypewriterDiv