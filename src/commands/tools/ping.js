const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Return my ping'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true,
            ephemeral: true
        });

        const newMessage = `API Latency: ${client.ws.ping}\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}ms\nHello! <@${interaction.user.id}>`;
        await interaction.editReply({
            content: newMessage
        });
    }
}