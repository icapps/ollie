import figlet from 'figlet';

import SurveyTemplate from './surveyTemplate';
import { androidBoilerplateQuestions } from '../questions/boilerplate_questions';

export default class AndroidSurvey extends SurveyTemplate {
  constructor() {
    super(androidBoilerplateQuestions);
  }

  process(answers) {
    console.log('Android not yet implemented');
    throw new Error('(;*△*;)');
  }
}
