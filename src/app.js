const electron = require("electron");
const path = require("path");
const url = require("url");
const { app, BrowserWindow, Menu } = electron;

// initialize main window
let main_window;

const create_main_window = () => {
	main_window = new BrowserWindow({
		width: 800,
		height: 400,
		webPreferences: {
			nodeIntegration: true,
		},
	});
	let main_url =
		process.env.ELECTRON_DEV_URL ||
		url.format({
			pathname: path.join(__dirname, "/../frontend/dist/index.html"),
			protocol: "file:",
			slashes: true,
		});
	console.log(main_url);
	if(!main_url) {
		console.log("canot find starting url. please build frontend or start frontend dev server");
	}
	main_window.loadURL(main_url);
};

app.whenReady().then(create_main_window);

app.on("window-all-closed", () => {
	// if macOS, don't quit: keep it open on dock
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	// for macOS, when click icon on dock, re-create window
	if (BrowserWindow.getAllWindows().length === 0) {
		create_main_window();
	}
});


const isMac = process.platform === 'darwin';
const template = [
  {
    label: 'File',
    submenu: [
      isMac ? { role: 'close' } : { role: 'quit' }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://www.facebook.com/UITStudentsUnion/')
        }
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)