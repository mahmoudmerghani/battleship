import GameBoard from "./GameBoard";
import Ship from "./Ship";
import BoardUI from "./BoardUI";
import ui from "./ui";

export default class Game {
    static SHIPS = [
        new Ship("Destroyer", 2),
        new Ship("Submarine", 3),
        new Ship("Cruiser", 3),
        new Ship("Battleship", 4),
        new Ship("Carrier", 5),
    ];

    constructor() {
        this.playerBoard = new GameBoard();
        this.playerBoardUI = new BoardUI();
        this.ships = [...Game.SHIPS];
        this.selectedShip = null;
        this.orientation = GameBoard.HORIZONTAL_ORIENTATION;
        this.init();
        this.addEventListeners();
    }

    init() {
        const playerBoardEl = document.querySelector(".player-board");
        const computerBoardEl = document.querySelector(".computer-board");
        const shipsContainer = document.querySelector(".ships-container");

        this.playerBoardUI.board.forEach((row) => {
            row.forEach((cell) => {
                playerBoardEl.appendChild(cell);
            });
        });
    }

    addEventListeners() {
        const boardContainer = document.querySelector(".player-board");
        const shipsContainer = document.querySelector(".ships-container");
        const rotateBtn = document.getElementById("rotate");

        boardContainer.addEventListener("click", this.handlePlaceShip);
        shipsContainer.addEventListener("click", this.handleSelectShip);
        rotateBtn.addEventListener("click", this.handleRotate);
        boardContainer.addEventListener("mouseover", this.handleHover);
        boardContainer.addEventListener("mouseleave", () => {
            this.playerBoardUI.unhighlightCells();
        });
    }

    handlePlaceShip = (e) => {
        if (!e.target.classList.contains("cell") || !this.selectedShip) return;

        const xCoord = parseInt(e.target.dataset.row, 10);
        const yCoord = parseInt(e.target.dataset.column, 10);

        if (
            this.playerBoard.placeShip(
                xCoord,
                yCoord,
                this.selectedShip,
                this.orientation,
            )
        ) {
            this.ships = this.ships.filter(
                (ship) => ship !== this.selectedShip,
            );

            this.playerBoardUI.markAsShip(
                GameBoard.getShipIndices(
                    xCoord,
                    yCoord,
                    this.selectedShip,
                    this.orientation,
                ),
            );
            this.playerBoardUI.unhighlightCells();
            ui.removeShip(this.selectedShip.name);
            this.selectedShip = null;
        }
    };

    // renderBoard() {
    //     const boardContainer = document.querySelector(".human-board");

    //     boardContainer.innerHTML = "";

    //     boardContainer.appendChild(UI.createBoard(this.player.gameBoard.board));
    // }

    // renderShips() {
    //     const shipsContainer = document.querySelector(".ships-container");

    //     shipsContainer.innerHTML = "";

    //     shipsContainer.appendChild(
    //         UI.createShips(this.ships, this.selectedShip),
    //     );
    // }

    handleSelectShip = (e) => {
        const ship = e.target.closest(".ship");
        if (!ship) return;

        const name = ship.dataset.shipId;
        this.selectedShip = this.ships.find((ship) => ship.name === name);

        ui.selectShip(name);
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
    };

    handleHover = (e) => {
        if (!e.target.classList.contains("cell") || !this.selectedShip) return;

        const xCoord = parseInt(e.target.dataset.row, 10);
        const yCoord = parseInt(e.target.dataset.column, 10);

        if (
            this.playerBoard.isSpaceAvailable(
                xCoord,
                yCoord,
                this.selectedShip,
                this.orientation,
            )
        ) {
            this.playerBoardUI.highlightCells(
                GameBoard.getShipIndices(
                    xCoord,
                    yCoord,
                    this.selectedShip,
                    this.orientation,
                ),
            );
            this.playerBoardUI.resetUnavailableCell(xCoord, yCoord);
        } else {
            this.playerBoardUI.unhighlightCells();
            this.playerBoardUI.markAsUnavailable(xCoord, yCoord);
        }
    };
}
