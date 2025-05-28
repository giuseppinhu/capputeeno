import styled from 'styled-components'

type Props = {
  active: boolean | void
  category?: 'mugs' | 'all' | 't-shirts'
}

export const Category = styled.button<Props>`
  all: unset;
  user-select: none;

  background-color: none;
  border: none;
  color: ${(props) => (props.active === true ? '#41414D' : '#737380')};
  font-size: 16px;
  padding-bottom: 4px;
  text-transform: uppercase;
  margin-right: 40px;
  border-bottom: 4px solid
    ${(props) => (props.active === true ? '#ffa585' : 'none')};
  font-weight: 600;
  cursor: pointer;
`

export const Pagination = styled.button<Props>`
  all: unset;
  user-select: none;

  width: 32px;
  height: 32px;
  text-align: center;

  padding: 4px;
  font-size: 16px;
  color: ${(props) => (props.active === true ? '#ffa585' : '#737380')};
  background-color: ${(props) =>
    props.active === true ? '#F5F5FA' : '#E9E9F0'};
  border: 1px solid
    ${(props) => (props.active === true ? '#ffa585' : 'transparent')};
  border-radius: 8px;
  cursor: pointer;
`
