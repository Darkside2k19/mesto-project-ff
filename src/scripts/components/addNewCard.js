import { createCard, likeCard } from "./card";
import { openImage } from "./openImagePopup";

// Элементы формы выносим в константы
const newForm = document.querySelector('.popup_type_new-card');
const cardNameInput = newForm.querySelector('.popup__input_type_card-name');
const cardLinkInput = newForm.querySelector('.popup__input_type_url');

// Экспортируем как сам form, так и функцию
export { newForm, addNewCard };

function addNewCard(placesList) {
    const newCard = {
        name: cardNameInput.value,
        link: cardLinkInput.value
    };
    
    placesList.prepend(createCard(newCard, likeCard, openImage));
    
    // Очищаем поля формы
    cardNameInput.value = '';
    cardLinkInput.value = '';
}