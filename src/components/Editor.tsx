import type { ChangeEventHandler, ReactElement } from "react";

interface Props {
	content: string
	on_change: ChangeEventHandler<HTMLTextAreaElement>
}

export default function Editor({ content, on_change }: Props): ReactElement {
	return (
		<div className="editor-container">
			<input type="checkbox" id="maximizer" hidden />
			<textarea value={content} id="editor" onChange={on_change}></textarea>
			<button className="toggle-expand-btn material-symbols-outlined">chevron_right</button>
		</div>
	);
}
