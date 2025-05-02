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
        }
        else {
            ship.classList.remove("selected");
        }
    });
}

function createShips(ships) {
    const shipsArray = [];

    for (const ship of ships) {
        const shipEl = document.createElement("div");
        shipEl.classList.add("ship");
        shipEl.dataset.shipId = ship.name;

        for (let i = 0; i < ship.length; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            shipEl.appendChild(cell);
        }
        shipsArray.push(shipEl);
    }

    return shipsArray;
}

export default { removeShip, removeAllShips, selectShip, createShips };