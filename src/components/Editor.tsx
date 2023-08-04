import type { ChangeEventHandler, ReactElement } from "react";

interface Props {
	content: string
	on_change: ChangeEventHandler<HTMLTextAreaElement>
}

export default function App({ content, on_change }: Props): ReactElement {
	return (
		<div className="editor-container">
			<textarea value={content} id="editor" onChange={on_change}></textarea>
		</div>
	);
}
