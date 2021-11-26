import DiscordJS, { Intents } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});

client.on('messageCreate', (message) => {
    if (message.content === 'hello') {
        message.reply({
            content: 'world',
        });
    }
});

client.on('ready', () => {
    console.log('Ready!');
});

client.login(process.env.DISCORD_TOKEN);
