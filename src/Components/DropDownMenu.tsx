import * as React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, LinkProps } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'

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
                    <MenuIcon style={{color: 'white'}} />
                </Button>
                <Menu
                    id="drop-down-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.onClose}
                >
                    <NoneTextDecorationLink to="/">
                        <MenuItem onClick={this.onClose}>Home</MenuItem>
                    </NoneTextDecorationLink>
                    <NoneTextDecorationLink to="/contacts">
                        <MenuItem onClick={this.onClose}>Contacts</MenuItem>
                    </NoneTextDecorationLink>
                    <NoneTextDecorationLink to="/links">
                        <MenuItem onClick={this.onClose}>Links</MenuItem>
                    </NoneTextDecorationLink>
                    <NoneTextDecorationLink to="/products">
                        <MenuItem onClick={this.onClose}>Products</MenuItem>
                    </NoneTextDecorationLink>
                    <NoneTextDecorationLink to="/works">
                        <MenuItem onClick={this.onClose}>Works</MenuItem>
                    </NoneTextDecorationLink>
                    <NoneTextDecorationLink to="/likes">
                        <MenuItem onClick={this.onClose}>Likes</MenuItem>
                    </NoneTextDecorationLink>
                </Menu>
            </div>
        );
    }
}
