import FilmListView from '../view/film-list-view';
import FilmCardView from '../view/film-card-view';
import FilmDetailsView from '../view/film-details-view';
import FilterView from '../view/filter-view';
import ShowMoreButtonView from '../view/show-more-button-view';

import { render } from '../render.js';

export default class FilmsPresenter {
  filmsListComponent = new FilmListView();

  init = (container) => {
    this.container = container;

    render(new FilterView(), this.container);
    render(this.filmsListComponent, this.container);

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(), this.filmsListComponent.getElement());
    }

    render(new ShowMoreButtonView(), this.container);
    render(new FilmDetailsView(), this.container);
  };
}
