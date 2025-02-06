export default class UI {
    static createCell(row, column, className = "") {
        const cell = document.createElement("button");
        cell.classList.add("cell");
        if (className) {
            cell.classList.add(className);
            switch (className) {
                case "hit":
                    cell.textContent = "X";
                    break;
                case "miss":
                    cell.textContent = "○";
                    break;
            }
        }
        cell.dataset.row = row;
        cell.dataset.column = column;
    
        return cell;
    }
    
    static createBoard(board) {
        const boardElement = document.createElement("div");
        boardElement.classList.add("board");
    
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                const cellObj = board[i][j];
                let cellElement;
                if (cellObj.hit) {
                    if (cellObj.ship) {
                        cellElement = UI.createCell(i, j, "hit");
                    }
                    else {
                        cellElement = UI.createCell(i, j, "miss");
                    }
                }
                else {
                    if (cellObj.ship) {
                        cellElement = UI.createCell(i, j, "ship");
                    }
                    else {
                        cellElement = UI.createCell(i, j,);
                    }
                }
                boardElement.appendChild(cellElement);
            }
        }
    
        return boardElement;
    }

    static createShips(ships, selectedShip = null) {
        const shipsContainer = document.createElement("div");
        shipsContainer.classList.add("ships");

        for (const ship of ships) {
            const container = document.createElement("div");
            const shipCellsContainer = document.createElement("div");
            shipCellsContainer.classList.add("ship");
            shipCellsContainer.dataset.name = ship.name;
            if (ship === selectedShip) {
                shipCellsContainer.classList.add("selected");
            }

            for (let i = 0; i < ship.length; i++) {
                const cell = document.createElement("button");
                cell.classList.add("cell");

                shipCellsContainer.appendChild(cell);
            }

            const name = document.createElement("h3");
            name.textContent = ship.name;

            container.appendChild(shipCellsContainer);
            container.appendChild(name);

            shipsContainer.appendChild(container);
        }

        return shipsContainer;
    }
}