import { memo, useMemo } from 'react'
import { useRouter } from 'next/router'

import ObsText, { TextStyle } from 'components/obs/ObsText'

// Server data fetch
export async function getServerSideProps(context) {
	const { id } = context.params
	const { goal } = context?.query
	const { host } = context.req?.headers

	// console.log({ id, goal, host })

	const scheme = host.includes('localhost') ? 'http' : 'https'
	const res = await fetch(`${scheme}://${host}/api/twitch/followers/${id}?countOnly=true`)
	const json = await res.json()
	const count = json.total

	context.res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=300')

	return {
		props: {
			goal: goal?.toString() || null,
			count: (count || 0).toString(),
		},
	}
}

const Followers = ({ goal, count }) => {
	const { query } = useRouter()

	const text = useMemo(() => {
		return goal ? `${count}/${goal}` : count
	}, [count, goal])

	const prefix = useMemo(() => {
		return query?.prefix || ''
	}, [query?.prefix])

	const style = useMemo(() => {
		return TextStyle[query?.style?.toUpperCase()] || TextStyle.NONE
	}, [query])

	if (!count) {
		return null
	}

	return (
		<ObsText textStyle={style} debug={true}>
			{prefix && (
				<>
					{prefix}
					{` `}
				</>
			)}
			{text}
		</ObsText>
	)
}

export default memo(Followers)
