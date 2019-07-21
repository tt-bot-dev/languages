// Nitránčina, to je pekný prídavek slovenčiny kerú dobre poznáme.
// Nitránčina je doplnek slovenčiny ako je databáza doplnek k node.js(a tak ďál)
// *pozor, keďže as toto volá nitránčina, nešpecifikujeme používání mixuvaného nárečá Nitránčina + Topoľčánske doplnky + volačo z oného Píšťanského nárečá keré sa kupodivu zaplítlo(aj keď níe véla) do nášho.
// šecci ju veľmi miľujeme a na jej počesť sa napijeme mlíka lebo nebudeme piť tí energeťáky lebo to je zlé na srcco.
// Opakujeme poslenné 2 vety ze Slovenského prekladu:
// 'Keď sa niečo posere, prosím kompetentnú osobu rôzneho typu poslať na najlepšie vybraný server typu Aefer Community - sekcia napr. aj #main jednoduchú správu:
// "Šéfe, mně se asi něco nepovedlo."'

// **POZOR! Následujúci preklad vo formáte .js je *možno* natoľko seriózny že ho netreba brať vážne. Šak priznajme si, je to iba vtipný preklad**
function getMessagesPlural(messages) {
    if (messages == 1) return "správa";
    if (messages >= 2 && messages <= 4) return "správy";
    return "správ";
}

function getDeletedPlural(messages) {
    if (messages == 1) return "Vyondená";
    if (messages >= 2 && messages <= 4) return "Vyondené";
    return "Vyondených";
}

function getBannedPlural(users) {
    if (users == 1) return "Zaondený";
    if (users >= 2 && users <= 4) return "Zaondení";
    return "Zaondených";
}

function getBannedUserPlural(users) {
    if (users == 1) return "trogár";
    if (users >=2 && users <= 4) return "trogári";
    return "trogárov";
}

function getMembersPlural(members) {
    if (members == 1) return "hovado";
    if (members >= 2 && members <= 4) return "hovadá";
    return "hovád";
}

function getItemsPlural(items) {
    if (items == 1) return "oná";
    if (items >= 2 && items <= 4) return "oných";
    return "oných"
}


