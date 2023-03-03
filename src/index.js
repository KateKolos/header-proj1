import { onBurgerBtnClick } from './js/mobileBurger';
import { refs } from './js/refs';
import { onSearchIconClick } from './js/searchInput';

refs.headerBurger.addEventListener('click', onBurgerBtnClick);
refs.searchIcon.addEventListener('click', onSearchIconClick);
