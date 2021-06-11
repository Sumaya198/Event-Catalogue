import styled from 'styled-components';

export const Header = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: baseline;
padding: 1rem 10%;
height: 5rem;
background-color: #202020;
`;

export const Logo = styled.div`
font-size: 1.5rem;
    color: white;
    font-family: 'Fira', sans-serif;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #94fdfd;

    a {
        text-decoration: none;
        color: #94fdfd;
    }
`;

export const Nav = styled.div`
text-decoration: none;
color: #74dacc;
font-size: 1rem;
`;