import styled from 'styled-components'

export const SelectStyle = styled.select`
  height: 24px;
  border: none;
  color: #737380;
  background: none;
  cursor: pointer;
  float: right;

  option {
    height: 24px;
    padding: 16px;
    margin-bottom: 4px;
    cursor: pointer;

    &:hover {
      background-color: transparent;
      box-shadow: none;
    }
  }
`
