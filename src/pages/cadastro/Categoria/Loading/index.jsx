/* eslint-disable linebreak-style */
import React from 'react';
import './loading.css';
import loadIcon from '../../../../assets/img/loading.png';

function Loading() {
  return (
    <div className="loadingDiv">
      <h3 className="loadText">Loading</h3>
      <img className="loadIcon" src={loadIcon} alt="LoadIcon" />
    </div>
  );
}

export default Loading;
