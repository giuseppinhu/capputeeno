import styled from 'styled-components'

export const HeaderStyle = styled.header`
  background-color: #fff;
  height: 80px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    display: flex;
    align-items: center;
    width: 544px;
    height: 80px;
    color: #5d5d6d;
    font-size: 40px;
  }

  .bag {
    position: relative;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: -5px;
      bottom: 0;
      width: 16px;
      height: 16px;
      background-color: red;
      border-radius: 50%;
      font-size: 10px;
      color: #fff;
    }
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  background-color: #f3f5f6;
  border-radius: 8px;

  input {
    width: 100%;
    height: 40px;
    padding: 16px;
    border: none;
    outline: none;
    background-color: transparent;
  }

  svg {
    margin: 0 8px;
  }
`
