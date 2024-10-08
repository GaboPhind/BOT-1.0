const { Message } = require("discord.js");
const { embed } = require("../../Reutilizables/embed");

module.exports = {
	name: "caza02",
	/**
	* @param {Message} message 
	*/
	async execute(message, args, interaction) {
		const caza02_embed = embed
			.setTitle("*Caballo de Troya*")
			.setImage("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/ce2fbcf1ea39dc3158e01e5942c9fb06304447a8c28952e0caae08d7d94e6a4c.png");
		try {
			await message.author.send({ embeds: [caza02_embed] });
			// Borrar el mensaje
			await message.delete();
		} catch (error) {
			console.error('Error al eliminar el mensaje:', error);
			interaction.reply({ content: 'Hubo un error al intentar eliminar el mensaje.', ephemeral: true });
		}
	},
};