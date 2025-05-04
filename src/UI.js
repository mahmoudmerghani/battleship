function removeShip(shipId) {
    const shipsContainer = document.querySelector(".ships-container");
    const ship = shipsContainer.querySelector(`[data-ship-id=${shipId}]`);

    ship.remove();
}

function removeAllShips() {
    const shipsContainer = document.querySelector(".ships-container");
    const ships = shipsContainer.querySelectorAll(`[data-ship-id]`);

    ships.forEach((ship) => ship.remove());
}

function selectShip(shipId) {
    const shipsContainer = document.querySelector(".ships-container");
    const ships = shipsContainer.querySelectorAll(`[data-ship-id]`);

    ships.forEach((ship) => {
        if (ship.dataset.shipId === shipId) {
            ship.classList.add("selected");
        } else {
            ship.classList.remove("selected");
        }
    });
}

function createShips(ships) {
    const shipsArray = [];

    for (const ship of ships) {
        const shipEl = document.createElement("div");
        const shipCells = document.createElement("div");
        const shipName = document.createElement("h2");

        shipEl.classList.add("ship");
        shipEl.dataset.shipId = ship.name;
        shipCells.classList.add("ship-cells");
        shipName.textContent = ship.name;
        shipEl.appendChild(shipCells);
        shipEl.appendChild(shipName);

        for (let i = 0; i < ship.length; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            shipCells.appendChild(cell);
        }
        shipsArray.push(shipEl);
    }

    return shipsArray;
}

function setMessage(msg, append = false) {
    const message = document.getElementById("message");
    if (append) {
        message.textContent += msg;
    }
    else {
        message.textContent = msg;
    }
}

function selectDifficulty(button) {
    const buttons = document.querySelectorAll(".difficulty button");

    buttons.forEach((btn) => btn.classList.remove("selected"));

    button.classList.add("selected");
}

export default {
    removeShip,
    removeAllShips,
    selectShip,
    createShips,
    setMessage,
    selectDifficulty,
};
