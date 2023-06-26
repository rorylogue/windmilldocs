import React, { useEffect, useState } from 'react';
import LandingSection from './LandingSection';
import { Code, LayoutDashboard, List, PlayCircle } from 'lucide-react';
import { VolumeX } from 'lucide-react';

const tabs = [
	{
		label: 'Scripts',
		icon: Code,
		id: 'scripts',
		data: []
	},
	{
		label: 'Flows',
		icon: List,
		id: 'flows',
		data: []
	},
	{
		label: 'Apps',
		icon: LayoutDashboard,
		id: 'apps',
		data: []
	}
];

export default function HeroExample() {
	const [hookProps] = useState({
		tabs: tabs,
		initialTabId: tabs[0].id
	});
	const [played, setPlayed] = useState(false);

	// When played toggles to true, start the video
	useEffect(() => {
		const video = document.getElementById('main-video') as HTMLVideoElement;
		if (played) {
			video.play();
		}
	}, [played]);

	return (
		<LandingSection bgClass="bg-white dark:bg-gray-900">
			<div className="w-full gap-8 flex flex-col">
				<h1 className="tracking-tight leading-tight text-left font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-500 to-slate-800 dark:from-slate-100 dark:to-slate-400 ">
					Give your scripts Superpowers
				</h1>
				<p className="max-w-5xl">
					Make your scripts production grade and build all of your internal tools with Python,
					Typescript, Go, Bash, Sql. <br /> Compose your scripts as workflows using low-code. <br />
					Share an autogenerated UI or build one using low-code. Run it reliably at scale on your
					infra or ours, with permissioning and monitoring included. Fully open-source and easy to
					deploy on small and large infra. Any dependency with zero-config.
				</p>

				<div className="relative">
					{!played && (
						<div>
							<div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-900 opacity-20 dark:opacity-80 rounded-xl z-50 flex justify-center items-center flex-col gap-2"></div>
							<div className="absolute top-0 bottom-0 left-0 right-0 rounded-xl z-50 flex justify-center items-center flex-col gap-2">
								<PlayCircle
									size={80}
									onClick={() => setPlayed(true)}
									className="text-gray-700 hover:text-blue-400 cursor-pointer transition-all dark:text-white"
								/>
								<span className="text-gray-700 font-bold text-2xl inline-flex gap-2 items-center dark:text-white">
									A tour of Windmill in 52s{' '}
									<div className="inline-flex items-center">
										(<VolumeX size="30px" />)
									</div>
								</span>
							</div>
						</div>
					)}

					<video
						className="border-2 rounded-xl object-cover w-full h-full dark:border-gray-800"
						controls={played}
						id="main-video"
						src="/videos/main.mp4"
					/>
				</div>
			</div>
		</LandingSection>
	);
}
