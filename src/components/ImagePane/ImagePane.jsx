import clsx from 'clsx';
import { useState } from 'react';
import cn from './ImagePane.module.scss';

function ImagePane({ className, src, alt, content, children, contentClassName }) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<img
				className={clsx(className, cn['image-container'])}
				onClick={() => setOpen(prev => !prev)}
				src={src}
				alt={alt}
			/>

			<div className={clsx(cn.container, contentClassName, open && cn.open)}>
				<button
					className={cn.close}
					onClick={() => setOpen(prev => !prev)}
				>
					+
				</button>
				<div className={clsx(cn.dots, cn.top)}></div>
				<div className={clsx(cn.dots, cn.bottom)}></div>
				<div className={clsx(cn.content, open && cn.open)}>
					<span>{content?.tag}</span>
					<h2>{content?.title}</h2>
					<p>{content?.description}</p>
					{children}
				</div>
				<img
					className={clsx(cn.image, open && cn.open)}
					src={src}
					alt={alt}
				/>
			</div>
		</>
	);
}

export default ImagePane;
