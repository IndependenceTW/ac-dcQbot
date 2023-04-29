const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('set_num')
        .setDescription('設定邀請人數')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addIntegerOption(option => option.setName('number').setDescription('邀請人數').setRequired(true)),
    async execute(interaction, client) {
        await interaction.deferReply({
            fetchReply: true,
            ephemeral: true
        });
        client.numOfInvites = interaction.options.getInteger('number');
        interaction.editReply(`已設定邀請人數為${client.numOfInvites}`);
    }
};