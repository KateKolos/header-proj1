import { refs } from './refs';

export function onBurgerBtnClick() {
  refs.headerBurger.classList.toggle('active');
  refs.headerMenu.classList.toggle('active');
  refs.body.classList.toggle('lock');
}
