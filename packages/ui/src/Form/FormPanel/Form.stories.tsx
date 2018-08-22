// Global import
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Form } from './Form';
import { SearchField } from '../Field/Search/SearchField';

storiesOf('Component | Form.Form', module).add(
  'DIY',
  (): JSX.Element => {
    return (
      <Form>
        <input type='text' />
        <SearchField />
      </Form>
    );
  }
);