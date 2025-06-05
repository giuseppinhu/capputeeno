import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  max-width: 250px;
  height: 390px;
  width: 100%;
  cursor: pointer;

  .border-radius {
    border-radius: 8px 8px 0 0;
    object-fit: cover;
  }

  .card-body {
    padding: 8px 12px;
  }
`

export const Title = styled.h4`
  font-size: 16px;
  font-weight: 300;
  color: #41414d;
`

export const Price = styled.span`
  font-size: 14px;
  font-weight: 600;
`
