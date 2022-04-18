# Monorepo
> Monorepo Template

## default setting
0. nodejs lts version install : using node v16.13.2 (npm v8.1.2)
1. Command Run
    ```
    node setup.js
    ```
2. Go package app dir, npm start. ex ) cd test-app & npm start

## 각 package 명세
- common-module ( common_module )
    ```
    - react-redux
    ```
- components
    ```
    - public components
    ```
- history-module ( history_module )
    ```
    - react-router-dom history module
    ```
- hooks
    ```
    - react hooks functions
    ```
- lodash-module ( lodash_module )
- log-cli , log-core 
    ```
    - terminal log 
    ```
- utils-ts, utils-js ( utils_ts, utils_js )
    ```
    - only fure js function
    ```
- @<app name>
    ```
    - 각 모듈들을 적용할 앱은 레포 이름앞에 @를 붙입니다.
    - ex ) @test-app
    ```
## Rules
0. initalized
    ```
    npm run bootstrap
    ```
1. packages app add
    - lerna create <app_name>
    ```
    lerna create pop-fe
    ```
2. module add
    - yarn add <module_name>
    ```
    yarn add react
    2-1. app <- module add
    ```
    - lerna add <module> --scope=<packages_name>
    ```
    lerna add hooks --scope=someting-app
    ```
3. module error
    ```
    lerna clean
    npm run bootstrap
    ```

## TODO
1. MainApp develop ( recruit-portal )

by jhking17.