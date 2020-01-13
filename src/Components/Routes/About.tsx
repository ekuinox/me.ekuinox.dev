import * as React from 'react'
import Page from '../Page'
import { Typography } from '@material-ui/core'

export default () => (
	<Page title="About">
		<Typography
			style={{
				fontSize: '2vh',
				margin: '3vh'
			}}
		>
			<p>れもくすと言います。ekuinoxやlm0Xなどと名乗ることもあります。</p>
			<p>C++でDirect3DとかUE4とかをやってました。今はRustとかScalaに興味があります。</p>
			<p>Future Houseが好きです。アーティストで言えばAiobahnが好き。</p>
			<p>まんがタイムきらら4誌を追っています。最近は追いつけていませんが...。</p>
			{ /*
			<p>
				プログラミングをやっています。言語はC++が主で、他にはRustやKotlin、Scalaなどを触っています（わからん）。<br />
				言語以外で名前をあげるなら、UE4やReact(ここ)とかLaravelとかがわからんけどわからんなりにどうにかなります。
			</p>
			<p>
				Progressive Houseが好きです。Future Houseも好き。Hard Danceも聴く、人物で言えばAiobahnがとても好き。RetroVisionも好き。
			</p>
			<p>
				まんがタイムきらら好き。きんいろモザイクのアニメ放映からMAXを追うようになって、どうして私が美術科に!?をゲストから追っていた。良かった。浦上紫苑さんが好き。<br />
				きららだと他には海色マーチとか球詠とかが好き。連載終了しているもので言えば、ぱぺっとコール！とかセカイ魔王が好き。私のGitHubのアイコンはぱぺっとコール！のつるちゃんです。<br />
			</p>
			*/ }
		</Typography>
	</Page>
)

export const path = '/'
