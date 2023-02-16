import  styled  from 'styled-components';

export const Background = styled.div `
  filter: blur(80px);
`;

export const IntroDiv = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 34rem;
  padding: 92px 160px;
  
`;

export const LeftDiv = styled.div`
  
  
  #vector1 {
    position: absolute;
    left: 15.52%;
    right: 65.54%;
    top: 37%;
    bottom: 43.41%;

    opacity: 0.15;
    transform: matrix(-1, 0.05, 0.01, 1, 0, 0);
    filter: blur(80px);
  }

  #vector2 {
    position: absolute;
    left: 28.22%;
    right: 40.92%;
    top: 20.86%;
    bottom: 70.13%;

    background: #8047F8;
    opacity: 0.15;
    transform: matrix(-1, -0.03, 0.03, -1, 0, 0);
    filter: blur(80px);
  }

  #vector3 {
    position: absolute;
    left: 42.75%;
    right: 42.64%;
    top: 45.91%;
    bottom: 44.17%;

    background: #8047F8;
    opacity: 0.15;
    transform: matrix(-1, 0.03, 0.03, 1, 0, 0);
    filter: blur(80px);
  }

  #vector4 {
    position: absolute;
    left: 13.04%;
    right: 73.55%;
    top: 19.99%;
    bottom: 60.11%;

    background: #EBC136;
    opacity: 0.15;
    transform: matrix(-1, -0.08, 0.05, -1, 0, 0);
    filter: blur(80px);
  }

  #vector5 {
    position: absolute;
    left: 50.04%;
    right: 75.55%;
    top: 50.99%;
    bottom: 8.11%;

    background: #EBC136;
    opacity: 0.15;
    transform: matrix(-1, -0.08, 0.05, -1, 0, 0);
    filter: blur(80px);
  }

  #vector6 {
    position: absolute;
    left: 5.12%;
    right: -15.47%;
    top: 38.83%;
    bottom: -6.5%;

    transform: matrix(-1, 0.04, -0.04, -1, 0, 0);
    filter: blur(80px);
  }

  #vector7 {
    position: absolute;
    left: 81.82%;
    right: -18.91%;
    top: 21.41%;
    bottom: 48.01%;

    background: #8047F8;
    opacity: 0.15;
    transform: matrix(-1, -0.04, -0.04, 1, 0, 0);
    filter: blur(80px);
  }

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