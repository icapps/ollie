import SurveyTemplate from './surveyTemplate';
import webBoilerplateQuestions from '../questions/boilerplate_questions';
import projectNameQuestions from './../questions/general_questions';
import bitbucketCredentialQuestions from './../questions/bitbucket_questions';
import { createRepositoryQuestions } from './../questions/git_questions';
import { initRepository, cloneRepository, setRemote, initialCommit } from './../utils/git';
import { create as createLocalRepository } from './../utils/localRepository';

const questions = [].concat(webBoilerplateQuestions, projectNameQuestions, createRepositoryQuestions, bitbucketCredentialQuestions);

export default class WebSurvey extends SurveyTemplate {
  constructor() {
    super(questions);
  }

  process(answers) {
    return createLocalRepository(answers)
    .then(() => cloneRepository(answers))
    .then(() => initRepository(answers))
    .then(() => setRemote())
    .then(() => initialCommit());
  }
}
