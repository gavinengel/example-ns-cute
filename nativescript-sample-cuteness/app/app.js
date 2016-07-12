var application = require("application");
var fps = require("fps-meter");
fps.addCallback(function (fps, minFps) {
    console.info("fps=" + fps + " minFps=" + minFps);
});
fps.start();
application.mainModule = "main-page";
application.start();
