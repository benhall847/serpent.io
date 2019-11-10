const webpack = require("webpack");
const path = require("path"); //research where did this comes from... we did NOT npm install this.

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        modules: [
            path.resolve("./src"),
            path.resolve("./src/components"),
            path.resolve("./src/core"),
            path.resolve("./globalContext"),
            path.resolve("./node_modules")
        ]
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: "./dist",
        hot: true
    }
};
