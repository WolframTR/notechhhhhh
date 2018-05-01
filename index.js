const { stripIndents, oneLine } = require('common-tags');
const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "n!";
let owner = "430011871555223553";

bot.on("ready", () => {
    bot.user.setStatus('online');
    bot.user.setGame(`${prefix}yardım | ${bot.guilds.size} Sunucu ${bot.users.size} Kullanıcı `, "https://www.twitch.tv/scarew0"); 
    console.log("Bağlandım!")   
});

bot.login(process.env.BOT_TOKEN);

bot.on("message", message => {
if (message.content.toLowerCase() === prefix + "avatarım") {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Avatarınız:`)
.setImage(`${message.author.avatarURL} `)
.setColor(0x0));
   }
});

bot.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    msg.react('🇸');
  }
});

bot.on('message', async msg => {
  if (msg.content.toLowerCase() === prefix + 'yardım') {
    await msg.react('🇹');
    msg.react('🇲');
  }
});

bot.on('message', msg => {
  if (msg.content.startsWith(prefix + "yaz")) {
    if (msg.channel.type !== "dm"){
    let mesaj = msg.content.substring(2 + 3);
    msg.delete (msg.content == 'yaz' + mesaj)
    let embed = new Discord.RichEmbed()
    .setColor("0xff0000")
       .setDescription(mesaj)
return msg.channel.send({embed})}

    }
    });

bot.on('message', message => {
if (message.content.toLowerCase() === prefix + "ban") {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("0x0")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('`mod-log` kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply('Ban sebebini yazmalısın.');
  if (message.mentions.users.size < 1) return message.reply('Kimi banlayacağını yazmalısın.').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply('Yetkilileri banlayamam.');
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Ban')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
}
});

bot.on ('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'temizle') {
    msg.channel.bulkDelete(100);
    msg.channel.sendMessage("100 adet mesaj silindi!");
  }
});

bot.on ('message', message => {
if (message.content.toLowerCase() === prefix + 'emojiler') {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ** | ** ");
  message.channel.send(emojiList);
}
});

bot.on('message', message => {
if (message.content.toLowerCase() === prefix + "zekam") {
    var sans = ["11", "15", "20", "24", "28", "31", "39", "45", "49", "54", "58", "63", "67", "77", "73", "84", "80", "83", "96", "94", "99", "Albert Einstein Mübarek"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Zekan___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

bot.on('message', message => {
if (message.content.toLowerCase() === prefix + "espriyap") {
    var sans = ["Geçen gün geçmiş günlerimi aradım ama meşguldü.", "Yağmur yağmış kar peynir", "Dünya dönermiş ay da köfte…", "Bu erikson başka erik yok.", "Yıkanan Ton a ne denir Washington", "Hadi oyun oynayalım. Vazgeçtim oymadan oynayalım!", "Geçen gün kamyonu sürdüm Leonardo da Vinci.", "Doğumdan sonra çok kilo aldım. Doğduğumda 2 kiloydum şimdi 62.", "Adam 7 gün boyunca nezle olmuş. Sıkılmış bugün de Petek le olayım demiş.", "Yarasa yararlı bir hayvandır. Yararlı bir hayvan olmasaydı yaramasa derlerdi.", " Benim neden kardeşim yok baba  Seni görünce ikincisine cesaret edemedik.", "Osmanlıda kimseye borç takamıyordun mesela sikke sikke ödüyodun…", "Tatlı yiyip, tatlı konuşuluyorsa bundan sonra mantı yiyip mantıklı konuşacağız.", "Babamı sahura kaldırmayı unuttuk anneme masada ne eksik diyorum tuzluk mu diyor.", "+Okeyde kıza elin nasıl dedim. Ojeli dedi. Ben Şoka girdim. O Migrosa."];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Espri___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(' ')[0];
  command = command.slice(prefix.length);

  let args = message.content.split(' ').slice(1);

  if (command === 'topla') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'çıkar') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p-c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'çarp') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p*c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'böl') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p/c);
    message.channel.sendMessage(`${total}`);
  }
});

bot.on("message", message => {
    const dmchannel = bot.channels.find("name", "notechdm");
    if (message.channel.type === "dm") {
        if (message.author.id === bot.user.id) return;
        dmchannel.sendMessage("", {embed: {
                color: 3447003,
                title: `Yazan: ${message.author.tag}`,
                description: `${message.content}`
              }})
    }
    if (message.channel.bot) return;
});

bot.on("message", message => {
if (message.content.toLowerCase() === prefix + "kaydım") {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription("Kayıt Tarihiniz: ", ` message.author.createdAt ` , true)
.setColor(0xf7dc46));
   }
});

bot.on("message", message => {
if (message.content.toLowerCase() === prefix + "avatardeğiş") {
      bot.user.setAvatar(`https://cdn.discordapp.com/attachments/440473817295486988/440514952676245516/pp4.png`);
   }
});

bot.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "sigara") {
msg.channel.send(':smoking: :cloud::cloud::cloud:')
.then(nmsg => nmsg.edit(':smoking: :cloud::cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud:'))
.then(nmsg => nmsg.edit('**Sigaram bitti** | **Sigara İçmeyiniz.** :no_smoking: **Sigara Sağlığa Zararlıdır**'));
}
});

bot.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "ping") {
msg.channel.send('Pingim ölçülüyor..')
    
.then(nmsg => nmsg.edit("Pingim ölçülüyor."))
    
.then(nmsg => nmsg.edit("Pingim :ping_pong: **" + bot.ping + "** Milisaniye"));
}
});

