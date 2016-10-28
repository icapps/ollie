import url from 'url';
import querystring from 'querystring';

// eslint-disable-next-line import/prefer-default-export
export function formatCloneCommand(cloneData) {
    const { boilerplate, name, bitbucketUserName, bitbucketPassword } = cloneData;
    const urlObject = url.parse(boilerplate.repository);

    // urlencode and escape '!' for people with super secure passwords :-)
    const escapedUsername = querystring.escape(bitbucketUserName).replace(/!/g, '%21');
    const escapedPassword = querystring.escape(bitbucketPassword).replace(/!/g, '%21');

    return `git clone ${urlObject.protocol}//${escapedUsername}:${escapedPassword}@${urlObject.host}${urlObject.pathname} ${name}`;
}
