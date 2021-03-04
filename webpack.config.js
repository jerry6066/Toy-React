module.exports= {
    // entry 为打包文件入口
    entry: {
        main: './main.js'
    },
    // 设置为开发模式，使build出来的文件方便调试
    mode: "development",
    optimization: {
        minimize: false
    },
    // 配置babel-loader
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [['@babel/plugin-transform-react-jsx',{pragma:'createElement'}]]
                    }
                }
            }
        ]
    }   
}