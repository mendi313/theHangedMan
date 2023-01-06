type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  revealWord: boolean;
};

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  revealWord,
}: HangmanWordProps) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {wordToGuess
        .split('')
        .reverse()
        .map((letter, index) => (
          <span
            key={index}
            style={{ minWidth: '50px', borderBottom: '.1em solid black' }}
          >
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || revealWord
                    ? 'visible'
                    : 'hidden',
                color:
                  !guessedLetters.includes(letter) && revealWord
                    ? 'red'
                    : 'black',
              }}
            >
              {letter}
            </span>
          </span>
        ))}
    </div>
  );
};

export default HangmanWord;
