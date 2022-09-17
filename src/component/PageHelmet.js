import React from 'react';
import { Helmet } from 'react-helmet';

const PageHelmet = ({title}) => {
  return (
    <Helmet title={title}/>
  )
}

export default PageHelmet
