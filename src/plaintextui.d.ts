/**
 * @module PasteAsPlainText/PasteAsPlainTextUI
 */

import { Plugin } from '@ckeditor/ckeditor5-core';

/**
 * Handles registering the toggleable button in the
 * editor's UI so it can be added to the toolbar, with
 * the name `pasteAsPlainText`.
 */
export default class PasteAsPlainTextUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get pluginName(): 'PasteAsPlainTextUI';
	/**
	 * @inheritDoc
	 */
	public init(): void;
	/**
	 * Creates a button for the specified command.
	 *
	 * @param name Command name.
	 * @param label Button label.
	 * @param icon Source of the icon.
	 */
	private _addButton;
}
