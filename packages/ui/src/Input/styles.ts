// Global import
import styled from 'styled-components';

// Local import
import { InputProps } from './Input';
import { white } from '../colors';
import { radius } from '../sizes';

export const StyledInput: any = styled.label`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  ${({ disabled }: InputProps): string =>
    disabled
      ? `
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  `
      : ''};

  & .title {
    margin-bottom: 0.5rem;
  }

  & .input {
    border: 1px solid #cfdadf;
    border-radius: ${radius.xs};
    padding: 0.8rem 1rem;
    width: ${({ width }: any): string => width || '20rem'};

    &:focus {
      background-color: ${white.primary};
      border: 1px solid #bccbd2;
      outline: 0;
    }

    &::placeholder {
      color: #5a6872;
    }
  }
`;
