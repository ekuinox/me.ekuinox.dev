import * as React from 'react'
import PageTitle from '../PageTitle'
import { Typography } from '@material-ui/core'

export default () => (
	<div>
		<PageTitle title="Works" />
		<Typography style={{fontSize: '3vh'}}>職を探しております。ご連絡お待ちしております。</Typography>
	</div>
)

export const path = '/works'
