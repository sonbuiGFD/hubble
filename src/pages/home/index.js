import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getRepoIssueAction } from 'pages/home/action';

import Header from 'components/Header';
import IssuesFilter from 'components/IssuesFilter';
import ListIssues from 'components/ListIssues';

import './style.scss';

const Home = ({ getRepoIssue }) => {
  useEffect(() => {
    getRepoIssue();
  }, []);

  return (
    <>
      <Header />
      <main>
        <IssuesFilter />
        <ListIssues />
      </main>
    </>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  getRepoIssue: getRepoIssueAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
