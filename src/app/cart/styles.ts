import styled from 'styled-components'

export const Container = styled.div`
    color: #41414D;
    position: relative;
    min-height: 80vh;
`

export const Title = styled.h1`
    font-weight: 500;
    font-size: 24px;
`

export const Product = styled.div`
    display: flex;
    max-width: 736px;
    width: 100%;
    background-color: #fff;
    margin-top: 24px;
    border-radius: 8px;

    .content {
        margin-left: 16px;
        padding: 16px;
        position: relative;

        h4 {
            font-size: 20px;
            font-weight: 300;
        }

        p {
            margin: 16px 0;
            text-align: justify;
        }

        select {
            padding: 12px;
            border-radius: 8px;
            border: none;
        }

        b {
            float: right;
        }

        svg {
            position: absolute;
            right: 16px;
            top: 16px;
            cursor: pointer;
        }
    }
`

export const Aside = styled.aside`
    max-width: 352px;
    width: 100%;
    max-height: 700px; 
    height: 100%;
    background-color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    padding: 16px 24px;
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 24px;
    }

    
    .bold {
        font-weight: bold;
    }

    ul {
        margin-top: auto;
    }

`

export const Infos = styled.span`
    width: 100%;
    display: inline-flex;
    font-size: 16px;
    margin-bottom: 12px;
    justify-content: space-between;
`

export const AsideButton = styled.button`
    padding: 16px;
    color: #F5F5FA;
    background-color: #51B853;
    border: none;
    width: 100%;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 8px;
    margin-top: 28px;
`

export const AsideLink = styled.a`
    text-transform: uppercase;
    color: #737380;
    text-weight: 500;
`