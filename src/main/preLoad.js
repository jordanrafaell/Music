window.addEventListener("DOMContentLoaded", () => {
	// Função para substituir o texto de um elemento HTML pelo 'text'
	const replaceText = (selector, text) => {
		const element = document.getElementById(selector);
		if (element) element.innerText = text;
	};

	// Para cada dependência, substitui o texto no elemento com o id correspondente
	// pela versão da dependência que está sendo usada.
	for (const dependency of ["chrome", "node", "electron"]) {
		replaceText(`${dependency}-version`, process.versions[dependency]);
	}
});
