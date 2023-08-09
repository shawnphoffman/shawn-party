'use client'
import { memo, useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker /*, ZoomableGroup*/ } from 'react-simple-maps'
import { Tooltip } from 'react-tooltip'
import { PatternWaves } from '@vx/pattern'
import { geoAlbersUsaTerritories } from 'geo-albers-usa-territories'

import homes from './data/madishawn.json'
import nationalParks from './data/nps.national-parks-4.0.0.json'
import usStates from './data/us-states.json'
import madisonStates from './madisonStates'
import styles from './Map.module.css'
import visitedParks from './nationalParks'
import shawnStates from './shawnStates'

const colors = {
	unvisited: 'var(--gray)',
	both: "url('#lines')",
	shawn: 'var(--c2)',
	madison: 'var(--c4)',
	blank: 'var(--c1)',
	nps: {
		visited: 'var(--c3)',
		unvisited: 'var(--gray)',
	},
}

const width = 815
const height = 515
const customProjection = geoAlbersUsaTerritories()
	.scale(1000)
	.translate([width / 2, height / 2])

const LegendBall = ({ color, text }) => {
	return (
		<div className={styles.legend}>
			<span className={styles.legendBall}>
				<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<circle cx="50%" cy="50%" r="8" fill={color} />
				</svg>
			</span>
			<>{text}</>
		</div>
	)
}

const NpsBadge = ({ visited = false }) => {
	return (
		<path
			fill={visited ? colors.nps.visited : colors.nps.unvisited}
			stroke="var(--bg)"
			strokeWidth={1}
			d="M9.97 2.94c.15-.98-.75-.85-1.38-.9-.58.02-1.39-.33-.89-.86.34-.28-.24-.69-.43-.86-1.29-.39-3-.58-5.18.41-.09.39.27.24.2.91-.19.57-.92-.05-1.25-.09-.27.02-.84.36-1.01.53-.07.47-.02.72.15 1.1 0 .22-.13.54-.06.76.12.18.13.57.17.8.13.25.22.29.13.95.21.73.44 2.38 1.1 3.49 1.35 1.41 2.83 6 4.98 2.56.18-.32.75-.6.81-.93 0-.27.44-.46.43-.71.24-.44.14-.75.59-1.17.39-.73.85-1.44 1.07-2.24.3-.45-.18-.64.08-1.06.25-.34.26-.19.24-.38.01-.5.3-1.12.15-1.6-.06-.25.22-.39.1-.73z"
		/>
	)
}

const Maps = () => {
	const [showParks, setShowParks] = useState(false)
	const [showHomes, setShowHomes] = useState(false)
	const [showVisited, setShowVisited] = useState(true)

	return (
		<>
			<div className={styles.header}>
				<h1>Maps</h1>
				<button onClick={() => setShowVisited(!showVisited)}>{showVisited ? 'Hide Visited' : 'Show Visited'}</button>
				<button onClick={() => setShowParks(!showParks)}>{showParks ? 'Hide Parks' : 'Show Parks'}</button>
				<button onClick={() => setShowHomes(!showHomes)}>{showHomes ? 'Hide Homes' : 'Show Homes'}</button>
			</div>
			<Tooltip id="tooltip" />
			<div className={styles.container}>
				<ComposableMap projection={customProjection} height={height} width={800}>
					{/* PATTERN */}
					<PatternWaves
						id="lines"
						height={4}
						width={4}
						stroke={colors.madison}
						strokeWidth={1.5}
						background={colors.shawn}
						orientation={['diagonal']}
					/>

					{/* <ZoomableGroup zoom={2} center={[-95, 36]} onMoveEnd={e => console.log(e)}> */}
					{/* STATES */}
					<Geographies geography={usStates}>
						{({ geographies }) => (
							<>
								{geographies.map(geo => {
									const isShawn = shawnStates.indexOf(geo.properties.name) !== -1
									const isMadison = madisonStates.indexOf(geo.properties.name) !== -1
									const isBoth = isMadison && isShawn
									return (
										<Geography
											key={geo.rsmKey}
											stroke="var(--bg)"
											strokeWidth={1}
											geography={geo}
											fill={
												!showVisited
													? colors.blank
													: isBoth
													? colors.both
													: isShawn
													? colors.shawn
													: isMadison
													? colors.madison
													: colors.unvisited
											}
											tabIndex={-1}
											// onClick={() => console.log(geo.properties)}
										/>
									)
								})}
							</>
						)}
					</Geographies>

					{/* MADISHAWN MARKERS */}
					{showHomes ? (
						<Geographies geography={homes}>
							{({ geographies }) => (
								<>
									{geographies.map(geo => {
										const name = geo.properties.name
										const coordinates = geo.geometry.coordinates
										return (
											<Marker key={name} coordinates={coordinates} data-tooltip-id="tooltip" data-tooltip-content={name}>
												<circle r={4} fill="var(--white)" stroke="var(--bg)" strokeWidth={1.5} />
											</Marker>
										)
									})}
								</>
							)}
						</Geographies>
					) : null}

					{/* NATIONAL PARKS */}
					{showParks ? (
						<Geographies geography={nationalParks}>
							{({ geographies }) => (
								<>
									{geographies.map(geo => {
										const name = geo.properties.Name
										const type = geo.properties.Type || ''
										if (!name.includes('National Park') && type !== 'National Park') {
											return null
										}
										// console.log(geo)
										const coordinates = geo.geometry.coordinates
										const visited = visitedParks.indexOf(name) !== -1
										return (
											<Marker key={geo.rsmKey} coordinates={coordinates} data-tooltip-id="tooltip" data-tooltip-content={name}>
												<NpsBadge visited={visited} />
											</Marker>
										)
									})}
								</>
							)}
						</Geographies>
					) : null}
					{/* </ZoomableGroup> */}
				</ComposableMap>
			</div>
			{showVisited && (
				<div>
					<LegendBall color={colors.shawn} text={'Shawn'} />
					<LegendBall color={colors.madison} text={'Madison'} />
					<LegendBall color={colors.both} text={'Both'} />
					<LegendBall color={colors.unvisited} text={'Not Visited'} />
				</div>
			)}
			{showParks && (
				<div>
					<LegendBall color={colors.nps.visited} text={'Visited'} />
					<LegendBall color={colors.nps.unvisited} text={'Not Visited'} />
				</div>
			)}
		</>
	)
}

export default memo(Maps)
