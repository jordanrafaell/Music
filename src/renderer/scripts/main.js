// Função para navegação de lista
function menuList() {
	const menuItems = document.querySelectorAll(".nav_list li");

	menuItems.forEach((item) => {
		item.addEventListener("click", (event) => {
			// Oculta todas as seções
			const sections = document.querySelectorAll("section");
			sections.forEach((section) => {
				section.style.display = "none";
			});

			// Obtém o ID da seção correspondente ao item do menu clicado
			const sectionId = event.target.getAttribute("href").substring(1);

			// Exibe apenas a seção correspondente ao item clicado
			const targetSection = document.getElementById(sectionId);
			if (targetSection) {
				targetSection.style.display = "block";
			}
		});
	});
}
menuList();

// capturar arquivo tipo mp3 ou mp4
const input_inicio = document.querySelector(".input_inicio");

// função para captar esses arquivos
input_inicio.addEventListener("change", (evento) => {
	// Obter arquivo selecionado
	const arquivo = evento.target.files[0];

	if (arquivo) {
		// verificar o tipo de arquivo
		const tipoArquivo = arquivo.type;

		// Verificar se já existe algum elemento de áudio ou vídeo
		const audioExistente = document.querySelector(
			"#conteudo_central_musica audio",
		);
		const videoExistente = document.querySelector(
			"#conteudo_central_video .carousel_video video",
		);

		// Classificar e adicionar ao Dom
		// entao se ele basicamente assim: se o tipo de arquivo for mp3 ou mpeg = true e audioExistente for diferente de true vai dar false
		if (
			(tipoArquivo === "audio/mp3" || tipoArquivo === "audio/mpeg") &&
			!audioExistente
		) {
			// criar um elemento de áudio
			const audio = document.createElement("audio");
			// nao mostrar controles
			audio.controls = false;
			audio.src = URL.createObjectURL(arquivo);
			// Adicionando a classe 'audio' ao elemento de áudio
			audio.className = "audio";

			// Adicionar o arquivo de tipo audio/mp3 ou mpeg na div lista_musicas
			const lista_musicas = document.querySelector(
				"#bibliotecaM #conteudo_central_musica .lista_musicas",
			);
			lista_musicas.appendChild(audio);

			// Mostrar a div container_lista_musicas e ocultar a div conteudo_musica
			const containerMusica = document.querySelector(
				"#bibliotecaM #conteudo_musica",
			);
			containerMusica.style.display = "none";
			lista_musicas.style.display = "block";
		} else if (tipoArquivo === "video/mp4" && !videoExistente) {
			// criar um elemento de vídeo
			const video = document.createElement("video");
			video.controls = false;
			video.src = URL.createObjectURL(arquivo);

			// Adicionar o arquivo de tipo video/mp4 na seção de video
			const container_video = document.querySelector(
				"#bibliotecaV #conteudo_central_video .carousel_video .itens_video",
			);
			container_video.appendChild(video);

			// Mostrar a div conteudo_central_video e ocultar a div conteudo_video
			const conteudoVideo = document.querySelector(
				"#bibliotecaV #conteudo_video",
			);
			conteudoVideo.style.display = "none";
			container_video.style.display = "block";
		} else {
			alert("Erro \n\nTipo de arquivos suportados: mp3 ou mp4");
		}
	}
});
