import GameBoard from './game-board';

export default function App() {
  return (
    <div>
      <h1>Welcome to Hangman!</h1>
      <p>Do you want to play game?</p>
      <div>
        <GameBoard secretWord="React" maxErrors={6} />
      </div>
    </div>
  );
}
