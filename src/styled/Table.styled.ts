import styled from "styled-components";

export const Table = styled.table`
    display: table;
    width: 80%;
    border-collapse: separate;
    border-spacing: 0px;
    border: 1px solid rgb(81, 81, 81);
`
export const Thead = styled.thead`
    display: table-header-group;
`
export const Tr = styled.tr`
    color: inherit;
    display: table-row;
    vertical-align: middle;
    outline: 0px;
`
export const Th = styled.th`
    font-family : "Roboto";
    font-weight: 500;
    text-align: right;
    padding: 16px;
    color: white;
    background-color: #38A37F;
    border-bottom: 1px solid rgba(81, 81, 81);
`
export const TBody = styled.tbody`
    display: table-row-group;
`
export const Td = styled.td`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    display: table-cell;
    vertical-align: inherit;
    border-bottom: 1px solid rgb(81, 81, 81);
    text-align: left;
    padding: 16px;
    color: black;
    background-color : rgba(205, 255, 112, 0.6);
`