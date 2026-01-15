// import browserSync from "browser-sync";
// import { exec } from "child_process";
// import { deleteAsync } from "del";
// import gulp from "gulp";
// import fileInclude from "gulp-file-include";

// const bs = browserSync.create();

// // Paths
// const paths = {
//   html: {
//     src: "src/pages/**/*.html",
//     watch: "src/**/*.html",
//     dest: "dist/",
//   },
//   css: {
//     src: "src/assets/css/input.css",
//     dest: "dist/assets/css/",
//   },
// };

// // Clean dist
// export const clean = () => deleteAsync(["dist"]);

// // HTML partials
// export function html() {
//   return gulp
//     .src(paths.html.src)
//     .pipe(
//       fileInclude({
//         prefix: "@@",
//         basepath: "src/partials/",
//       })
//     )
//     .pipe(gulp.dest(paths.html.dest))
//     .pipe(bs.stream());
// }

// // Tailwind build
// export function css(cb) {
//   exec(
//     "npx tailwindcss -i src/assets/css/input.css -o dist/assets/css/style.css --minify",
//     function (err, stdout, stderr) {
//       console.log(stdout);
//       console.error(stderr);
//       cb(err);
//     }
//   );
// }

// // Serve
// export function serve() {
//   bs.init({
//     server: {
//       baseDir: "dist",
//     },
//   });

//   gulp.watch(paths.html.watch, html);
//   gulp.watch("src/assets/css/**/*.css", css);
//   gulp.watch("tailwind.config.js", css);
// }

// // Dev task
// export const dev = gulp.series(clean, gulp.parallel(html, css), serve);

// // Build task
// export const build = gulp.series(clean, gulp.parallel(html, css));

// import browserSync from "browser-sync";
// import { exec } from "child_process";
// import { deleteAsync } from "del";
// import gulp from "gulp";
// import fileInclude from "gulp-file-include";

// const bs = browserSync.create();

// // Paths (UPDATED)
// const paths = {
//   html: {
//     src: "src/html/pages/**/*.html",
//     watch: "src/**/*.html",
//     dest: "dist/",
//   },
//   css: {
//     src: "src/assets/css/input.css",
//     watch: "src/assets/css/**/*.css",
//     dest: "dist/assets/css/",
//   },
// };

// // Clean dist
// export const clean = () => deleteAsync(["dist"]);

// // HTML partials
// export function html() {
//   return gulp
//     .src(paths.html.src)
//     .pipe(
//       fileInclude({
//         prefix: "@@",
//         basepath: "src/html/partials/",
//       })
//     )
//     .pipe(gulp.dest(paths.html.dest))
//     .pipe(bs.stream());
// }

// // Tailwind build (UPDATED)
// export function css(cb) {
//   exec(
//     "npx tailwindcss -i src/assets/css/input.css -o dist/assets/css/main.css --minify",
//     function (err, stdout, stderr) {
//       console.log(stdout);
//       console.error(stderr);
//       cb(err);
//     }
//   );
// }

// // Serve
// export function serve() {
//   bs.init({
//     server: {
//       baseDir: "dist",
//     },
//   });

//   gulp.watch(paths.html.watch, html);
//   gulp.watch(paths.css.watch, css);
//   gulp.watch("tailwind.config.js", css);
// }

// // Dev task
// export const dev = gulp.series(clean, gulp.parallel(html, css), serve);

// // Build task
// export const build = gulp.series(clean, gulp.parallel(html, css));

// import browserSync from "browser-sync";
// import { exec } from "child_process";
// import { deleteAsync } from "del";
// import gulp from "gulp";
// import fileInclude from "gulp-file-include";

// const bs = browserSync.create();

// // Paths
// const paths = {
//   html: {
//     src: "src/html/pages/**/*.html",
//     watch: "src/html/**/*.html",
//     dest: "dist/",
//   },
//   css: {
//     src: "src/assets/css/input.css",
//     watch: "src/assets/css/**/*.css",
//     dest: "dist/assets/css/",
//   },
//   js: {
//     src: "src/assets/js/**/*.js",
//     dest: "dist/assets/js/",
//   },
//   images: {
//     src: "src/assets/images/**/*",
//     dest: "dist/assets/images/",
//   },
// };

