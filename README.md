# **ANGULAR CRUD - BEST PRACTICES**
![Code quality](https://img.shields.io/scrutinizer/quality/g/miguelsmuller/angular-crud/master?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/miguelsmuller/angular-crud?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/miguelsmuller/angular-crud?style=flat-square)
![GitHub branch checks state](https://img.shields.io/github/checks-status/miguelsmuller/angular-crud/master?style=flat-square)

## 💥 **Overview**
This project is a study system in **[Angular](https://angular.io/)** and implementing using the best practices of reactive programming.

It comes initially with a authentication using **[FireBase Service](https://firebase.google.com/)** and some more important points that are mentioned below. Has architecture was designed to be easy to understand and without use of any palliative programming - Go Horse.

| [Oficial Demo](https://angular-11-crud.web.app) | [Develop Demo](https://angular-11-crud-development.web.app/) |
|:-----------------------------------------------:|:------------------------------------------------------------:|

#### **Features**:
- Use **Material Design** with adequate customization.
- Component interaction with **@Input()** and **@Output()**
- Managing global and local state with **NgRx**
- Use of **implementation classes** and **dependency injection**
- Find and fix problems in TS with **ESlint**
- Code formatter with **Prettier**
- Git Automation with **Husky** - Using **commitlint** and **commitizer**

  
## 🏁 **Project Requirements**  
Make sure that you also have **[NodeJS](https://nodejs.org/)** and **[NPM](https://www.npmjs.com/)** installed on your computer.
- `$ node --version` and `$ npm --version`

Also make sure you have **Angular CLI** and **Firebase CLI** installed globally on your machine.  
- `$ npm install -g @angular/cli firebase-tools`

Install dependencies of project with:  
- `$ npm install`

#### 📌 **First run - Environment files**  
In the first execution of the project, it is **essential** to create the environment files (`environment.ts` and `environment.prod.ts`) in _**/src/environments**_ according to the model that follows inside the folder (`environment.example.ts`).

## 📂 **Project Structure**  
```
src/                         project source code
|- app/                      app components
|  |- @core/                 core module (singleton services and single-use components)
|  |- @shared/               shared module  (common components, directives and pipes)
|  |- pages/                 pages components
|  |- routes/                route files (private and public)
|  |- store/                 state files (reducers, actions, effects and selectrs)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
```

## 🔡 **Project Workflow**  
**[WORKFLOW.md](WORKFLOW.md)** - This project uses the workflow pattern called git flow.
- [Atlassian - Comparing Workflows](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)
- [Difference between workflows](https://www.zup.com.br/blog/git-workflow)
- [Girflow Cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html)

#### 🩺 **About Tests**  
To run the tests properly with the windows environment using wsl2 some adjustments were necessary. 

With the help of [Yoshi.T#1769](https://github.com/y16i) in discord the integration of karma using wsl2 has been established. After installing the chrome according to the link below, the karma was configured according to this commit and the export was done as follows:
- `export CHROME_BIN='/usr/bin/google-chrome'`
- [StackOverflow Thread - ChromeHeadless and Angular](https://stackoverflow.com/questions/58205600/cannot-start-chromeheadless-in-angular-project-using-wsl-works-on-mac)

#### 🚀 **About Deploy**  
- Production: `firebase deploy --only hosting:production`
- Development: `firebase deploy --only hosting:development`

## 🤝 **Contributing**  
**[CONTRIBUTING.md](CONTRIBUTING.md)** - Specifications of how the contribution should be submitted

## 📜 **License**  
**[LICENSE.md](LICENSE.md)** - GPL-v3 - When distributing derivative works, the source code for the work must be made available under the same license.

## 📅 **Changelog**  
**[CHANGELOG.md](CHANGELOG.md)** - Chronologically list of changes for each version of a project