bot.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "sunucu") {
msg.author.send('Bakıyorum..')
    
.then(nmsg => nmsg.edit("Buyrun: https://discord.gg/PjF4kgq"));
}
});

bot.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "help") {
    
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Komutlar",
    url: "https://discord.gg/PjF4kgq",
    description: "${prefix}anakomutlar - Bilgi Komutları \n${prefix}eğlence - Eğlence Komutları \n${prefix}moderasyon - Moderasyon Komutları \n${prefix}kişisel - Kişisel komutlar",
    fields: [{
        name: "Davet et",
        value: "[Sunucuna Gelmem İçin Tıkla!](https://discordapp.com/oauth2/authorize?client_id=439756873311322112&permissions=8&scope=bot)"
      },
      {
        name: "Destek Sunucusu",
        value: "[Sunucumuza Katıl!](https://discord.gg/PjF4kgq)"
      }
      {
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: " + bot.guilds.size + ` Sunucu 👀 ` + bot.users.size + `  Kişi 💞 "
    }
  }
});

bot.on("message", message => {
    
    if (message.content.toLowerCase() === prefix + "botdavet") {
        message.author.send("Davet linkim: **https://discordapp.com/oauth2/authorize?client_id=439756873311322112&permissions=8&scope=bot**")    
    }
    
    if (message.content.toLowerCase() === "notech") {
        message.reply("ne var nee")
    }
    
    if (message.content.toLowerCase() === prefix + 'yenile') {
    if (message.author.id !== "430011871555223553") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Yeniden başlıyorum..`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      process.exit(0);
    })
   }
  }
   
        
    if (message.content.toLowerCase() === prefix + "sunucubilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Sunucu Adı", message.guild.name, true)

            .addField("Sunucu ID", message.guild.id, true)

            .addField("Sunucu Sahibi", message.guild.owner, true)

            .addField("Toplam Üye Sayısı", message.guild.memberCount, true)

            .addField("AFK Süresi", message.guild.afkTimeout, true)

            .setFooter("Oluşturulma Tarihi " + message.guild.createdAt)

            .setColor(0x000001)

        return message.channel.sendEmbed(embed)
    }

    if (message.content.toLowerCase() === prefix + "botbilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Bot Sahibi", `<@${owner}>`, true)

            .addField("Version", "0.0.2", true)

            .addField("Toplam Sunucu Sayısı", bot.guilds.size, true)

            .addField("Toplam Kullanıcı Sayısı", bot.users.size, true)
            
            .addField("Toplam Kanal Sayısı", bot.channels.size, true)

            .addField("Kitaplık Türü", "discord.js")

            .setColor(0x000001)
        
        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "kurabiye") {
        message.channel.sendMessage(`Canım gel buraya sana kurabiye vereceğim! <@${message.author.id}>`)
        message.react("🍪")
    }

    if (message.content.toLowerCase() === prefix + "yardım") {
        message.channel.sendMessage(stripIndents`
\`\`\`fix
${prefix}anakomutlar - Bilgi Komutları
${prefix}eğlence - Eğlence Komutları
${prefix}moderasyon - Moderasyon Komutları
${prefix}kişisel - Kişisel komutlar
` + bot.guilds.size + ` Sunucu 👀
` + bot.users.size + `  Kişi 💞
\`\`\` `)
    }
    
    if (message.content.toLowerCase() === prefix + "matematik") {
        message.channel.sendMessage(stripIndents`
\`\`\`fix
${prefix}topla - Yazdığınız iki sayıyı toplar.
${prefix}çıkar - Yazdığınız iki sayıyı çıkarır.
${prefix}çarp - Yazdığınız iki sayıyı çarpar.
${prefix}böl - Yazdığınız iki sayıyı böler.
\`\`\` `)
    }
    
     if (message.content.toLowerCase() === prefix + "anakomutlar") {
        message.channel.sendMessage(stripIndents`
\`\`\`fix
${prefix}emojiler - Sunucudaki emojileri gösterir.
${prefix}ping - Botun pingini ölçer.
${prefix}yardım - Botun bütün komutlarını size gösterir.
${prefix}sunucubilgi - Sunucu hakkkında detaylı bilgi verir.
${prefix}botbilgi - Bot hakkında bilgi verir.
${prefix}botdavet - Botun davet linkini atar.
${prefix}sunucu - Destek sunucusunun linkini atar.
\`\`\` `)
    }
    
     if (message.content.toLowerCase() === prefix + "kişisel") {
        message.channel.sendMessage(stripIndents`
\`\`\`fix
${prefix}matematik - Matematik işlemi yapar.
${prefix}yaz - Yazdığınız mesajı bota yazdırır.
\`\`\` `)
    }

     if (message.content === prefix + "eğlence") {
        message.channel.sendMessage(stripIndents`
\`\`\`fix
${prefix}espriyap - Bot espri yapar.
${prefix}zekam - Zeka puanınızı gösterir.
${prefix}matematik - Matematik işlemi yapar. 
${prefix}sigara - Bot sigara içer.
${prefix}avatarım - Avatarınızın linkini gönderir.
${prefix}kurabiye - Size kurabiye verir.
\`\`\` `)
    }
    
     if (message.content === prefix + "moderasyon") {
        message.channel.sendMessage(stripIndents`
\`\`\`fix
${prefix}yenile - Botu yeniden başlatır.
${prefix}kick - Etiketlenen kişiyi sunucudan atar. [BAKIM]
${prefix}ban - Etiketlenen kişiyi sunucudan banlar. [BAKIM]
${prefix}temizle - 100 Adet mesaj siler.
\`\`\` `)
    }
    

});
