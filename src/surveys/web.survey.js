import BaseSurvey from '../surveys/base.survey';

export default class WebSurvey extends BaseSurvey {
  constructor(...args) {
    super(args);
    this.type = 'web';
  }
}

