import styled from 'styled-components';

export const Coffees = styled.div `
  display: flex;
  gap: 32px;
  
  .coffeesCards {
    display: flex;
    flex-direction: column;
    width: 256px;
    height: 287px;

   // margin: 0px 32px 40px 160px;

    background: ${(props) => props.theme['base_card']};;
    border-radius: 6px 36px;
  }

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 83px;
  }

  figure img {
    position: absolute;
    padding-bottom: 15px;
  }

  .tagDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    margin: 12px 87.5px 16px 87.5px;
  }

  .tag {
    width: 81px;
    height: 21px;
    padding: 4px 8px;
    border-radius: 100px;
    background: ${(props) => props.theme['yellow_light']};
    font-size: 10px;
    line-height: 130%;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    color: ${(props) => props.theme['yellow_dark']};
    white-space: nowrap
  }

  h3 {
    margin-left: 20px;
    margin-right: 20px;

    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    text-align: center;

    color: ${(props) => props.theme['base_subtitle']};
  }

  figcaption {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 8px;
    height: 36px;
    text-align: center;

    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme['base_label']};;
  }
`;

export const BuyArea = styled.div `
  display: flex;
  height: 38px;
  margin: 33px 24px 20px 24px;

  .price {
    display: flex;
    align-items: center;
    margin-right: 23px;
    width: 67px;
  }

  .price .local-currency {
    color: ${(props) => props.theme['base_text']};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    line-height: 18.2px;
    margin-right: 2px;
  }

  .price .cost {
    color: ${(props) => props.theme['base_text']};
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 22px;
    line-height: 31.2px;
  } 

  .quantitySelector {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin-right: 8px;
    padding: 8px;
    border-radius: 6px;
        
    background: ${(props) => props.theme['base_button']};
    cursor: pointer;
  }

  .quantitySelector input {
    width: 20px;
    height: 21px;
    border: none;
    text-align: center;

    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    background: ${(props) => props.theme['base_button']};
  }

  .quantitySelector input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.cartAddButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;

    background: ${(props) => props.theme['purple_dark']};
    border-radius: 6px;
    border: none;
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme['purple']};
    }
}
  
`;