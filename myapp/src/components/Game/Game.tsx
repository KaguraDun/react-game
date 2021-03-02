import './Game.scss';
import GameInfo from '../GameInfo/GameInfo';
import GameTable from '../GameTable/GameTable';

const Game: React.FC = () => (
  <div className="game">
    <GameTable />
    <GameInfo />
  </div>
);

export default Game;
