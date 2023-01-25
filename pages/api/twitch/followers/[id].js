import cacheData from 'memory-cache'

async function fetchWithCache(url, options) {
	const value = cacheData.get(url)
	if (value) {
		console.log('CACHED', url)
		return value
	} else {
		console.log('NOT CACHED', url)
		const minutes = 10
		const res = await fetch(url, options)
		const data = await res.json()
		console.log('FETCHED DATA', data)

		cacheData.put(url, data, minutes * 1000 * 60)
		return data
	}
}

const clientId = process.env.REACT_APP_TWITCH_CLIENT_ID
const clientSecret = process.env.REACT_APP_TWITCH_CLIENT_SECRET

async function GetTwitchAccessToken() {
	var myHeaders = new Headers()
	myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

	var urlencoded = new URLSearchParams()
	urlencoded.append('client_id', clientId)
	urlencoded.append('client_secret', clientSecret)
	urlencoded.append('grant_type', 'client_credentials')

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: urlencoded,
		redirect: 'follow',
	}

	const json = await fetchWithCache('https://id.twitch.tv/oauth2/token', requestOptions)

	const token = json.access_token

	return token
}

async function GetTwitchFollowers(id, token) {
	var myHeaders = new Headers()
	myHeaders.append('Authorization', `Bearer ${token}`)
	myHeaders.append('Client-ID', clientId)

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	}

	const json = await fetchWithCache(`https://api.twitch.tv/helix/users/follows?to_id=${id}&first=100`, requestOptions)

	return json
}

export default async function handler(req, res) {
	// Get Twitch Access Token
	const token = await GetTwitchAccessToken()

	// console.log('query', req.query)

	// Get Twitch User ID
	const { id, countOnly } = req.query

	// Get Twitch Followers
	const followers = await GetTwitchFollowers(id, token)

	// Set Cache Headers
	res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=599')

	if (countOnly === 'true') {
		res.json({
			total: followers.total,
		})
		res.end()
	}

	res.json(followers)
}
