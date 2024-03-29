// Buttons in each row
const flexDirectionButtons = document.querySelectorAll('.flex-direction > button');
const justifyContentButtons = document.querySelectorAll('.justify-content > button');
const alignItemButtons = document.querySelectorAll('.align-items > button');
const flexWrapButtons = document.querySelectorAll('.flex-wrap > button');

const boxes = document.querySelectorAll('.child');
const parentContainer = document.querySelector('.parent');

const applyStyles = (button, attribute, buttonColumn) => {
    button.addEventListener('click', () => {
        parentContainer.style[attribute] = button.textContent;
        if (attribute === 'flex-wrap') {
            button.textContent === 'wrap' ? boxes.forEach((box) =>  box.classList.add('wrap')) : boxes.forEach((box) =>  box.classList.remove('wrap'));
        }
        updateButtons(buttonColumn, button);
    });
};

const updateButtons = (buttonColumn, clickedButton) => {
    buttonColumn.forEach((button) => {
        button.classList.remove('active-button');
    });
    clickedButton.classList.add('active-button');
}

flexDirectionButtons.forEach((button) => {
    applyStyles(button, 'flex-direction', flexDirectionButtons);
});

justifyContentButtons.forEach((button) => {
    applyStyles(button, 'justify-content', justifyContentButtons);
});

alignItemButtons.forEach((button) => {
    applyStyles(button, 'align-items', alignItemButtons);
});

flexWrapButtons.forEach((button) => {
    applyStyles(button, 'flex-wrap', flexWrapButtons);
});
