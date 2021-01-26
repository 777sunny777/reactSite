import React from 'react';
import PropTypes from 'prop-types';
import FullWidthGrid from '../common/fullWidthGrid.js';
import { Typography, Link, Alert } from '@material-ui/core';

const HelloWorld = () => {
  return (
    <FullWidthGrid>
        <Typography variant="h1" component="h2">
            h1. 标题
        </Typography>
        <Link href="#">
            12345
        </Link>
        <Alert severity="warning">This is a warning message!</Alert>
    </FullWidthGrid>
  )
}

export default HelloWorld;