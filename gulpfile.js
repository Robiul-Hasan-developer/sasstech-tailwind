
// const gulp = require("gulp");
// const { series } = gulp;
// const fileinclude = require("gulp-file-include");
// const browserSync = require("browser-sync").create();
// const { spawn } = require("child_process");

// // ---------------------------------------------
// // HTML INCLUDE
// // ---------------------------------------------
// function htmlfileinclude() {
//   return gulp
//     .src("./src/html/pages/*.html")
//     .pipe(
//       fileinclude({
//         prefix: "@@",
//         basepath: "@file",
//       })
//     )
//     .pipe(gulp.dest("./src/"))
//     .pipe(browserSync.stream());
// }

// // ---------------------------------------------
// // TAILWIND CLI (v4)
// // ---------------------------------------------
// let tailwindProcess;

// function tailwind(cb) {
//   if (tailwindProcess) {
//     cb();
//     return;
//   }

//   tailwindProcess = spawn(
//     "npx",
//     [
//       "@tailwindcss/cli",
//       "-i",
//       "./src/assets/css/input.css",
//       "-o",
//       "./src/assets/css/output.css",
//       "--watch",
//     ],
//     {
//       stdio: "inherit",
//       shell: true,
//     }
//   );

//   cb();
// }

// // ---------------------------------------------
// // WATCH + SERVER
// // ---------------------------------------------
// function watchFiles() {
//   browserSync.init({
//     server: {
//       baseDir: "./src/",
//     },
//     notify: false,
//   });

//   gulp.watch("./src/html/partials/*.html", htmlfileinclude);
//   gulp.watch("./src/html/pages/*.html", htmlfileinclude);
// }

// // ---------------------------------------------
// // EXPORT
// // ---------------------------------------------
// exports.watch = series(
//   htmlfileinclude,
//   tailwind,
//   watchFiles
// );

















const gulp = require("gulp");
const { series } = gulp;
const fileinclude = require("gulp-file-include");
const browserSync = require("browser-sync").create();
const { spawn } = require("child_process");

// ---------------------------------------------
// HTML INCLUDE
// ---------------------------------------------
function htmlfileinclude() {
  return gulp
    .src("./src/html/pages/*.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./src/"))
    .pipe(browserSync.stream());
}

// ---------------------------------------------
// TAILWIND CLI
// ---------------------------------------------
let tailwindProcess;

function tailwind(cb) {
  if (tailwindProcess) return cb();

  tailwindProcess = spawn(
    "npx",
    [
      "@tailwindcss/cli",
      "-i",
      "./src/assets/css/input.css",
      "-o",
      "./src/assets/css/output.css",
      "--watch",
    ],
    { stdio: "inherit", shell: true }
  );

  cb();
}

// ---------------------------------------------
// WATCH + SERVER
// ---------------------------------------------
function watchFiles() {
  browserSync.init({
    server: {
      baseDir: "./src",
    },
    notify: false,
  });

  gulp.watch("./src/html/**/*.html", htmlfileinclude);
  gulp.watch("./src/assets/css/**/*.css").on("change", browserSync.reload);
  gulp.watch("./src/assets/js/**/*.js").on("change", browserSync.reload);
}

// ---------------------------------------------
// EXPORT
// ---------------------------------------------
exports.watch = series(htmlfileinclude, tailwind, watchFiles);
