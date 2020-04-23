import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  box: {
    boxSizing: 'border-box',
    float: 'left',
    width: 500,
    height: 500,
    margin: 50,
    textAlign: 'center',
  },
  name: {
    display: 'inline-block',
    fontSize: 20,
  },
});

const Chart = (props) => {
  const { Component, name } = props;
  const css = useStyles();
  return (
    <div className={css.box}>
      <Component />
      <div className={css.name}>{name}</div>
    </div>
  );
};

export default Chart;
