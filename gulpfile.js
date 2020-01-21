const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
gulp.task('default', function () {
  const tsResult = tsProject.src().pipe(
    tsProject({
      declaration: true,
      noExternalResolve: true
    })
  )
  tsResult.dts.pipe(gulp.dest('dist'))
  tsResult.js.pipe(gulp.dest('dist'))
  gulp.src('app/public/**/*').pipe(gulp.dest('dist/public'))
  gulp.src('app/templates/**/*').pipe(gulp.dest('dist/templates'))
  return tsResult
})