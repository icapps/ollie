import BaseSurvey from '../surveys/base.survey';

export default class FrontendSurvey extends BaseSurvey {
  constructor(...args) {
    super(args);
    this.type = 'frontend';
  }
}

