const { Message } = require("discord.js");
const { embed } = require("../../Reutilizables/embed");

module.exports = {
	name: "caza05",
	/**
	* 
	* @param {Message} message 
	*/
	async execute(message, args, interaction) {
		const caza05_embed = embed
			.setTitle("*Moai Milenario*")
			.setImage("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/45a878ed92d1f64f2cb270ba830e049bb3b0f9a780eb6a4d58af406b58d6295a.png")
		try {
			await message.author.send({ embeds: [caza05_embed] });
			await message.delete();
		} catch (error) {
			console.error('Error al eliminar el mensaje:', error);
			interaction.reply({ content: 'Hubo un error al intentar eliminar el mensaje.', ephemeral: true });
		}
	},
};