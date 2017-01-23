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
            default: "React component"
        },
        gitUsername: {
            type: 'string',
            required: true,
            message: 'Github username'
        },
        gitRepository: {
            type: 'string',
            required: true,
            message: 'Git repository',
            default: function (data) {
                return data.name
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
        componentname: function (name) {
            var capitalizeName = name[0].toUpperCase() + name.slice(1)
            var name = capitalizeName.replace(/\..*$/,'').replace(/(_|-)/g, '')
            return name
        }
    },
    completeMessage: "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run hot\n  npm run dev\n\nDocumentation can be found at {{ destDirName }}/dev.md"
}
