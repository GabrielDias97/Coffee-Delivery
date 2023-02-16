import styled from 'styled-components'

export const SuccessContainer = styled.div`

`;

export const LeftDiv = styled.div`
    .successIntro {


        h2 {
            font-family: 'Baloo 2';
            font-style: normal;
            font-weight: 800;
            font-size: 32px;
            line-height: 130%;
            color: ${(props) => props.theme['yellow_dark']};
        }

        p {
            font-weight: 400;
            font-size: 20px;
            line-height: 130%;
            color: ${(props) => props.theme['base_subtitle']};
        }
    }

    .successInfo {
        width: 526px;
        height: 270px;

        border: double 1px transparent;
        border-radius: 6px 36px;
        background-image: linear-gradient(white, white), radial-gradient(circle at left, #DBAC2C, #8047F8);
        background-origin: border-box;
        background-clip: content-box, border-box;

        .deliveryAdress {
            display: flex;
            gap: 12px;
            color: ${(props) => props.theme['base_text']};

            .mapIcon {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 8px;
                width: 32px;
                height: 32px;
                padding: 8px;
                border-radius: 1000px;

                background: ${(props) => props.theme['purple']};
            }
        }
    }
`;

export const RightDiv = styled.div`

`;