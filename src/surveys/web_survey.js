import SurveyTemplate from './surveyTemplate';
import webBoilerplateQuestions from '../questions/boilerplate_questions';
import projectNameQuestions from './../questions/general_questions';
import bitbucketCredentialQuestions from './../questions/bitbucket_questions';
import createRepositoryQuestions from './../questions/git_questions';

import GitHandler from '../utils/gitHandler';
import LocalRepository from './../utils/localRepository';
import DocumentationHandler from '../utils/documentationHandler';

const questions = [].concat(webBoilerplateQuestions, projectNameQuestions, createRepositoryQuestions, bitbucketCredentialQuestions);

export default class WebSurvey extends SurveyTemplate {
  constructor() {
    super(questions);
  }

  process(answers) {
    const localRepository = new LocalRepository(answers.localRepositoryPath, answers.name);
    const gitHandler = new GitHandler(answers, localRepository);
    const documentationHandler = new DocumentationHandler(answers, localRepository, 'WEB');

    return localRepository.createLocalDirectory()
    .then(() => gitHandler.cloneRepository())
    .then(() => gitHandler.createGitRepository())
    .then(() => {
      documentationHandler.setRemoteRepository(gitHandler.getRemoteRepository());
      return documentationHandler.setDocumentation();
    })
    .then(() => gitHandler.initialCommit());
  }
}

