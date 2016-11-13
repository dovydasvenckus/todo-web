// See http://brunch.io for documentation.
module.exports = {
    files: {
        javascripts: {
            joinTo: {
                'app.js': /^app/,
                'vendor.js': /^(?!app)/
            }
        },
        stylesheets: {
            joinTo: {
                'app.css': /^app/,
                'css/vendor.css': /^node_modules/
            }
        },

        templates: {joinTo: 'app.js'}
    },
    npm: {
        styles: {
            'material-design-lite': ['dist/material.min.css']
        },
        globals: {
            $: 'jquery',
            Backbone: 'backbone',
            _: 'underscore',
            Material: 'material-design-lite'
        }
    }
};
