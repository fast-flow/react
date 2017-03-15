var exec = require('child_process').execSync
var componentname = function (name) {
    name = name || ''
    name = name.replace(/react/g,'').replace(/(_|-)/g, '').replace(/\..*$/,'')
    if (name.length === 0) {
        name = 'some'
    }
    var capitalizeName = name[0].toUpperCase() + name.slice(1)
    return capitalizeName
}
var getUser = function () {
    var name
    var email

    try {
        name = exec('git config --get user.name')
        email = exec('git config --get user.email')
    } catch (e) {}

    name = name && JSON.stringify(name.toString().trim()).slice(1, -1)
    email = email && (' <' + email.toString().trim() + '>')
    return (name || '') + (email || '')
}
module.exports = {
    prompts: {
        name: {
            type: 'string',
            required: true,
            message: 'Npm package name'
        },
        version: {
            type: 'string',
            message: 'Npm package version',
            default: '0.1.0',
        },
        description: {
            type: 'string',
            required: true,
            message: 'Npm package description',
            default: function (data) {
                return 'React,' + componentname(data.name) +'.Custom style!'
            }
        },
        gitUsername: {
            type: 'string',
            required: true,
            message: 'Github username or organization',
            default: function (data) {
                return getUser().replace(/\s.*/,'')
            }
        },
        gitRepository: {
            type: 'string',
            required: true,
            message: 'Git repository',
            default: function (data) {
                return data.name
            }
        },
        maintainerAccount: {
            type: 'string',
            message: 'Maintainer account (Github username, is not organization)',
            default: function (data) {
                return data.gitUsername
            }
        },
        maintainerFullName: {
            type: 'string',
            message: 'Maintainer full name (example: Michael Jackson)',
            default: function (data) {
                return data.maintainerAccount
            }
        },
        homepage: {
            type: 'string',
            message: 'Online homepage?',
            required: true,
            default: function (data) {
                return 'http://'+ data.gitUsername + '.github.io/' + data.gitRepository
            }
        }
    },
    helpers: {
        componentname: componentname,
        saucelabsname: function (name) {
            name = name || ''
            name = name.replace(/\./g,'_')
            return name
        }
    },
    completeMessage: "To get started:\n\n  cd {{destDirName}}\n  npm install --registry=https://registry.npm.taobao.org # or yarn\n  npm run doc\n  npm run js\n\nDocumentation can be found at {{ destDirName }}/developers-to-read.md"
}
