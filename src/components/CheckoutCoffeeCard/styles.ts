import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 368px;
  height: 80px;
  margin-top: 25px;
  margin-bottom: 25px;

  .imgDiv, img {
      width: 64px;
      height: 64px;
      margin-right: 20px;
  }

  .coffeeInfoDiv {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
      
    h4 {
      width: 148px;
      height: 21px;
      margin-bottom: 8px;

      font-weight: 400;
      font-size: 16px;
      line-height: 130%;

      color: ${(props) => props.theme['base_subtitle']};
    }

    .midDiv {
      display: flex;
      gap: 8px;
    }
    

    .quantityDiv {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 72px;
      height: 32px;

      background: ${(props) => props.theme['base_button']};
      border-radius: 6px;

      input {
        width: 20px;
        height: 20px;
        text-align: center;
        background: ${(props) => props.theme['base_button']};
        border: none;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    .removeDiv {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      width: 91px;
      height: 32px;

      background: ${(props) => props.theme['base_button']};
      border-radius: 6px;
      cursor: pointer;

      :hover {
        background: ${(props) => props.theme['base_hover']};
      }

      span {
        padding-top: 1px;
        font-weight: 400;
        font-size: 12px;
        line-height: 160%;
        text-transform: uppercase;
        color: ${(props) => props.theme['base_text']};

      }
    }
  }

  .price {
    display: flex;
    gap: 3px;

    .local-currency, .cost {
      color: ${(props) => props.theme['base_text']};
      font-family: 'Baloo 2';
      font-weight: 700;
      font-size: 16px;
      line-height: 130%;
    }
  }
`;

export const BorderAtBottom = styled.div`
  width: 368px;
height: 0px;

/* Base/Button */

border: 1px solid ${(props) => props.theme['base_button']};
`;