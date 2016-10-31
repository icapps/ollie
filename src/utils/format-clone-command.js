import url from 'url';
import querystring from 'querystring';
import { localRepo } from './../utils/localRepository';

// eslint-disable-next-line import/prefer-default-export
export function formatCloneCommand(cloneData) {
  const { boilerplate, bitbucketUserName, bitbucketPassword } = cloneData;
  const urlObject = url.parse(boilerplate.repository);

  // TODO: These templates need to be cloned with own credentials, not user specific ones (for example: username = iCapps, password= accessToAllTemplates)
  // urlencode and escape '!' for people with super secure passwords :-)
  const escapedUsername = querystring.escape(bitbucketUserName).replace(/!/g, '%21');
  const escapedPassword = querystring.escape(bitbucketPassword).replace(/!/g, '%21');

  return `git clone ${urlObject.protocol}//${escapedUsername}:${escapedPassword}@${urlObject.host}${urlObject.pathname} ${localRepo} && rm -rf ${localRepo}/.git`;
}
