// Выносим все DOM-элементы в константы на уровне модуля
const editProfileForm = document.querySelector('.popup_type_edit');
const editProfileName = editProfileForm.querySelector('.popup__input_type_name');
const editProfileDescr = editProfileForm.querySelector('.popup__input_type_description');
const profileTitleElement = document.querySelector('.profile__title');
const profileDescrElement = document.querySelector('.profile__description');

export function editProfile() {
    profileTitleElement.textContent = editProfileName.value;
    profileDescrElement.textContent = editProfileDescr.value;
}

export function openEditProfile() {
    editProfileName.value = profileTitleElement.textContent;
    editProfileDescr.value = profileDescrElement.textContent;
}
