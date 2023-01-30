module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        'node_modules/petite-vue/dist/petite-vue.es.js': 'petite-vue.es.js'
    })
}