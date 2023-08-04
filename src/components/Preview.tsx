import DOMPurify from "dompurify";
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { marked, type MarkedExtension } from "marked";

import type { ReactElement } from "react";

marked.use(mangle() as MarkedExtension);
marked.use(gfmHeadingId() as MarkedExtension);
marked.setOptions({ "breaks": true });

interface Props {
	content: string
}

export default function Preview({ content }: Props): ReactElement {
	const sanitized_content = DOMPurify.sanitize(marked.parse(content));
	return (
		<div className="preview-container">
			<div
				id="preview"
				dangerouslySetInnerHTML={{ "__html": sanitized_content }}
			/>
		</div>
	);
}
