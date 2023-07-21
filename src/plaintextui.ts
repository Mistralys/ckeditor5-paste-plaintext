/**
 * @module PasteAsPlainText/PasteAsPlainTextUI
 */

import { Plugin } from '@ckeditor/ckeditor5-core';
import { ButtonView } from 'ckeditor5/src/ui';

import type PasteAsPlainTextCommand from './plaintextcommand';

import PasteIcon from './paste-plain.svg';

const PAST_PLAIN = 'pasteAsPlainText';

/**
 * Handles registering the toggleable button in the
 * editor's UI so it can be added to the toolbar, with
 * the name `pastePlainText`.
 */
export default class PasteAsPlainTextUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get pluginName(): 'PasteAsPlainTextUI' {
		return 'PasteAsPlainTextUI';
	}

	/**
	 * @inheritDoc
	 */
	public init(): void {
		const editor = this.editor;
		const t = editor.t;

		editor.ui.componentFactory.add( 'pastePlainText', locale => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			const command: PasteAsPlainTextCommand = editor.commands.get( PAST_PLAIN );
			const view = new ButtonView( locale );

			// to be table to use the translation function
			view.set( {
				label: t( 'Toggle removing any formatting from pasted text.' ),
				withText: false,
				tooltip: true,
				isToggleable: true,
				icon: PasteIcon
			} );

			// Callback executed once the button is clicked.
			view.on( 'execute', () => {
				editor.execute( PAST_PLAIN );
			} );

			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			return view;
		} );
	}
}
