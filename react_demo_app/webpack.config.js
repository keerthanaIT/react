const path = require('path');


module.exports = {
  entry: './src/app.js',
  output: {
    path:path.join(__dirname,'public'),
    filename:'bundle.js'
  },
  module:{
    rules:[{
      loader:'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }],
    test: /\.css$/,
    
  },
  devtool: 'cheap-module-eval-source-map', // used to shov the correct file error from console  vhile inspect instead of shoving the bundle file
  devServer:{
    contentBase:path.join(__dirname,'public') //deleting the bulde.js ile in public folder because v have used this contentBase
  }
}