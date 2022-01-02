# **ANGULAR CRUD - BEST PRACTICES**
![Code quality](https://img.shields.io/scrutinizer/quality/g/miguelsmuller/study-angular-reactive/master?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/miguelsmuller/study-angular-reactive?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/miguelsmuller/study-angular-reactive?style=flat-square)
![GitHub branch checks state](https://img.shields.io/github/checks-status/miguelsmuller/study-angular-reactive/master?style=flat-square)

## 💥 **Overview**
This project is a study system in **[Angular](https://angular.io/)** and implementing using the best practices of reactive programming.

It comes initially with a authentication using **[FireBase Service](https://firebase.google.com/)** and some more important points that are mentioned below. Has architecture was designed to be easy to understand and without use of any palliative programming - Go Horse.

- Use **Material Design** with adequate customization.
- Component interaction with **@Input()** and **@Output()**
- Managing global and local state with **NgRx**
- Use of **implementation classes** and **dependency injection**
- Find and fix problems in TS with **ESlint**
- Code formatter with **Prettier**
- Git Automation with **Husky** - Using **commitlint** and **commitizer**


|[See Demonstration](https://study-angular-reactive.web.app/) |
|:---------------------------------------------------:|

  
## 🏁 **Project Requirements**  
Make sure that you also have **[NodeJS](https://nodejs.org/)** and **[NPM](https://www.npmjs.com/)** installed on your computer.
- `$ node --version` and `$ npm --version`

<br/>

**Install dependencies** of project with:  
- `$ npm install`

<br/>

**Angular Cli** is already part of the development dependencies, so any cli functionality can be used with the prefix npx.

- `$ npx ng serve`

<br/>

**First Execution - Environment files**: In the first execution of the project, it is **essential** to create the environment files (_environment.ts_) in _/src/environments_ according to the model that follows inside the folder (_environment.exp.ts_).

<br/>

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


<br/>

## **Workflow**  
**[WORKFLOW.md](WORKFLOW.md)** - This project uses the workflow pattern called `git flow`.
- [Atlassian - Comparing Workflows](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)
- [Difference between workflows](https://www.zup.com.br/blog/git-workflow)
- [Girflow Cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html)

<br/>

## **Tests**  
[Need to be implemented]

<br/>

## **Deploy**  
**[GITHUB ACTIONS](https://github.com/miguelsmuller/study-angular-reactive/actions/workflows/push-to-gh-pages.yml)** - To deploy to a demonstration of project hosted in GitHub Pages.

<br/>

## **Contributing**  
**[CONTRIBUTING.md](CONTRIBUTING.md)** - Specifications of how the contribution should be submitted

<br/>

## **Changelog**  
**[CHANGELOG.md](CHANGELOG.md)** - Chronologically list of changes for each version of a project
