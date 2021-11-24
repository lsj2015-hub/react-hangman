import Button from './button.js';

export default function ButtonGrid({ letterGuessed, isShown }) {
  let letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  let buttons = letters.map((letter, index) => {
    return <Button value={letter} key={index} onClick={letterGuessed} />;
  });
  let className = 'flex flex-wrap mt-10';
  if (!isShown) {
    className += ' hidden';
  }
  return <div className={className}>{buttons}</div>;
}
