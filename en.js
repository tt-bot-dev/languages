module.exports = bot => ({
    //#region commands
    //agree.js
    AGREE_FAULT:                                    owner => `Sorry, but I'm not able to give you the role. Please tell the server owner (${bot.getTag(owner)}) about this.`,

    //ban.js
    BAN_DONE:                                       user => `:ok_hand: Banned ${bot.getTag(user)}.`,

    //clear.js
    CLEAR_DONE:                                     messages => `:ok_hand: Deleted ${messages} messages.`,
    CLEAR_CONFIRM:                                  `Are you sure you want to delete the messages according to your arguments? Type y or yes to continue; n or no for stopping the action. You have 10 seconds to respond.`,

    // config.js
    WELCOME_TO_CONFIG:                              () => `Welcome to tt.bot's configuration! Please use reactions to access the individual setting categories.
You can use :stop_button: reaction to stop at any time.
Want to use the web interface instead? Go here: ${config.webserverDisplay("/")}`,
    CONFIG_PREFIX:                                  `:pen_fountain: Prefix`,
    CONFIG_PREFIX_DESCRIPTION:                      () => `Here you can set ${bot.user.username}'s prefix. Using \`${config.prefix}\` as the prefix will still work.`,
    CONFIG_MODROLE:                                 `:hammer: Moderator role`,
    CONFIG_MODROLE_DESCRIPTION:                     `You can set the custom moderator role for the bot to use. Keep in mind, this is just a case insensitive reference to the role name.`,
    CONFIG_FAREWELL:                                `:wave: Farewell`,
    CONFIG_FAREWELL_DESCRIPTION:                    `This feature gives you an ability to see who left the server. You can set the message using this setting. This uses [ttMsg](https://github.com/tt-bot-dev/tt.bot/blob/master/docs/ttMsg.md).`,
    CONFIG_FAREWELL_CHANNEL:                        `:pen_ballpoint: Farewell channel`,    
    CONFIG_FAREWELL_CHANNEL_DESCRIPTION:            `Using this, you can set where to post the messages for the above mentioned feature.`,
    CONFIG_AGREE_CHANNEL:                           `:white_check_mark: Agreement channel`,
    CONFIG_AGREE_CHANNEL_DESCRIPTION:               `This feature allows one to give themselves the member role by using the \`agree\` command. This is useful when you want to guarantee everyone read the rules.`,
    CONFIG_MODLOG_CHANNEL:                          `:tools: Modlog channel`,
    CONFIG_MODLOG_CHANNEL_DESCRIPTION:              `This allows logging moderative actions (strike, kick, (soft)ban) done through the bot to a specific channel.`,
    CONFIG_LOG_CHANNEL:                             `:notepad_spiral: Log channel`,
    CONFIG_LOG_CHANNEL_DESCRIPTION:                 `This is a powerful feature of tt.bot that allows logging of some actions in the server. [Learn more about this](https://github.com/tt-bot-dev/tt.bot/blob/wip-v3.2/docs/Logging-events.md)`,
    CONFIG_LOG_EVENTS:                              `:pencil: Log events`,
    CONFIG_LOG_EVENTS_DESCRIPTION:                  `Here you can specify what events for the above mentioned feature will be logged.`,
    CONFIG_GREETING:                                `:handshake: Greeting`,
    CONFIG_GREETING_DESCRIPTION:                    `This feature gives you an ability to send a message that allows more customization in order to welcome your new members. You can set the message using this setting. This uses [ttMsg](https://github.com/tt-bot-dev/tt.bot/blob/master/docs/ttMsg.md).`,
    CONFIG_GREETING_CHANNEL:                        `:pencil2: Greeting channel`,
    CONFIG_GREETING_CHANNEL_DESCRIPTION:            `Using this, you can set where to post the messages for the above mentioned feature.`,
    CONFIG_MEMBER_ROLE:                             `:busts_in_silhouette: Member role`,
    CONFIG_MEMBER_ROLE_DESCRIPTION:                 `This role is the role used for the agreement feature.`,
    CONFIG_LOCALE:                                  ":speaking_head: Locale",
    CONFIG_LOCALE_DESCRIPTION:                      "Sets the language which I will use for those who haven't set up a profile yet.",
    SETTING_CURRENT_VAL:                            val => `The current value is ${val}`,
    SETTING_SET:                                    ":pencil: Set",
    SETTING_SET_DESCRIPTION:                        "Sets the value of this setting to a new value.",
    SETTING_RESET:                                  ":x: Reset",
    SETTING_DISABLE:                                ":x: Disable",
    SETTING_RESET_DESCRIPTION:                      def => `This will reset the value to the default value (${def})`,
    SETTING_DISABLE_DESCRIPTION:                    `This will remove the configuration listing from your configuration.`,
    SETTING_HOME:                                   ":house: Home",
    SETTING_HOME_DESCRIPTION:                       "Goes back to the main menu",
    QUESTION_STRING_VAL:                            "Please type in your new value. You have 60 seconds to respond.",
    QUESTION_CHANNEL_VAL:                           `Please type in the channel you want to use. You have 30 seconds to respond.`,
    QUESTION_ROLE_VAL:                              `Please type in the role you want to use. You have 30 seconds to respond.`,
    QUESTION_RESET:                                 c => `Are you sure you want to reset ${c} to the default value?\nType in y or yes if you want to. n or no otherwise. You have 10 seconds to respond.`,
    QUESTION_DISABLE:                               c => `Are you sure you want to disable ${c}?\nType in y or yes if you want to. n or no otherwise. You have 10 seconds to respond.`,
    

    //delpunish.js  
    CANNOT_UNSTRIKE:                                err => `Cannot remove the strike for this reason: ${err}`,

    //emoji.js
    IMAGE_GENERATING:                               "We're generating the image. Wait and prepare a cup of coffee. This may take a while.",
    IMAGE_NONE:                                     "Could not get an image. Please validate your input and try again.",
    IMAGE_AUTO_GENERATED:                           "This image is automatically generated.",
    IMAGE_CAVEATS:                                  `Nobody and also nothing isn't perfect, these are current caveats that you may experience and we know about.
- For performance reasons, the image is being generated as an animated PNG. Animating these images is not supported by Discord.
- Your emoji may get cut off.`,
    IMAGE_GENERATION_TIME:                          (sec, nsec) => `Generating this image took ${sec} seconds and ${Math.floor(nsec / 1e6)} ms`,

    //extensions.js
    NO_EXTENSIONS:                                  "You don't have any extensions yet!",
    NO_MORE_EXTENSIONS:                             "There aren't any more extensions than that.",
    EXTENSION_LIST:                                 guild => `Here are the extensions for ${guild.name}`,
    EXTENSION_LIST_FIELD:                           ext => `
ID: ${ext.id}
Allowed channels: ${ext.allowedChannels.map(c => `<#${c}>`).join(", ") || "All"}
Allowed roles: ${ext.allowedRoles.map(r => `<@&${r}>`).join(", ") || "All"}
Store ID: ${ext.store}`,
    QUESTION_EXTENSION_CODE:                        "Please upload your code as a Discord attachment. You have 60 seconds to upload the code.\nKeep in mind, that the code must be a in a .js file.",
    QUESTION_EXTENSION_NAME:                        "Please tell me how would you like to name your extension. The limit for the name is 100 characters. You have 60 seconds to respond.",
    QUESTION_EXTENSION_TRIGGER:                     "Please tell me what command trigger would you like to use. The limit for the command trigger is 20 characters. Also, you cannot use spaces in the trigger. You have 20 seconds to respond.",
    QUESTION_EXTENSION_CHANNEL_RESTRICT:            "Would you like to restrict running the extension to certain channels? Type y or yes if you want to, n or no otherwise. You have 10 seconds to respond.",
    ALLOWED_CHANNELS:                               "Allowed channels",
    EXTENSION_MENU_SUBTEXT:                         additionalStr => `Please type in the letter next to the action to do the listed action${additionalStr}`,
    ALLOWED_CHANNELS_ACTION_ADD:                    "a: Add",
    ALLOWED_CHANNELS_ACTION_ADD_DESCRIPTION:        role => `Adds a ${role ? "role" : "channel"} to the list of allowed ${role ? "role" : "channel"}s`,
    ALLOWED_CHANNELS_ACTION_REMOVE:                 "r: Remove",
    ALLOWED_CHANNELS_ACTION_REMOVE_DESCRIPTION:     role => `Removes a ${role ? "role" : "channel"} off the list of allowed ${role ? "role" : "channel"}s`,
    ALLOWED_CHANNELS_ACTION_DONE:                   "d: Done",
    ALLOWED_CHANNELS_ACTION_DONE_DESCRIPTION:       "Finishes editing",
    QUESTION_ALLOWED_CHANNELS_ADD:                  roleOrChannel => `Please type in the ${roleOrChannel ? "role" : "channel"} you want to add in. You have 30 seconds to respond.`,
    QUESTION_ALLOWED_CHANNELS_REMOVE:               roleOrChannel => `Please type in the ${roleOrChannel ? "role" : "channel"} you want to remove. You have 30 seconds to respond.`,
    CHANNEL_ALLOWED_ALREADY:                        role => `This ${role ? "role" : "channel"} is allowed already.`,
    CHANNEL_DISALLOWED_ALREADY:                     role => `This ${role ? "role" : "channel"} is disallowed already.`,
    ALLOWED_CHANNELS_MENU_CANCELLED:                role => `Menu cancelled due to inactivity; the ${role ? "role" : "channel"}s that were selected already will be used.`,
    QUESTION_EXTENSION_ROLE_RESTRICT:               "Would you like to restrict running the extension to members with certain roles? Type y or yes if you want to, n or no otherwise. You have 10 seconds to respond.",
    ALLOWED_ROLES:                                  "Allowed roles",
    MENU_CURRENTLY_SELECTED:                        rolesOrChannels => `Currently allowed ${rolesOrChannels ? "roles" : "channels"}:`,
    QUESTION_EXTENSION_STORE:                       "Do you want to use a different extension store than the default one? Type y or yes if you want to use one. n or no otherwise. To respond, you have 10 seconds.",
    QUESTION_EXTENSION_STORE_ID:                    "Type in the store ID now.",
    STORE_NONEXISTANT:                              "This store doesn't exist.",
    STORE_CREATED:                                  store => `Created a store with an ID ${store}`,
    EXTENSION_CREATED:                              (extensionName, id) => `Finished! Extension ${extensionName} has been successfully created! Its ID is ${id}.`,
    EXTENSION_NONEXISTANT:                          "This extension doesn't exist.",
    QUESTION_EXTENSION_DELETE:                      ext => `Are you sure you want to delete the extension ${ext.name} (ID ${ext.id})? Type y or yes if you want to. n or no otherwise. To respond, you have 10 seconds.`,
    QUESTION_EXTENSION_DELETE_STORE:                ext => `Done! The extension ${ext.name} is deleted.\nWould you also like to delete its store (ID ${ext.store})? Type y or yes if you want to. n or no otherwise. To respond, you have 10 seconds.`,
    STORE_DELETE_NONEXISTANT:                       "Alright, but the store was already deleted.",
    STORE_DELETED:                                  ext => `Done, deleted the store with an ID ${ext.store}`,

    //getavatar.js
    AVATAR_NOT_LOADING:                             avatar => `[Image not loading?](${avatar})`,
    USER_AVATAR:                                    user => `${user}'s avatar`,

    //hackban.js
    HACKBANNED_USERS:                               users => `:ok_hand: Banned ${users} user${users !== 1 ? "s": ""} .`,
    USER_NOT_FOUND:                                 ":warning: I couldn't find that user :(",
    USER_NOT_FOUND_DESCRIPTION:                     "Are you sure this is a correct user ID?",

    //help.js
    HELP_PUBLIC:                                    "Public commands",
    HELP_OWNER:                                     "Owner commands",
    HELP_MOD:                                       "Moderator commands",
    HELP_ADMIN:                                     "Administrator commands",
    HELP_FOR_COMMAND:                               command => `Help for ${command} command`,
    HELP_ARGUMENTS:                                 "Arguments",
    HELP_ALIASES:                                   "Aliases",
    HELP_DESCRIPTION:                               "Description",
    HELP_HOME:                                      async (HelpMenu, permissions, msg) => `Welcome to tt.bot's help! Please use reactions to access the help for the command categories.\n:stop_button: Stop\n:house: Home (this page)\n${(await HelpMenu.MESSAGES(msg)).filter((_, idx) => permissions[idx]).join("\n")}`,
    HELP_NO_DESCRIPTION:                            "No description",
    HELP_REMINDER:                                  `Use ${config.prefix}help <command> to see more information about it.`,

    //info.js
    INFO_STATS:                                     "Stats",
    INFO_STATS_TEXT:                                () => `Guilds: ${bot.guilds.size}\nCached users: ${bot.users.size}\nChannels: ${Object.keys(bot.channelGuildMap).length}`,
    INFO_AUTHORS:                                   "Maintainers and help",
    INFO_OWNERS:                                    ownerStrings => `${ownerStrings.join("\n")}\n[Support server](https://discord.gg/pGN5dMq)\n[GitHub repository](https://github.com/tt-bot-dev/tt.bot)`,
    INFO_VERSIONS:                                  "Versions:",
    INFO_UPTIME:                                    "Uptime:",

    //invite.js
    BOT_INVITE:                                     `Here you go! <https://discordapp.com/oauth2/authorize?client_id=195506253806436353&scope=bot>\n\nIf you need help using the bot, come to our support server, the invite is in info command.`,

    //inviteinspector.js
    CANNOT_GET_INVITE:                              "I cannot get the information about the invite.",
    INVITE_ERR_FOOTER:                              "Are you sure the invite exists? This also doesn't work with group DMs.",
    CANNOT_GET_INVITE_BANNED:                       "I cannot get the information about the invite because I'm banned from there.",
    CONTACT_GUILD_ADMIN:                            "Please contact the administrators of the server to unban me and try again.",
    INV_CHANNEL_TYPE:                               "Channel type",
    INV_CHANNEL_TYPE_VAL:                           (type, channelName) => `${type === 0 ? "Text" : "Voice"} channel named ${bot.escapeMarkdown(channelName)}`,
    INV_GUILD_ID:                                   "Guild ID",
    INV_MEMBERS_VAL:                                (members, presences) =>  `${members} members, ${presences} online.`,
    INV_JOIN:                                       "Join",
    INV_JOIN_LINK:                                  code =>  `Click [this](https://discord.gg/${code})`,
    INV_INVITER:                                    user => `Invited by ${user}`,

    //kick.js
    KICK_DONE:                                      user => `:ok_hand: Kicked ${bot.getTag(user)}.`,

    //needsmorejpeg.js
    CANNOT_JPEGIFY:                                 ":x: Cannot JPEG-ify the image",
    CANNOT_FETCH_IMAGE:                             "The image cannot be fetched.",
    CANNOT_JPEGIFY_INTERNAL_ERROR:                  ":x: Cannot JPEG-ify the image due to an internal error",


    // phone.js
    ALREADY_HAVE_NUMBER:                            "Sorry, but you have reached your telephone number limit and you cannot get more numbers.",
    NUMBER_RESERVED:                                "Sorry, but phone numbers starting with TTBOT 0 (882680) are reserved for the developers.",
    NUMBER_EXISTS:                                  "The number already exists. Try another one.",
    QUESTION_NUMBER_PRIVATE:                        "Do you want to make your number to be private? Private numbers show up as registered, however, when looked up, no information will be available.",
    NUMBER_CREATED:                                 "Alright, that's all! Your number is now safe and sound.",
    NUMBER_INVALID:                                 hint => `Uh... This is not a valid phone number.${hint ? "\nYour number must start with TTBOT (88268), then 9 numbers of your choice." : ""}`,
    CALLER_NO_NUMBER:                               "We don't do anonymous calls, sorry.",
    NUMBER_NONEXISTANT:                             "This number is not registered, sorry.",
    CALLING:                                        "Alrighty, they are being called now!",
    CALL_ABORTED_BOT_REMOVED:                       "Call aborted: The bot was removed from the guild you are calling.",
    CALL_ABORTED_NO_PERMISSIONS:                    "Call aborted: The bot doesn't have the permissions to write in the channel you are calling.",
    PRIVATE_NUMBER:                                 "Private number",
    CHANNEL_INFORMATION:                            "Channel information",
    NUMBER_AVAILABLE:                               "The bot was removed from the guild this number is registered at. This number is free to register now.",
    CHANNEL_INFORMATION_VALUE:                      (channel, guild) => `${channel ? `#${channel.name}` : "unknown channel"} at ${guild.name}`,
    NUMBER_INFORMATION:                             number => `Number information: ${number}`,
    QUESTION_DELETE_NUM:                            number => `Are you sure to delete this number: ${number}? This action is irreversible.`,
    NUMBER_DELETED:                                 "Done! The number is deleted.",

    //ping.js
    PING_LATENCY:                                   ms => `It took ${ms}ms to ping.`,
    PING_DISCORD_LATENCY:                           ms => `Discord gateway latency: ${ms}ms`,
    PONG:                                           ":ping_pong: Pong",

    //profile.js
    PROFILE_NONEXISTENT:                            "You haven't created a profile yet!",
    PROFILE_DELETED:                                "Deleted your profile.",
    PROFILE_CREATED:                                "OK. Your profile is created.",
    PROFILE_CREATE_SETUP:                           "Hello there! Would you like to set your profile up before I create one? Type y or yes if you want to, n or no if you don't. You have 10 seconds to answer.\n\nKeep in mind that you can still modify the values using other subcommands.",
    PROFILE_CREATE_TIMEZONE:                        "What is your timezone? This timezone should be a valid entry in the IANA timezone DB (check <https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List> for a list of them)\nYou have 30 seconds to answer. Type \"none\" if you don't want to set one yet.",
    PROFILE_CREATE_LOCALE:                          () => `Which language do you speak? Here are the available languages: ${Object.keys(bot.i18n.languages).join(", ")}\nIn case it is not listed or don't want to set a language yet, type "none". You have 30 seconds to choose.\nYou can help us contributing languages on GitHub: <https://github.com/tt-bot-dev/languages>`,
    PROFILE_TIMEZONE:                               tz => `Your current timezone is ${tz}.\nIn order to change it, provide a timezone as an argument.`,
    INVALID_TIMEZONE:                               `This timezone is invalid. You can find a list of possible timezones here: <https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List>`,
    INVALID_LOCALE:                                 locale => `Invalid locale \`${locale}\``,
    LOCALE_SET:                                     locale => `Set your locale to ${locale}.`,
    PROFILE_LOCALE_LIST:                            (currentLocale, status) => `You currently have set \`${currentLocale}\` as your locale!\nCurrent language status:\n${status}`,

    //serverinfo.js
    GUILD_VERIFICATION_NONE:                        "None",
    GUILD_VERIFICATION_LOW:                         "Low (Requires a verified email)",
    GUILD_VERIFICATION_MEDIUM:                      "Medium (Requires a verified email and being registered on Discord for at least 5 minutes)",

    //These miss their tableflips because the tableflips are not translatable.
    GUILD_VERIFICATION_TABLEFLIP:                   "(Requires a verified email, being registered on Discord for at least 5 minutes and being on the server for at least 10 minutes)",
    GUILD_VERIFICATION_ULTRATABLEFLIP:              "(Requires a verified phone number)",
    GUILD_VERIFICATION_LEVEL:                       "Guild verification",
    ALLOWED_INVITE_SPLASH:                          "This server can have an invite splash",
    ALLOWED_VIP_REGIONS:                            "This server has access to higher-quality voice servers",
    ALLOWED_VANITY_URL:                             vanityURL => `This server can have a ${vanityURL ? "[" : ""}vanity URL${vanityURL ? `](https://discord.gg/${ctx.guild.vanityURL})` : ""}`,
    ALLOWED_VERIFIED:                               "This server is verified",
    ALLOWED_PARTNERED:                              "This server is partnered with Discord",
    ALLOWED_COMMERCE:                               "This server has access to commerce features (store channels, for example)",
    ALLOWED_NEWS:                                   "This server can have announcement channels",
    ALLOWED_LURKABLE:                               "This server is lurkable",
    ALLOWED_DISCOVERABLE:                           "This server can be found in the server discovery menu",
    ALLOWED_FEATURABLE:                             "This server can be featured in the server discovery menu",
    ALLOWED_ANIMATED_ICON:                          "This server can have an animated icon",
    ALLOWED_BANNER:                                 "This server can have a banner",
    FEATURES:                                       "Features",
    REQUIRES_ADMIN_MFA:                             "Requires admin 2FA",
    MEMBER_COUNT:                                   members => `${members} member${members !== 1 ? "s" : ""}`,
    ROLE_COUNT:                                     roles => `${roles} role${roles !== 1 ? "s" : ""}`,
    EXPLICIT_FILTERING:                             "Explicit content filtering",
    EXPLICIT_FILTERING_OFF:                         "Off",
    EXPLICIT_FILTERING_NOROLE:                      "On for people without any role",
    EXPLICIT_FILTERING_ON:                          "On",
    DEFAULT_NOTIFICATIONS:                          "Default notification setting",
    ONLY_MENTIONS:                                  "Only @mentions",
    ALL_MESSAGES:                                   "All messages",
    VOICE_REGION:                                   "Voice region",
    AFK_TIMEOUT:                                    "AFK timeout",
    AFK_MINUTES:                                    timeout => `${timeout / 60} minutes`,
    AFK_CHANNEL:                                    "AFK channel name",

    //softban.js
    SOFTBAN_DONE:                                   user => `:ok_hand: Softbanned ${bot.getTag(user)}.`,

    //strike.js
    BOTS_NOT_STRIKABLE:                             "You shouldn't strike the bots. You might hurt their feelings :(",
    YOU_GOT_STRIKED:                                "It seems like you've got striked.",
    STRIKE_DETAILS:                                 (issuer, reason) => `The strike was issued by ${issuer} for reason \`${reason || "No reason"}\`.`,
    PAY_ATTENTION:                                  "Pay attention on what you're doing!",

    //strikes.js
    TOO_MUCH_STRIKES:                               "The user has too much strikes to display in an embed. Here's a text file instead:",
    STRIKE_OVERVIEW:                                user => `Here are ${user}'s strikes`,

    //tags.js
    TAG_CREATED:                                    tag => `Created a tag with a name of \`${tag}\`.`,
    TAG_EXISTS:                                     "This tag already exists!",
    TAG_DOESNTEXIST:                                "This tag doesn't exist.",
    TAG_NOTOWNER:                                   "You don't own that tag.",
    TAG_DELETED:                                    tag => `Deleted a tag with a name of \`${tag}\`.`,
    TAG_UPDATED:                                    tag => `Updated a tag with a name of \`${tag}\`.`,
    TAG_DISPLAY:                                    tag => `Tag ${tag}`,

    //timefor.js
    NO_TZ:                                          "This user hasn't set any timezone yet.",
    TIME_FOR:                                       (time, user) => `It's ${time} for ${user}.`,

    //uinfo.js
    PLAYING:                                        "Playing",
    STREAMING:                                      "Streaming",
    LISTENING_TO:                                   "Listening to",
    ONLINE:                                         "Online",
    IDLE:                                           "Idle",
    DND:                                            "Do not disturb",
    OFFLINE:                                        "Invisible/offline",
    USER_INFO:                                      (nickstr, limited = false) => `${limited? "Limited i" : "I"}nfo for ${nickstr}`,
    PLAYING_NONE:                                   "Nothing",
    SPACE_UNIVERSE:                                 "with an universe of spaces.\nGood luck, you found an easter egg :eyes:",
    CURRENT_VOICE:                                  "Current voice channel",
    JOINED_ON:                                      "Joined on",
    NO_CURRENT_VOICE:                               "None",

    //#endregion commands

    //#region events
    // It is possible that the server owner has a profile.
    HI_I_AM_BOT:                                    `:wave: Hi there!`,
    SOME_THINGS_SAID:                               () => `My name is ${bot.user.username} and I'm an instance of tt.bot, a multifunctional and fun Discord bot. I felt there is a need of describe myself to you.`,
    GETTING_STARTED:                                ":floppy_disk: Getting started",
    GETTING_STARTED_DESCRIPTION:                    `You don't require any setup for tt.bot to work with basic features! However, to use some moderation commands, you (or anyone with Manage Server permission) have to use the \`${config.prefix}config\` command to create the configuration. And that's basically it! Give your staff the "tt.bot mod" role and they can start moderating! Or set the modRole setting to whatever your role name is.`,
    EVERYTHING_ELSE:                                ":books: Everything else",
    EVERYTHING_ELSE_DESCRIPTION:                    "If you need help (or just want to hang out with us), feel free to come to our support server; the invite is in the info command.",
    THANKS_FOR_CHOOSING:                            "Thanks for choosing tt.bot!",
    WISHING_GOOD_LUCK:                              "*I wish you good luck with your server-*",
    //#endregion events

    //#region queries
    ITEM_NOT_FOUND:                                 (query, notfound) => `We cannot find ${query}. Are you sure it exists? ${notfound}`,
    MULTIPLE_ITEMS_FOUND:                           "Multiple items found!",
    MULTIPLE_ITEMS_DESCRIPTION:                     (items, list) => `I've found ${items} items, displaying 5 of them at most.
${list}
Choose one from the users by reacting with the number next to the username.
Else, react with ❌ to cancel.
Query will automatically expire in 5 minutes.`,

    //#endregion queries

    // There is going to be webserver translations soon, but currently cannot figure it out.


    // Reaction menu
    REACTION_MENU_EXIT_MANUAL:                      "You have exited the menu.",
    REACTION_MENU_EXIT_MESSAGE_DELETE:              "Exited the menu because the message was deleted.",
    REACTION_MENU_EXIT_CHANNEL_DELETE:              "Exited the menu because the channel was deleted.",
    REACTION_MENU_NO_AUTOREMOVE:                    "Error: Cannot remove your reaction because I'm very likely lacking the Manage Messages permission.\nIf you give it to me, I'll remove your reaction for your convenience.",
    // Modlog

    MODS_UNSTRIKABLE:                               "You cannot strike a moderator!",

    // General
    NONE:                                           "None",
    MEMBERS:                                        "Members",
    OWNER:                                          "Owner",
    ROLES:                                          "Roles",
    STATUS:                                         "Status",
    REASON:                                         "Reason",
    OP_CANCELLED:                                   "Operation cancelled.",
    COMMAND_ERROR:                                  "Sorry, but I didn't get this right. Please double check the input and try again.",
    ARGS_MISSING:                                   `You miss some required arguments. :thinking:`,
    ROLE_HIERARCHY_ERROR:                           `You can't do this on that user.`,
    ERROR:                                          err => `Oops. I have tried completing your command, but I ran into an error. Please share this with my developers.\n\`\`\`js\nError:\n${err}\n\`\`\``,
    OOPS:                                           `Oops.. I have a little problem.`,
    MISSING_PERMISSIONS:                            `I'm missing the permission to do this in your server.`,
    CREATED_ON:                                     "Created on",
    YES:                                            "Yes",
    NO:                                             "No",
    TOOLONG:                                        "Too long to show, sorry :(",
    INVALID_ARG:                                    arg => `Invalid argument: ${arg}`,
    PAGE:                                           page => `Page ${page}`,
    ALL:                                            "All",
    SORRY:                                          "We're sorry for that.",
    
    NATIVE_LOCALE_NAME:                             "English",
    ENGLISH_LOCALE_NAME:                            "English"
  //fallbackLanguage:                               "en"
});
