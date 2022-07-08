const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        main_page: "./src/main_page.js",
        contact: "./src/contact.js",
        about: "./src/about.js",
    },
    devtool: "inline-source-map",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
		{
			test: /\.css$/i,
			use: ["style-loader", "css-loader"],
		},
            	{
                	test: /\.(png|svg|jpg|jpeg|gif)$/i,
                	type: "asset/resource",
            	},
        ],
    },
};
