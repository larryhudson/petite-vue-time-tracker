module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        'node_modules/petite-vue/dist/petite-vue.es.js': 'petite-vue.es.js',
        'node_modules/reasonable-colors/reasonable-colors.css': 'reasonable-colors.css'
    })
}