import styled from 'styled-components';


export const styledCard = styled.div`
display: flex;
background: #FFFFFF;
align-items: flex-start;
justify-content: space-between;
width: 34.35rem;
height: 23.37rem;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;

@media (max-width: 800px) {
    flex-direction: column;
  }
`