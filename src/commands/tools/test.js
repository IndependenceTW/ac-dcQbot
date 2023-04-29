const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('test response'),
    async execute(interaction, client) {
        await interaction.deferReply();
        await interaction.editReply('you are in the test command');
        let msg = await interaction.fetchReply();
        for (let i = 0; i < 5; i++) {
            await interaction.editReply(`${msg}\n you are in the test command ${i}`);
            msg = await interaction.fetchReply();
        }
    }
}