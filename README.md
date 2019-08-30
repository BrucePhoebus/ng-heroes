# NgHeroes

## 运行

```bash
npm run start/dev --open
# http://localhost:4200/
```

## 编译打包

```bash
npm run build
```

## 部署到github page

```bash
# 首先要把项目放到github上
ng build --prod --output-path docs --base-href
# 执行完打包命令，项目根目录会生产docs文件，推送到github，在github page选择 ng-heroes/docs部署
```
