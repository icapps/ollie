import SeekAndReplace from 'seek-and-replace';
import _ from 'lodash';

export default function seekAndReplace(projectName, replacementAnswers, projectPath) {
  const namespace = 'OLLIE';
  const replacePath = projectPath;

  const keyDefinitionsFromConfig = _.map(replacementAnswers, (value, key) => ({
      key,
      replacement: value,
    }));

  // always use projectName as a replacement for NAME
  const keyDefinitions = _.merge([], keyDefinitionsFromConfig, [
    {
      key: 'NAME',
      replacement: projectName,
    },
  ]);

  const replacer = new SeekAndReplace(namespace, replacePath, keyDefinitions, {
    ignorePaths: ['node_modules', '.idea', '.git'],
  });

  return replacer.replace();
}
