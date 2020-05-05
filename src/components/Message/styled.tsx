import styled from 'styled-components';

export const StyledMessage = styled.div`
  font-size: 20px;
  padding: 20px;
  
  &.empty {
    color: #fff;
  }
  
  &.error {
    color: #ef4070;
  }
  
  &.warning {
    color: #ffb48f;
  }
  
  &.success {
    color: #17e9e0;
  }
  
  &.info {
    color: #4070ef;
  }
`;
