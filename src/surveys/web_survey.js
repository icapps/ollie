import SurveyTemplate from './surveyTemplate';
import webBoilerplateQuestions from '../questions/boilerplate_questions';

export default class WebSurvey extends SurveyTemplate {
    constructor() {
        super(webBoilerplateQuestions);
    }
}
