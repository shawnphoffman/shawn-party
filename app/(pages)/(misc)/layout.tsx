import { Suspense } from 'react'

export default function MiscLayout({ children }: React.PropsWithChildren) {
	return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}
