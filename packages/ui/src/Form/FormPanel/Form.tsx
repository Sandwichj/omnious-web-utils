// Global import
import * as React from 'react';

// Local import
import { IField } from '../Field/IField';
import { StyleWrapper } from './styles';

export interface Props extends React.HTMLAttributes<HTMLFormElement> {
  children: React.ReactElement<IField>[] | React.ReactElement<IField>,
}

export class Form extends React.PureComponent<Props> {
  validateField = (children: React.ReactElement<IField>[] | React.ReactElement<IField>): void => {
    const isFormField = (child: React.ReactElement<IField>) => {
      const { isFormField } = child.props;
  
      return isFormField;
    };

    const isInput = (child: React.ReactElement<IField>) => {
      const ELEMENT_TYPE_INPUT = 'input';

      return child.type === ELEMENT_TYPE_INPUT;
    }
    
    if (!Array.isArray(children)) {
      children = [children];
    }

    children.forEach((child) => {
      if (isInput(child)) {
        return;
      }

      if (!isFormField(child)) {
        throw 'Form must have only form fields.'; 
      }
    });
  }

  render() {
    const {
      children,
      ...props
    } = this.props;

    this.validateField(children);

    return (
      <StyleWrapper {...props}>
        {children}
      </StyleWrapper>
    );
  }
}