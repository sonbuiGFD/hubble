import React from 'react';
import { connect } from 'react-redux';

import { LIST_STATES } from 'config';

import { updateFilterAction } from 'pages/home/action';

import './style.scss';

const IssuesFilter = ({ state, updateFilter }) => {
  const handleFilter = (newstate) => {
    updateFilter({
      state: newstate,
    });
  };

  return (
    <div className="issues_filter">
      <div className="container">
        {LIST_STATES.map((sta) => (
          <button
            type="button"
            onClick={() => handleFilter(sta)}
            key={`issues_filter__item__${sta}`}
            className={`issues_filter__item ${sta === state ? 'active' : ''}`}
          >
            {sta}
          </button>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ home }) => ({
  state: home.filter.state,
});

const mapDispatchToProps = {
  updateFilter: updateFilterAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesFilter);
