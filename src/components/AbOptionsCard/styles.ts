
import styled from "styled-components";


export const styledSection = styled.section<{isSelected: boolean}>`
width: 193.67px;
height: 88px;
background: ${props => props.isSelected ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#FFFFFF'};
border: 1px solid #EB9B00;
border-color: ${props => props.isSelected? '#002F52' : '#EB9B00'};
border-radius: 8px;
display: flex;
flex-direction: column;
justify-content: space-around;
text-align: center;
margin: 10px;
font-family: sans-serif;
cursor: pointer;
header {
    color:  ${props => props.isSelected? '#FFF' : '#EB9B00'};
    font-size: 12px;
    font-weight: 400;
}
strong {
    color: ${props => props.isSelected? '#FFF' : '#EB9B00'};
    font-size: 16px;
    font-weight: 700;

}
footer {
    color: ${props => props.isSelected? '#FFF' : 'rgba(0, 0, 0, 0.54);'};
    font-weight: 400;
font-size: 12px;
}
`