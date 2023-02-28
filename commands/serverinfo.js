const Discord = require('discord.js')
const Client = new Discord.Client();
exports.run = (client,message,args)=>{
  function checkBots(guild) {
    let botCount = 0; 
    guild.members.forEach(member => { 
      if(member.user.bot) botCount++;
    });
    return botCount;
  }
  function checkMembers(guild) {
    let memberCount = 0;
    guild.members.forEach(member => {
      if(!member.user.bot) memberCount++;
    });
    return memberCount;
  }
  let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.guild.name} - Informações`, message.guild.iconURL)
    .addField('Dono Do Server:', message.guild.owner, true)
    .addField('Região Do Server:', message.guild.region, true) 
    .addField('Total De Canais:', message.guild.channels.size, true) 
    .addField('Total De Membros:', message.guild.memberCount)
    .addField('Pessoas:', checkMembers(message.guild), true)
    .addField('Bots:', checkBots(message.guild), true)
    .addField('Nível de verificação:', message.guild.verificationLevel, true)
    .setFooter('Servidor Criado Em:')
    .setTimestamp(message.guild.createdAt);
    return message.channel.send(embed);
}

module.exports.config = {
  name: "serverinfo",
  aliases: ["massdm", "dm", "mass", "anuncioall"]
  }