import styled from 'styled-components'


export const Card = styled.li`
  width: 300px;
  height: 300px;


  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

`

export const Title = styled.h2`
  color: ${({theme}) => theme.colors.text};
`

export const BuyButton = styled.button`
  border-radius: 10px;
  padding: 2px 24px;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.colors.action};
`

export const Container = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  
  list-style-type: none;
`