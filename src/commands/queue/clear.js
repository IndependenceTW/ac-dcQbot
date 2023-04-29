const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('清除隊列以及密碼')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction, client) {
        await interaction.deferReply({
            fetchReply: true,
            ephemeral: true
        });
        client.queue = [];
        client.numOfInvites = 0;
        client.roomCode = '';
        interaction.editReply('已清除隊列以及密碼');
    }
};