const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
module.exports = {
    mode: 'development',
    entry: {
        default: ['./src/playground/index.tsx', './src/styles/default.module.scss'],
        ios: ['./src/playground/ios.tsx', './src/styles/ios.module.scss']
    },
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
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};