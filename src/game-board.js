import { useState } from 'react';
import './app.css';
import LetterGrid from './letter-grid';
import ButtonGrid from './button-grid';

export default function GameBoard({ secretWord, maxErrors }) {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [errorCount, setErrorCount] = useState(0);

  const letterGuessedHandler = function (letter) {
    let val = letter.toLowerCase();
    setGuessedLetters((prev) => [...prev, val]);

    if (secretWord.toLowerCase().indexOf(val) === -1) {
      setErrorCount(errorCount + 1);
    }
  };

  return (
    <div className="app-container">
      <div>remained attempt is {maxErrors - errorCount}</div>
      <LetterGrid secretWord={secretWord} guessedLetters={guessedLetters} />
      <ButtonGrid
        letterGuessed={letterGuessedHandler}
        isShown={errorCount < maxErrors}
      />
    </div>
  );
}
