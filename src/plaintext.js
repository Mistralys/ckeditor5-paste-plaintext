
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import plainTextToHtml from '@ckeditor/ckeditor5-clipboard/src/utils/plaintexttohtml';

import PastePlainTextCommand from './command';
import PastePlainTextUI from './ui';
import Translation from './translation';

/**
 * The main plugin class with the logic to use only the
 * plain text from the clipboard input.
 */
export default class PastePlainText extends Plugin {
    static get pluginName() {
        return 'PasteAsPlainText'
    }

    static get requires() {
        return [ PastePlainTextUI, PastePlainTextCommand ]
    }

    init() {
        (new Translation()).translate();
        
        const editor = this.editor;

        editor.commands.add( 'pastePlainText', new PastePlainTextCommand( editor ) );

        // The logic responsible for converting HTML to plain text.
        const clipboardPlugin = editor.plugins.get( 'ClipboardPipeline' );
        const command = editor.commands.get( 'pastePlainText' );
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
