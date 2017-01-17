var path = require('path')
var markrun = require('markrun')
var markrunThemes = require('markrun-themes')
var webpack = require('webpack')
var webpackCompiler = require('webpack-compiler')
var fs = require('fs')

fis.match('{config/,npm-debug.log,yarn.lock}', {
    release: false
})

fis.match('*.md', {
    rExt: '.html',
    isHtmlLike: true,
    parser: [
        function (content, file) {
            var info = {
                filepath: file.fullname
            }
            var html = markrun(
                content,
                {
                    template: require('fs').readFileSync(__dirname + '/template.html').toString(),
                    replace: {
                        pre: function (data, options, info) {
                            var path = require('path')
                            var fs = require('fs')
                            var fullpath = path.join(path.dirname(info.filepath), data.file)
                            var code = fs.readFileSync(fullpath, 'utf-8').toString()
                            info.deps = info.deps || []
                            info.deps.push(fullpath)
                            code = '<pre class="markrun-source-pre" data-lang="js" >' + options.highlight(code) + '</pre>'
                            if (data.run) {
                                code = code +'<script data-markrun-lastrun="true" src="'+ data.file + '"></script>'
                            }
                            return code
                        }
                    }
                },
                info
            )
            html = html.replace(/href="([^"]+)"/g, function (all, url) {
                if (!require('is-absolute-url')(url) && !/^\/\//.test(url)) {
                    url = url.replace(/README\.md$/,'index.html')
                            .replace(/\.md$/,'.html')
                }
                return 'href="' + url + '"'
            })
            return html
        },
        fis.plugin('jdists', {
            trigger: 'dev'
        })
    ]
})
// @2 关联 @1
fis.match('(**)README.md', {
    release: '$1index'
})
