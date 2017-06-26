import BaseSurvey from '../surveys/base.survey';

export default class BackendSurvey extends BaseSurvey {
  constructor(...args) {
    super(args);
    this.type = 'backend';
  }
}

