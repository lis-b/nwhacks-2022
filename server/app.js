const express = require('express');

// Require any routes here...

///////////////////////////////


app.use(express.static(path.join(__dirname, 'build')));

// Write any app.use statements for any required routers...

///////////////////////////////


// Error handlers

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
  
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

///////////////////////////////


// Export the app module to use in server.js
module.exports = app;
