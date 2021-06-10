import styled from "styled-components";

export const Hero = styled.div`
box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
border-radius: 8px;
overflow: hidden;
background-color: white;
margin: 2rem;
display: flex;
flex-direction: column;
gap: 1rem;
   
    h2 {
        
        padding: 0 1rem;
        text-align: center;
        margin: 0.5rem 0;
    }

    img {
        width: 100%;
        object-fit: cover;
        height: 10rem;
    }

    address {
        gap: 0.5rem;
        align-items: center;
    }

    time {
        gap: 0.5rem;
        align-items: center;
    }

    @media (min-width: 768px) {
        
        img {
            width: 40%;
            height: 14rem;
        }
    }
  
`;

export const Button = styled.div`
text-decoration: none;
cursor: pointer;
font: inherit;
background-color: #03be9f;
border: 1px solid #03be9f;
border-radius: 6px;
color: #dafff7;
padding: 0.5rem 1.5rem;
text-align: center;
box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);

&:hover {
    background-color: #02afa1;
    border-color: #02afa1;
}

`;

