function addEvents() {
    document.querySelector(`.gallery`).addEventListener(`click`, (event) => {
        event.currentTarget.classList.add(`second`);
        document.querySelector(`.second`).addEventListener(`click`, (event) => {
            event.currentTarget.classList.add(`third`);
            document.querySelector(`.third`).addEventListener(`click`, (event) => {
                event.currentTarget.classList.remove(`second`);
                event.currentTarget.classList.remove(`third`);
                addEvents();
            })
        })
    })
}

addEvents()
