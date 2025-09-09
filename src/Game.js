import GameBoard from "./GameBoard";
import Ship from "./Ship";
import BoardUI from "./BoardUI";
import ui from "./ui";

const phases = {
    PLACING_SHIPS: "placing ships",
    PLAYER_TURN: "player turn",
    COMPUTER_TURN: "computer turn",
    GAME_OVER: "game over",
};

const difficulties = {
    RANDOM: "random",
    EASY: "easy",
};

export default class Game {
    static createShips() {
        return [
            new Ship("Destroyer", 2),
            new Ship("Submarine", 3),
            new Ship("Cruiser", 3),
            new Ship("Battleship", 4),
            new Ship("Carrier", 5),
        ];
    }

    constructor() {
        this.initializeGameState();
        this.initializeUI();
        this.addEventListeners();
    }

    initializeGameState() {
        this.playerBoard = new GameBoard();
        this.computerBoard = new GameBoard();
        this.playerBoardUI = new BoardUI();
        this.computerBoardUI = new BoardUI();
        this.phase = phases.PLACING_SHIPS;
        this.ships = Game.createShips();
        this.selectedShip = null;
        this.selectedShipEl = null;
        this.shipX = 0;
        this.shipY = 0;
        this.orientation = GameBoard.HORIZONTAL_ORIENTATION;
        this.difficulty = difficulties.EASY;
        this.isShipHeld = false;
    }

    initializeUI() {
        const playerBoardEl = document.querySelector(".player-board");
        const shipsContainer = document.querySelector(".ships-container");
        const shipsElements = ui.createShips(this.ships);

        this.playerBoardUI.board.forEach((row) => {
            row.forEach((cell) => {
                playerBoardEl.appendChild(cell);
            });
        });

        shipsElements.forEach((el) => shipsContainer.appendChild(el));

        ui.setMessage("Place your ships");
    }

    setUpComputerBoard() {
        const computerBoardEl = document.querySelector(".computer-board");
        computerBoardEl.style.display = "grid";

        this.computerBoardUI.board.forEach((row) => {
            row.forEach((cell) => {
                computerBoardEl.appendChild(cell);
            });
        });

        this.computerBoard.placeShipsRandomly(Game.createShips());
    }

    addEventListeners() {
        const playerBoard = document.querySelector(".player-board");
        const computerBoard = document.querySelector(".computer-board");
        const shipsContainer = document.querySelector(".ships-container");
        const rotateBtn = document.getElementById("rotate");
        const placeShipsRandomlyBtn = document.getElementById("random");
        const resetBtn = document.getElementById("reset");
        const difficulty = document.querySelector(".difficulty");

        playerBoard.addEventListener("click", this.handlePlaceShip);
        shipsContainer.addEventListener("mousedown", this.handleSelectShip);
        rotateBtn.addEventListener("click", this.handleRotate);
        playerBoard.addEventListener("mouseover", this.handleHover);
        playerBoard.addEventListener("mouseleave", () => {
            this.playerBoardUI.unhighlightCells();
        });
        playerBoard.addEventListener("mouseout", (e) => {
            if (
                !e.target.classList.contains("cell") ||
                !this.selectedShip ||
                this.phase !== phases.PLACING_SHIPS
            )
                return;

            const xCoord = parseInt(e.target.dataset.row, 10);
            const yCoord = parseInt(e.target.dataset.column, 10);

            this.playerBoardUI.resetUnavailableCell(xCoord, yCoord);
        });
        placeShipsRandomlyBtn.addEventListener(
            "click",
            this.handlePlaceShipsRandomly,
        );
        computerBoard.addEventListener("click", this.handlePlayerAttack);
        resetBtn.addEventListener("click", this.handleReset);

        difficulty.addEventListener("click", this.handleChangeDifficulty);

        document.addEventListener("mousemove", (e) => {
            if (!this.isShipHeld) return;

            const x = e.clientX - this.shipX - 15;
            const y = e.clientY - this.shipY - 15;
            this.selectedShipEl.style.transform = `translate(${x}px, ${y}px)`;
        });

        document.addEventListener("mouseup", (e) => {
            if (!this.isShipHeld) return;
            this.isShipHeld = false;
            this.selectedShipEl.style.transform = "";
            this.selectedShipEl.style.pointerEvents = "";
            this.handlePlaceShip(e);
            document.body.style.cursor = "default";
        });

        document.addEventListener("dragstart", (event) => {
            event.preventDefault();
        });
        document.addEventListener("dragend", (event) => {
            event.preventDefault();
        });
    }