// // Clean dist
// export const clean = () => deleteAsync(["dist"]);

// // HTML partials
// export function html() {
//   return gulp
//     .src(paths.html.src)
//     .pipe(
//       fileInclude({
//         prefix: "@@",
//         basepath: "src/html/partials/",
//       })
//     )
//     .pipe(gulp.dest(paths.html.dest))
//     .pipe(bs.stream());
// }

// // Tailwind build
// export function css(cb) {
//   exec(
//     "npx tailwindcss -i src/assets/css/input.css -o dist/assets/css/main.css --minify",
//     function (err, stdout, stderr) {
//       console.log(stdout);
//       console.error(stderr);
//       cb(err);
//     }
//   );
// }

// // Copy JS
// export function js() {
//   return gulp
//     .src(paths.js.src)
//     .pipe(gulp.dest(paths.js.dest))
//     .pipe(bs.stream());
// }

// // Copy Images
// export function images() {
//   return gulp
//     .src(paths.images.src)
//     .pipe(gulp.dest(paths.images.dest))
//     .pipe(bs.stream());
// }

// // Serve
// export function serve() {
//   bs.init({
//     server: {
//       baseDir: "dist",
//     },
//   });

//   gulp.watch(paths.html.watch, html);
//   gulp.watch(paths.css.watch, css);
//   gulp.watch(paths.js.src, js);
//   gulp.watch(paths.images.src, images);
//   gulp.watch("tailwind.config.js", css);
// }

// // Dev task
// export const dev = gulp.series(
//   clean,
//   gulp.parallel(html, css, js, images),
//   serve
// );

// // Build task
// export const build = gulp.series(
//   clean,
//   gulp.parallel(html, css, js, images)
// );

// import browserSync from "browser-sync";
// import { exec } from "child_process";
// import { deleteAsync } from "del";
// import gulp from "gulp";
// import fileInclude from "gulp-file-include";

// const bs = browserSync.create();

// // Paths
// const paths = {
//   html: {
//     src: "src/html/pages/**/*.html",
//     watch: "src/html/**/*.html",
//     dest: "dist/",
//   },

//   // Tailwind input
//   tailwind: {
//     src: "src/assets/css/input.css",
//     watch: "src/assets/css/**/*.css",
//     dest: "dist/assets/css/",
//   },

//   // Extra / vendor CSS (everything except input.css)
//   css: {
//     src: [
//       "src/assets/css/**/*.css",
//       "!src/assets/css/input.css",
//     ],
//     dest: "dist/assets/css/",
//   },

//   js: {
//     src: "src/assets/js/**/*.js",
//     dest: "dist/assets/js/",
//   },

//   images: {
//     src: "src/assets/images/**/*",
//     dest: "dist/assets/images/",
//   },
// };

// // Clean dist
// export const clean = () => deleteAsync(["dist"]);

// // HTML partials
// export function html() {
//   return gulp
//     .src(paths.html.src)
//     .pipe(
//       fileInclude({
//         prefix: "@@",
//         basepath: "src/html/partials/",
//       })
//     )
//     .pipe(gulp.dest(paths.html.dest))
//     .pipe(bs.stream());
// }

// // Tailwind build
// export function tailwind(cb) {
//   exec(
//     "npx tailwindcss -i src/assets/css/input.css -o dist/assets/css/main.css --minify",
//     function (err, stdout, stderr) {
//       console.log(stdout);
//       console.error(stderr);
//       cb(err);
//     }
//   );
// }

// // Copy vendor / extra CSS
// export function css() {
//   return gulp
//     .src(paths.css.src)
//     .pipe(gulp.dest(paths.css.dest))
//     .pipe(bs.stream());
// }

// // Copy JS
// export function js() {
//   return gulp
//     .src(paths.js.src)
//     .pipe(gulp.dest(paths.js.dest))
//     .pipe(bs.stream());
// }

// // Copy Images
// export function images() {
//   return gulp
//     .src(paths.images.src)
//     .pipe(gulp.dest(paths.images.dest))
//     .pipe(bs.stream());
// }

// // Serve
// export function serve() {
//   bs.init({
//     server: {
//       baseDir: "dist",
//     },
//   });

