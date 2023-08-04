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
	return (
		<div className="preview-container">
			<div id="preview" dangerouslySetInnerHTML={{ "__html": content }}></div>
		</div>
	);
}
