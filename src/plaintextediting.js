/**
 * @module PasteAsPlainText/PasteAsPlainText
 */

import { Plugin } from '@ckeditor/ckeditor5-core';
import plainTextToHtml from '@ckeditor/ckeditor5-clipboard/src/utils/plaintexttohtml';
import PasteAsPlainTextCommand from './plaintextcommand';
import Translation from './translation';

/**
 * The main plugin class with the logic to use only the
 * plain text from the clipboard input.
 */
export default class PasteAsPlainTextEditing extends Plugin {
    static get pluginName(){
        return 'PasteAsPlainTextEditing';
    }

    init(){
        (new Translation()).translate();

        const editor = this.editor;

        editor.commands.add('pasteAsPlainText', new PasteAsPlainTextCommand(editor));

        // The logic responsible for converting HTML to plain text.
        const command = editor.commands.get('pasteAsPlainText');
        const editingView = editor.editing.view;

        editingView.document.on('clipboardInput',(evt, data) => {
            if (editor.isReadOnly || !command.value) {
                return;
            }

            const dataTransfer = data.dataTransfer;
            const content = plainTextToHtml(dataTransfer.getData('text/plain'));

            data.content = this.editor.data.htmlProcessor.toView(content);
        } );
    }
}
