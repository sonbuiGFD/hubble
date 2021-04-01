import { actionCreator, actionTryCatchCreator } from 'utils';
import { getRepoIssues } from 'services';

export const GET_REPO_ISSUES_ACTION = actionCreator('GET_REPO_ISSUES_ACTION');
export const getRepoIssueAction = (state) => async (dispatch) => {
  const onPending = () => {
    dispatch({
      type: GET_REPO_ISSUES_ACTION.PENDING,
    });
  };
  const onSuccess = (data) => {
    dispatch({
      type: GET_REPO_ISSUES_ACTION.SUCCESS,
      payload: data,
    });
  };
  const onError = (error) => {
    console.log('getRepoAction -> error', JSON.stringify(error));
    dispatch({
      type: GET_REPO_ISSUES_ACTION.ERROR,
      payload: error,
    });
  };

  actionTryCatchCreator({
    service: getRepoIssues(state),
    onPending,
    onSuccess,
    onError,
  });
};
