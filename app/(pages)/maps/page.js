'use client'
import { memo, useCallback, useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { Tooltip } from 'react-tooltip'
import { PatternLines } from '@vx/pattern'
import { geoAlbersUsaTerritories } from 'geo-albers-usa-territories'

import markers from './data/madishawn.json'
import nationalParks from './data/nps.national-parks-4.0.0.json'
import usStates from './data/us-states.json'
import madisonStates from './madisonStates'
import styles from './Map.module.css'
import shawnStates from './shawnStates'

const colors = {
	unvisited: 'var(--c1)',
	both: "url('#lines')",
	shawn: 'var(--c2)',
	madison: 'var(--c3)',
}

const width = 825
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

const Maps = () => {
	const [showParks, setShowParks] = useState(false)
	const [showHomes, setShowHomes] = useState(false)
	const [showVisited, setShowVisited] = useState(true)

	return (
		<>
			<h1>Maps</h1>
			<div>
				<button onClick={() => setShowVisited(!showVisited)}>{showVisited ? 'Hide Visited' : 'Show Visited'}</button>
				<button onClick={() => setShowParks(!showParks)}>{showParks ? 'Hide Parks' : 'Show Parks'}</button>
				<button onClick={() => setShowHomes(!showHomes)}>{showHomes ? 'Hide Homes' : 'Show Homes'}</button>
			</div>
			<Tooltip id="tooltip" />
			<div className={styles.container}>
				{/* <ComposableMap projection="geoAlbersUsa"> */}
				<ComposableMap projection={customProjection} height={height} width={800}>
					<PatternLines
						id="lines"
						height={6}
						width={6}
						stroke="var(--c2)"
						strokeWidth={2}
						background="var(--c4)"
						orientation={['diagonal']}
					/>

					{/* STATES */}
					<Geographies geography={usStates}>
						{({ geographies }) => (
							<>
								{geographies.map(geo => {
									// console.log(geo.properties.name)
									const isShawn = shawnStates.indexOf(geo.properties.name) !== -1
									const isMadison = madisonStates.indexOf(geo.properties.name) !== -1
									const isBoth = isMadison && isShawn
									// const isHighlighted = Number(geo.id) % 2 === 0
									return (
										<Geography
											key={geo.rsmKey}
											stroke="var(--bg)"
											strokeWidth={1}
											geography={geo}
											//
											// fill={isHighlighted ? "url('#lines')" : 'var(--c1)'}
											//
											fill={
												!showVisited
													? 'var(--c1)'
													: isBoth
													? "url('#lines')"
													: isShawn
													? 'var(--c2)'
													: isMadison
													? 'var(--c3)'
													: 'var(--c1)'
											}
											//
											// style={{
											// 	default: {
											// 		fill: 'var(--c2)',
											// 		// fill: "url('#lines')",
											// 	},
											// 	hover: {
											// 		fill: 'var(--c1)',
											// 		// fill={isHighlighted ? "url('#lines')" : "#F6F0E9"}
											// 	},
											// }}
											tabIndex={-1}
											focusable={false}
											onClick={() => console.log(geo.properties)}
										/>
									)
								})}
							</>
						)}
					</Geographies>

					{/* MADISHAWN MARKERS */}
					{showHomes && (
						<Geographies geography={markers}>
							{({ geographies }) => (
								<>
									{geographies.map(geo => {
										const name = geo.properties.name
										const coordinates = geo.geometry.coordinates
										// const markerOffset = 0
										// console.log(geo)
										return (
											<Marker key={name} coordinates={coordinates} data-tooltip-id="tooltip" data-tooltip-content={name}>
												<circle r={4} fill="var(--white)" stroke="var(--bg)" strokeWidth={1.5} />
												{/* <text textAnchor="middle" y={markerOffset} style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}>
												{name}
											</text> */}
											</Marker>
										)
									})}
								</>
							)}
						</Geographies>
					)}
					{/* NATIONAL PARKS */}
					{showParks && (
						<Geographies geography={nationalParks}>
							{({ geographies }) => (
								<>
									{geographies.map(geo => {
										const name = geo.properties.Name
										const type = geo.properties.Type || ''
										if (!name.includes('National Park') && type !== 'National Park') {
											return null
										}
										console.log(name)
										// return null
										return (
											<Geography
												key={geo.rsmKey}
												stroke="var(--bg)"
												strokeWidth={1}
												geography={geo}
												// fill={'var(--c1)'}
												fill={'olive'}
												// fill={isBoth ? "url('#lines')" : isShawn ? 'var(--c2)' : isMadison ? 'var(--c3)' : 'var(--c1)'}
												tabIndex={-1}
												focusable={false}
												// onClick={() => console.log(geo.properties)}
												data-tooltip-id="tooltip"
												data-tooltip-content={name}
											/>
										)
									})}
								</>
							)}
						</Geographies>
					)}
				</ComposableMap>
			</div>
			{showVisited && (
				<div>
					{/* <h2>Legend</h2> */}
					<LegendBall color={colors.shawn} text={'Shawn'} />
					<LegendBall color={colors.madison} text={'Madison'} />
					<LegendBall color={colors.both} text={'Both'} />
					<LegendBall color={colors.unvisited} text={'Not Visited'} />
				</div>
			)}
		</>
	)
}

export default memo(Maps)
