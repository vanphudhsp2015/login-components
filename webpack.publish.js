var path = require("path");
module.exports = {
  entry: "./publish/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.(ico|jpg|jpeg|png|gif|otf|eot|ttf|woff|svg|less)/,
        loader: ["file-loader"]
      },
      {
        test: /\.(js(x*))$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|build)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]"
              }
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  externals: {
    react: "commonjs react"
  },
  resolve: {
    extensions: ["*", ".scss", ".js", ".json", ".jsx"],
    modules: [path.resolve(__dirname, "./node_modules"), "node_modules"],
    alias: {
      pages: path.resolve(__dirname, "./src/pages"),
      routes: path.resolve(__dirname, "./src/routes/", "routes.js"),
      layouts: path.resolve(__dirname, "./src/layouts"),
      components: path.resolve(__dirname, "./src/components"),
      styles: path.resolve(__dirname, "./src/assets/styles"),
      services: path.resolve(__dirname, "./src/services")
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000
  }
};
