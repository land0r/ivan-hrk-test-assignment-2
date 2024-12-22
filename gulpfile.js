import gulp from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCSS from "gulp-clean-css";
import uglify from "gulp-uglify";
import autoprefixer from "gulp-autoprefixer";
import browserSync from "browser-sync";

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

export function styles() {
	return gulp
		.src(paths.styles.src)
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer({ cascade: false }))
		.pipe(cleanCSS())
		.pipe(gulp.dest(paths.styles.dest))
		.pipe(browserSync.stream());
}

export function scripts() {
	return gulp
		.src(paths.scripts.src)
		.pipe(uglify())
		.pipe(gulp.dest(paths.scripts.dest))
		.pipe(browserSync.stream());
}

function serve() {
	browserSync.init({
		server: "./",
	});
	gulp.watch(paths.styles.src, styles);
	gulp.watch(paths.scripts.src, scripts);
	gulp.watch(paths.html.src).on("change", browserSync.reload);
}

export const build = gulp.parallel(styles, scripts);
export const start = gulp.series(build, serve);

// Make 'build' the default task
export default build;
