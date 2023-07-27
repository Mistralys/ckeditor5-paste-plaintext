/**
 * @module PasteAsPlainText/PasteAsPlainTextCommand
 */

import { Command } from '@ckeditor/ckeditor5-core';

/**
 * Handles the toggled state of the button.
 */
export default class PasteAsPlainTextCommand extends Command {
    refresh(){
        // Disable the command if the editor is in read-only mode.
        this.isEnabled = !this.editor.isReadOnly;

        // Enable the button initially by default
        if (this.value == undefined) {
            this.value = true;
        }
    }

    execute(...args){
        // Toggle the button state
        this.value = !this.value;
    }
}
