module.exports = {
  // server port
  port: 3000,

  // title
  title: 's-textarea-auto-height-component',

  // layout
  layout: 'right',

  // compile server
  compileServer: {

    // compile server port
    port: 4000

  },

  // editors
  editors: {
    html: {
      language: 'html',
      data: `
        <h1 class="h3 m-b-small">
          Coffeekraken s-textarea-auto-height-component
        </h1>
        <p class="p m-b-bigger">
          Extension to the textarea tag to privide it the capacility to adjust his height automatically depending on his content.
        </p>
        <textarea is="s-textarea-auto-height" style="min-height:50px; max-height:150px"></textarea>
      `
    },
    css: {
      language: 'sass',
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';

        @include s-setup(());
        @include s-init();
        @include s-classes();
        @include s-typography-classes();

        body {
          padding: s-space(bigger);
        }
      `
    },
    js: {
      language: 'js',
      data: `
        import STextareaAutoHeightComponent from './dist/index'
      `
    }
  }
}
