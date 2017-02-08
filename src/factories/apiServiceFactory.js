import * as apiServices from '../services/apiService';

export const createGithubApiService = answers => new apiServices.GithubApiService(answers);
export const createBitbucketApiService = answers => new apiServices.BitBucketApiService(answers);