//   gulp.watch(paths.html.watch, html);
//   gulp.watch(paths.tailwind.watch, gulp.series(tailwind, css));
//   gulp.watch(paths.js.src, js);
//   gulp.watch(paths.images.src, images);
//   gulp.watch("tailwind.config.js", tailwind);
// }

// // Dev task
// export const dev = gulp.series(
//   clean,
//   gulp.parallel(html, tailwind, css, js, images),
//   serve
// );

// // Build task
// export const build = gulp.series(
//   clean,
//   gulp.parallel(html, tailwind, css, js, images)
// );

// ================================= Works code is this start ========================================

// import browserSync from "browser-sync";
// import { spawn } from "child_process";
// import { deleteAsync } from "del";
// import gulp from "gulp";
// import fileInclude from "gulp-file-include";

// const bs = browserSync.create();

// // Paths
// const paths = {
//   html: {
//     src: "src/html/pages/**/*.html",
//     watch: "src/html/**/*.html",
//     dest: "dist/",
//   },
//   css: {
//     vendor: [
//       "src/assets/css/**/*.css",
//       "!src/assets/css/input.css",
//     ],
//     dest: "dist/assets/css/",
//   },
//   js: {
//     src: "src/assets/js/**/*.js",
//     dest: "dist/assets/js/",
//   },
//   images: {
//     src: "src/assets/images/**/*",
//     dest: "dist/assets/images/",
//   },
// };

// // Clean
// export const clean = () => deleteAsync(["dist"]);

// // HTML
// export function html() {
//   return gulp
//     .src(paths.html.src)
//     .pipe(
//       fileInclude({
//         prefix: "@@",
//         basepath: "src/html/partials/",
//       })
//     )
//     .pipe(gulp.dest(paths.html.dest))
//     .pipe(bs.stream());
// }

// // Vendor CSS copy
// export function css() {
//   return gulp
//     .src(paths.css.vendor)
//     .pipe(gulp.dest(paths.css.dest))
//     .pipe(bs.stream());
// }

// // JS
// export function js() {
//   return gulp
//     .src(paths.js.src)
//     .pipe(gulp.dest(paths.js.dest))
//     .pipe(bs.stream());
// }

// // Images
// export function images() {
//   return gulp
//     .src(paths.images.src)
//     .pipe(gulp.dest(paths.images.dest))
//     .pipe(bs.stream());
// }

// // Tailwind WATCH (🔥 KEY FIX)
// let tailwindProcess;
// export function tailwindWatch(cb) {
//   if (tailwindProcess) return cb();

//   tailwindProcess = spawn(
//     "npx",
//     [
//       "tailwindcss",
//       "-i",
//       "src/assets/css/input.css",
//       "-o",
//       "dist/assets/css/main.css",
//       "--watch",
//     ],
//     { stdio: "inherit", shell: true }
//   );

//   cb();
// }

// // Serve
// export function serve() {
//   bs.init({
//     server: {
//       baseDir: "dist",
//     },
//     notify: false,
//   });

//   gulp.watch(paths.html.watch, html);
//   gulp.watch("src/assets/css/**/*.css", css);
//   gulp.watch(paths.js.src, js);
//   gulp.watch(paths.images.src, images);
// }

// // Dev
// export const dev = gulp.series(
//   clean,
//   gulp.parallel(html, css, js, images, tailwindWatch),
//   serve
// );

// // Build (no watch)
// export const build = gulp.series(
//   clean,
//   html,
//   css,
//   js,
//   images,
//   function buildTailwind(cb) {
//     spawn(
//       "npx",
//       [
//         "tailwindcss",
//         "-i",
//         "src/assets/css/input.css",
//         "-o",
//         "dist/assets/css/main.css",
//         "--minify",
//       ],
//       { stdio: "inherit", shell: true }
//     ).on("close", cb);
//   }
// );










// import browserSync from "browser-sync";
// import { spawn } from "child_process";
// import { deleteAsync } from "del";
// import gulp from "gulp";
// import fileInclude from "gulp-file-include";

// const bs = browserSync.create();

