export const copy = () => {
    return app.gulp.src(app.path.src.files)
        .pipe(app.gulp.dest(app.path.build.files))
}

export const favicon = () => {
    return app.gulp.src(app.path.src.favicon)
        .pipe(app.gulp.dest(app.path.build.favicon))
}