const gulp = require("gulp");
//引入sass插件
const sass = require("gulp-sass");

//监听任务
gulp.task("watchall", async ()=>{
    //监听html, 进行复制
    gulp.watch("*.html", async ()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("C:\\phpStudy\\WWW\\project_jindong"));
    });
    gulp.watch("css/**/*", async ()=>{
        gulp.src("css/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\WWW\\project_jindong\\css"));
    });
    //监听sass
    gulp.watch("sass/**/*", async ()=>{
        gulp.src("sass/**/*")
        .pipe(sass())
        .pipe(gulp.dest("./css"));
    });
})