const { Message } = require("discord.js");
const { embed } = require("../../Reutilizables/embed");

module.exports = {
	name: "caza04",
	/**
	* @param {Message} message 
	*/
	async execute(message, args, interaction) {
		// Embed
		const caza04_embed = embed
			.setTitle("*SaberFang*")
			.setImage("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/1d955a2e132d1be7523ee2a7ceda6c38b9260094d36247162d95051136c97929.png");		// Mandar el embed y borrar los mensajes
		try {
			await message.author.send({ embeds: [caza04_embed] });
			await message.delete();
		} catch (error) {
			console.error('Error al eliminar el mensaje:', error);
			interaction.reply({ content: 'Hubo un error al intentar eliminar el mensaje.', ephemeral: true });
		}
	},
};