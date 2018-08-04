const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '='

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**=bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField('** الـسيرفر**', `${message.guild.name}`,true)
            .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
            .addField(' **الرسالة** ', args)
            .setThumbnail(message.guild.iconURL)
            .setColor('RANDOM')
            m.send(`${m}`,{embed: bc});
        });
        const AziRo = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)   
        .setTitle('?? | جاري ارسال رسالتك ') 
        .addBlankField(true)
        .addField('?? | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
        .addField('??| الرسالة ', args)
        .setColor('RANDOM')  
        message.channel.sendEmbed(AziRo);          
    }
    } else {
        return;
    }
});

client.on('message', message => {
    var prefix = "=";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);
    if (command == "kick") {
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You Dont Have **KICK_MEMBERS** Permission!');
          var member= message.mentions.members.first();
          member.kick().then((member) => {
              message.channel.send(member.displayName + " Kicked From " + message.guild.name);
              message.channel.send("By: " + "<@" + message.author.id + ">")
              message.channel.sendMessage(`تم حفظ السبب وستتم مراجعته من قبل الأونر`)
  client.channels.get(`ID Chat admin`).sendMessage("** تم طرد هذا الشخص من قبل " + message.guild.owner + " سبب مذكور **" + args.join("  "))
          }).catch(() => {
              message.channel.send(`:x: I cant kick this member`);
          });
      }
  });

  client.on("message", message => {
    let command = message.content.split(" ")[0];
    if (command === "=mute") {
            if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
                    if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'console');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
    if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'Mute-Log'**");
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .addField(' Mute ', ' | :white_check_mark: |')
      .addField('تم اعطاء الميوت ل', `${user.username}#${user.discriminator} `)
      .addField('السبب', '**مخالف للشات**')
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     message.channel.send({embed: embed});
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
  
    if (message.guild.member(user).roles.has(muteRole.id)) {
        client.channels.get(modlog.id).send({embed}).catch(console.error);
    } else {
      message.guild.member(user).addRole(muteRole).then(() => {
        client.channels.get(modlog.id).send({embed}).catch(console.error);
      });
    }
  
  };
      if (command === "=unmute") {
            if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'console');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **");
    if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'console'**");
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .addField('UnMute ', ' | :white_check_mark: |')
      .addField('تم فك الميوت عن', `${user.username}#${user.discriminator} `)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     message.channel.send({embed: embed});
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **');
  
    if (message.guild.member(user).removeRole(muteRole.id)) {
        client.channels.get(modlog.id).send({embed});
    } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
        client.channels.get(modlog.id).send({embed});
      });

      client.on('message', message => {
        var prefix = "="
      if (message.author.x5bz) return;
      if (!message.content.startsWith(prefix)) return;
    
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
    
      let args = message.content.split(" ").slice(1);
    
      if (command == "ban") {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');
             
      if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
      let user = message.mentions.users.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      /*let b5bzlog = client.channels.find("name", "5bz-log");
      if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
      if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
      if(!reason) return message.reply ("**اكتب سبب الطرد**");
      if (!message.guild.member(user)
      .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
    
      message.guild.member(user).ban(7, user);
    
      const banembed = new Discord.RichEmbed()
      .setAuthor(`BANNED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
      .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
      .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
      message.channel.send({
        embed : banembed
      })
    }
    });
  
client.login(process.env.BOT_TOKEN);
