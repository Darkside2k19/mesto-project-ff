import { openModal } from "../modal";

const modalTypeImage = document.querySelector('.popup_type_image');
const popupImage = modalTypeImage.querySelector('.popup__image');
const popupCaption = modalTypeImage.querySelector('.popup__caption');

export function openImage(image, title) {
    popupImage.src = image.src;
    popupImage.alt = image.alt;
    popupCaption.textContent = title.textContent;
    openModal(modalTypeImage);
}