import SurveyTemplate from './surveyTemplate';
import webBoilerplateQuestions from '../questions/boilerplate_questions';
import projectNameQuestions from './../questions/general_questions';
import bitbucketCredentialQuestions from './../questions/bitbucket_questions';
import { cloneRepository } from './../utils/git';

const questions = [].concat(webBoilerplateQuestions, projectNameQuestions, bitbucketCredentialQuestions);

export default class WebSurvey extends SurveyTemplate {
  constructor() {
    super(questions);
  }

  process(answers) {
    return cloneRepository(answers);
  }
}
