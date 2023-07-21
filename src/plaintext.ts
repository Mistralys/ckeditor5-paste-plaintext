/**
 * @module PasteAsPlainText/PasteAsPlainText
 */

import { Plugin } from '@ckeditor/ckeditor5-core';
import plainTextToHtml from '@ckeditor/ckeditor5-clipboard/src/utils/plaintexttohtml';
import PasteAsPlainTextUI from './plaintextui';
import PasteAsPlainTextCommand from './plaintextcommand';
import Translation from './translation';
import type { ClipboardPipeline } from '@ckeditor/ckeditor5-clipboard';

/**
 * The main plugin class with the logic to use only the
 * plain text from the clipboard input.
 */
export default class PasteAsPlainText extends Plugin {
	public static get pluginName(): 'PasteAsPlainText' {
		return 'PasteAsPlainText';
	}

	public static get requires() {
		return [ PasteAsPlainTextUI, PasteAsPlainTextCommand ] as const;
	}

	public init(): void {
		( new Translation() ).translate();
		const editor = this.editor;

		editor.commands.add( 'pasteAsPlainText', new PasteAsPlainTextCommand( editor ) );

		// The logic responsible for converting HTML to plain text.
		const clipboardPlugin: ClipboardPipeline = editor.plugins.get( 'ClipboardPipeline' );
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const command: PasteAsPlainTextCommand = editor.commands.get( 'pasteAsPlainText' );
		const editingView = editor.editing.view;

		editingView.document.on( 'clipboardInput', ( evt, data ) => {
			if ( editor.isReadOnly || !command.value ) {
				return;
			}

			const dataTransfer = data.dataTransfer;
			const content = plainTextToHtml( dataTransfer.getData( 'text/plain' ) );

			data.content = this.editor.data.htmlProcessor.toView( content );
		} );
	}
}
