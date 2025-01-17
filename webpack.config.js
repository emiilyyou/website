const path = require('path');

module.exports = {
  entry: './src/index.js',  // Your entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,  // Match image files
        type: 'asset/resource',           // Process images as resources
        generator: {
          filename: 'assets/images/[name][hash][ext]',  // Output folder and file naming
        },
      },
      {
        test: /\.json$/i,  // Match JSON files
        type: 'json',      // Process JSON files
      },
    ],
  },
};
