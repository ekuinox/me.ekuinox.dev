import * as React from 'react'
import PageTitle from '../PageTitle'
import { Typography } from '@material-ui/core'
import PageBody from '../PageBody'

export default () => (
	<PageBody>
		<PageTitle title="About" />
		<Typography style={{fontSize: '3vh', marginLeft: '3vh'}}>lm0Xとかekuinoxとか名乗る．漫画と音楽が好き．</Typography>
	</PageBody>
)

export const path = '/'
