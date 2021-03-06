const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
module.exports = {
    mode: process.env.NODE_ENV !== 'prod' ? 'development' : 'production',
    entry: {
        main: ['./src/index.tsx'],
        default: ['./src/styles/default.module.scss'],
        ios: ['./src/styles/ios.module.scss']
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
                    process.env.NODE_ENV !== 'prod' ? 'style-loader' : MiniCssExtractPlugin.loader,
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