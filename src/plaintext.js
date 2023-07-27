/**
 * @module PasteAsPlainText/PasteAsPlainText
 */

import { Plugin } from '@ckeditor/ckeditor5-core';
import PasteAsPlainTextUI from './plaintextui';
import PasteAsPlainTextEditing from './plaintextediting';

export default class PasteAsPlainText extends Plugin {
    static get requires() {
        return [PasteAsPlainTextEditing, PasteAsPlainTextUI];
    }
    /**
     * @inheritDoc
     */
    static get pluginName() {
        return 'PasteAsPlainText';
    }
}
