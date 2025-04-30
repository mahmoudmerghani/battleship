export default class BoardUI {
    constructor() {
        this.board = this.createBoard();
        this.lastHighlightedCells = [];
    }

    // createCell(row, column, className = "") {
    //     const cell = document.createElement("button");
    //     cell.classList.add("cell");
    //     if (className) {
    //         cell.classList.add(className);
    //         switch (className) {
    //             case "hit":
    //                 cell.textContent = "X";
    //                 break;
    //             case "miss":
    //                 cell.textContent = "○";
    //                 break;
    //         }
    //     }
    //     cell.dataset.row = row;
    //     cell.dataset.column = column;

    //     return cell;
    // }

    createBoard() {
        const board = [];
        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.dataset.row = i;
                cell.dataset.column = j;
                row.push(cell);
            }
            board.push(row);
        }

        return board;
    }

    markAsShip(cells) {
        for (const cell of cells) {
            const [x, y] = cell;
            this.board[x][y].classList.add("ship");
        }
    }

    unhighlightCells() {
        for (const cell of this.lastHighlightedCells) {
            cell.classList.remove("highlighted");
        }
    }


    highlightCells(cells) {
        this.unhighlightCells();
        for (const cell of cells) {
            const [x, y] = cell;
            this.lastHighlightedCells.push(this.board[x][y]);
            this.board[x][y].classList.add("highlighted");
        }
    }

    resetUnavailableCell(x, y) {
        this.board[x][y].classList.remove("unavailable")
    }

    markAsUnavailable(x, y) {
        this.board[x][y].classList.add("unavailable")
        this.lastUnavailableCell = this.board[x][y];
    }



    // createShips(ships, selectedShip = null) {
    //     const shipsContainer = document.createElement("div");
    //     shipsContainer.classList.add("ships");

    //     for (const ship of ships) {
    //         const container = document.createElement("div");
    //         const shipCellsContainer = document.createElement("div");
    //         shipCellsContainer.classList.add("ship");
    //         shipCellsContainer.dataset.name = ship.name;
    //         if (ship === selectedShip) {
    //             shipCellsContainer.classList.add("selected");
    //         }

    //         for (let i = 0; i < ship.length; i++) {
    //             const cell = document.createElement("button");
    //             cell.classList.add("cell");

    //             shipCellsContainer.appendChild(cell);
    //         }

    //         const name = document.createElement("h3");
    //         name.textContent = ship.name;

    //         container.appendChild(shipCellsContainer);
    //         container.appendChild(name);

    //         shipsContainer.appendChild(container);
    //     }

    //     return shipsContainer;
    // }
}
