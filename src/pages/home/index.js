import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getRepoIssueAction } from 'pages/home/action';

import './style.scss';

const Home = ({ getRepoIssue, state }) => {
  useEffect(() => {
    getRepoIssue(state);
  }, []);

  return <main>this is home page</main>;
};

const mapStateToProps = ({ home }) => ({
  state: home.filter.state,
});
const mapDispatchToProps = {
  getRepoIssue: getRepoIssueAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
