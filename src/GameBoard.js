import Cell from "./Cell";

export default class GameBoard {
    static SIZE = 10;
    static HORIZONTAL_ORIENTATION = "h";
    static VERTICAL_ORIENTATION = "v";

    constructor() {
        this.board = this.createBoard();
        this.ships = [];
    }

    createBoard() {
        const board = [];
        
        for (let i = 0; i < GameBoard.SIZE; i++) {
          const row = [];
          for (let j = 0; j < GameBoard.SIZE; j++) {
            row.push(new Cell(null, false));
          }
          board.push(row);
        }
        
        return board;
    }

    getCell(x, y) {
        return this.board[x][y];
    }
      

    placeShip(x, y, ship, orientation = GameBoard.HORIZONTAL_ORIENTATION) {
        if (this.isSpaceAvailable(x, y, ship, orientation)) {
            const cells = this.getShipIndices(x, y, ship, orientation);

            for (const [x, y] of cells) {
                this.getCell(x, y).ship = ship;
            }

            this.ships.push(ship);
    
            return true;
        }

        return false;
    }

    receiveAttack(x, y) {
        if (this.isOutOfBounds(x, y)) return false;

        if (this.getCell(x, y).hit) return false;

        if (this.getCell(x, y).ship !== null) {
            this.getCell(x, y).ship.hit();
        }
        this.getCell(x, y).hit = true;

        return true;
    }

    isOutOfBounds(x, y) {
        return (x < 0 || x >= GameBoard.SIZE || y < 0 || y >= GameBoard.SIZE);
    }

    isSpaceAvailable(x, y, ship, orientation = GameBoard.HORIZONTAL_ORIENTATION) {
        const indices = this.getShipIndices(x, y, ship, orientation);

        for (const [x, y] of indices) {
            if (this.isOutOfBounds(x, y) || this.getCell(x, y).ship !== null) return false;
        }

        return true;
    }

    getShipIndices(x, y, ship, orientation = GameBoard.HORIZONTAL_ORIENTATION) {
        const indices = [];

        if (orientation === GameBoard.HORIZONTAL_ORIENTATION) {
            for (let i = 0; i < ship.length; i++) {
                indices.push([x, y + i]);
            }
        }
        else if (orientation === GameBoard.VERTICAL_ORIENTATION) {
            for (let i = 0; i < ship.length; i++) {
                indices.push([x + i, y]);
            }
        }

        return indices;
    }

    allShipsSunk() {
        return this.ships.every((ship) => ship.isSunk());
    }
}