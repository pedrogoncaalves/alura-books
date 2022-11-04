import styled, {css} from 'styled-components';
import { AbButtonprops } from '.';


export const styledButton = styled.button<AbButtonprops>`
background:${(props: AbButtonprops) => props.type === 'primario' ? '#EB9B00' : '#FFF'};
padding: 16px 32px;
border: 2px solid #EB9B00;
color: ${(props: AbButtonprops) => props.type === 'primario' ? '#FFF' : '#EB9B00'};
font-size: 20px;
cursor: pointer;

${(props: AbButtonprops) => props.type === 'primario'
 ? css`
 &:hover {
    background: #B87900;
    border: 2px solid #B87900;
} 
`
: css`
&:hover {
    background: #FFF;
    border: 2px solid #B87900;
    color: #B87900;
}

`
}
`