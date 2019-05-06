import React from 'react';
import { object } from 'prop-types';
import { InfoList } from './components';


Info.propTypes = {
  data: object.isRequired
};


export function Info({ data }) {
  return (
    <InfoList data={data} />
  );
}
