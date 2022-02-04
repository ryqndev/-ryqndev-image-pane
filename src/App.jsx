import ImagePane from './lib';
import cn from './App.module.scss';

function App() {
	return (
		<div className={cn.container}>
			<ImagePane
				className={cn.image}
				src='https://i.pinimg.com/736x/76/93/59/76935964bca553da191831f6b800d262.jpg'
				alt='Girl in Gray'
				content={{
					tag: <>esta<wbr />blishments</>,
					title: 'girl in gray',
					description:
						'One of the more notable works of the photographer. Taken in gray. Superposed upon the city scape - the details attract.',
				}}
			/>
			<ImagePane
				className={cn.image}
				src='https://boba.watch/bobawatch.png'
				alt='the mounts'
				content={{
					tag: '/ boba watch',
					title: 'Splash art',
					description:
						'This is an overview of the splash art that was created for the Boba Watch. The splash art is a combination of the the various screens that can be accessed.',
				}}
			/>
		</div>
	);
}

export default App;
