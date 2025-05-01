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
        this.computerBoard = new GameBoard();
        this.computerBoardUI = new BoardUI();
        this.ships = [...Game.SHIPS];
        this.selectedShip = null;
        this.orientation = GameBoard.HORIZONTAL_ORIENTATION;
        this.init();
        this.addEventListeners();
    }

    init() {
        const playerBoardEl = document.querySelector(".player-board");

        this.playerBoardUI.board.forEach((row) => {
            row.forEach((cell) => {
                playerBoardEl.appendChild(cell);
            });
        });
    }

    setUpComputerBoard() {
        const computerBoardEl = document.querySelector(".computer-board");
        computerBoardEl.style.display = "grid";

        this.computerBoardUI.board.forEach((row) => {
            row.forEach((cell) => {
                computerBoardEl.appendChild(cell);
            });
        });

        this.computerBoard.placeShipsRandomly([...Game.SHIPS]);
    }

    addEventListeners() {
        const playerBoard = document.querySelector(".player-board");
        const computerBoard = document.querySelector(".computer-board");
        const shipsContainer = document.querySelector(".ships-container");
        const rotateBtn = document.getElementById("rotate");
        const placeShipsRandomlyBtn = document.getElementById("random");

        playerBoard.addEventListener("click", this.handlePlaceShip);
        shipsContainer.addEventListener("click", this.handleSelectShip);
        rotateBtn.addEventListener("click", this.handleRotate);
        playerBoard.addEventListener("mouseover", this.handleHover);
        playerBoard.addEventListener("mouseleave", () => {
            this.playerBoardUI.unhighlightCells();
        });
        placeShipsRandomlyBtn.addEventListener(
            "click",
            this.handlePlaceShipsRandomly,
        );
        computerBoard.addEventListener("click", this.handlePlayerAttack);
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

            if (this.ships.length === 0) {
                this.setUpComputerBoard();
            }
        }
    };

    handleSelectShip = (e) => {
        const ship = e.target.closest(".ship");
        if (!ship) return;

        const name = ship.dataset.shipId;
        this.selectedShip = this.ships.find((ship) => ship.name === name);

        ui.selectShip(name);
    };

    handleRotate = (e) => {
        if (this.ships.length === 0) return;

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

    handlePlaceShipsRandomly = (e) => {
        if (this.ships.length === 0) return;

        const cells = this.playerBoard.placeShipsRandomly(this.ships);
        this.ships = [];
        ui.removeAllShips();

        cells.forEach((cellArr) => this.playerBoardUI.markAsShip(cellArr));

        this.setUpComputerBoard();
    };

    handlePlayerAttack = (e) => {
        if (!e.target.classList.contains("cell")) return;
    
        const x = parseInt(e.target.dataset.row, 10);
        const y = parseInt(e.target.dataset.column, 10);
    
        const result = this.computerBoard.receiveAttack(x, y);
    
        switch (result) {
            case GameBoard.attackResult.HIT:
                e.target.classList.add("hit");
                break;
            case GameBoard.attackResult.MISS:
                e.target.classList.add("miss");
                // maybe show splash animation
                break;
        }
    }
    
}
