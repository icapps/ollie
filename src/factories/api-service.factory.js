import * as apiServices from '../services/api.service';

const createGithubApiService = answers => new apiServices.GithubApiService(answers);
const createBitbucketApiService = answers => new apiServices.BitBucketApiService(answers);

export default {
  github: createGithubApiService,
  bitbucket: createBitbucketApiService,
};
