
import { Plugin, Command } from '@ckeditor/ckeditor5-core';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import PasteIcon from './paste-plain.svg';

/**
 * Handles registering the toggleable button in the
 * editor's UI so it can be added to the toolbar, with
 * the name `pastePlainText`.
 */
export default class PastePlainTextUI extends Plugin {

	public init(): void {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'pastePlainText', locale => {
            const view = new ButtonView( locale );
            const command = editor.commands.get( 'pastePlainText' );

            // to be table to use the translation function
            const t = view.t;

            view.set( {
                label: t('Toggle removing any formatting from pasted text.'),
                withText: false,
                tooltip: true,
                isToggleable: true,
                icon:PasteIcon
            } );

            // Callback executed once the button is clicked.
            view.on( 'execute', () => {
                editor.execute( 'pastePlainText' );
            } );

            view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

            return view;
        } );
    }
};
