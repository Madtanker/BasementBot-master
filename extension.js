/*  THIS CODE DOES NOT WORK
    This file is used for changing the bookmarlet into a Chrome Extension
    Since this bot is currently operated using bookmarklets, this code hasn't been updated.
    If you have forked this bot and wish to use a Chrome Extension, this file will need to be updated. 
*/

(function () {

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "BasementCouch",
        language: "english",
        chatLink: "https://cdn.jsdelivr.net/gh/Madtanker/BasementBot/lang/en.json",
        startupCap: 200, // 1-200
        startupVolume: 25, // 0-100
        startupEmoji: true, // true or false
        maximumAfk: 120,
        afkRemoval: true,
        maximumDc: 120,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: true,
        voteSkipLimit: 4,
        timeGuard: true,
        maximumSongLength: 10,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 1,
        lockskipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["broken", "The song you played was not available for some users. "]
        ],
        afkpositionCheck: 2,
        afkRankCheck: "bouncer",
        motdEnabled: true,
        motdInterval: 20,
        motd: "Welcome to the EDM Basement! We play Electronic Dance Music (EDM), Techno, House, Chill, Funk, Dubstep, Drum and Bass, Etc. Sorry, NO Hardstyle or Hardcore. Hop up on stage and spread the love for great music",
        filterChat: false,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: "http://theedmbasement.wordpress.com",
        themeLink: null,
        fbLink: "https://www.facebook.com/TheEDMBasement" ,
        youtubeLink: null,
        website: "http://theedmbasement.wordpress.com",
        intervalMessages: ["Fun fact: When possums are playing ‘possum’, they are not \“playing.\” They actually pass out from sheer terror. ", " Fun Fact: Donald Duck comics were banned from Finland because he doesn’t wear pants!", "Plug.dj was first released on February 29th, \"a leap day\"."],
        messageInterval: 10,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            Ban: "https://cdn.jsdelivr.net/gh/Madtanker/BasementBot/blacklists/Banlist.json",
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/Yemasthui/basicBot/master/basicBot.js', extend);

}).call(this);
