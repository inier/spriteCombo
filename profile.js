/* 单独项目的配置文件 */

// const PROJ = {
//     name: 'caec-web',    // 项目名称
//     version: 'v0.0.1',   // 发布版本号
//     src: 'web',          // 源文件目录
//     dest: 'web-pack',    // 目标文件目录
//     beta: 'beta',        // 测试版本输出目录
//     build: 'build',      // 发布版本输出目录
//     prefix_body:'body-',       // 模块目录前缀
//     prefix_templates: 'tpl-',  // 模板目录前缀
//     prefix_frag: 'frag-',      // 片段目录前缀
//     style: 'css',        // 模块样式文件目录
//     script:'js',         // 模块脚本目录
//     vendor:'rock/com',   // 第三方库目录
//     common: 'rock/js',   // 公共脚本目录
//     asset: 'assets',     // 静态资源目录
//     image: 'img',        // 常规图片目录
//     sprite:'_sprites'    // 精灵图目录
// };

// // 项目测试版本输出目录
// const BETA = `${PROJ.src}/${PROJ.beta}`;

// // 项目发布版本输出目录
// const BUILD = `${PROJ.src}/${PROJ.build}`;

// // 项目版面目录
// const VIEWS = `${SRC}/*`;

// // 项目页面模板目录
// const TPLS = `${PROJ.src}/${PROJ.prefix_templates}*`;

// 全局配置
var project = "demo"; //当前项目名称
var imageDir = 'img';
var cssDir = 'css';

// 精灵图sprite合并
var spriteDir = '_sprites';
var spriteDist = `${project}/**/${imageDir}`; //目标文件夹
var spriteOutFile = '_sprite';

var config = {
    base: {
		project: project
    },
    sprites: {
        // 这里添加需要打包精灵图的目录
        dir: [
            "body-cacf", "body-diy", "body-diys"
        ],

        src: `${imageDir}/${spriteDir}/**/!(${spriteOutFile}|*@2x)*.png`,
        srcRetina: `${imageDir}/${spriteDir}/**/!(${spriteOutFile})*.png`,
        dist: {
            css: cssDir,
            image: imageDir
        },
        options: {
            imgName: `${spriteOutFile}.png`, // 生成的图片
            cssName: `${spriteOutFile}.scss`, // 生成的sass文件
            imgPath: `../img/${spriteOutFile}.png`,
            padding: 8, // 图元之间的距离
            algorithm: 'binary-tree', // 图元的排序方式
            cssFormat: 'css',
            cssTemplate: "gulp/sprites/handlebarsStr.scss.handlebars", // 模板,采用handlebar
            progressive: true //图片为连续
        },
        optionsRetina: {
            retinaSrcFilter: [`${spriteDist}/${spriteDir}/*@2x.png`],
            retinaImgName: `${spriteOutFile}@2x.png`,
            retinaImgPath: `../img/${spriteOutFile}@2x.png`,
            imgName: `${spriteOutFile}.png`, // 生成的图片
            cssName: `${spriteOutFile}.scss`, // 生成的sass文件
            imgPath: `../img/${spriteOutFile}.png`,
            padding: 8, // 图元之间的距离
            algorithm: 'binary-tree', // 图元的排序方式
            cssFormat: 'css',
            cssTemplate: "gulp/sprites/handlebarsStr.scss.handlebars", // 模板,采用handlebar
            progressive: true //图片为连续
        }
    }
};

module.exports = config;