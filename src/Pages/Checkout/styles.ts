import styled from 'styled-components'

export const CheckoutContainer = styled.div `
  display: flex;
`;

export const CheckoutLeftDiv = styled.div `

  margin: 40px 32px 0px 379px;

  h3 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 130%;
      color: ${(props) => props.theme['base_subtitle']};
    }
`;

export const LeftBox = styled.div `
  width: 640px;
  height: 591px;
  margin-top: 15px;
`;

export const AdressFormDiv = styled.div `
  padding: 40px;
  background: ${(props) => props.theme['base_card']};
  border-radius: 6px;

  .adressFormIntro {
      display: flex;
      flex-direction: column;
      gap: 4px;
  }

  .adressFormIntro h4 {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;

      color: ${(props) => props.theme['base_subtitle']};
  }

  .adressFormIntro p {
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      margin-left: 30px;
      color: ${(props) => props.theme['base_text']};
  }

`;

export const AdressInputs = styled.div `
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 32px;

  input {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: ${(props) => props.theme['base_label']};

      height: 42px;
      padding: 12px;
      border: 1px solid ${(props) => props.theme['base_button']};
      border-radius: 4px;
      background: ${(props) => props.theme['base_input']};

      :focus {
        outline: 1px solid ${(props) => props.theme['yellow_dark']};
      }
  }

  .streetDiv input {
    width: 560px
  }

  .numberDiv {
    display: flex;
    gap: 12px;
  }

  #number {
    width: 200px;
  }

  #complement {
    width: 348px;
  }

  #optional {
    position: absolute;
    top: 433px;
    left: 914px;

    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    color: ${(props) => props.theme['base_label']};
  }

  #complement:not(:placeholder-shown) + #optional {
    display: none;
  } 

  .neighborhoodDiv {
    display: flex;
    gap: 12px;
  }

  #neighborhood {
    width: 200px;
  }

  #city {
    width: 276px
  }

  #UF {
    width: 60px
  }
`;

export const PaymentDiv = styled.div`
  width: 640px;
  height: 207px;
  padding: 40px;
  margin-top: 12px;
  background: ${(props) => props.theme['base_card']};
  border-radius: 6px;

  .paymentIntro {
    display: flex;
    flex-direction: column;

    h4 {
      font-weight: 400;
      font-size: 16px;
      color: ${(props) => props.theme['base_subtitle']};
      line-height: 130%;
      
      display: flex;
      align-items: flex-end;
      gap: 8px;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      color: ${(props) => props.theme['base_text']};
      line-height: 130%;

      margin-left: 30px;
    }
  }

  .method {
    display: flex;
    gap: 12px;
    width: 560px;
    height: 51px;
    margin-top: 32px;

    button {
      display: flex;
      align-items: center;
      padding: 16px;
      gap: 12px;
      
      width: 178.67px;
      height: 51px;

      font-weight: 400;
      font-size: 12px;
      line-height: 160%;
      color: ${(props) => props.theme['base_text']};
      text-transform: uppercase;

      background: ${(props) => props.theme['base_button']}; ;
      border: none;
      border-radius: 6px;
      cursor: pointer;

      :hover {
        background: ${(props) => props.theme['base_hover']};
      }
    }
  }
`;

export const CheckoutRightDiv = styled.div `
  margin: 40px 160px 0px 32px;


  h3 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: ${(props) => props.theme['base_subtitle']};
    margin-bottom: 15px;
  }
`;

export const RightBox = styled.div`
  width: 448px;
  height: 498px;
  padding: 10px 40px 40px 40px;
  border-radius: 6px 44px;

  background: ${(props) => props.theme['base_card']};

  button {
    width: 368px;
    height: 46px;

    background: ${(props) => props.theme['yellow']};
    border-radius: 6px;
    border: none;

    color: ${(props) => props.theme['white']};
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['yellow_dark']};
    }
    
  }

  .sumOfValues {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .totalItems, .delivery {
    display: flex;
    justify-content: space-between;

    color: ${(props) => props.theme['base_text']};
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }

  .total {
    display: flex;
    justify-content: space-between;

    color: ${(props) => props.theme['base_subtitle']};
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }
`;