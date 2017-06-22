import * as apiServices from '../services/api.service';

export const createGithubApiService = answers => new apiServices.GithubApiService(answers);
export const createBitbucketApiService = answers => new apiServices.BitBucketApiService(answers);
