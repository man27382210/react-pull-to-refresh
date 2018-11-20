const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: process.env.NODE_ENV !== 'prod' ? 'development' : 'production',
    entry: './src/playground/index.tsx',
    resolve: {
        extensions: [".ts", ".tsx", ".js", "*.scss"]
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/, loader: "ts-loader",  
            },
            {
                test: /\.module\.(scss|sass)$/,
                use: [
                    process.env.NODE_ENV !== 'prod' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                    // {
					// 	loader: 'file-loader',
					// 	options: {
					// 		name: '[name].css',
					// 	}
					// },
                    // {
                    // loader: 'style-loader'
                    // },
                    // {
                    // loader: 'css-loader',
                    // },
                    // {
                    // loader: 'sass-loader'
                    // }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
        })
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};