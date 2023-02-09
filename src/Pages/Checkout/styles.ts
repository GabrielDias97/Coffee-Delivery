import styled from 'styled-components'

export const CheckoutContainer = styled.div `

`;

export const CheckoutLeftDiv = styled.div `


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
      background: ${(props) => props.theme['base_input']} ;
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
    top: 392px;
    left: 537px;

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
    }
  }
`;

export const CheckoutRightDiv = styled.div `

`;