
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import PasteIcon from './paste-plain.svg';

/**
 * Import the translation service, so we can add some 
 * translations for the button text.
 */
import { add } from '@ckeditor/ckeditor5-utils/src/translation-service';

add(
    'de',
    {
        'Toggle removing any formatting from pasted text.': 'Das Entfernen der Formatierungen beim Einfügen ein- oder ausschalten.'
    }
);

add(
    'fr',
    {
        'Toggle removing any formatting from pasted text.': 'Activer ou désactiver la suppression des formatages du texte à l\'insertion.'
    }
);


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
