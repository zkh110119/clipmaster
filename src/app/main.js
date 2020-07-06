const path = require('path');
const {app, Menu, Tray} = require('electron');

let tray = null;
app.on('ready', () => {
    if (app.dock) {
        app.dock.hide();
    }
    tray = new Tray(path.join(__dirname, '/Icon.png'));
    if (process.platform === 'win32') {
        tray.on('click', tray.popUpContextMenu);
    }
    const menu = Menu.buildFromTemplate([{
        label: 'Quit',
        click() {
            app.quit();
        }
    }]);
    tray.setToolTip('Clipmaster');
    tray.setContextMenu(menu);
});
