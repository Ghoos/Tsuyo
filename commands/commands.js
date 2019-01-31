const Discord = require('discord.js');
const config = require('../config.json');
const { prefix, sent_msg } = require('../config.json');
const colors = require('../lib/colors.json');
const blue = require('../lib/colors.json');
const embed = new Discord.RichEmbed()
    .setTitle("Help")
    .setColor(colors.blue)
    .setThumbnail("https://imgur.com/AWOMrDm.png")
    .addField("Fun", `**${prefix}8ball [question]** - Responds with "yes, no or maybe" or if containing "who", it will randomly select a user in the Discord.\n**${prefix}beep** - Boop.\n**${prefix}cat** - Sends a random picture of a cat.\n**${prefix}coin** - Flips a coin. Great for disputes.\n**${prefix}gif [query]** - Searches for a gif based on your query.\n**${prefix}rate** - Reacts with :thumbsup: and :thumbsdown:.]n**rps [rock/paper/scissors] - Rock paper scissors.\n**${prefix}say [message]** - Say something as the bot.\n`, true)

    .addField(`Info`, `**${prefix}avatar <@user>** - Shows the avatar of the specified user. If <@user> isn't specified, it will show your avatar instead.\n**${prefix}commands** - Shows this menu.\n**${prefix}embed [msg]** - Embeds your message.\n**${prefix}embed-example** - Shows an example embedded message.\n**${prefix}help** - Shows information and a link to the official Cogent Discord.\n**${prefix}ping** - Shows your ping in milliseconds.\n**${prefix}server** - Shows information about the server.\n**${prefix}whois** -  Shows information about the specified user. If <@user> isn't specified, it will show your information instead.`, true)

    .addField(`Moderation`, `**${prefix}addrole [role name]** - Creates a new role.\n**${prefix}kick [@user]** - Kicks the specified user from the guild.\n**${prefix}prune [1-99]** - Deletes specified amount of messages.`, true);
    

module.exports = {
	name: 'commands',
	description: 'Commands and command usage.',
	execute(message) {
        message.author.send({embed});
        message.channel.send(sent_msg);
	},
};



