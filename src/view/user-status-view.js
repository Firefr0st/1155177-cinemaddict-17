import { TemplateView } from '../render.js';

const createUserStatusTemplate = () => '<p class="profile__rating">Movie Buff</p>';

export default class UserStatusView extends TemplateView {
  constructor() {
    super(createUserStatusTemplate);
  }
}
