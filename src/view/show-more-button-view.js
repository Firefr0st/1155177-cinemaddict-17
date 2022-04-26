import { TemplateView } from '../render.js';

const createShowMoreButtonTemplate = () => '<button class="films-list__show-more">Show more</button>';

export default class ShowMoreButtonView extends TemplateView {
  constructor() {
    super(createShowMoreButtonTemplate);
  }
}
