import SurveyTemplate from './surveyTemplate';
import webBoilerplateQuestions from '../questions/boilerplate_questions';
import projectNameQuestions from './../questions/general_questions';
import bitbucketCredentialQuestions from './../questions/bitbucket_questions';
import createRepositoryQuestions from './../questions/git_questions';

import GitHandler from '../utils/gitHandler';
import LocalRepository from './../utils/localRepository';

const questions = [].concat(webBoilerplateQuestions, projectNameQuestions, createRepositoryQuestions, bitbucketCredentialQuestions);

export default class WebSurvey extends SurveyTemplate {
  constructor() {
    super(questions);
  }

  process(answers) {
    const localRepository = new LocalRepository(answers.localRepositoryPath, answers.name);
    const gitHandler = new GitHandler(answers, localRepository);

    return localRepository.createLocalDirectory()
    .then(() => gitHandler.cloneRepository())
    .then(() => gitHandler.createGitRepository());
  }
}

