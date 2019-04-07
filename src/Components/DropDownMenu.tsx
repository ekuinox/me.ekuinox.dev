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
                    <NoneTextDecorationLink to={AboutPath}>
                        <MenuItem onClick={this.onClose}>Home</MenuItem>
                    </NoneTextDecorationLink>
                    <NoneTextDecorationLink to={ContactsPath}>
                        <MenuItem onClick={this.onClose}>Contacts</MenuItem>
                    </NoneTextDecorationLink>
                    <NoneTextDecorationLink to={LinksPath}>
                        <MenuItem onClick={this.onClose}>Links</MenuItem>
                    </NoneTextDecorationLink>
                    <NoneTextDecorationLink to={ProductsPath}>
                        <MenuItem onClick={this.onClose}>Products</MenuItem>
                    </NoneTextDecorationLink>
                    <NoneTextDecorationLink to={WorksPath}>
                        <MenuItem onClick={this.onClose}>Works</MenuItem>
                    </NoneTextDecorationLink>
                    <NoneTextDecorationLink to={LikesPath}>
                        <MenuItem onClick={this.onClose}>Likes</MenuItem>
                    </NoneTextDecorationLink>
                </Menu>
            </div>
        );
    }
}
