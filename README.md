# Monorepo
> Monorepo Template

## default setting
0. nodejs lts version install ( 14.17v )
1. npm i -g typescript@3.9.7
2. npm i -g lerna@3.22.1
3. npm i -g concurrently
4. npm i -g cross-env
5. Command Run
    ```
    node setup.js
    ```
6. npm run bootstrap
7. npm run watch
8. Go package app dir, npm start. ex ) cd test-app & npm start

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
    - lerna add <module_name>
    ```
    lerna add react
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