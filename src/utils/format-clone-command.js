'use strict';

import url from 'url';
import querystring from 'querystring';

export function formatCloneCommand(cloneData) {
    const { boilerplate, name, bitbucketUserName, bitbucketPassword } = cloneData;
    const urlObject = url.parse(boilerplate.repository);
    const escapedUsername = querystring.escape(bitbucketUserName).replace(/!/g,"%21");
    const escapedPassword = querystring.escape(bitbucketPassword).replace(/!/g,"%21");

    return `git clone ${urlObject.protocol}//${escapedUsername}:${escapedPassword}@${urlObject.host}${urlObject.pathname} ${name}`;
}
