const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leave')
        .setDescription('離開隊列'),
    async execute(interaction, client) {
        await interaction.deferReply({
            fetchReply: true,
            ephemeral: true
        });

        if (!client.queue.includes(interaction.user.id)) {
            return interaction.editReply('你不在隊伍裡面是要怎麼離開：）');
        }
        index = client.queue.indexOf(interaction.user.id);

        client.queue.splice(client.queue.indexOf(interaction.user.id), 1);
        await interaction.editReply('你已經離開了隊伍！');

        if(index < client.numOfInvites && client.queue.length >= 1) {
            msg = '有人離開了隊伍 請';
            for (let i = 0; i < client.numOfInvites && i < client.queue.length; i++) {
            msg = `${msg}\n<@${client.queue[i]}> `;
            }
            msg = `${msg}\n加入房間\n請用 /status 查看房間代碼`;
            await interaction.followUp(msg)
        };
    }
};