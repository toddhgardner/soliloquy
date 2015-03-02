module.exports = function(grunt) {

  grunt.initConfig({

    express: {
      local: {
        options: {
          script: "server.js"
        }
      }
    },

    jshint: {
      files: [
        "Gruntfile.js",
        "server.js",
        "server/**/*.js",
        "public/js/**/*.js", "!public/js/soliloquy.min.js"
      ],
    },

    uglify: {
      local: {
        options: {
          enclose: {
            "window": "window",
            "jQuery": "jQuery",
            "_": "_",
            "Backbone": "Backbone"
          },
          mangle: true,
          sourceMap: true,
          preserveComments: false,
        },
        files: {
          "public/js/soliloquy.min.js": [
            "public/js/models/*.js",
            "public/js/views/*.js",
            "public/js/*.js",
            "!public/js/soliloquy.min.js"
          ]
        }
      }
    },

    watch: {
      express: {
        files:  [
          "server.js",
          "server/**/*.js"
        ],
        tasks:  [
          "jshint",
          "express:local:stop",
          "express:local"
        ],
        options: {
          spawn: false
        }
      },
      public: {
        files:  [
          "public/**/*.js", "!public/js/soliloquy.min.js",
          "public/index.html"
        ],
        tasks:  [
          "jshint",
          "uglify"
        ],
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-express-server");

  grunt.registerTask("default", ["build","express:local","watch"]);

  grunt.registerTask("build", [
    "jshint",
    "uglify"
  ]);

};