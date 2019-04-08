import * as React from 'react'
import { Typography } from '@material-ui/core';
import { CSSProperties } from 'jss/css';

const PageTitle: React.StatelessComponent<{title: string, color?: string}> = (props) => (
    <Typography style={{
        fontSize: "4vh",
        color: props.color
    }}>{props.title}</Typography>
)

export default PageTitle
