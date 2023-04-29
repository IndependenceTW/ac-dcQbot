const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('requeue')
        .setDescription('重新排隊'),
    async execute(interaction, client) {
        await interaction.deferReply({
            fetchReply: true,
            ephemeral: true
        });

        if (!client.queue.includes(interaction.user.id)) {
            return interaction.editReply('你不在隊伍中，無法重新排隊！');
        }

        const index = client.queue.indexOf(interaction.user.id);

        client.queue.splice(client.queue.indexOf(interaction.user.id), 1);
        client.queue.push(interaction.user.id);
        await interaction.editReply(`你已經成功重新排隊，你在第${client.queue.length}位`);

        if(index < client.numOfInvites) {
            msg = '有人重新排隊了 請';
            for (let i = 0; i < client.numOfInvites; i++) {
                msg = `${msg}\n<@${client.queue[i]}> `;
            }
            msg = `${msg}\n加入房間\n請用 /status 查看房間代碼`;
            await interaction.followUp(msg);
        }
    }
};