import SurveyTemplate from './surveyTemplate';
import webBoilerplateQuestions from '../questions/boilerplate_questions';

export default class AndroidSurvey extends SurveyTemplate {
  constructor() {
    super(webBoilerplateQuestions);
  }
}
