import styled from 'styled-components';

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
`;

export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #A0AAB4;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    min-height: 300px;
    max-height: 500px; 
`;

export const ProductImage = styled.img`
    max-height: 10rem;
    border-radius: 8px;
    object-fit: cover;
    place-self: center;
`;

export const ProductFooter = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    align-items: center;
    margin-top: auto;
`;

export const Price = styled.p`
    font-family: sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #1B2126; 
    margin: 0.5rem 0; 
    line-height: 1.5;
`;
