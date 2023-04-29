const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('set_room')
        .setDescription('設定房間代碼')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option => option.setName('code').setDescription('房間代碼').setRequired(true)),
    async execute(interaction, client) {
        await interaction.deferReply({
            fetchReply: true,
            ephemeral: true
        });
        client.roomCode = interaction.options.getString('code');
        interaction.editReply(`已經完成代碼設定為${client.roomCode}`);
    }
};