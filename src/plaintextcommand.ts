/**
 * @module PasteAsPlainText/PasteAsPlainTextCommand
 */

import { Command } from 'ckeditor5/src/core';

/**
 * Handles the toggled state of the button.
 */
export default class PasteAsPlainTextCommand extends Command {
	declare public value: boolean;

	/**
	 * @inheritDoc
	 */
	public override refresh(): void {
		// Disable the command if the editor is in read-only mode.
		this.isEnabled = !this.editor.isReadOnly;

		// Enable the button initially by default
		if (this.value == undefined) {
			this.value = true;
		}
	}

	/**
	 * @inheritDoc
	 */
	public override execute(): void {
		// Toggle the button state
		this.value = !this.value;
	}
}
