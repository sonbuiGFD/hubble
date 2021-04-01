import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getRepoIssueAction } from 'pages/home/action';

import ListIssues from 'components/ListIssues';

import './style.scss';

const Home = ({ getRepoIssue, state }) => {
  useEffect(() => {
    getRepoIssue(state);
  }, []);

  return (
    <main>
      <ListIssues />
    </main>
  );
};

const mapStateToProps = ({ home }) => ({
  state: home.filter.state,
});
const mapDispatchToProps = {
  getRepoIssue: getRepoIssueAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
