import React from 'react';
import { connect } from 'react-redux';

import './style.scss';

const Home = () => <main>this is home page</main>;

const mapStateToProps = () => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
