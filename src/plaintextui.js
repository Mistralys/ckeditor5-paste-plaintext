/**
 * @module PasteAsPlainText/PasteAsPlainTextUI
 */

import { Plugin } from '@ckeditor/ckeditor5-core';
import { ButtonView } from '@ckeditor/ckeditor5-ui';
import pasteIcon from '../theme/icons/paste-plain.svg';

/**
 * Handles registering the toggleable button in the
 * editor's UI so it can be added to the toolbar, with
 * the name `pasteAsPlainText`.
 */
export default class PasteAsPlainTextUI extends Plugin {
    /**
     * @inheritDoc
     */
    static get pluginName(){
        return 'PasteAsPlainTextUI';
    }

    /**
     * @inheritDoc
     */
    init(){
        const editor = this.editor;
        const t = editor.t;
        this._addButton('pasteAsPlainText', t('Toggle removing any formatting from pasted text.'), pasteIcon);
    }
    /**
     * Creates a button for the specified command.
     *
     * @param name Command name.
     * @param label Button label.
     * @param icon Source of the icon.
     */
    _addButton(name, label, icon) {
        const editor = this.editor;

        editor.ui.componentFactory.add(name, locale => {
            const command = editor.commands.get(name);
            const view = new ButtonView(locale);

            view.set({
                label,
                withText: false,
                tooltip: true,
                isToggleable: true,
                icon
            });

            view.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

            this.listenTo(view, 'execute', () => {
                editor.execute(name);
            });

            return view;
        });
    }
}