// // Paths
// const paths = {
//   html: {
//     src: "src/html/pages/**/*.html",
//     watch: "src/html/**/*.html",
//     dest: "dist/",
//   },
//   css: {
//     vendor: ["src/assets/css/**/*.css", "!src/assets/css/input.css"],
//     watch: "src/assets/css/**/*.css",
//     dest: "dist/assets/css/",
//   },
//   js: {
//     src: "src/assets/js/**/*.js",
//     watch: "src/assets/js/**/*.js",
//     dest: "dist/assets/js/",
//   },
//   images: {
//     src: "src/assets/images/**/*",
//     watch: "src/assets/images/**/*",
//     dest: "dist/assets/images/",
//   },
// };

// // Clean
// export const clean = () => deleteAsync(["dist"]);

// // HTML
// export function html() {
//   return gulp
//     .src(paths.html.src)
//     .pipe(
//       fileInclude({
//         prefix: "@@",
//         basepath: "src/html/partials/",
//       })
//     )
//     .pipe(gulp.dest(paths.html.dest))
//     .pipe(bs.stream());
// }

// // Vendor CSS copy
// export function css() {
//   return gulp
//     .src(paths.css.vendor)
//     .pipe(gulp.dest(paths.css.dest))
//     .pipe(bs.stream());
// }

// // JS
// export function js() {
//   return gulp
//     .src(paths.js.src)
//     .pipe(gulp.dest(paths.js.dest))
//     .pipe(bs.stream());
// }

// // Images
// // export function images() {
// //   return gulp
// //     .src(paths.images.src)
// //     .pipe(gulp.dest(paths.images.dest))
// //     .pipe(bs.stream());
// // }
// export function images() {
//   return gulp
//     .src(paths.images.src)
//     .pipe(gulp.dest(paths.images.dest))
//     .on("end", () => {
//       bs.reload(); // ✅ FULL reload
//     });
// }

// // 🔥 Tailwind watch
// let tailwindProcess;
// export function tailwindWatch(cb) {
//   if (tailwindProcess) return cb();

//   tailwindProcess = spawn(
//     "npx",
//     [
//       "tailwindcss",
//       "-i",
//       "src/assets/css/input.css",
//       "-o",
//       "dist/assets/css/main.css",
//       "--watch",
//     ],
//     { stdio: "inherit", shell: true }
//   );

//   cb();
// }

// // 🔥 Delete helper
// // function deleteFromDist(srcPath) {
// //   const distPath = srcPath.replace(/^src\//, "dist/");
// //   return deleteAsync(distPath);
// // }
// function deleteFromDist(srcPath) {
//   const distPath = srcPath.replace(/^src\//, "dist/");
//   deleteAsync(distPath).then(() => {
//     bs.reload();
//   });
// }

// // Serve
// export function serve() {
//   bs.init({
//     server: { baseDir: "dist" },
//     notify: false,
//   });

//   // HTML
//   gulp.watch(paths.html.watch).on("change", html);

//   // CSS
//   gulp
//     .watch(paths.css.watch)
//     .on("add", css)
//     .on("change", css)
//     .on("unlink", deleteFromDist);

//   // JS
//   gulp
//     .watch(paths.js.watch)
//     .on("add", js)
//     .on("change", js)
//     .on("unlink", deleteFromDist);

//   // Images
//   // gulp
//   //   .watch(paths.images.watch)
//   //   .on("add", images)
//   //   .on("change", images)
//   //   .on("unlink", deleteFromDist);
//   gulp
//     .watch(paths.images.watch)
//     .on("add", images)
//     .on("change", images)
//     .on("unlink", deleteFromDist);
// }

// // Dev
// export const dev = gulp.series(
//   clean,
//   gulp.parallel(html, css, js, images, tailwindWatch),
//   serve
// );

// // Build
// export const build = gulp.series(
//   clean,
//   html,
//   css,
//   js,
//   images,
//   function buildTailwind(cb) {
//     spawn(
//       "npx",
//       [
//         "tailwindcss",
//         "-i",
//         "src/assets/css/input.css",
//         "-o",
//         "dist/assets/css/main.css",
//         "--minify",
//       ],
//       { stdio: "inherit", shell: true }
//     ).on("close", cb);
//   }
// );





















import browserSync from "browser-sync";
import { spawn } from "child_process";
import { deleteAsync } from "del";
import gulp from "gulp";
import fileInclude from "gulp-file-include";

