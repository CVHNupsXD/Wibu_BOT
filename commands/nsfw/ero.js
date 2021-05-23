const nekoslife = require('nekos.life');
const { MessageEmbed } = require('discord.js');
const neko = new nekoslife();

module.exports = {
    config: {
        name: 'ero',
        aliases: ["ero"]
    },
    run: async (bot, message, args, client) => {
      neko_img = await neko.sfw.ero();
      let embed = new MessageEmbed()
				.setAuthor(`Cẩn thận với đôi mắt của bạn đấy 🙈: `)
				.setColor('RANDOM')
				.setImage(neko_img.url)
				.setFooter(`Yêu cầu bởi: `+ message.author.tag)
				.setTimestamp();
			message.channel.send(embed);
    }
}
