import * as React from 'react'
import * as PropTypes from 'prop-types'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import DropDownMenu from './DropDownMenu'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TwitterIcon from '../assets/images/twitter.svg'
import GitHubIcon from '../assets/images/github.svg'
import EmailIcon from '../assets/images/email.svg'

const styles = createStyles({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: 0,
        marginRight: 0,
    },
})

export interface Props extends WithStyles<typeof styles> {}

const MenuIcon: React.StatelessComponent<{to: string, src: string}> = (props) => (
    <a href={props.to} target="_new">
        <Button color="inherit"><img src={props.src} /></Button>
    </a>
)

function ButtonAppBar(props: Props) {
    const { classes } = props;
    return (
    <div className={classes.root}>
        <AppBar position="static" style={{
            backgroundColor: "#f06292",

        }}>
            <Toolbar>
                <DropDownMenu />
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    ekuinox.dev
                </Typography>
                <MenuIcon to="https://github.com/ekuinox" src={GitHubIcon}/>
                <MenuIcon to="https://twitter.com/ekuinox" src={TwitterIcon}/>
                <MenuIcon to="mailto:eku@lmx.pw" src={EmailIcon}/>
            </Toolbar>
        </AppBar>
    </div>
    )
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
} as any


export default withStyles(styles)(ButtonAppBar)
