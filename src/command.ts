import { Command } from 'ckeditor5/src/core';

/**
 * Handles the toggled state of the button.
 */
export default class PastePlainTextCommand extends Command {
	/**
	 * A value indicating whether the command is active. If the selection has some highlight attribute,
	 * it corresponds to the value of that attribute.
	 *
	 * @observable
	 * @readonly
	 */
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

	public override execute(): void {
		// Toggle the button state
		this.value = !this.value;
	}
}
