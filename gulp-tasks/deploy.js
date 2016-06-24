module.exports = function ( gulp, ftp ) {
  return function () {
    
    var user = 'dain@db13.us',
        password = '4Mes@5677',
        host = 'db13.us',
        port = 21,
        localFilesGlob = ['./public/*.html', './public/*.css', './public/imgs/**/*', './public/js/**/*',],
        remoteFolder = '/domains/an-ah-kay.com/html/';

    function getFtpConnection() {
      return ftp.create({
          host: host,
          port: port,
          user: user,
          password: password,
          parallel: 5
      });
    }

    var conn = getFtpConnection();

    gulp.src(localFilesGlob, { base: './public', buffer: false })
        .pipe( conn.newer( remoteFolder ) )
        .pipe( conn.dest( remoteFolder ) );
  };
};