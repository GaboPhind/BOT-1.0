const { Message } = require("discord.js");
const { embed } = require("../../Reutilizables/embed");

module.exports = {
	name: "caza03",
	/**
	* @param {Message} message 
	*/
	async execute(message, args, interaction) {
		const caza03_embed = embed
			.setTitle("*Necrosis*")
			.setImage("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/d4750d6cfe1dbc45cf057dcfc57f420b00a2272b921fa5413fd4f210b4a0e2c3.png")
		try {
			await message.author.send({ embeds: [caza03_embed] });
			await message.delete();
		} catch (error) {
			console.error('Error al eliminar el mensaje:', error);
			interaction.reply({ content: 'Hubo un error al intentar eliminar el mensaje.'});
		}
	},
};