import BaseSurvey from '../surveys/base.survey';

export default class AndroidSurvey extends BaseSurvey {
  constructor(...args) {
    super(args);
    this.type = 'android';
  }
}
