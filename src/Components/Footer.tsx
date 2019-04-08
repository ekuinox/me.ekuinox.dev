import * as React from 'react'

const Footer: React.StatelessComponent<{}> = (props) => (
    <div style={{
        position: 'absolute',
        bottom: '2vh',
        textAlign: 'center',
        width: '100vw'
    }}>{props.children}</div>
)

export default Footer
