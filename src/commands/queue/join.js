const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('join')
        .setDescription('加入隊列'),
    async execute(interaction, client) {
        await interaction.deferReply({
            fetchReply: true,
            ephemeral: true
        });

        if (client.queue.includes(interaction.user.id)) {
            return interaction.editReply('你已經在隊列中了！');
        }

        client.queue.push(interaction.user.id);
        await interaction.editReply(`你已加入隊列中了，你是第${client.queue.length}位！`);
    }
};