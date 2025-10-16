'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Image from 'next/image'
import head from './head.png'

const ShawnHeadClient = dynamic(() => import('./head.client'))

function ShawnHead() {
	return (
		<Suspense
			fallback={
				<div>
					<Image
						className="min-w-0 object-scale-down max-h-32 w-fit sm:max-h-44 md:max-h-60 hidden xs:block drop-shadow-big active:drop-shadow-none transition-all active:translate-y-3 active:translate-x-3 active:rotate-10"
						width={158}
						src={head}
						alt="Illustration of my goofy face"
					/>
				</div>
			}
		>
			<ShawnHeadClient />
		</Suspense>
	)
}

export default ShawnHead
