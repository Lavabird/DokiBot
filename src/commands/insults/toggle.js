const db = require(__basedir + '/database/db.js');

let toggle = function(guild, message, args) {
    let channel = message.channel;

    if (!message.member.hasPermission('MANAGE_GUILD')) {
        channel.send('You need the **Manage Server** permission to use this command!');
        return;
    }

    db.guild.toggleInsults(message.guild.id, (newToggle) => {
        if (newToggle[0].allow_insults == 1) {
            channel.send('Enabled random insults!');
        } else {
            channel.send('Disabled random insults!')
        }
    });
};

module.exports = toggle;