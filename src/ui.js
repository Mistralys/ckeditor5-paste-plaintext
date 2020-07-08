
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

/**
 * Handles registering the toggleable button in the 
 * editor's UI so it can be added to the toolbar, with
 * the name `pastePlainText`.
 */
export default class PastePlainTextUI extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'pastePlainText', locale => {
            const view = new ButtonView( locale );
            const command = editor.commands.get( 'pastePlainText' );

            view.set( {
                label: 'Paste as plain text',
                withText: true,
                tooltip: true,
                isToggleable: true
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
