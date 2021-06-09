import styled from "styled-components";

export const Hero = styled.div`
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
    background-color: white;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
   
    h2 {
        width: 100%;
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
  
`

