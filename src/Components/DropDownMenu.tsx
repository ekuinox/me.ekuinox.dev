import * as React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, LinkProps } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import {path as AboutPath} from './Routes/About'
import {path as ContactsPath} from './Routes/Contacts'
import {path as LinksPath} from './Routes/Links'
import {path as ProductsPath} from './Routes/Products'
import {path as WorksPath} from './Routes/Works'
import {path as LikesPath} from './Routes/Likes'
import { ColorProperty } from 'csstype'
import red from '@material-ui/core/colors/red'

const NoneTextDecorationLink: React.StatelessComponent<LinkProps> = (props) => {
    return <Link to={props.to} style={{textDecoration: 'none'}}>{ props.children }</Link>
}

interface State {
    anchorEl: any
}

export default class DropDownMenu extends React.Component<{}, State> {

    constructor() {
        super({})
        this.state = { anchorEl: null }
        this.onClick = this.onClick.bind(this)
        this.onClose = this.onClose.bind(this)
    }

    onClick(event: React.MouseEvent<HTMLElement, MouseEvent>) {
        this.setState({ anchorEl: event.currentTarget })
    }

    onClose() {
        this.setState({ anchorEl: null })
    }

    

    render() {
        const { anchorEl } = this.state;
        const MenuItemButton: React.StatelessComponent<{to: string, title: string, color?: ColorProperty}> = (props) => {
            return (
                <NoneTextDecorationLink to={props.to} >
                    <MenuItem
                        onClick={this.onClose}
                        style={{
                            height: '5vh',
                            fontSize:'4vh',
                        }}>
                        <p style={{
                            fontSize: '80%',
                            height: '100%',
                            color: props.color,
                            }}>
                            {props.title}
                        </p>
                    </MenuItem>
                </NoneTextDecorationLink>
            )
        }

        return (
            <div>
                <Button
                    aria-owns={anchorEl ? 'drop-down-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.onClick}
                >
                    <MenuIcon style={{color: 'white', height: '8vh', width: '5vw'}} />
                </Button>
                <Menu
                    id="drop-down-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.onClose}
                >
                    <MenuItemButton to={AboutPath} title="Home" color={red[300]} />
                    <MenuItemButton to={ContactsPath} title="Contacts" color={red[300]} />
                    <MenuItemButton to={LinksPath} title="Links" color={red[300]} />
                    <MenuItemButton to={ProductsPath} title="Products" color={red[300]} />
                    <MenuItemButton to={LikesPath} title="Likes" color={red[300]} />
                    <MenuItemButton to={WorksPath} title="Works" color={red[300]} />
                </Menu>
            </div>
        );
    }
}
