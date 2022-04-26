import { render } from './render.js';
import UserStatusView from './view/user-status-view';
import FilmsPresenter from './presenter/films-presenter';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const boardPresenter = new FilmsPresenter();

render(new UserStatusView(), siteHeaderElement);

boardPresenter.init(siteMainElement);