const bs = browserSync.create();

// --------------------------------------------------
// PATHS
// --------------------------------------------------
const paths = {
  html: {
    src: "src/html/pages/**/*.html",
    watch: "src/html/**/*.html",
    dest: "dist/",
  },

  css: {
    vendor: [
      "src/assets/css/**/*.css",
      "!src/assets/css/input.css",
    ],
    watch: "src/assets/css/**/*.css",
    dest: "dist/assets/css/",
  },

  js: {
    src: "src/assets/js/**/*.js",
    watch: "src/assets/js/**/*.js",
    dest: "dist/assets/js/",
  },

  images: {
    src: "src/assets/images/**/*",
    watch: "src/assets/images/**/*",
    dest: "dist/assets/images/",
  },
};

// --------------------------------------------------
// CLEAN
// --------------------------------------------------
export const clean = () => deleteAsync(["dist"]);

// --------------------------------------------------
// HTML (partials)
// --------------------------------------------------
export function html() {
  return gulp
    .src(paths.html.src)
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "src/html/partials/",
      })
    )
    .pipe(gulp.dest(paths.html.dest))
    .pipe(bs.stream());
}

// --------------------------------------------------
// VENDOR CSS (copy only)
// --------------------------------------------------
export function css() {
  return gulp
    .src(paths.css.vendor)
    .pipe(gulp.dest(paths.css.dest))
    .pipe(bs.stream());
}

// --------------------------------------------------
// JS (copy)
// --------------------------------------------------
export function js() {
  return gulp
    .src(paths.js.src)
    .pipe(gulp.dest(paths.js.dest))
    .on("end", bs.reload);
}

// --------------------------------------------------
// IMAGES (🔥 BINARY SAFE)
// --------------------------------------------------
export function images() {
  return gulp
    .src(paths.images.src, { encoding: false }) // 🔥 REQUIRED
    .pipe(gulp.dest(paths.images.dest))
    .on("end", bs.reload);
}

// --------------------------------------------------
// TAILWIND WATCH (JIT FIX)
// --------------------------------------------------
let tailwindProcess;

export function tailwindWatch(cb) {
  if (tailwindProcess) return cb();

  tailwindProcess = spawn(
    "npx",
    [
      "tailwindcss",
      "-i",
      "src/assets/css/input.css",
      "-o",
      "dist/assets/css/main.css",
      "--watch",
    ],
    { stdio: "inherit", shell: true }
  );

  cb();
}

// --------------------------------------------------
// DELETE FROM DIST WHEN SOURCE IS DELETED
// --------------------------------------------------
function deleteFromDist(srcPath) {
  const distPath = srcPath.replace(/^src\//, "dist/");
  deleteAsync(distPath).then(() => {
    bs.reload();
  });
}

// --------------------------------------------------
// SERVE + WATCH
// --------------------------------------------------
export function serve() {
  bs.init({
    server: { baseDir: "dist" },
    notify: false,
  });

  // HTML
  gulp.watch(paths.html.watch).on("change", html);

  // CSS
  gulp.watch(paths.css.watch)
    .on("add", css)
    .on("change", css)
    .on("unlink", deleteFromDist);

  // JS
  gulp.watch(paths.js.watch)
    .on("add", js)
    .on("change", js)
    .on("unlink", deleteFromDist);

  // IMAGES
  gulp.watch(paths.images.watch)
    .on("add", images)
    .on("change", images)
    .on("unlink", deleteFromDist);
}

// --------------------------------------------------
// DEV
// --------------------------------------------------
export const dev = gulp.series(
  clean,
  gulp.parallel(html, css, js, images, tailwindWatch),
  serve
);

// --------------------------------------------------
// BUILD (PRODUCTION)
// --------------------------------------------------
export const build = gulp.series(
  clean,
  html,
  css,
  js,
  images,
  function buildTailwind(cb) {
    spawn(
      "npx",
      [
        "tailwindcss",
        "-i",
        "src/assets/css/input.css",
        "-o",
        "dist/assets/css/main.css",
        "--minify",
      ],
      { stdio: "inherit", shell: true }
    ).on("close", cb);
  }
);
