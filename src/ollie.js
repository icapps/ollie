import _ from 'lodash';
import inquirer from 'inquirer';
import clear from 'clear';
import figlet from 'figlet';
import chalk from 'chalk';

export default class Ollie {
  constructor(options = {}) {
    this.projectTypes = options.projectTypes;
    this.surveys = options.surveys;
    this.development = options.development;

    this.welcome = () => {
    };
  }

  async start() {
    try {
      this.printWelcome();
      const answeringAnswers = await inquirer.prompt(this.openingQuestions());
      const surveyAnswers = await this.startSurvey(answeringAnswers);
      const { localPath, remoteRepositoryUrl } = surveyAnswers;
      const [, hostName, teamName, repoName] = remoteRepositoryUrl.match(/git@(\S+):(\S+)\/(\S+)\.git/);
      this.printFinish(localPath, `https://${hostName}/${teamName}/${repoName}`);
    } catch (error) {
      console.log(chalk.red(`Error: ${error}`));
      console.log(chalk.red(error.stack));
    }
  }

  printWelcome() {
    clear();
    console.log(figlet.textSync('Ollie', 'Standard'));
    console.log(chalk.blue('Hi there!'));
    console.log(chalk.blue('Let\'s get you started with a project...'));
  }

  printFinish(localPath, remoteRepositoryUrl) {
    console.log(chalk.blue(`Done! You can find your project at '${remoteRepositoryUrl}' 👏`));
    console.log(chalk.blue(`Locally, your new project is availlable at '${localPath}' 👏`));
  }

  openingQuestions() {
    return [
      {
        name: 'projectType',
        message: 'What kind of project would you like to generate?',
        type: 'list',
        choices: _.map(this.projectTypes, 'name'),
      },
    ];
  }

  startSurvey(answers) {
    const project = _.find(this.projectTypes, { name: answers.projectType });
    const SurveyClass = this.surveys[project.survey];
    const survey = new SurveyClass();
    return survey.start();
  }
}
