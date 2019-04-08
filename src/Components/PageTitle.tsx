import * as React from 'react'
import { Typography } from '@material-ui/core'
import pink from '@material-ui/core/colors/pink'


const PageTitle: React.StatelessComponent<{title: string, color?: string}> = (props) => (
    <Typography style={{
        fontSize: "4vh",
        color: props.color ? props.color : pink[900]
    }}>{props.title}</Typography>
)

export default PageTitle
