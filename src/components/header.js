import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    margin: 20,
    float: 'left',
    fontSize: 30,
  },
});

const Header = () => {
  const css = useStyles();
  return (
    <div>
      <div className={css.header}>
        <Button href='#/' variant='contained' color='primary'>
          Home
        </Button>
      </div>
      <div className={css.header}>
        <Button href='#/rechart' variant='contained' color='primary'>
          ReChart
        </Button>
      </div>
      <div className={css.header}>
        <Button href='#/nivo' variant='contained' color='primary'>
          Nivo
        </Button>
      </div>
      <div className={css.header}>
        <Button href='#/bizchart' variant='contained' color='primary'>
          BizChart
        </Button>
      </div>
      <div style={{ clear: 'both' }}></div>
    </div>
  );
};

export default Header;
