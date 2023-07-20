import type {
	PasteAsPlainText
} from './index';

declare module '@ckeditor/ckeditor5-core' {
	interface PluginsMap {
		[ PasteAsPlainText.pluginName ]: PasteAsPlainText;
	}
}
