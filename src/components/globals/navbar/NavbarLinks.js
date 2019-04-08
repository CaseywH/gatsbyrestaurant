import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'gatsby';
import {styles} from '../../../utils';


export default class NavbarLinks extends Component {
    state = {
        links: [
            {
                id: 0,
                path: '/',
                name: 'Home'
            },
            {
                id: 1,
                path: '/about/',
                name: 'About'
            },
            {
                id: 2,
                path: '/menu/',
                name: 'Menu'
            },
            {
                id: 3,
                path: '/contact',
                name: 'Contact'
            }
        ]
    }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {
            this.state.links.map(item=> {
                return(
                    <li ley={item.id}>
                        <Link to={item.path} className='nav-link'>{item.name}</Link>
                    </li>
                )
            })
        }
      </LinkWrapper>
    )
  }
}


const LinkWrapper = styled.ul`
li{
    list-style-type: none;
}
.nav-link{
    display: block;
    text-decoration: none;
    padding: .5rem 1rem;
    color: ${styles.colors.mainGrey};
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:Hover{
        background: ${styles.colors.mainGrey};
        color: ${styles.colors.mainYellow};
        padding: .5rem 1rem .5rem 1.3rem;
    }
}
height: ${props => (props.open ? '152px' : '0px')};
overflow: hidden;
${styles.transObject({time:'1s'})};
@media (min-width: 768px){
    height:auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover{
        background: ${styles.colors.mainWhite};
        padding: .5rem 1rem;
    }
}
`