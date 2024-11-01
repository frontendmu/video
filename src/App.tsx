import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { Composition } from 'remotion';
import allMeetups from '../all-meetups.json';
import DynamicTemplate from './components/DynamicTemplate';
import { TEMPLATE_CONFIGS } from './constants';
import { TemplateProvider } from './context/TemplateProvider';
import './styles/style.css';
import { Template } from './types';


// a function that only allows a-z, A-Z, 0-9, CJK, but replace spaces with - and remove multiple - 
function removeSpecialChars(str:  string) {
	return str.replace(/[^a-zA-Z0-9\u4E00-\u9FFF]/g, '-').replace(/-+/g, '-');
}

function retrieveInitialTemplate() {
	const searchParams = new URLSearchParams(window.location.search)
	const template = searchParams.get("template")

	if (template! in TEMPLATE_CONFIGS) return template as Template
	
	return Object.keys(TEMPLATE_CONFIGS)[0] as Template
}

function TemplateSwitch({template, setTemplate}: {template: Template, setTemplate: Dispatch<SetStateAction<Template>>}) {
	const handleTemplateChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setTemplate(e.target.value as Template)

		const url = new URL(window.location.href)
		url.searchParams.set("template", e.target.value)
		window.history.pushState('', '', url.href)
	}

	return (
		<header className='flex flex-row justify-end items-center gap-1 text-sm'>
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
		</header>
	)
}

export const App: React.FC = () => {
	const [template, setTemplate] = useState(retrieveInitialTemplate())

	return (
		<>
			<TemplateSwitch template={template as Template} setTemplate={setTemplate as Dispatch<SetStateAction<Template>>} />
			
			{allMeetups.map((meetupDetails) => (
				<TemplateProvider key={meetupDetails.meetupId} meetupDetails={meetupDetails} template={template}>
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
