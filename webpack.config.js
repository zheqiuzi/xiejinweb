var webpack=require("webpack");
var HtmlWebpackPlugin=require("html-webpack-plugin");
var CopyWebpackPlugin=require('copy-webpack-plugin');

const { VueLoaderPlugin } = require('vue-loader')

module.exports={
    devtool: "source-map",
    entry: {
        index:"./src/static/js/index/index.js",
        waimai:"./src/static/js/waimai/waimai.js",
        test:"./src/static/js/index/test.js"
    },
    output: {
        path: __dirname+"/dist/",
        filename: "[name].bundle.js"
    },

    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            "jquery":"jquery/dist/jquery.js"
        }
    },

    module: {
        rules: [
            {
                test:/\.vue$/,
                use:"vue-loader"
            },
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            // {
            //     test:/\.(.png|jpg|jpeg|gif|svg)(\?.*)?$/,
            //     use:[
            //         {
            //             loader: "url-loader",
            //             options: {
            //                 limit:10000,
            //                 name:"img/[name].[ext]?[hash]"
            //             }
            //         }
            //     ]
            // },
            {
                test:/.(jpg|png)$/,
                use:["url-loader"]
            },
            {test:/\.js$/, use:'babel-loader', exclude:/node_modules/}
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([
            {
                from:__dirname+"/src/static/css",
                to:"./static/css"
            },
            {
                from:__dirname+"/src/static/images",
                to:"./static/images"
            },
            ,
            {
                from:__dirname+"/src/static/framework",
                to:"./static/framework"
            }
        ]),
        new HtmlWebpackPlugin({
            template:"./src/html/index/index.html",
            filename:"html/index/index.html",
            inject:"body",
            chunks:["index"]
        }),
        new HtmlWebpackPlugin({
            template:"./src/html/waimai/waimai.html",
            filename:"html/waimai/waimai.html",
            inject:"body",
            chunks:["waimai"]
        }),
        new HtmlWebpackPlugin({
            template:"./src/html/test/test.html",
            filename:"html/test/test.html",
            inject:"body",
            chunks:["test"]
        })

    ],
    devServer:{
        contentBase: "./src", //网站的根目录为 根目录/src
        port: 9000, //端口改为9000
        host: 'localhost', //如果指定的host，这样同局域网的电脑或手机可以访问该网站,host的值在dos下使用ipconfig获取
        open:true, // 自动打开浏览器
        index:'front.html', // 与HtmlWebpackPlugin中配置filename一样
        inline:true, // 默认为true, 意思是，在打包时会注入一段代码到最后的js文件中，用来监视页面的改动而自动刷新页面,当为false时，网页自动刷新的模式是iframe，也就是将模板页放在一个frame中
        hot:false,
        compress:true //压缩
    }
}