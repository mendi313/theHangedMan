import styles from '../css/keyboard.module.css';
const ABArray = [
  'א',
  'ב',
  'ג',
  'ד',
  'ה',
  'ו',
  'ז',
  'ח',
  'ט',
  'י',
  'כ',
  'ל',
  'מ',
  'נ',
  'ס',
  'ע',
  'פ',
  'צ',
  'ק',
  'ר',
  'ש',
  'ת',
];

type keyboardProps = {
  activeLetter: string[];
  inActiveLetter: string[];
  disabled: boolean;
  addGuessesdLetter: (letter: string) => void;
};

const Hangmankeyboard = ({
  activeLetter,
  inActiveLetter,
  disabled,
  addGuessesdLetter,
}: keyboardProps) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gap: '.5rem',
        direction: 'rtl',
      }}
    >
      {ABArray.map((key) => {
        const active = activeLetter.includes(key);
        const inActive = inActiveLetter.includes(key);
        return (
          <button
            disabled={disabled || active || inActive}
            key={key}
            className={`${styles.btn} ${active ? styles.active : ''} ${
              inActive ? styles.inactive : ''
            }`}
            onClick={() => addGuessesdLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Hangmankeyboard;
