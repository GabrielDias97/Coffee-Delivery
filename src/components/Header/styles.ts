import styled from 'styled-components';

export const HeaderContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 320px;
  padding: 2rem 8.125rem;
`;

export const ShoppingInfo = styled.div `
  display: flex;
  align-items: center;
  gap: 12px;
  width: 12.063rem;
  height: 2.375rem;
`;

export const LocalizationInfo = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 8.938rem;
  height: 2.375rem;
  padding: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme['purple_light']};
  color: ${(props) => props.theme['purple_dark']};;
`;

export const ShoppingCartDiv = styled.div `
  display: flex;
  justify-content: center;
  width: 2.375rem;
  height: 2.375rem;
  padding: 8px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow_light']};
`;