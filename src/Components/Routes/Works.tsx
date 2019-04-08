import * as React from 'react'
import PageTitle from '../PageTitle'
import { Typography } from '@material-ui/core'
import PageBody from '../Page'

export default () => (
	<PageBody title="Works">
		<Typography style={{fontSize: '3vh', marginLeft: '3vh'}}>職を探しております。ご連絡お待ちしております。</Typography>
	</PageBody>
)

export const path = '/works'
