const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('確認你在隊列的位置'),
    async execute(interaction, client) {
        await interaction.deferReply({
            fetchReply: true,
            ephemeral: true
        });
        
        let msg = '';
        if (!client.queue.includes(interaction.user.id)) {
            msg = '你不在隊列中！';
        }
        else {
            msg = `你是第${client.queue.indexOf(interaction.user.id) + 1}位\n總人數有${client.queue.length}人`;
        }

        for (let i = 0; i < client.queue.length; i++) {
            msg = `${msg}\n${i + 1}: <@${client.queue[i]}>`;
        }

        const index = client.queue.indexOf(interaction.user.id);
        if (index < client.numOfInvites && index != -1) {
            msg = `${msg}\n你的位置在第${index}位，你可以進入房間了！\n 房間號碼是${client.roomCode}`;
        }
        await interaction.editReply(msg);

        
    }
};