import Cell from "./Cell";

export default class GameBoard {
    static SIZE = 10;
    static HORIZONTAL_ORIENTATION = "h";
    static VERTICAL_ORIENTATION = "v";
    static attackResult = {
        HIT: "hit",
        MISS: "miss",
        ALREADY_HIT: "already-hit",
        OUT_OF_BOUNDS: "out-of-bounds"
    };

    constructor() {
        this.board = this.createBoard();
        this.ships = new Set();
        this.targetCells = [];
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
            const cells = GameBoard.getShipIndices(x, y, ship, orientation);

            for (const [x, y] of cells) {
                this.getCell(x, y).ship = ship;
            }

            this.ships.add(ship);

            return true;
        }

        return false;
    }

    receiveAttack(x, y) {
        if (this.isOutOfBounds(x, y)) return GameBoard.attackResult.OUT_OF_BOUNDS;

        const cell = this.getCell(x, y);

        if (cell.hit) return GameBoard.attackResult.ALREADY_HIT;

        cell.hit = true;

        if (cell.ship !== null) {
            cell.ship.hit();
            return GameBoard.attackResult.HIT;
        }

        return GameBoard.attackResult.MISS;
    }

    isOutOfBounds(x, y) {
        return x < 0 || x >= GameBoard.SIZE || y < 0 || y >= GameBoard.SIZE;
    }

    isSpaceAvailable(
        x,
        y,
        ship,
        orientation = GameBoard.HORIZONTAL_ORIENTATION,
    ) {
        const indices = GameBoard.getShipIndices(x, y, ship, orientation);

        for (const [x, y] of indices) {
            if (this.isOutOfBounds(x, y) || this.getCell(x, y).ship !== null)
                return false;
        }

        return true;
    }

    static getShipIndices(x, y, ship, orientation = GameBoard.HORIZONTAL_ORIENTATION) {
        const indices = [];

        if (orientation === GameBoard.HORIZONTAL_ORIENTATION) {
            for (let i = 0; i < ship.length; i++) {
                indices.push([x, y + i]);
            }
        } else if (orientation === GameBoard.VERTICAL_ORIENTATION) {
            for (let i = 0; i < ship.length; i++) {
                indices.push([x + i, y]);
            }
        }

        return indices;
    }

    placeShipsRandomly(ships) {
        const cells = [];
        for (const ship of ships) {
            while (true) {
                const x = Math.floor(Math.random() * 10);
                const y = Math.floor(Math.random() * 10);
                let orientation;

                if (Math.random() > 0.5) {
                    orientation = GameBoard.HORIZONTAL_ORIENTATION;
                } else {
                    orientation = GameBoard.VERTICAL_ORIENTATION;
                }

                if (this.placeShip(x, y, ship, orientation)) {
                    cells.push(GameBoard.getShipIndices(x, y, ship, orientation));
                    break;
                }
            }
        }

        return cells;
    }

    receiveRandomAttack() {
        while (true) {
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);
            const result = this.receiveAttack(x, y);

            if (result === GameBoard.attackResult.HIT || result === GameBoard.attackResult.MISS) {
                return { result, x, y };
            }
        }
    }

    allShipsSunk() {
        return [...this.ships].every((ship) => ship.isSunk());
    }

    getNeighbors(x, y) {
        const neighbors = [];
        const deltas = [
            [0, 1], [1, 0], [0, -1], [-1, 0] 
        ];

        for (const [dx, dy] of deltas) {
            const nx = x + dx;
            const ny = y + dy;

            if (!this.isOutOfBounds(nx, ny) && !this.getCell(nx, ny).hit) {
                neighbors.push([nx, ny]);
            }
        }

        return neighbors;
    }

    receiveSmartAttack() {
        if (this.targetCells.length === 0) {
            const { result, x, y } = this.receiveRandomAttack();

            if (result === GameBoard.attackResult.HIT) {
                this.targetCells = this.targetCells.concat(this.getNeighbors(x, y));
            }

            return { result, x, y };
        }

        const [x, y] = this.targetCells.shift();
        const result = this.receiveAttack(x, y);

        if (result === GameBoard.attackResult.HIT) {
            this.targetCells = this.targetCells.concat(this.getNeighbors(x, y));
        }

        return { result, x, y };
    }
}
