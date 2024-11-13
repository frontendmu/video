import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { Composition } from 'remotion';
import allMeetups from '../all-meetups.json';
import { TemplateProvider, useTemplate } from './context/TemplateProvider';
import './styles/style.css';
import { Soundtrack, Template } from './types';
import { SOUNDTRACK_CONFIGS, TEMPLATE_CONFIGS } from './utils/constants';
import { removeSpecialChars } from './utils/functions';

function retrieveInitialSoundtrack() {
	const searchParams = new URLSearchParams(window.location.search)
	const soundtrack = searchParams.get("soundtrack")

	if (soundtrack! in SOUNDTRACK_CONFIGS) return soundtrack as Soundtrack
	
	return Object.keys(SOUNDTRACK_CONFIGS)[0] as Soundtrack
}

function retrieveInitialTemplate() {
	const searchParams = new URLSearchParams(window.location.search)
	const template = searchParams.get("template")

	if (template! in TEMPLATE_CONFIGS) return template as Template
	
	return Object.keys(TEMPLATE_CONFIGS)[0] as Template
}

function DynamicTemplate() {
	const {template} = useTemplate();
	const VideoComponent = TEMPLATE_CONFIGS[template]?.component

  return <VideoComponent />
}

function SoundtrackSwitch({soundtrack, setSoundtrack}: {soundtrack: Soundtrack, setSoundtrack: Dispatch<SetStateAction<Soundtrack>>}) {
	const handleSoundtrackChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSoundtrack(e.target.value as Soundtrack)

		const url = new URL(window.location.href)
		url.searchParams.set("soundtrack", e.target.value)
		window.history.pushState('', '', url.href)
	}

	return (
		<div className='flex flex-row justify-end items-center gap-1 text-sm'>
			<label htmlFor='soundtrack' className='text-zinc-300'>Soundtrack:</label>
			<select
				id="soundtrack"
				className="rounded-md px-2 py-1"
				defaultValue={soundtrack}
				onChange={handleSoundtrackChange}
			>
				{
					Object.entries(SOUNDTRACK_CONFIGS).map(([key, config]) => (
						<option key={key} value={key}>{config.label}</option>
					))
				}
			</select>
		</div>
	)
}

function TemplateSwitch({template, setTemplate}: {template: Template, setTemplate: Dispatch<SetStateAction<Template>>}) {
	const handleTemplateChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setTemplate(e.target.value as Template)

		const url = new URL(window.location.href)
		url.searchParams.set("template", e.target.value)
		window.history.pushState('', '', url.href)
	}

	return (
		<div className='flex flex-row justify-end items-center gap-1 text-sm'>
			<label htmlFor='template' className='text-zinc-300'>Template:</label>
			<select
				id="template"
				className="rounded-md px-2 py-1"
				defaultValue={template}
				onChange={handleTemplateChange}
			>
				{
					Object.entries(TEMPLATE_CONFIGS).map(([key, config]) => (
						<option key={key} value={key}>{config.label}</option>
					))
				}
			</select>
		</div>
	)
}

export const App: React.FC = () => {
	const [template, setTemplate] = useState(retrieveInitialTemplate())
	const [soundtrack, setSoundtrack] = useState(retrieveInitialSoundtrack())

	return (
		<>
			<header className='flex flex-row justify-end items-center gap-4'>
				<SoundtrackSwitch soundtrack={soundtrack as Soundtrack} setSoundtrack={setSoundtrack as Dispatch<SetStateAction<Soundtrack>>} />
				<TemplateSwitch template={template as Template} setTemplate={setTemplate as Dispatch<SetStateAction<Template>>} />
			</header>
			
			{allMeetups.map((meetupDetails) => (
				<TemplateProvider key={meetupDetails.meetupId} meetupDetails={meetupDetails} template={template} soundtrack={soundtrack}>
					<Composition
						id={removeSpecialChars(meetupDetails.meetupDate + '-' + meetupDetails.meetupTitle)}
						component={DynamicTemplate}
						durationInFrames={TEMPLATE_CONFIGS[template as Template]?.getDurationInFrames?.(meetupDetails, TEMPLATE_CONFIGS[template as Template]?.fps ?? 30)?.total}
						fps={TEMPLATE_CONFIGS[template as Template]?.fps ?? 30}
						width={TEMPLATE_CONFIGS[template as Template]?.width ?? 720}
						height={TEMPLATE_CONFIGS[template as Template]?.height ?? 1280}
					/>
				</TemplateProvider>
			))}
		</>
	);
};
