import BaseSurvey from '../surveys/base.survey';

export default class IOSSurvey extends BaseSurvey {
  constructor(...args) {
    super(args);
    this.type = 'iOS';
  }
}
