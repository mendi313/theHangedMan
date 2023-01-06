const HEAD = (
  <div
    style={{
      height: '50px',
      width: '50px',
      borderRadius: '100%',
      border: '10px solid black',
      position: 'absolute',
      top: '50px',
      right: -30,
    }}
  ></div>
);
const BODY = (
  <div
    style={{
      height: '100px',
      width: '10px',
      background: 'black',
      position: 'absolute',
      top: '120px',
      right: 0,
    }}
  ></div>
);
const RIGHT_HAND = (
  <div
    style={{
      height: '10px',
      width: '100px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '-100px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    }}
  ></div>
);
const LEFT_HAND = (
  <div
    style={{
      height: '10px',
      width: '100px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '10px',
      rotate: '30deg',
      transformOrigin: 'right bottom',
    }}
  ></div>
);
const RIGHT_LEG = (
  <div
    style={{
      height: '10px',
      width: '100px',
      background: 'black',
      position: 'absolute',
      top: '210px',
      right: '-90px',
      rotate: '60deg',
      transformOrigin: 'left bottom',
    }}
  ></div>
);
const LEFT_LEG = (
  <div
    style={{
      height: '10px',
      width: '100px',
      background: 'black',
      position: 'absolute',
      top: '210px',
      right: 0,
      rotate: '-60deg',
      transformOrigin: 'right bottom',
    }}
  ></div>
);
const hangmanBody = [HEAD, BODY, RIGHT_HAND, LEFT_HAND, RIGHT_LEG, LEFT_LEG];

type Guesses = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: Guesses) => {

  
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          height: '50px',
          width: '10px',
          background: 'black',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      ></div>
      {hangmanBody.slice(0, numberOfGuesses)}

      <div
        style={{
          height: '10px',
          width: '200px',
          background: 'black',
          marginLeft: '120px',
        }}
      ></div>
      <div
        style={{
          height: '400px',
          width: '10px',
          background: 'black',
          marginLeft: '120px',
        }}
      ></div>
      <div
        style={{ height: '10px', width: '250px', background: 'black' }}
      ></div>
    </div>
  );
};

export default HangmanDrawing;
