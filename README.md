## 精灵图合并规范

### *技术栈

采用gulp任务管理工具实现精灵图合并。

> 该工具支持多个不同的目录，需要在gulp工程中配置dir，引入不同的目录。如果根目录不同，需要设置对于的project。


### *约定规则

1.  将需要合并的图片放置到模块目录的`img`目录下的`_sprites`,如`body-cacf/img/_sprites`
2.  图片的文件名会被映射为css中的类名，所以需要进行调整； 如 `motion.png`  在css中对应的类名为`.sprite-motion`；
3.  生成的大图会被保存到`img`目录下，名字为`_sprite.png`
4.  生成的css会被保存到`css`目录下，名字为`_sprite.scss`，需要将该文件import到自己模块的主scss文件中（项目整体采用scss）。

> 图片的引入方式需要采用背景图引入。
> 如果需要生成2x图，需要保证`_sprites`目录中1x图和2x图是一一对应的关系，且没有其他多余的图。

### *命令

在gulpfile.js所在目录中执行：

```
> gulp sprites   //只合并1x图

> gulp spritesRetina  //输出1x和2x图
```

### *使用css

在html中引用对应的css即可。



