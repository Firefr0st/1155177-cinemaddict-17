import { TemplateView } from '../render.js';

const createFilmListTemplate = () => '<div class="films-list__container"></div>';

export default class FilmListView extends TemplateView {
  constructor() {
    super(createFilmListTemplate);
  }
}