module.exports = bot => ({
    //#region commands
    //agree.js
    AGREE_FAULT:                                    owner => `Prepáč, ale nemôžem ti dať rolu. Prosím, povedz o tom vlastníkovi serveru (${bot.getTag(owner)})`,

    //agreesetup.js
    AGREE_SETUP_ALREADY:                            "Funkcia súhlasu tu je. Steš ju vypnút?\nNapíš y alebo yes na vypnutie. Inak napíš n alebo no. Na odpoveď máš 10 sekúnd, tak sa nešuchci!",
    AGREE_DISABLED:                                 "Kónečne! Funkcia áno je vypatá.",
    AGREE_ROLE_QUERY:                               "Ic het! Naondi sem méno role, kerú steš ondiť na funkciu áno.",
    AGREE_SETUP:                                    prefix => `Ná tu máš! Keď sem volado napíše \`${prefix || config.prefix}agree\`, dám im hentú rolu. Móže byť rád že neni sprostý.`,

    //ban.js
    BAN_DONE:                                       user => `:ok_hand: Hovado ${bot.getTag(user)} bolo zaondené, Tak mu treba. Nemal byť hovado.`,

    //clear.js
    CLEAR_DONE:                                     messages => `:ok_hand: ${getDeletedPlural(messages)} ${messages} ${getMessagesPlural(messages)}.`,

    // config.js
    GUILD_CONFIG:                                   (guild, items) => `\`\`\`\nNastavení oného na ${guild}\n${items.join("\n")}\`\`\`\nAj keď to je jennoduché, je možné že nastavení spraví neporádek.\nKeď chceš namísto toho použiť internet, ic na ${config.webserverDisplay("/")}`,
    SETTING_UPDATED:                                (setting, value) => `Nastavení ${setting} naondené na ${value}`,
    SETTING_UNKNOWN:                                setting => `Nevím ${setting}`,

    //delpunish.js
    CANNOT_UNSTRIKE:                                err => `Nemóžem odondiť varovaní z dóvodu: ${err}`,

    //emoji.js
    IMAGE_GENERATING:                               "Vyrábam obráštek. Len vydrž, šak ty máš moc času.",
    IMAGE_NONE:                                     "Nemóžem vyrobiť obráštek. Skontroluj čis šecko dobre napísau.",
    IMAGE_AUTO_GENERATED:                           "Tento obráštek jest automaticky vyrábaný, osobami keré sú neni osoby",
    IMAGE_CAVEATS:                                  `Nido neni dokonalý a šeci robá chyby, tak isto robá chyby aj naše softwáre, o kerých víme.
- Oné emotikóňe môžu byt rýcheljšé alebo naopák kóli frekvencí snímkov (vačšinou 20ms čož odstup/50fps)
- Oné emotikóňe môžu byt orezané.`,
    IMAGE_GENERATION_TIME:                          (sec, nsec) => `Vyrábaní obrášku nám minulo ${sec} sekúnd a ${Math.floor(nsec / 1e6)} ms života.`,

    //farewell.js
    FAREWELL_UPDATED:                               (message, channelID) => `:ok_hand: Pápá naondené na \`${message}\`. Pápá bude odeslané do <#${channelID}>.`,
    FAREWELL_RESET:                                 "Pápá je vyčistené.",

    //getavatar.js
    AVATAR_NOT_LOADING:                             avatar => `[Obráštek sa neondí?](${avatar})`,


    //greet.js
    GREETING_UPDATED:                               (message, channelID) => `:ok_hand: Ahoj naondené na \`${message}\`. Ahoj bude odeslané do <#${channelID}>.`,
    GREETING_RESET:                                 "Ahoj je vyčistené.",

    //hackban.js
    HACKBANNED_USERS:                               users => `:ok_hand: ${getBannedPlural(users)} ${users} ${getBannedUserPlural(users)}.`,

    //help.js
    HELP_PUBLIC:                                    "Príkazy trogárov",
    HELP_OWNER:                                     "Príkazy majteľka",
    HELP_MOD:                                       "Príkazy podradených",
    HELP_ADMIN:                                     "Príkazy nadradených",
    HELP_FOR_COMMAND:                               command => `Nápovedy neexistujú, ale tu je jenna ${command}`,
    HELP_ARGUMENTS:                                 "Argumenty",
    HELP_ALIASES:                                   "Aliasy",
    HELP_DESCRIPTION:                               "Popis",
    HELP_HOME:                                      async (HelpMenu, permissions, msg) => `Tu nápoveda tt.bot-a! Naondi reakciu a dostaneš ďalšé nápovedy.\n:stop_button: Vypať\n:house: Dom (toto)\n${(await HelpMenu.MESSAGES(msg)).filter((_, idx) => permissions[idx]).join("\n")}`,
    HELP_NO_DESCRIPTION:                            "Žádny popis",
    HELP_REMINDER:                                  `Naondi ${config.prefix}help <príkaz> a dostaneš informácie o jennollivých príkazoch (zatál v angličtine).`,

    //info.js
    INFO_STATS:                                     "Štatistiky",
    INFO_STATS_TEXT:                                () => `Serverov: ${bot.guilds.size}\nPoužívateľov: ${bot.users.size}\nKanálov: ${Object.keys(bot.channelGuildMap).length}`,
    INFO_AUTHORS:                                   "Manufaktúra",
    INFO_OWNERS:                                    ownerStrings => `${ownerStrings.join("\n")}\n[Server podpory](https://discord.gg/pGN5dMq)\n[Repozitár na GitHube](https://github.com/tt-bot-dev/tt.bot)`,
    INFO_VERSIONS:                                  "Verzia:",
    INFO_UPTIME:                                    "Čas funglu:",

    //invite.js
    BOT_INVITE:                                     `Na tu máš: <https://discordapp.com/oauth2/authorize?client_id=195506253806436353&scope=bot&permissions=-1>\n\nKeď steš pomócť, nebuď lemravý a dójdi a server prvej pomoci.`,

    //inviteinspector.js
    CANNOT_GET_INVITE:                              "Nevím najísť pozvánku.",
    INVITE_ERR_FOOTER:                              "Si si istý že som neni zgegnutý odtál? Aj tak to nejde na skupinových pozvánkach.",
    INV_CHANNEL_TYPE:                               "Nitránska haraburda",
    INV_CHANNEL_TYPE_VAL:                           (type, channelName) => `${type === 0 ? "Textová" : "Hlasová"} Nitránska haraburda s názvom ${bot.escapeMarkdown(channelName)}`,
    INV_GUILD_ID:                                   "voláke ID serveru",
    INV_MEMBERS_VAL:                                (members, presences) =>  `${members} ${getMembersPlural(members)}, ${presences} online.`,
    INV_JOIN:                                       "Odkaz na server",
    INV_JOIN_LINK:                                  code =>  `Asi máš toto [rozdžaviť](https://discord.gg/${code})`,
    INV_INVITER:                                    user => `Pozvánku vygenil trogár ${user}`,

    //kick.js
    KICK_DONE:                                      user => `:ok_hand: Trogár ${bot.getTag(user)} je vykotený.`,

    //logging.js
    LOGGING_ALREADY_SETUP:                          "Funkcia Americké záznamové zaríďení tu je. Steš ju vypnút?\nNapíš y alebo yes na vypnutie. Inak napíš n alebo no. Na odpoveď máš 10 sekúnd, tak sa nešuchci!",
    LOGGING_DISABLED:                               "Kónečne! Funkcia Americké záznamové zaríďení je vypatá!",
    LOGGING_SETUP:                                  "Ná tu máš! Keď voláka s udalostí bude, naondím ju sem.",

    //needsmorejpeg.js
    // No terms for this one.
    //škoda noo, ja bych to bol preložil aj toto

    // phone.js
    // No terms for this command, the speakerphone feature won't be translated for now
    //a toto je škoda tiež noo, rád bych preložil aj toto..

    //ping.js
    PING_LATENCY:                                   ms => `Odpad s časom ${ms}ms.`,
    PING_DISCORD_LATENCY:                           ms => `Ešte vačší odpad s časom: ${ms}ms`,
    PONG:                                           ":ping_pong: Bong",

    //profile.js
    PROFILE_NONEXISTENT:                            "Ešte nemáš profil.",
    PROFILE_DELETED:                                "Tvoj profil je vyondený.",
    PROFILE_CREATED:                                "OK. Tvoj profil je vyrobený.",
    INVALID_COLOR:                                  "Táto farba neni dobrá! Tento príkaz ste farbu ve volákom hex formáte (#1234AB)",
    BOT_PROFILE:                                    "Hentí boti vraj nemajú profily.",
    PROFILE_SPECIFIC_NONEXISTENT:                   user => `Trogár ${user} nemá též profil.`,
    NO_PROFILE_FIELDS:                              "Žádne profilové políčka",
    FIELD_CREATED:                                  field => `Vyrobené políčko se názvami \`${field}\`.`,
    FIELD_DELETED:                                  field => `Políčko \`${field}\` je vyondené.`,
    FIELD_NONEXISTENT:                              "Toto políčko neni!",
    INVALID_TIMEZONE:                               `Toto časové pásmo je skoro správne, len neni dobre. Zoznam časových pásem nájdeš vraj na [tomto míste](https://cdn.rawgit.com/TTtie/TTtie-Bot/master/tz.txt)`,
    INVALID_LOCALE:                                 locale => `Nahovno jazyk: \`${locale}\``,
    LOCALE_SET:                                     locale => `Nastaveu si si jazyk ${locale}.`,
    USER_PROFILE:                                   user => `Profil trogára ${user}`,

    //serverinfo.js
    GUILD_VERIFICATION_NONE:                        "Žádna",
    GUILD_VERIFICATION_LOW:                         "Malá (Ste overený email)",
    GUILD_VERIFICATION_MEDIUM:                      "Stredná (Ste overený email a musí odejsť 5 minút od registruváňá na tom Discorde)",

        //These miss their tableflips because the tableflips are not translatable.
    // veru je to smutné že to neni prekladateľné, ale čo už.
    GUILD_VERIFICATION_TABLEFLIP:                   "(Ste overený email, musí odejsť 5 minút od registruváňá na tom Discorde a musí oedjsť 10 minút od prijídeňá na tento server)",
    GUILD_VERIFICATION_ULTRATABLEFLIP:              "(Ste overené číslo napr. aj na pevnú linku ale hlavne na mobil)",
    GUILD_VERIFICATION_LEVEL:                       "Voláka úroveň overeňá serveru",
    REQUIRES_ADMIN_MFA:                             "Ste 2FA pre voláke administrativné veci",
    MEMBER_COUNT:                                   members => `${members} ${getMembersPlural(members)}`,
    ROLE_COUNT:                                     roles => `${roles} rol${(roles <5 && roles >0) ? "e": "í"}`,
    EXPLICIT_FILTERING:                             "Filtruváňí nedobrého obsahu",
    EXPLICIT_FILTERING_OFF:                         "Vypaté",
    EXPLICIT_FILTERING_NOROLE:                      "Zapaté pre trogárov bez rolí",
    EXPLICIT_FILTERING_ON:                          "Zapaté",
    DEFAULT_NOTIFICATIONS:                          "Póvonné nastaveňá oznámeňí",
    ONLY_MENTIONS:                                  "Len @mentions",
    ALL_MESSAGES:                                   "Šecky správy",
    VOICE_REGION:                                   "Lokalita serveru",
    AFK_TIMEOUT:                                    "Voláky časový limit AFK",
    AFK_MINUTES:                                    timeout => `${timeout / 60} minut${timeout / 60 == 1 ? "a" : ""}`,
    AFK_CHANNEL:                                    "Méno AFK kanálu",

    //softban.js
    SOFTBAN_DONE:                                   user => `:ok_hand: Trogár ${bot.getTag(user)} je trochu zaondený.`,

    //strike.js
    BOTS_NOT_STRIKABLE:                             "Nemal by si varovať oných, botov. Je možné, že ublížíš ich rozumu :(",
    YOU_GOT_STRIKED:                                "Vypadá, že máš nové varovaní.",
    STRIKE_DETAILS:                                 (issuer, reason) => `Varovaní je poslaté od ${issuer} z vraj že dajakého dóvodu: \`${reason || "No, tak teda bez dóvodu"}\`.`,
    PAY_ATTENTION:                                  "Nerob garázdu!",

    //strikes.js
    TOO_MUCH_STRIKES:                               "Trogár má voláko veľa varováňí na to, aby sa sem mestili. Namísto toho, tu máš voláky textový súbor:",
    STRIKE_OVERVIEW:                                user => `Tu sú varováňá trogára ${user}`,

    //tags.js
    TAG_CREATED:                                    tag => `Vyrobený tag s názvom \`${tag}\`.`,
    TAG_EXISTS:                                     "Tag existuje!",
    TAG_DOESNTEXIST:                                "Tag neexistuje.",
    TAG_NOTOWNER:                                   "Toto neni tvoj tag.",
    TAG_DELETED:                                    tag => `Vyondený tag s názvom \`${tag}\`.`,
    TAG_UPDATED:                                    tag => `Preondený tag s názvom \`${tag}\`.`,
    TAG_DISPLAY:                                    tag => `Tag ${tag}`,

    //talk.js
    QUERY_TOO_LONG:                                 "Máš dlhý gágor.",
    CANT_TELL:                                      "Nevím odpoveď :thinking:",

    //timefor.js
    NO_TZ:                                          "Toto je hovado, nemá vóbec nastavené časové pásmo.",
    TIME_FOR:                                       (time, user) => `${time} hodín trogára ${user}.`,

    //uinfo.js
    PLAYING:                                        "Ondí",
    STREAMING:                                      "Ondí",
    LISTENING_TO:                                   "Ondí",
    ONLINE:                                         "Je tu",
    IDLE:                                           "Oddychuje",
    DND:                                            "Dajte mu pokoj",
    OFFLINE:                                        "Neni tu",
    USER_INFO:                                      (nickstr, limited = false) => `${limited? "Obmedzené i" : "I"}nformácie pre trogára ${nickstr}`,
    PLAYING_NONE:                                   "Ništ",
    SPACE_UNIVERSE:                                 "si vesmír.\nVeľa šťastá, našla si voláky easter egg :eyes:",
    CURRENT_VOICE:                                  "Živý hlasový kanál",
    NO_CURRENT_VOICE:                               "Žádny",
    JOINED_ON:                                      "Je na serveri:",

    //#endregion commands

    //#region events
    // It is possible that the server owner has a profile.
    HI_I_AM_BOT:                                    `:wave: Serus!`,
    SOME_THINGS_SAID:                               () => `Ja som ${bot.user.username} a som brat tt.bot-a, multifunkčného a zábavného bota pre Discord. Mám potrebu ti trndzuvať s rukou.`,
    GETTING_STARTED:                                ":floppy_disk: Začátek",
    GETTING_STARTED_DESCRIPTION:                    `Netreba nastaviť ani hovno na tt.bot-a, aby si ho používal se základýma funkcámi! Ale k používáňú príkazov pre podradených, ty (alebo volado s vlastnosťou Nadradený/Administrátor) musí naondiť príkaz \`${config.prefix}config\`, aby vyrobil konfiguráciu serveru. A to je konec! Daj svojim podradeným rolu "tt.bot mod" a móžu začat moderovať! Alebo nastav nastavení modRole na méno tvojej role pre podradených.`,
    EVERYTHING_ELSE:                                ":books: Šecko iné",
    EVERYTHING_ELSE_DESCRIPTION:                    "Keď steš pomócť(alebo si povyprávať), nebuď lemravý a dójdi a server prvej pomoci; pozvánka je v príkaze info.",
    THANKS_FOR_CHOOSING:                            "Gratulujem, že si si vybral(a) tt.bot-a!",
    WISHING_GOOD_LUCK:                              "*Prajem ti veľa šťasťá s tvojim serverom-*",
    //#endregion events

    //#region queries
    ITEM_NOT_FOUND:                                 (query, notfound) => `Nemóžem najísť ${query}. Si si istý, že je? ${notfound}`,
    MULTIPLE_ITEMS_FOUND:                           "Viac oných nájdených!",
    MULTIPLE_ITEMS_DESCRIPTION:                     (items, list) => `Našlo sa ${items} ${getItemsPlural(items)}, ukážem len 5 lebo viac som sa nenaučil rátať.
${list}
Vyber si jennu reagovaním číslom vella oného, keré steš vybrať.
Naopak, vyber ❌ na zrušení.
Otázka končí za 5 minút, takže nebuď lemravý.`,

    //#endregion queries

    // There is going to be webserver translations soon, but currently cannot figure it out.
    // My ti pomôžeme, snáď...
    

    // Reaction menu
    REACTION_MENU_EXIT_MANUAL:                      "Vyondil si sa z menu.",
    REACTION_MENU_EXIT_MESSAGE_DELETE:              "Menu vypaté, lebo správa je vyondená.",
    REACTION_MENU_EXIT_CHANNEL_DELETE:              "Menu vypaté, lebo haraburda je vyondená.",
    REACTION_MENU_NO_AUTOREMOVE:                    "Problém: Nedá sa odstránit tvoju trogársku reakciu protože mi volado nedal oprávnení \"Spravovať správy\".\nKeď mi ho volado dá, budem štastný a odstránim aj tvoju trogársku reakciu pre tvoje pohodlí.",

    // Modlog

    MODS_UNSTRIKABLE:                               "Nemôžeš zaondiť podradeného!",

    
    // General
    NONE:                                           "Žádne",
    MEMBERS:                                        "Hovadá",
    OWNER:                                          "Majiteľko",
    ROLES:                                          "Role",
    STATUS:                                         "Stav",
    REASON:                                         "Dóvod",
    OP_CANCELLED:                                   "Zrušené.",
    COMMAND_ERROR:                                  "Nepochopeu som ťa. Prosím ťa nebuď lemra a skontroluj tvoj oný a znovu skús príkaz.",
    ARGS_MISSING:                                   `Chýba ti volačo v príkaze.`,
    ROLE_HIERARCHY_ERROR:                           `Toto ti na druhého nedovolím.`,
    ERROR:                                          err => `Bodaj ťa! Skúseu som to ale volačo sa posralo... Daj to vedieť vývojárom.\n\`\`\`js\nError:\n${err}\n\`\`\``,
    OOPS:                                           `Bodaj ťa.. Volačo sa dosralo.`,
    MISSING_PERMISSIONS:                            `Toto nevím spraviť na serveri.`,
    CREATED_ON:                                     "Vyrobený",
    YES:                                            "Áno",
    NO:                                             "Níe",
    TOOLONG:                                        "Mám to dlhé a nedá sa to ukázať :(",
    INVALID_ARG:                                    arg => `Voláky neplatný argument: ${arg}, já vám tomu nerozumím ale opravte si to sami!`,

    // Locale info
    NATIVE_LOCALE_NAME:                             "Slovenčina (Nitránske nárečí)",
    ENGLISH_LOCALE_NAME:                            "Slovak (Nitránske nárečí)",
    fallbackLanguage:                               "sk-SK"
});
