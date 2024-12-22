import gulp from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCSS from "gulp-clean-css";
import uglify from "gulp-uglify";
import autoprefixer from "gulp-autoprefixer";
import browserSync from "browser-sync";
import noop from "gulp-noop";

// Initialize gulp-sass with Dart Sass
const sass = gulpSass(dartSass);

// Paths
const paths = {
	styles: {
		src: "src/scss/**/*.scss",
		dest: "dist/css",
	},
	scripts: {
		src: "src/js/**/*.js",
		dest: "dist/js",
	},
	html: {
		src: "*.html",
	},
};

/**
 * Compile SCSS
 * @param {boolean} isProd - Whether we are building for production
 */
function compileStyles(isProd = false) {
	return gulp
		.src(paths.styles.src)
		.pipe(sass().on("error", sass.logError))
		.pipe(isProd ? autoprefixer({ cascade: false }) : noop())
		.pipe(isProd ? cleanCSS() : noop())
		.pipe(gulp.dest(paths.styles.dest))
		.pipe(browserSync.stream());
}

/**
 * Compile JS
 * @param {boolean} isProd - Whether we are building for production
 */
function compileScripts(isProd = false) {
	return gulp
		.src(paths.scripts.src)
		// Only uglify in production
		.pipe(isProd ? uglify() : noop())
		.pipe(gulp.dest(paths.scripts.dest))
		.pipe(browserSync.stream());
}

// Production tasks
export function styles() {
	return compileStyles(true);
}
export function scripts() {
	return compileScripts(true);
}

// Development tasks
export function stylesDevelopment() {
	return compileStyles(false);
}
export function scriptsDevelopment() {
	return compileScripts(false);
}

/**
 * Serve & watch tasks for development
 */
function serve() {
	browserSync.init({
		server: "./",
	});

	gulp.watch(paths.styles.src, stylesDevelopment);
	gulp.watch(paths.scripts.src, scriptsDevelopment);
	gulp.watch(paths.html.src).on("change", browserSync.reload);
}

// Build & Start tasks
export const build = gulp.parallel(styles, scripts);
export const start = gulp.series(stylesDevelopment, scriptsDevelopment, serve);

// Default task
export default build;
