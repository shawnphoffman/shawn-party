'use client'
import { memo } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { PatternLines } from '@vx/pattern'

import styles from 'app/(pages)/Styles.module.css'

import madisonStates from './madisonStates'
import shawnStates from './shawnStates'
import geoJson from './states-10m.json'

const Maps = () => {
	return (
		<>
			{/* <h1>Maps</h1> */}
			<div className={styles.container}>
				<ComposableMap projection="geoAlbersUsa">
					<PatternLines
						id="lines"
						height={6}
						width={6}
						stroke="var(--c2)"
						strokeWidth={2}
						background="var(--c4)"
						orientation={['diagonal']}
					/>
					<Geographies geography={geoJson}>
						{({ geographies }) => (
							<>
								{geographies.map(geo => {
									console.log(geo.properties.name)
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
											fill={isBoth ? "url('#lines')" : isShawn ? 'var(--c2)' : isMadison ? 'var(--c3)' : 'var(--c1)'}
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
				</ComposableMap>
			</div>
		</>
	)
}

export default memo(Maps)
