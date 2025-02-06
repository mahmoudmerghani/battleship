import GameBoard from "./GameBoard";
import Ship from "./Ship";
import UI from "./UI";

export default class Game {
    constructor() {
        this.gameBoard = new GameBoard();
        this.ships = [
            new Ship("Destroyer", 2),
            new Ship("Submarine", 3),
            new Ship("Cruiser", 3),
            new Ship("Battleship", 4),
            new Ship("Carrier", 5),
        ];
        this.selectedShip = null;
        this.orientation = GameBoard.HORIZONTAL_ORIENTATION;
        this.init();
        this.addEventListeners();
    }

    init() {
        const boardContainer = document.querySelector(".human-board");
        const shipsContainer = document.querySelector(".ships-container");

        boardContainer.appendChild(UI.createBoard(this.gameBoard.board));
        shipsContainer.appendChild(UI.createShips(this.ships));
    }

    addEventListeners() {
        const boardContainer = document.querySelector(".human-board");
        const shipsContainer = document.querySelector(".ships-container");
        const rotateBtn = document.getElementById("rotate");

        boardContainer.addEventListener("click", this.handlePlaceShip);
        shipsContainer.addEventListener("click", this.handleSelectShip);
        rotateBtn.addEventListener("click", this.handleRotate);
    }

    handlePlaceShip = (e) => {
        if (!e.target.classList.contains("cell") || !this.selectedShip) return;

        const xCoord = parseInt(e.target.dataset.row, 10);
        const yCoord = parseInt(e.target.dataset.column, 10);

        if (
            this.gameBoard.placeShip(
                xCoord,
                yCoord,
                this.selectedShip,
                this.orientation,
            )
        ) {
            this.ships = this.ships.filter(
                (ship) => ship !== this.selectedShip,
            );
            this.selectedShip = null;

            this.renderBoard();
            this.renderShips();
        }
    };

    renderBoard() {
        const boardContainer = document.querySelector(".human-board");

        boardContainer.innerHTML = "";

        boardContainer.appendChild(UI.createBoard(this.gameBoard.board));
    }

    renderShips() {
        const shipsContainer = document.querySelector(".ships-container");

        shipsContainer.innerHTML = "";

        shipsContainer.appendChild(
            UI.createShips(this.ships, this.selectedShip),
        );
    }

    handleSelectShip = (e) => {
        const ship = e.target.closest(".ship");
        if (!ship) return;

        const name = ship.dataset.name;

        this.selectedShip = this.ships.find((ship) => ship.name === name);
        this.renderShips();
    };

    handleRotate = (e) => {
        const shipsContainer = document.querySelector(".ships-container");

        shipsContainer.classList.toggle("vertical");

        const isVertical = this.orientation === GameBoard.VERTICAL_ORIENTATION;

        if (isVertical) {
            this.orientation = GameBoard.HORIZONTAL_ORIENTATION;
        } else {
            this.orientation = GameBoard.VERTICAL_ORIENTATION;
        }
    }
}
