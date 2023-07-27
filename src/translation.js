/**
 * Import the translation service, so we can add some
 * translations for the button text.
 */
import { add } from '@ckeditor/ckeditor5-utils/src/translation-service';

export default class Translation
{
    translate()
    {
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
    }
}
