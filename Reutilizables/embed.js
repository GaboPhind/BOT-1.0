const { EmbedBuilder } = require("discord.js");

// EMBED
const embed = new EmbedBuilder()
  .setColor("#000080")
  .setAuthor({
    name: "Lords Mobile ES",
    iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s"
  })
  .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png")
  .setFooter({
    text: "Discord",
    iconURL: "https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless"
  });

module.exports = {
  embed,
};
