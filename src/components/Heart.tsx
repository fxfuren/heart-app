'use client'
import { motion } from 'framer-motion'

interface HeartProps {
	names?: string
}

export default function Heart({ names }: HeartProps) {
	// Анимация переливания цвета между розовым и красным
	const colorAnimation = {
		backgroundColor: ['#f472b6', '#ef4444', '#f472b6'], // розовый → красный → розовый
		transition: {
			duration: 2,
			repeat: Infinity,
			ease: 'easeInOut',
		},
	}

	return (
		<motion.div
			className='relative flex flex-col items-center justify-center'
			initial={{ scale: 1 }}
			animate={{ scale: [1, 1.1, 1] }}
			transition={{ repeat: Infinity, duration: 1 }}
		>
			<div className='relative w-[240px] h-[216px] mt-4'>
				<motion.div
					className='absolute top-0 w-[125px] h-[192px] rounded-t-[120px] left-[120px] rotate-[-45deg] origin-bottom-left'
					animate={colorAnimation}
				/>
				<motion.div
					className='absolute top-0 w-[120px] h-[192px] rounded-t-[120px] left-0 rotate-[45deg] origin-bottom-right'
					animate={colorAnimation}
				/>
			</div>

			<motion.div
				className='absolute w-[220px] h-[220px] blur-2xl opacity-30 rounded-full'
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.6, 0.3],
					backgroundColor: ['#f472b6', '#ef4444', '#f472b6'],
				}}
				transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
			/>

			<span
				className='absolute text-white font-bold text-2xl text-center'
				style={{ whiteSpace: 'pre-wrap' }}
			>
				{(names ?? '').split(' ').join('\n')}
			</span>
		</motion.div>
	)
}
