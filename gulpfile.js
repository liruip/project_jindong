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
    //监听js
    gulp.watch("js/*.js", async ()=>{
        gulp.src("js/*.js")
        .pipe(gulp.dest("C:\\phpStudy\\WWW\\project_jindong\\js"))
    });
    //监听图片
    gulp.watch("img/**/*", async ()=>{
        gulp.src("img/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\WWW\\project_jindong\\img"));
    });
    gulp.watch("upload/**/*", async ()=>{
        gulp.src("upload/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\WWW\\project_jindong\\upload"));
    });
    //监听favicon.ico
    gulp.watch("*.ico", async ()=>{
        gulp.src("*.ico")
        .pipe(gulp.dest("C:\\phpStudy\\WWW\\project_jindong"));
    });
     //监听favicon.ico
     gulp.watch("fonts/**/*", async ()=>{
        gulp.src("fonts/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\WWW\\project_jindong\\fonts"));
    });
    //监听php
     //监听favicon.ico
    //监听html, 进行复制
    gulp.watch("*.php", async ()=>{
        gulp.src("*.php")
        .pipe(gulp.dest("C:\\phpStudy\\WWW\\project_jindong"));
    });
})