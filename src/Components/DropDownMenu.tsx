import * as React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'

interface State {
    anchorEl: any
}

export default class DropDownMenu extends React.Component<{}, State> {

    constructor() {
        super({})
        this.state = { anchorEl: null }
    }
    
    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <Button
                    aria-owns={anchorEl ? 'drop-down-menu' : undefined}
                    aria-haspopup="true"
                    onClick={event => {this.setState({ anchorEl: event.currentTarget })}}
                >
                    <MenuIcon />
                </Button>
                <Menu
                    id="drop-down-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => {this.setState({ anchorEl: null })}}
                >
                    <Link to="/"><MenuItem onClick={() => {this.setState({ anchorEl: null })}}>Home</MenuItem></Link>
                    <Link to="/contacts"><MenuItem onClick={() => {this.setState({ anchorEl: null })}}>Contacts</MenuItem></Link>
                    <Link to="/links"><MenuItem onClick={() => {this.setState({ anchorEl: null })}}>Links</MenuItem></Link>
                    <Link to="/products"><MenuItem onClick={() => {this.setState({ anchorEl: null })}}>Products</MenuItem></Link>
                    <Link to="/works"><MenuItem onClick={() => {this.setState({ anchorEl: null })}}>Works</MenuItem></Link>
                    <Link to="/likes"><MenuItem onClick={() => {this.setState({ anchorEl: null })}}>Likes</MenuItem></Link>
                </Menu>
            </div>
        );
    }
}
