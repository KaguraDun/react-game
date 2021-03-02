import React from 'react';

const cellSizePX = 10;
const width = 10;
const height = 20;

const GameTableArr: boolean[][] = new Array(height).fill(false).map(() => new Array(width).fill(false));
console.log(GameTableArr);

const TableElements = GameTableArr.map((col, indexRow) =>
  col.map((row, indexCol) => {
    const keyName = `table-${String(indexRow)}-${String(indexCol)}`;
    return <div className="game__table-cell" key={keyName} />;
  })
);

console.log(TableElements[0][0]);

//const GameTable = () => <div className="game__table">{TableElements}</div>;
class GameTable extends React.Component {
  
}
export default GameTable;
