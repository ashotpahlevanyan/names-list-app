import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const StyledText = styled.div`
  color: #17e9e0;
  font-size: 20px;
  font-weight: bold;
`;

export const StyledIconButton = styled(IconButton)``;

export const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  
  &:hover {
    background-color: #f5e6cc;
    
    ${StyledText} {
      color: #4070ef;
    }
    
    ${StyledIconButton} {
      color: #ef4070;
      background-color: #fff;
    }
  }
`;

