// index.js

const { app, BrowserWindow } = require("electron");
const path = require("node:path");

function createWindow() {
	// Cria a janela do navegador.
	const mainWindow = new BrowserWindow({
		width: 1920,
		height: 1080,
		webPreferences: {
			preload: path.join(__dirname, "src/main/preload.js"),
		},
		minWidth: 1000,
		minHeight: 1000,
	});

	// Carrega o index.html do app.
	mainWindow.loadFile("src/renderer/index.html");

	// Abre as Ferramentas de Desenvolvedor
	// mainWindow.webContents.openDevTools();
}

// Chama a função createWindow quando o Electron estiver pronto.
app.whenReady().then(createWindow);

// Sai do aplicativo quando todas as janelas são fechadas, exceto no macOS.
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

// Ativa a janela quando o ícone do aplicativo for clicado e não houver janelas abertas
app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
