# study-lerna

学习lerna，本demo按照如下步骤进行练习

### steps:

1. 全局安装lerna
```
npm i -g lerna
```

2. 创建项目目录，在当前目录中执行`lerna init`会生成初始目录结构。lerna版本管理有两种模式，默认采用固定模式，另一种是独立模式，本demo采用独立模式

```
lerna init --independent
```

3. 创建子包，会生成默认子包目录结构

```
lerna create package-01
lerna create package-02
lerna create package-03
```

4. package-01 package-02 package-03均依赖lodash

```
lerna add lodash
```

分别在package-01 package-02 package-03安装lodash

5. package-02 依赖 package-01 package-03

```
lerna add package-02 --scope=package-01
lerna add package-02 --scope=package-03
```

这里采用的是symlink, 本地开发时，即使package-01 / package-03有更新，package-02中也无需重新安装，会同步更新

6. 删除依赖，所有安装依赖包均被删除

```
lerna clean
```

7. 安装依赖

```
lerna bootstrap
```

8. 包发布

```
lerna publish
```

### 参考地址

[https://github.com/lerna/lerna#about](lerna)
