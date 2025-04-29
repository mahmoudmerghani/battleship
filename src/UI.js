function removeShip(shipId) {
    const shipsContainer = document.querySelector(".ships-container");
    const ship = shipsContainer.querySelector(`[data-ship-id=${shipId}]`);

    ship.remove();
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

export default { removeShip, selectShip };