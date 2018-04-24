const {app, BrowserWindow} = require('electron');
let mainWindow;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  app.quit();
});

app.on('browser-window-created', function(e, window) {
  // window.setMenu(null);
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 375, height: 675, maxWidth: 375, maxHeight: 675, frame: false});

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/todo/index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
