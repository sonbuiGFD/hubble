import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { formatDate } from 'utils';

import { getRepoIssueDetailAction } from 'pages/home/action';

import './style.scss';

const ListIssues = ({ issues, selected, getRepoIssueDetail }) => {
  const [modal, setModal] = useState(false);
  const [currentIssue, setCurrentIssue] = useState(null);

  const toggle = () => setModal(!modal);

  const handleGetDetailIssue = (issue) => {
    setCurrentIssue(issue);
    setModal(true);
    getRepoIssueDetail(issue.number);
  };

  return (
    <div className="list_issues">
      <div className="container">
        {issues.map((issue) => (
          <div
            onClick={() => handleGetDetailIssue(issue)}
            key={`list_issues__item__${issue.id}`}
            className="list_issues__item"
          >
            <div className="list_issues__title">{issue.title}</div>
            <div className="list_issues__info">
              <span>#{issue.number} </span>
              <span>on {formatDate(issue.created_at)} </span>
              <span>buy {issue?.user?.login}</span>
            </div>
          </div>
        ))}
      </div>

      <Modal centered isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{currentIssue?.title}</ModalHeader>
        <ModalBody>{selected?.body}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const mapStateToProps = ({ home }) => {
  const { state } = home.filter;
  let filterdIssues = home.data.issues;
  if (state !== 'all') {
    filterdIssues = filterdIssues.filter((issue) => issue.state === state);
  }

  return {
    issues: filterdIssues,
    selected: home.data.selected,
  };
};

const mapDispatchToProps = {
  getRepoIssueDetail: getRepoIssueDetailAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListIssues);
