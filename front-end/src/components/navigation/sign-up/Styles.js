import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  height: 2rem;
  font-size: 0.833rem;
  font-weight: 600;
  line-height: 1.025rem;
  text-align: center;
  color: rgb(255, 255, 255);
  cursor: pointer;
  background-color: #605649;
  border: 1px solid #605649;
  font: Roboto, sans-serif;
  border-radius: 0.25rem;
  &:hover {
    opacity: 0.9;
  }
`;
