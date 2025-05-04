import GameBoard from "../src/GameBoard";
import Ship from "../src/Ship";

describe("GameBoard", () => {
    let gameBoard;

    beforeEach(() => {
        gameBoard = new GameBoard();
    });

    test("should create a board with the correct size", () => {
        expect(gameBoard.board.length).toBe(GameBoard.SIZE);
        expect(gameBoard.board[0].length).toBe(GameBoard.SIZE);
    });

    test("should place a ship horizontally", () => {
        const ship = new Ship("Destroyer", 3);
        const placed = gameBoard.placeShip(0, 0, ship, GameBoard.HORIZONTAL_ORIENTATION);

        expect(placed).toBe(true);
        expect(gameBoard.getCell(0, 0).ship).toBe(ship);
        expect(gameBoard.getCell(0, 1).ship).toBe(ship);
        expect(gameBoard.getCell(0, 2).ship).toBe(ship);
    });

    test("should place a ship vertically", () => {
        const ship = new Ship("Destroyer", 3);
        const placed = gameBoard.placeShip(0, 0, ship, GameBoard.VERTICAL_ORIENTATION);

        expect(placed).toBe(true);
        expect(gameBoard.getCell(0, 0).ship).toBe(ship);
        expect(gameBoard.getCell(1, 0).ship).toBe(ship);
        expect(gameBoard.getCell(2, 0).ship).toBe(ship);
    });

    test("should not place a ship if space is not available", () => {
        const ship1 = new Ship("Destroyer", 3);
        const ship2 = new Ship("Submarine", 3);
        gameBoard.placeShip(0, 0, ship1, GameBoard.HORIZONTAL_ORIENTATION);
        const placed = gameBoard.placeShip(0, 1, ship2, GameBoard.HORIZONTAL_ORIENTATION);

        expect(placed).toBe(false);
    });

    test("should receive an attack and hit a ship", () => {
        const ship = new Ship("Destroyer", 3);
        gameBoard.placeShip(0, 0, ship, GameBoard.HORIZONTAL_ORIENTATION);
        const attacked = gameBoard.receiveAttack(0, 0);

        expect(attacked).toBe(GameBoard.attackResult.HIT);
        expect(gameBoard.getCell(0, 0).hit).toBe(true);
        expect(ship.numberOfHits).toBe(1);
    });

    test("should receive an attack and miss if no ship is present", () => {
        const attacked = gameBoard.receiveAttack(0, 0);

        expect(attacked).toBe(GameBoard.attackResult.MISS);
        expect(gameBoard.getCell(0, 0).hit).toBe(true);
    });

    test("should not receive an attack if out of bounds", () => {
        const attacked = gameBoard.receiveAttack(-1, 0);

        expect(attacked).toBe(GameBoard.attackResult.OUT_OF_BOUNDS);
    });

    test("should not receive an attack if cell is already hit", () => {
        gameBoard.receiveAttack(0, 0);
        const attacked = gameBoard.receiveAttack(0, 0);

        expect(attacked).toBe(GameBoard.attackResult.ALREADY_HIT);
    });

    test("should not place a ship at the edge of the board if its size exceeds the board size", () => {
        const ship = new Ship("Carrier", 4);
        const result = gameBoard.placeShip(7, 7, ship, GameBoard.HORIZONTAL_ORIENTATION);
        expect(result).toBe(false);
    });
});