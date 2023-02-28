const Discord = module.require('discord.js');
const sa = module.require('superagent');

exports.run = async  = (client,message,args)=>{
  let {body} = await sa.get('https://random.cat/meow');
  let embed = new Discord.MessageEmbed()
    .setColor('#f4df42')
    .setTitle('Aqui está a sua imagem de gato solicitada!')
    .setImage(body.file);
  return message.channel.send(embed);
}

module.exports.config = {
name: "gato",
aliases: ["massdm", "dm", "mass", "anuncioall"]
}