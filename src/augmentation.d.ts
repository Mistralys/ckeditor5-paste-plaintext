import type {
	PasteAsPlainText,
	PasteAsPlainTextEditing,
	PasteAsPlainTextUI,
	PasteAsPlainTextCommand
} from './index';

declare module '@ckeditor/ckeditor5-core' {
	interface CommandsMap {
		pasteAsPlainText: PasteAsPlainTextCommand;
	}
	interface PluginsMap {
		[PasteAsPlainText.pluginName]: PasteAsPlainText;
		[PasteAsPlainTextEditing.pluginName]: PasteAsPlainTextEditing;
		[PasteAsPlainTextUI.pluginName]: PasteAsPlainTextUI;
	}
}
