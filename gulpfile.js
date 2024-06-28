var gulp = require('gulp');
var typedoc = require("gulp-typedoc");

gulp.task("typedoc", function ()
{
	return gulp
		.src(["src/**/*.ts"])
		.pipe(typedoc(
		{
			out: "docs",
			plugin: [
				"./node_modules/typedoc-theme-hierarchy/dist/index.js"
			],
			theme: "hierarchy",
			readme: "README.md",
			name: "Tap Netowrk",
			version: true
		}));
});