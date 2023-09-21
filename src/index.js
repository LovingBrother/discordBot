require('dotenv').config();
const {Client, GatewayIntentBits, EmbedBuilder, SlashCommandBuilder, PermissionsBitField, Permissions} = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.on("ready", (x) => {
    console.log(`${x.user.tag} is ready!`);
    client.user.setActivity('Subsrcibe to wareBooks');

    const ping = new SlashCommandBuilder()
    .setName ('ping')
    .setDescription('This is a ping command!');
    
    const hello = new SlashCommandBuilder()
    .setName ('hello')
    .setDescription('This is a hello command!');

    const bye = new SlashCommandBuilder()
    .setName ('bye')
    .setDescription('This is a bye command!');

    client.application.commands.create(ping);
    client.application.commands.create(hello);
    client.application.commands.create(bye);
})

client.on('interactionCreate', (interaction) =>{
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName==='ping') {
        interaction.reply('Pong!');
    }
    if(interaction.commandName==='hello') {
        interaction.reply('Hi!');
    }
    if(interaction.commandName==='bye') {
        interaction.reply('Thank you putting me to use, see you someother time!');
    };

});

client.login(process.env.TOKEN); 