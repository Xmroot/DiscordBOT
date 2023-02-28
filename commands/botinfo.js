const Discord = require('discord.js')

module.exports = {
  run: function (client,message,args) {
    let botAvatar = client.user.displayAvatarURL
    let date = client.user.createdAt
    let userName = client.user.username
    let embed = new Discord.RichEmbed()
      .setDescription('Informações sobre o Bot')
      .setColor('#eb1818')
      .setThumbnail(botAvatar)
      .addField('Nome do bot', userName)
      .addField('Criado em', formatDate('30/12/2018', date))
    message.channel.send(embed)
  },
  conf: {},
  get help () {
    return {
      name: 'botinfo',
      category: 'Moderação',
      description: 'Informação sobre o Bot',
      usage: `botinfo`
    }
  }
}
/**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}