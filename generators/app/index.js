'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
const path = require('path');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the wonderful ${chalk.red('generator-drudge')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'project_name',
        message: 'Your project name',
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('THEMENAME.info.yml'),
      this.destinationPath(path.join(this.props.project_name, this.props.project_name + '.info.yml')),
      { project_name: this.props.project_name }
    );
    this.fs.copyTpl(
      this.templatePath('THEMENAME.libraries.yml'),
      this.destinationPath(path.join(this.props.project_name, this.props.project_name + '.libraries.yml')),
      { project_name: this.props.project_name }
    );
    this.fs.copy(
      this.templatePath('THEMENAME.theme'),
      this.destinationPath(path.join(this.props.project_name, this.props.project_name + '.theme'))
    );
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath(path.join(this.props.project_name, 'package.json')),
      { project_name: this.props.project_name }
    );
    this.fs.copy(
      this.templatePath('assets'),
      this.destinationPath(path.join(this.props.project_name, 'assets')),
      { project_name: this.props.project_name }
    );
    this.fs.copy(
      this.templatePath('gulp'),
      this.destinationPath(path.join(this.props.project_name, 'gulp')),
      { project_name: this.props.project_name }
    );
    this.fs.copyTpl(
      this.templatePath('gulp/options.js'),
      this.destinationPath(path.join(this.props.project_name, 'gulp/options.js')),
      { project_name: this.props.project_name }
    );
    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath(path.join(this.props.project_name, 'gulpfile.js')),
      { project_name: this.props.project_name }
    );
    mkdirp(path.join('.', this.props.project_name, '/dist/styles'));
    mkdirp(path.join('.', this.props.project_name, '/dist/images'));
    mkdirp(path.join('.', this.props.project_name, '/dist/scripts'));
    mkdirp(path.join('.', this.props.project_name, '/dist/fonts'));
    mkdirp(path.join('.', this.props.project_name, '/dist/metas'));

  }


  install() {
    var installDir  = path.join(process.cwd(), this.props.project_name);
    process.chdir(installDir);
    this.installDependencies();
  }
};
