const { Message } = require("discord.js");
const { embed } = require("../../Reutilizables/embed");

module.exports = {
	name: "caza01",
	/**
	* @param {Message} message 
	*/
	async execute(message) {
		const caza01_embed = embed
			.setTitle("*Gargantúa*")
			.setImage("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/a1ee9a2442f57fe693bb38648fc359b4dbe2d034587ae35a6e8893cb7f1c290a.png")
		try {
			await message.author.send({ embeds: [caza01_embed] }); // Esperar a que
			await message.delete();
		} catch (error) {
			console.error('Error al eliminar el mensaje:', error);
			interaction.reply({ content: 'Hubo un error al intentar eliminar el mensaje.'});
		}
	},
};