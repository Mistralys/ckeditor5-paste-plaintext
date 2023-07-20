
import { Plugin, type Editor, Command } from '@ckeditor/ckeditor5-core';
import plainTextToHtml from '@ckeditor/ckeditor5-clipboard/src/utils/plaintexttohtml';
import PastePlainTextCommand from './command';
import PastePlainTextUI from './ui';
import Translation from './translation';
import { ClipboardPipeline } from "@ckeditor/ckeditor5-clipboard";

/**
 * The main plugin class with the logic to use only the
 * plain text from the clipboard input.
 */
export default class PasteAsPlainText extends Plugin {
	public static get pluginName(): 'PasteAsPlainText' {
		return 'PasteAsPlainText';
	}

	public static get requires() {
		return [ PastePlainTextUI, PastePlainTextCommand ] as const;
	}

	public init(): void {
        (new Translation()).translate();
        const editor = this.editor;

        editor.commands.add( 'pastePlainText', new PastePlainTextCommand( editor ) );

        // The logic responsible for converting HTML to plain text.
		const clipboardPlugin: ClipboardPipeline = editor.plugins.get( 'ClipboardPipeline' );
		const command: PastePlainTextCommand = this.editor.commands.get( 'pastePlainText' );
        const editingView = editor.editing.view;

        editingView.document.on( 'clipboardInput', ( evt, data ) => {
            if ( editor.isReadOnly || !command.value ) {
                return;
            }

            const dataTransfer = data.dataTransfer;
            let content = plainTextToHtml( dataTransfer.getData( 'text/plain' ) );

            data.content = this.editor.data.htmlProcessor.toView( content );
        } );
    }
};
