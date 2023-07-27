/**
 * @module PasteAsPlainText/PasteAsPlainTextCommand
 */

import { Command } from '@ckeditor/ckeditor5-core';

/**
 * Handles the toggled state of the button.
 */
export default class PasteAsPlainTextCommand extends Command {
	declare public value: boolean;
	/**
	 * @inheritDoc
	 */
	refresh(): void ;
	/**
	 * @inheritDoc
	 */
	execute(): void;
}
