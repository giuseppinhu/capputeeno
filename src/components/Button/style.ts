import styled from 'styled-components'

type Props = {
  active: boolean | undefined
}

export const Category = styled.button<Props>`
  all: unset;

  background-color: none;
  border: none;
  color: ${(props) => props.active === true ? '#41414D' : '#737380'};
  font-size: 16px;
  padding-bottom: 4px;
  text-transform: uppercase;
  margin-right: 40px;
  border-bottom: 4px solid ${(props) => props.active === true ? '#ffa585' : 'none'} ;
  font-weight: 600;

`
