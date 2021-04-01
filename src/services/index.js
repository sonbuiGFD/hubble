import { request } from 'utils/request';
import { USER, REPO } from 'config';

const GET_REPO_ISSUES = `/repos/${USER}/${REPO}/issues`;
export const getRepoIssues = (state) =>
  request({
    url: GET_REPO_ISSUES,
    method: 'GET',
    params: {
      state: state || '',
    },
  });
