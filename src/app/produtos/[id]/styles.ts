import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  .content {
    display: flex;
    flex-direction: column;
  }
`

export const Title = styled.h2`
  font-size: 32px;
  color: #41414d;
  font-weight: 300;
`

export const SubTitle = styled.h4`
  font-size: 16px;
  color: #737380;
`

export const Quote = styled.h4`
  font-size: 12px;
  color: #41414d;
  font-weight: 400;
  margin: 24px 0 58px 0;
`

export const Price = styled.span`
  display: block;
  font-weight: 600;
  font-size: 20px;
  color: #09090a;
`

export const Description = styled.p`
  color: #737380;
`

export const ButtonCart = styled.button`
  margin-top: auto;
  width: 100%;
  background-color: #115d8c;
  border: none;
  border-radius: 4px;
  padding: 10px;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    margin-right: 12px;
  }
`
