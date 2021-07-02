import React from 'react'
import styled from 'styled-components'

const Nav = () => {
    return (
        <NavHolder>
            <h1>Akhil</h1>
            <p>X</p>
        </NavHolder>
    )
}

const NavHolder = styled.div`

width:100%;
padding:20px 20px 20px 40px;
display: flex;
align-items: center;
justify-content:space-between;

`
export default Nav;