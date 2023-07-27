/**
 * @module PasteAsPlainText/PasteAsPlainText
 */

import { Plugin } from '@ckeditor/ckeditor5-core';
import PasteAsPlainTextUI from './plaintextui';
import PasteAsPlainTextEditing from './plaintextediting';

export default class PasteAsPlainText extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get requires(): readonly [typeof PasteAsPlainTextEditing, typeof PasteAsPlainTextUI];

	/**
	 * @inheritDoc
	 */
	public static get pluginName(): 'PasteAsPlainText' ;
}
