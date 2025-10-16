'use client'

import { animate, stagger } from 'motion'
import { splitText } from 'motion-plus'
import { motion } from 'motion/react'
import { useEffect, useRef } from 'react'

function TitleClient() {
	const refName = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		document.fonts.ready.then(() => {
			if (!refName.current) return

			const { chars: first } = splitText(refName.current.querySelector('#first') as Element)
			const { chars: last } = splitText(refName.current.querySelector('#last') as Element)

			refName.current.classList.remove('invisible')

			// SHAWN
			animate(
				first,
				{
					opacity: [0, 1],
				},
				{
					delay: stagger(0.1, { startDelay: 0.1 }),
				}
			)
			// HOFFMAN
			animate(
				last,
				{
					opacity: [0, 1],
				},
				{
					delay: stagger(0.1, { startDelay: 0.6 }),
				}
			)

			const staggerDelay = 0.15
			animate(
				first,
				{ y: [-10, 10] },
				{
					repeat: Infinity,
					repeatType: 'mirror',
					ease: 'easeInOut',
					duration: 1.5,
					delay: stagger(
						staggerDelay,
						// By setting this as a negative delay we can start
						// the animation part-way through, to ensure we don't
						// get an initial iteration where the characters look
						// like they're starting to animate one by one.
						{ startDelay: -staggerDelay * first.length }
					),
				}
			)
			animate(
				last,
				{ y: [-10, 10] },
				{
					repeat: Infinity,
					repeatType: 'mirror',
					ease: 'easeInOut',
					duration: 1.5,
					delay: stagger(
						staggerDelay,
						// By setting this as a negative delay we can start
						// the animation part-way through, to ensure we don't
						// get an initial iteration where the characters look
						// like they're starting to animate one by one.
						{ startDelay: -staggerDelay * 2 * first.length }
					),
				}
			)
			// animate(element, {
			// 	rotate: 30,
			// })
			// return () => {
			// 	animate(element, {
			// 		rotate: 0,
			// 	})
			// }
			// })
		})
	}, [])
	return (
		<h1
			className="font-black text-c1 tracking-tight text-6xl xs:text-7xl sm:text-8xl md:text-9xl w-full text-shadow-big md:max-w-2xl invisible flex flex-col"
			ref={refName}
		>
			<motion.div id="first" className="w-fit self-start">
				Shawn
			</motion.div>
			<motion.div id="last" className="w-fit self-center whitespace-nowrap">
				Hoffman
			</motion.div>
		</h1>
	)
}

export default TitleClient