    handlePlaceShip = (e) => {
        if (
            !e.target.closest(".player-board") ||
            !e.target.classList.contains("cell") ||
            !this.selectedShip ||
            this.phase !== phases.PLACING_SHIPS
        )
            return;

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
                this.phase = phases.PLAYER_TURN;
                this.setUpComputerBoard();
                ui.setMessage("Attack the enemy board.");
            }
        }
    };

    handleSelectShip = (e) => {
        const ship = e.target.closest(".ship");
        if (!ship || this.phase !== phases.PLACING_SHIPS) return;

        const name = ship.dataset.shipId;
        this.selectedShip = this.ships.find((ship) => ship.name === name);
        this.isShipHeld = true;
        this.selectedShipEl = ship.querySelector(".ship-cells");
        this.shipX = this.selectedShipEl.getBoundingClientRect().left;
        this.shipY = this.selectedShipEl.getBoundingClientRect().top;
        this.selectedShipEl.style.pointerEvents = "none";
        document.body.style.cursor = "pointer";
        ui.selectShip(name);
    };

    handleRotate = (e) => {
        if (this.ships.length === 0 || this.phase !== phases.PLACING_SHIPS)
            return;

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
        if (
            !e.target.classList.contains("cell") ||
            !this.selectedShip ||
            this.phase !== phases.PLACING_SHIPS
        )
            return;

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
        if (this.ships.length === 0 || this.phase !== phases.PLACING_SHIPS)
            return;

        const cells = this.playerBoard.placeShipsRandomly(this.ships);
        this.ships = [];
        ui.removeAllShips();

        cells.forEach((cellArr) => this.playerBoardUI.markAsShip(cellArr));

        this.phase = phases.PLAYER_TURN;
        this.setUpComputerBoard();
        ui.setMessage("Attack the enemy board.");
    };

    handlePlayerAttack = (e) => {
        if (
            !e.target.classList.contains("cell") ||
            this.phase !== phases.PLAYER_TURN
        )
            return;

        const x = parseInt(e.target.dataset.row, 10);
        const y = parseInt(e.target.dataset.column, 10);

        const result = this.computerBoard.receiveAttack(x, y);

        if (
            result === GameBoard.attackResult.HIT ||
            result === GameBoard.attackResult.MISS
        ) {
            this.computerBoardUI.updateCell(x, y, result);
            this.computerBoardUI.markAsUnavailable(x, y);
            this.phase = phases.COMPUTER_TURN;

            if (result === GameBoard.attackResult.HIT) {
                const cell = this.computerBoard.getCell(x, y);
                if (cell.ship.isSunk()) {
                    ui.setMessage(
                        `Enemy's ${cell.ship.name} has been destroyed`,
                    );
                }
            }

            if (this.computerBoard.allShipsSunk()) {
                ui.setMessage("Game over, You won!");
                this.phase = phases.GAME_OVER;
            } else {
                this.attackPlayer();
            }
        }
    };

    attackPlayer() {
        if (this.phase !== phases.COMPUTER_TURN) return;

        let attackMethod;
        switch (this.difficulty) {
            case difficulties.EASY:
                attackMethod = this.playerBoard.receiveSmartAttack;
                break;
            case difficulties.RANDOM:
                attackMethod = this.playerBoard.receiveRandomAttack;
                break;
        }

        const { result, x, y } = attackMethod.call(this.playerBoard);

        this.playerBoardUI.updateCell(x, y, result);
        this.phase = phases.PLAYER_TURN;

        if (result === GameBoard.attackResult.HIT) {
            const cell = this.playerBoard.getCell(x, y);
            if (cell.ship.isSunk()) {
                ui.setMessage(`Your ${cell.ship.name} has been destroyed`);
            }
        }

        if (this.playerBoard.allShipsSunk()) {
            this.phase = phases.GAME_OVER;
            ui.setMessage("Game over, Computer won");
        }
    }

    handleReset = (e) => {
        const playerBoard = document.querySelector(".player-board");
        const computerBoard = document.querySelector(".computer-board");
        const shipsContainer = document.querySelector(".ships-container");
        const easyDifficultyBtn = document.getElementById("easy");

        playerBoard.innerHTML = "";
        computerBoard.innerHTML = "";
        shipsContainer.innerHTML = "";

        computerBoard.style.display = "none";
        shipsContainer.classList.remove("vertical");
        ui.selectDifficulty(easyDifficultyBtn);

        this.initializeGameState();
        this.initializeUI();
    };

    handleChangeDifficulty = (e) => {
        if (
            e.target.classList.contains("selected") ||
            this.phase !== phases.PLACING_SHIPS
        )
            return;

        const difficulty = e.target.dataset.difficulty;

        if (!difficulty) return;

        this.difficulty = difficulty;

        ui.selectDifficulty(e.target);
    };
}
