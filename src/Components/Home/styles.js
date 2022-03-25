import styled from 'styled-components';
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
    background-color: #f9fafe;
    /* background-color: red; */
    width: 100%;
    /* height: 150px; */
    /* height: auto; */
`
export const HomeSection = styled.div`
    margin-top: 50px ;
    /* background-color:yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`
export const HomeLogo = styled.img`
    padding-right: 0;
    border: 0;
    vertical-align: middle;
    display: inline-block;
    max-height: 200px;
    max-width: 200px;

`

export const HomeTitle = styled.h1`
    font-family: sans-serif;
    font-weight: 700;
    font-size: 54px;
    line-height: 70px;
    margin: 0px;
    padding:3px;
`

export const HomeSub = styled.div`
    font-family: sans-serif;
    font-weight: 400;
    width: 70%;
    font-size: 18px;
    line-height: 27px;

`
export const ScheduleGrid = styled.div`
    background-color: #f9fafe;
    color: black;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 50px 50px;
    grid-gap: 50px;    
    border: 10px lightblue;
    margin: 50px;
    width: 75%;
`
export const ScheduleItem = styled(LinkR)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    color: black;

    &:hover {
     /* color: #0467fb; */
    transition: 0.3s ease-out;
}
`
export const ScheduleItemButton = styled.button`
    height: max-content;
    display: flex;
    flex-direction:column;
    padding: 0.5rem;
    font-size: 18px;
    line-height: 1.5rem;
    font-weight: bold;
    border-radius: 16px;
    color: black;
`
export const ItemHeading = styled.div`
    margin: auto;
    /* width:auto; */
    
`

export const ItemInformation = styled.div`
    margin-top: 18px;
`