import DiscordJS, { Channel, Intents, MessageEmbed } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const discordToken = process.env.DISCORD_TOKEN;
const discordLogs = process.env.DISCORD_LOGS_CHANNEL_ID;

const bot = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});

bot.on('messageCreate', (message) => {
    if (message.content === 'hello') {
        message.reply({
            content: 'world',
        });
    }
});

// online status
bot.on('ready', async () => {
    
    // bot activity
    bot.user?.setActivity('Tech Communities', { type: 'WATCHING' });

    // bot status
    if (discordLogs) {
        const channel = bot.channels.cache.get(discordLogs);
        const embed = new DiscordJS.MessageEmbed()
            .setTitle('Waren is now online!')
            .setColor('#00ff00');
        (channel?.isText()) && channel.send({ embeds: [embed] });
    }

    // bot logs
    console.log('# Waren is now online!');
});

// error handling
bot.on('error', (error) => {
    console.log(error);
});

// authentication
bot.login(discordToken);
