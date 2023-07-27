# Paste as plain text plugin for CKEditor5

This plugin adds a toggleable button to enable or disable pasting text as 
plain text only.

It is virtually the same as the example plugin from the [clipboard tutorial][], 
but as an npm package to be easy to integrate in CKEditor5 builds.

## Installation

To add this to your CKEditor5 build, add the package to your project first:

```
npm install --save ckeditor5-paste-plaintext
```

Then add the needed import to your `app.js`:

```javascript
import PasteAsPlainText from 'ckeditor5-paste-plaintext/src/plaintext';
```

Create the build with webpack, or your preferred way of building the 
sources - for example:

```
webpack --mode development
```

(for more details on the build process, see the [framework quick start][].)

And finally, add the Plugin to the editor configuration, and the button 
to the toolbar (among the other plugins, of course):

```javascript
ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ 
            // your other plugins here
            PasteAsPlainText
        ],
        toolbar: [ 
            // your other buttons here
            'pasteAsPlainText'
        ]
    })
```

## Example project

To see an example of a CKEditor build that includes the plugin, see the
following repository: [AppFramework CKEditor5][].

Relevant there are the following files:

- [package.json](https://github.com/Mistralys/appframework-ckeditor5/blob/ef704b6819da1e4cb696413cf9991f4a1f064507/package.json)
  Requires the plugin as a dependency.
- [src/ckeditor.js](https://github.com/Mistralys/appframework-ckeditor5/blob/ef704b6819da1e4cb696413cf9991f4a1f064507/src/ckeditor.js) 
  Imports the plugin, and adds it to the build.

## Credits

The toolbar icon is based on an SVG file created by [Vitaly Gorbachev](https://www.flaticon.com/authors/vitaly-gorbachev).


[AppFramework CKEditor5]: https://github.com/Mistralys/appframework-ckeditor5
[clipboard tutorial]: https://ckeditor.com/docs/ckeditor5/latest/framework/guides/deep-dive/clipboard.html#paste-as-plain-text-plugin-example
[framework quick start]: https://ckeditor.com/docs/ckeditor5/latest/framework/guides/quick-start.html