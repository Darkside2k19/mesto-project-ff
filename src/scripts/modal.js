export function openModal(modalWindow) {
    modalWindow.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeModalByEsc); // Исправлено: используем closeModalByEsc
}

export function closeModal(modalWindow) {
    modalWindow.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeModalByEsc); // Исправлено: удаляем тот же обработчик
}

export function getOpenedModal() {
    return document.querySelector('.popup_is-opened');
}

export const closePopupByOverlay = evt => {
    if (evt.target.classList.contains('popup')) {
        closeModal(evt.target);
    }
}

function closeModalByEsc(evt) {
    if (evt.key === 'Escape') {
        const modalIsOpen = getOpenedModal();
        if (modalIsOpen) {
            closeModal(modalIsOpen);
        }
    }
}