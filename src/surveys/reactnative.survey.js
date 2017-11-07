import BaseSurvey from '../surveys/base.survey';

export default class ReactNativeSurvey extends BaseSurvey {
  constructor(...args) {
    super(args);
    this.type = 'reactnative';
  }
}

