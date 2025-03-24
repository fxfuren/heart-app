'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface HeartProps {
	names?: string
}

export default function Heart({ names }: HeartProps) {
	const [hovered, setHovered] = useState(false)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 768)
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<motion.div
			className='relative flex flex-col items-center justify-center'
			initial={{ scale: 1 }}
			animate={{ scale: [1, 1.1, 1] }}
			transition={{ repeat: Infinity, duration: 1 }}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className='relative w-[240px] h-[216px] mt-4'>
				<div
					className={`absolute top-0 w-[125px] h-[192px] bg-red-500 rounded-t-[120px] left-[120px] rotate-[-45deg] origin-bottom-left transition-all ${
						hovered ? 'bg-pink-400' : 'bg-red-500'
					}`}
				/>
				<div
					className={`absolute top-0 w-[120px] h-[192px] bg-red-500 rounded-t-[120px] left-0 rotate-[45deg] origin-bottom-right transition-all ${
						hovered ? 'bg-pink-400' : 'bg-red-500'
					}`}
				/>
			</div>

			<motion.div
				className='absolute w-[220px] h-[220px] bg-red-500 blur-2xl opacity-30 rounded-full'
				animate={
					isMobile
						? { opacity: [0.3, 0.7, 0.3] }
						: { scale: hovered ? 1.2 : 1, opacity: hovered ? 0.5 : 0.3 }
				}
				transition={
					isMobile
						? { repeat: Infinity, duration: 1, ease: 'easeInOut' }
						: { duration: 0.3 }
				}
			/>

			<span
				className='absolute text-white font-bold text-2xl text-center'
				style={{ whiteSpace: 'pre-wrap', fontFamily: "'Caveat', cursive" }}
			>
				{(names ?? '').split(' ').join('\n')}
			</span>
		</motion.div>
	)
}
