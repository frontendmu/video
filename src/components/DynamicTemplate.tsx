import { TEMPLATE_CONFIGS } from "../constants";
import { useTemplate } from "../context/TemplateProvider";

export default function DynamicTemplate() {
	const {template} = useTemplate();
	const VideoComponent = TEMPLATE_CONFIGS[template]?.component

  return <VideoComponent />
}