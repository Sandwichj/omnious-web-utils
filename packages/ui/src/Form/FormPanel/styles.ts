// Global import
import styled from 'styled-components';

// Local import

export const StyleWrapper: any = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: stretch;
  > * {
    flex: 1 100%;
    margin: 5px;
  };
  width: 100%;
`;