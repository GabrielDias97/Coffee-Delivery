import  styled  from 'styled-components';

export const IntroDiv = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 34rem;
  padding: 92px 115px;
  margin-right: 160px;
  margin-left: 160px;
`;

export const LeftDiv = styled.div`
  
  
  h1 {
    
    font-family: 'Baloo 2', cursive;
    font-size: 48px;
    font-weight: 800;
    line-height: 3.9rem;
  }

  p {
    font-size: 20px;
    line-height: 26px;
  }
`;

export const RightDiv = styled.div `
  display: flex;
  justify-content: flex-end;
  width: 533px;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`;

export const IntroHeaders = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 36.75rem;
  height: 12rem;
  margin-bottom: 66px;
`;

export const FeatureList = styled.div `
  display: flex;
  gap: 20px;
  width: 35.438rem;
  height: 5.25rem;
  font-size: 1rem;

  #featureListLeftDiv{
    display: flex;
    flex-direction: column;
  }

  #simplePurchase {
    display: flex;
    align-items: center;
    width: 14.438rem;
    gap: 12px;
    margin-right: 40px;
    margin-bottom: 20px;
  }

  #shoppingCartFeaturesIcon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 1000px;
    background-color: ${(props) => props.theme['yellow_dark']};
  }

  #fastDelivery {
    display: flex;
    align-items: center;
    width: 14.438rem;
    gap: 12px;
    margin-right: 40px;
    margin-bottom: 20px;
  }

  #timerFeaturesIcon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 1000px;
    background-color: ${(props) => props.theme['yellow']};
  }

  #featureListRightDiv{
    display: flex;
    flex-direction: column;
  }

  #packing {
    display: flex;
    align-items: center;
    width: 18.375rem;
    gap: 12px;
    margin-bottom: 20px;
  }

  #packageFeaturesIcon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 1000px;
    background-color: ${(props) => props.theme['base_text']};
  }

  #freshCoffee {
    display: flex;
    align-items: center;
    width: 18.375rem;
    gap: 12px;
    margin-bottom: 20px;
  }

  #coffeeFeaturesIcon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 1000px;
    background-color: ${(props) => props.theme['purple']};
  }
`;