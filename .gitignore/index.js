const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on('ready' , () => {
    console.log("Bot Ready !");
});

bot.login('NDQyMzQzNzc5NDUwNjE3ODU3.Dc9cXQ.9ihmtKqPkvUN0P_Dqo5PXELuHgY');

bot.on('message' , message => {
    if (message.content --- "ping"){
        message.reply("pong");
        console.log('ping pong');
    }
});
