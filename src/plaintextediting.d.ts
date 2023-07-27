/**
 * @module PasteAsPlainText/PasteAsPlainText
 */

import { Plugin } from '@ckeditor/ckeditor5-core';

/**
 * The main plugin class with the logic to use only the
 * plain text from the clipboard input.
 */
export default class PasteAsPlainTextEditing extends Plugin {
    /**
     * @inheritDoc
     */
    static get pluginName(): "PasteAsPlainTextEditing";
    /**
     * @inheritDoc
     */
    init(): void;
}
