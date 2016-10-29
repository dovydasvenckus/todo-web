// See http://brunch.io for documentation.
module.exports = {
    files: {
        javascripts: {
            joinTo: {
                'app.js': /^app/,
                'vendor.js': /^(?!app)/
            }
        },
        stylesheets: {joinTo: 'app.css'},
        templates: {joinTo: 'app.js'}
    },
    npm: {
        globals: {
            $: 'jquery',
            Backbone: 'backbone',
            _: 'underscore'
        }
    }
}
