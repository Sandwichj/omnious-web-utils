// Global import
import * as React from 'react';

// Local import
import { IField } from '../IField';
import { SearchInput } from './styles';

export interface Props extends IField {
}

export class SearchField extends React.PureComponent<Props> {
  static defaultProps = {
    isFormField: true,
  };

  render() {
    return (
      <SearchInput {...this.props} type='search' placeholder='Search...' />
    );
  }
}