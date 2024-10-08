const { Message } = require("discord.js");
const { embed } = require("../../Reutilizables/embed");

module.exports = {
	name: "caza07",
	/**
	* @param {Message} message 
	*/
	async execute(message) {
		const caza07_embed = embed // Embed
			.setTitle("*Guiverno de Jade*")
			.setImage("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/d4297bbe68edde11dde07ab319932ede7a261bf4d95e0edaa822f49317b64767.png")		// Mandar el embed y borrar los mensajes
		try {
			await message.author.send({ embeds: [caza07_embed] });
			await message.delete(); // Borrar el mensaje
		} catch (error) {
			console.error('Error al eliminar el mensaje:', error);
			interaction.reply({ content: 'Hubo un error al intentar eliminar el mensaje.', ephemeral: true });
		}
	},
};