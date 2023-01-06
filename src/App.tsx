import { useCallback, useEffect, useState } from 'react';
import './App.css';
import HangmanDrawing from './components/HangmanDrawing';
import Hangmankeyboard from './components/Hangmankeyboard';
import HangmanWord from './components/HangmanWord';
import words from '../src/data/wordList.json';

function getNewWord() {
  return words[Math.floor(Math.random() * words.length)];
}
function App() {
  const [wordToGuess, setWordToGuess] = useState(getNewWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  const addGuessesdLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((courrentLetters) => [...courrentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key === 'Enter') {
        setWordToGuess(getNewWord());
        setGuessedLetters([])
      }
      else if (!key.match(/^[א-ת]$/)) return;
      else {
        e.preventDefault();
        addGuessesdLetter(key);
      }
    };
    document.addEventListener('keypress', handler);
    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, []);

  return (
    <div className="box">
      <div style={{ fontSize: '2rem', textAlign: 'center' }}>
        {!isLoser && !isWinner && 'הכנס תו'}
        {isLoser && 'הפסדת נסה שוב'}
        {isWinner && 'ניצחת!! רענן לשחק שוב'}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        revealWord={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: 'stretch' }}>
        <Hangmankeyboard
          disabled={isLoser || isWinner}
          activeLetter={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inActiveLetter={incorrectLetters}
          addGuessesdLetter={addGuessesdLetter}
        />
      </div>
    </div>
  );
}

export default App;
