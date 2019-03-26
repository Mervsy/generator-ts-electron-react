'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`🚀 Welcome to the Electron, React, TypeScript Generator 🚀`));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Project name',
        default: ''
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description',
        default: 'Electron, React, and TypeScript.'
      },
      {
        type: 'input',
        name: 'companyName',
        message: 'Company name',
        default: 'Contoso'
      },
      {
        type: 'input',
        name: 'authorName',
        message: 'Author name',
        default: ''
      },
      {
        type: 'input',
        name: 'authorEmail',
        message: 'Author email',
        default: ''
      },
      {
        type: 'input',
        name: 'authorWebsite',
        message: 'Author website',
        default: ''
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    // Root Files

    this.fs.copyTpl(this.templatePath('ts-electron-react/editorconfig'), this.destinationPath('.editorconfig'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/gitignore'), this.destinationPath('.gitignore'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/LICENSE'), this.destinationPath('LICENSE'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/package.json'), this.destinationPath('package.json'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/prettierrc'), this.destinationPath('.prettierrc'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/tsconfig.json'), this.destinationPath('tsconfig.json'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/tslint.json'), this.destinationPath('tslint.json'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/webpack.base.config.js'), this.destinationPath('webpack.base.config.js'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/webpack.main.config.js'), this.destinationPath('webpack.main.config.js'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/webpack.main.prod.config.js'), this.destinationPath('webpack.main.prod.config.js'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/webpack.renderer.config.js'), this.destinationPath('webpack.renderer.config.js'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/webpack.renderer.prod.config.js'), this.destinationPath('webpack.renderer.prod.config.js'), this.props);

    // SRC Files

    this.fs.copyTpl(this.templatePath('ts-electron-react/src/actions/counterActions.ts'), this.destinationPath('src/actions/counterActions.ts'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/src/actions/index.ts'), this.destinationPath('src/actions/index.ts'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/src/components/Application.tsx'), this.destinationPath('src/components/Application.tsx'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/src/components/Counter.scss'), this.destinationPath('src/components/Counter.scss'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/src/components/Counter.tsx'), this.destinationPath('src/components/Counter.tsx'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/src/containers/CounterContainer.ts'), this.destinationPath('src/containers/CounterContainer.ts'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/src/reducers/counterReducer.ts'), this.destinationPath('src/reducers/counterReducer.ts'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/src/reducers/index.ts'), this.destinationPath('src/reducers/index.ts'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/src/store/index.ts'), this.destinationPath('src/store/index.ts'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/src/app.tsx'), this.destinationPath('src/app.tsx'), this.props);

    this.fs.copyTpl(this.templatePath('ts-electron-react/src/main.ts'), this.destinationPath('src/main.ts'), this.props);
  }

  install() {
    this.yarnInstall();
  }
}

