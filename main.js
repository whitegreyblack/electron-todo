const {app, BrowserWindow, globalShortcut} = require('electron');
let mainWindow;

app.on('browser-window-created', function(e, window) {
  // window.setMenu(null);
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1225, 
    height: 675, 
    maxWidth: 1225,
    maxHeight: 675, 
    // frame: false,
    // resizable: false,
    // webPreferences: {
    //   nodeIntegration: false,
    // }
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Global Keyboard Commands
  globalShortcut.register('Escape', () => {
    mainWindow.close();
  });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/todo/index.html`);

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    mainWindow = null;
  });

});

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  app.quit();
});
