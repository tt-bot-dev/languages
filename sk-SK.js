"use strict";
// Slovenčina, jazyk kerý šetci dobre poznáme, však?
// Ja si tu naondím pár malinkých oných prekladov a pustím trochu plynu(nechcem hrešiť. + neni som Meliško)
// Toto je jednoduchý preklad od našich bratóv z Čéch aby sme sa nedopustili nejakého hríchu a nespravili výpadek letiska.
// Keď sa niečo posere, prosím kompetentnú osobu rôzneho typu poslať na najlepšie vybraný server typu Aefer Community - sekcia napr. aj #main jednoduchú správu:
// "Šéfe, mně se asi něco nepovedlo."
// toť toto je menší úvod na tento preklad do Slovenčiny. 
const config = require("../config"); // External reference from https://github.com/tt-bot-dev/tt.bot root

function getMessagesPlural(messages) {
    if (messages === 1) return "správa";
    if (messages >= 2 && messages <= 4) return "správy";
    return "správ";
}

function getDeletedPlural(messages) {
    if (messages === 1) return "Zmazaná";
    if (messages >= 2 && messages <= 4) return "Zmazané";
    return "Zmazaných";
}

function getBannedPlural(users) {
    if (users === 1) return "Zabanovaný";
    if (users >= 2 && users <= 4) return "Zabanovaní";
    return "Zabanovaných";
}

function getBannedUserPlural(users) {
    if (users === 1) return "použivateľ";
    if (users >=2 && users <= 4) return "použivatelia";
    return "použivateľov";
}

function getMembersPlural(members) {
    if (members === 1) return "člen";
    if (members >= 2 && members <= 4) return "členovia";
    return "členov";
}

function getItemsPlural(items) {
    if (items === 1) return "vec";
    if (items >= 2 && items <= 4) return "veci";
    return "vecí";
}


module.exports = bot => ({
    //#region commands
    //agree.js
    AGREE_FAULT:                                    owner => `Prepáč, ale nemôžem ti dať rolu. Prosím, povedz o tom vlastníkovi serveru (${bot.getTag(owner)})`,

    //agreesetup.js
    AGREE_SETUP_ALREADY:                            "Funkcia súhlasu bola už nastavená na tomto serveri. Chceš ju vypnoút?\nNapíš y alebo yes na vypnutie. Inak napíš n alebo no. Na odpoveď máš 10 sekúnd.",
    AGREE_DISABLED:                                 "Hotovo! Funkcia súhlasu je vypnutá.",
    AGREE_ROLE_QUERY:                               "Ideme na to! Prosím, napíš sem meno role, ktorú chceš použiť pre funkciu súhlasu.",
    AGREE_SETUP:                                    prefix => `A je to! Keď sem niekto napíše \`${prefix || config.prefix}agree\`, dám im túto rolu.`,

    //ban.js
    BAN_DONE:                                       user => `:ok_hand: Používateľ ${bot.getTag(user)} bol zabanovaný.`,

    //clear.js
    CLEAR_DONE:                                     messages => `:ok_hand: ${getDeletedPlural(messages)} ${messages} ${getMessagesPlural(messages)}.`,
    CLEAR_CONFIRM:                                  "Si si istý/á, že chceš zmazať správy podľa vypísaných argumentov? Keď ano, napíš y alebo yes. Inak napíš n alebo no. Na odpoveď máš 10 sekúnd.",

    // config.js
    SETTING_UPDATED:                                (setting, value) => `Nastavenie ${setting} nastavené na ${value}`,
    SETTING_UNKNOWN:                                setting => `Neznáme nastavenie ${setting}`,
    WELCOME_TO_CONFIG:                              () => `Vitaj v konfigurácii tt.bot-a! Použi reakcie na prístup k jednotlivým kategóriam nastavení.
Menu môžeš opustiť kedy chceš reagovaním :stop_button:
Chceš radšej použiť webové rozhranie? Choď sem: ${config.webserverDisplay("/")}`,
    CONFIG_PREFIX:                                  ":pen_fountain: Predpona (prefix)",
    CONFIG_PREFIX_DESCRIPTION:                      () => `Tu môžeš nastaviť predponu (prefix) ${bot.user.username}-a. Používanie \`${config.prefix}\` ako prefix bude stále fungovať.`,
    CONFIG_MODROLE:                                 ":hammer: Role moderátora",
    CONFIG_MODROLE_DESCRIPTION:                     "Môžeš si nastaviť vlastnú rolu moderátora, ktorú bude bot používať. Ber na vedomie, že toto je len referencia na meno role (nerozlišujú sa VEĽKÉ a malé písmena).",
    CONFIG_FAREWELL:                                ":wave: Rozlúčenie",
    CONFIG_FAREWELL_DESCRIPTION:                    "Táto funkcia ti umožní vidieť, kdo odišiel zo serveru. Týmto nastavením upravíš správu, ktorá bude posielaná. Toto používa [ttMsg](https://github.com/tt-bot-dev/tt.bot/blob/master/docs/ttMsg.md) (anglicky).",
    CONFIG_FAREWELL_CHANNEL:                        ":pen_ballpoint: Kanál pre rozlúčenie",    
    CONFIG_FAREWELL_CHANNEL_DESCRIPTION:            "Týmto môžeš nastaviť kde se majú posielať správy pre vyššie popísanú funkciu.",
    CONFIG_AGREE_CHANNEL:                           ":white_check_mark: Kanál pro funkciu súhlasu",
    CONFIG_AGREE_CHANNEL_DESCRIPTION:               "Táto funkcia umožňuje luďom si pridať rolu člena použitím príkazu `agree`. Toto si nájde použitie, napríklad. keď chceš zaručiť, že všetci videli pravidlá serveru.",
    CONFIG_MODLOG_CHANNEL:                          ":tools: Kanál pre záznam moderátorských akcii",
    CONFIG_MODLOG_CHANNEL_DESCRIPTION:              "Umožňuje zaznamenávanie moderátorských akcii (varovánie, vyhodenie, (soft)ban) vykonaných cez bota do určeného kanálu.",
    CONFIG_LOG_CHANNEL:                             ":notepad_spiral: Kanál pre záznamy",
    CONFIG_LOG_CHANNEL_DESCRIPTION:                 "Toto je mocná funkcia tt.bot-a, ktorá umožňuje zaznamenávanie niektorých akcí na serveri. [Zisti o tom viac (anglicky)](https://github.com/tt-bot-dev/tt.bot/blob/master/docs/Logging-events.md)",
    CONFIG_LOG_EVENTS:                              ":pencil: Akcie pre záznamy",
    CONFIG_LOG_EVENTS_DESCRIPTION:                  "Tu môžeš určiť, ktoré akcie budú zaznamenávané pre vyššie uvedenoú funkciu.",
    CONFIG_GREETING:                                ":handshake: Privítanie",
    CONFIG_GREETING_DESCRIPTION:                    "Táto funkcia ti umožňuje poslať správu, ktorú si môžeš prispôsobiť aby si privítal(a) nových členov na serveri. Týmto nastavením upravíš správu, ktorá bude posielaná. Toto používa [ttMsg](https://github.com/tt-bot-dev/tt.bot/blob/master/docs/ttMsg.md) (anglicky).",
    CONFIG_GREETING_CHANNEL:                        ":pencil2: Kanál pre privítanie",
    CONFIG_GREETING_CHANNEL_DESCRIPTION:            "Týmto môžeš nastaviť kde se majú posielať správy pre vyššie popísanú funkciu.",
    CONFIG_MEMBER_ROLE:                             ":busts_in_silhouette: Role člena",
    CONFIG_MEMBER_ROLE_DESCRIPTION:                 "Táto rola bude používáná pre členov serveru, ktorí súhlasili s pravidlami.",
    SETTING_CURRENT_VAL:                            val => `Aktuálna hodnota nastavení je ${val}`,
    SETTING_SET:                                    ":pencil: Nastaviť",
    SETTING_SET_DESCRIPTION:                        "Nastaví hodnotu tohoto nastavenia na novú hodnotu.",
    SETTING_RESET:                                  ":x: Resetovať",
    SETTING_DISABLE:                                ":x: Vypnúť",
    SETTING_RESET_DESCRIPTION:                      def => `Toto zresetuje hodnotu na pôvodnú hodnotu (${def})`,
    SETTING_DISABLE_DESCRIPTION:                    "Toto odstrání túto hodnotu z konfigurácie.",
    SETTING_HOME:                                   ":house: Domov",
    SETTING_HOME_DESCRIPTION:                       "Vráti sa späť do hlavného menu.",
    QUESTION_STRING_VAL:                            "Napíš sem novú hodnotu. Na odpoveď máš 60 sekúnd.",
    QUESTION_CHANNEL_VAL:                           "Napiš sem kanál, ktorý chceš použiť. Na odpoveď máš 30 sekúnd.",
    QUESTION_ROLE_VAL:                              "Napiš sem roli, ktorý chceš použiť. Na odpoveď máš 30 sekúnd.",
    QUESTION_RESET:                                 c => `Si si istý/a, že chceš zresetovať ${c} na pôvodnú hodnotu?\nNapíš y alebo yes na resetovanie. Inak napiš n alebo no. Na odpoveď máš 10 sekúnd.`,
    QUESTION_DISABLE:                               c => `Si si istý/a, že chceš vypnúť ${c}?\nNapíš y alebo yes na resetovanie. Inak napiš n alebo no. Na odpoveď máš 10 sekúnd.`,
    

    //delpunish.js
    CANNOT_UNSTRIKE:                                err => `Nemôžem odstrániť varovanie z tohoto dôvodu: ${err}`,

    //emoji.js
    IMAGE_GENERATING:                               "Generujeme obrázok. Toto môže chvíľu trvať.",
    IMAGE_NONE:                                     "Nemôžem získať obrázok. Skontroluj tvoj vstup a skús to znovu.",
    IMAGE_AUTO_GENERATED:                           "Tento obrázok je automaticky generovaný.",
    IMAGE_CAVEATS:                                  `Nikto ani nič neni dokonalé, toto sú niektoré problémy, o ktorých vieme a s kterými sa môžeš stretnúť.
- Tvoje emoji môžu byť rychlejšie alebo pomalšie v závislosti na frekvencií snímkov (používame 20ms odstup/50fps)
- Tvoje emoji môžu byť orezáné.`,
    IMAGE_GENERATION_TIME:                          (sec, nsec) => `Generovanie tohoto obrázku trvalo ${sec} sekund a ${Math.floor(nsec / 1e6)} ms`,
    
    //getavatar.js
    AVATAR_NOT_LOADING:                             avatar => `[Obrázok sa nenačítava?](${avatar})`,

    //hackban.js
    HACKBANNED_USERS:                               users => `:ok_hand: ${getBannedPlural(users)} ${users} ${getBannedUserPlural(users)}.`,

    //help.js
    HELP_PUBLIC:                                    "Verejné príkazy",
    HELP_OWNER:                                     "Príkazy pre vlastníka",
    HELP_MOD:                                       "Príkazy pre moderátorov",
    HELP_ADMIN:                                     "Príkazy pre administrátorov",
    HELP_FOR_COMMAND:                               command => `Nápoveda pre príkaz ${command}`,
    HELP_ARGUMENTS:                                 "Argumenty",
    HELP_ALIASES:                                   "Aliasy",
    HELP_DESCRIPTION:                               "Popis",
    HELP_HOME:                                      async (HelpMenu, permissions, msg) => `Vítaj v nápovede tt.bot-a! Použi reakcie pre prístup k nápovede pre jednotlivé kategórie.\n:stop_button: Ukončiť\n:house: Domáca stránka (táto stránka)\n${(await HelpMenu.MESSAGES(msg)).filter((_, idx) => permissions[idx]).join("\n")}`,
    HELP_NO_DESCRIPTION:                            "Žiadny popis",
    HELP_REMINDER:                                  `Použi ${config.prefix}help <príkaz> pre informácie o jednotlivých príkazoch (momentálne v angličtine).`,

    //info.js
    INFO_STATS:                                     "Štatistiky",
    INFO_STATS_TEXT:                                () => `Serverov: ${bot.guilds.size}\nPoužívateľov: ${bot.users.size}\nKanálov: ${Object.keys(bot.channelGuildMap).length}`,
    INFO_AUTHORS:                                   "Autori a pomoc",
    INFO_OWNERS:                                    ownerStrings => `${ownerStrings.join("\n")}\n[Server podpory](https://discord.gg/pGN5dMq)\n[Repozitár na GitHube](https://github.com/tt-bot-dev/tt.bot)`,
    INFO_VERSIONS:                                  "Verzia:",
    INFO_UPTIME:                                    "Doba prevádzky:",

    //invite.js
    BOT_INVITE:                                     "Tu máš: <https://discordapp.com/oauth2/authorize?client_id=195506253806436353&scope=bot>\n\nKeď potrebuješ pomôcť s používaním bota, príd na náš server podpory, pozvánka je príkaze info.",

    //inviteinspector.js
    CANNOT_GET_INVITE:                              "Nemôžem získať informácie o pozvánke.",
    INVITE_ERR_FOOTER:                              "Si si istý, že pozvánka je skutočná, a že som neni odtadiaľ zabanovaný? Toto nefunguje s pozvánkami do skupinových správ.",
    INV_CHANNEL_TYPE:                               "Typ kanálu",
    INV_CHANNEL_TYPE_VAL:                           (type, channelName) => `${type === 0 ? "Textový" : "Hlasový"} kanál s názvom ${bot.escapeMarkdown(channelName)}`,
    INV_GUILD_ID:                                   "ID serveru",
    INV_MEMBERS_VAL:                                (members, presences) =>  `${members} ${getMembersPlural(members)}, ${presences} online.`,
    INV_JOIN:                                       "Odkaz na server",
    INV_JOIN_LINK:                                  code =>  `Klikni na [toto](https://discord.gg/${code})`,
    INV_INVITER:                                    user => `Pozvánka vytvorená používateľom ${user}`,

    //kick.js
    KICK_DONE:                                      user => `:ok_hand: Používateľ ${bot.getTag(user)} bol vyhodený.`,

    //needsmorejpeg.js
    // No terms for this one.
    //škoda noo, ja bych to bol preložil aj toto

    // phone.js
    // No terms for this command, the speakerphone feature won't be translated for now
    //a toto je škoda tiež noo, rád bych preložil aj toto..

    //ping.js
    PING_LATENCY:                                   ms => `Ping trval ${ms}ms.`,
    PING_DISCORD_LATENCY:                           ms => `Latencie brány Discordu: ${ms}ms`,
    PONG:                                           ":ping_pong: Pong",

    //profile.js
    PROFILE_NONEXISTENT:                            "Ešte nemáš profil.",
    PROFILE_DELETED:                                "Tvoj profil je zmazaný.",
    PROFILE_CREATED:                                "OK. Tvoj profil je vytvorený.",
    INVALID_COLOR:                                  "Táto farba neni správna! Tento príkaz bere farbu v hex formáte (#1234AB)",
    BOT_PROFILE:                                    "Boti nemajú profily.",
    PROFILE_SPECIFIC_NONEXISTENT:                   user => `Používateľ ${user} nemá profil.`,
    NO_PROFILE_FIELDS:                              "Žiadne profilové políčka",
    FIELD_CREATED:                                  field => `Vytvorené políčko s názvom \`${field}\`.`,
    FIELD_DELETED:                                  field => `Políčko \`${field}\` bolo zmazané.`,
    FIELD_NONEXISTENT:                              "Toto políčko neexistuje!",
    INVALID_TIMEZONE:                               "Toto časové pásmo neni správne. Zoznam možných časových pásiem nájdeš tu: <https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List>",
    INVALID_LOCALE:                                 locale => `Neplatný jazyk: \`${locale}\``,
    LOCALE_SET:                                     locale => `Tvoj jazyk bol nastavený na ${locale}.`,
    USER_PROFILE:                                   user => `Profil používateľa ${user}`,
    PROFILE_LOCALE_LIST:                            (currentLocale, status) => `Momentálne máš nastavený tento jazyk: \`${currentLocale}\`!\nAktuálny stav jazykov:\n${status}`,

    //serverinfo.js
    GUILD_VERIFICATION_NONE:                        "Žiadna",
    GUILD_VERIFICATION_LOW:                         "Nízka (Vyžaduje overený email)",
    GUILD_VERIFICATION_MEDIUM:                      "Stredná (Vyžaduje overený email a musí uplynúť 5 minút od registrácie na Discorde)",

    // These miss their tableflips because the tableflips are not translatable.
    // veru je to smutné že to neni prekladateľné, ale čo už.
    GUILD_VERIFICATION_TABLEFLIP:                   "(Vyžaduje overený email, musí uplynúť 5 minút od registrácie na Discorde a musí uplynúť 10 minút od príchodu na server)",
    GUILD_VERIFICATION_ULTRATABLEFLIP:              "(Vyžaduje overené telefónne číslo)",
    GUILD_VERIFICATION_LEVEL:                       "Úroveň overenia serveru",
    REQUIRES_ADMIN_MFA:                             "Vyžaduje 2FA pre administratívne úkony",
    MEMBER_COUNT:                                   members => `${members} ${getMembersPlural(members)}`,
    ROLE_COUNT:                                     roles => `${roles} rol${roles <5 && roles >0 ? "e": "í"}`,
    EXPLICIT_FILTERING:                             "Filtrovanie explicitného obsahu",
    EXPLICIT_FILTERING_OFF:                         "Vypnuté",
    EXPLICIT_FILTERING_NOROLE:                      "Zapnuté pre používateľov bez rolí",
    EXPLICIT_FILTERING_ON:                          "Zapnuté",
    DEFAULT_NOTIFICATIONS:                          "Pôvodné nastavenia oznámení",
    ONLY_MENTIONS:                                  "Len @mentions",
    ALL_MESSAGES:                                   "Všetky správy",
    VOICE_REGION:                                   "Lokalita serveru",
    AFK_TIMEOUT:                                    "Časový limit AFK",
    AFK_MINUTES:                                    timeout => `${timeout / 60} minut${timeout / 60 === 1 ? "a" : ""}`,
    AFK_CHANNEL:                                    "Názov AFK kanálu",

    //softban.js
    SOFTBAN_DONE:                                   user => `:ok_hand: Používateľ ${bot.getTag(user)} bol softbanovaný.`,

    //strike.js
    BOTS_NOT_STRIKABLE:                             "Nemal by si varovať botov. Je možné, že ublížíš ich citom :(",
    YOU_GOT_STRIKED:                                "Vyzerá, že si dostal(a) varovanie.",
    STRIKE_DETAILS:                                 (issuer, reason) => `Varovanie bolo udelené ${issuer} z dôvodu \`${reason || "Bez dôvodu"}\`.`,
    PAY_ATTENTION:                                  "Dávaj si pozor na to, čo robíš!",

    //strikes.js
    TOO_MUCH_STRIKES:                               "Používateľ má príliš veľa varovaní na to, aby som ich mohol ukázať v embede. Namiesto toho, tu máš textový súbor:",
    STRIKE_OVERVIEW:                                user => `Tu sú varovania používateľa ${user}`,

    //tags.js
    TAG_CREATED:                                    tag => `Vytvorený tag s názvom \`${tag}\`.`,
    TAG_EXISTS:                                     "Tento tag už existuje!",
    TAG_DOESNTEXIST:                                "Tento tag neexistuje.",
    TAG_NOTOWNER:                                   "Nevlastníš tento tag.",
    TAG_DELETED:                                    tag => `Zmazaný tag s názvom \`${tag}\`.`,
    TAG_UPDATED:                                    tag => `Upravený tag s názvom \`${tag}\`.`,
    TAG_DISPLAY:                                    tag => `Tag ${tag}`,

    //talk.js
    QUERY_TOO_LONG:                                 "Tvoja otázka je príliš dlhá.",
    CANT_TELL:                                      "Neviem ako na toto odpovedať :thinking:",

    //timefor.js
    NO_TZ:                                          "Tento používateľ si zatiaľ nenastavil časové pásmo.",
    TIME_FOR:                                       (time, user) => `Je ${time} pre používateľa ${user}.`,

    //uinfo.js
    USER_INFO:                                      (nickstr, limited = false) => `${limited? "Obmedzené i" : "I"}nformácie pre používateľa ${nickstr}`,
    CURRENT_VOICE:                                  "Aktuálny hlasový kanál",
    NO_CURRENT_VOICE:                               "Žiadny",
    JOINED_ON:                                      "Pripojený(á) na serveri:",

    //#endregion commands

    //#region events
    // It is possible that the server owner has a profile.
    HI_I_AM_BOT:                                    ":wave: Ahoj!",
    SOME_THINGS_SAID:                               () => `Moje meno je ${bot.user.username} a som instancia tt.bot-a, multifunkčného a zábavného bota pre Discord. Cítil som potrebu popísať ti, kto som.`,
    GETTING_STARTED:                                ":floppy_disk: Začíname",
    GETTING_STARTED_DESCRIPTION:                    `Nepotrebuješ nastavovať tt.bot-a, aby si si užil(a) jeho základné funkcie! Ale k používaniu príkazov pre moderátorov, ty (alebo ktokoľvek s oprávnením Spravovať server) musí použiť príkaz \`${config.prefix}config\`, aby vytvoril konfiguráciu serveru. A to je v podstate všetko! Daj svojim moderátorom rolu "tt.bot mod" a môžu začať moderovať! Alebo nastav nastavenie modRole na meno tvojej role pre moderátorov.`,
    EVERYTHING_ELSE:                                ":books: Všetko ostatné",
    EVERYTHING_ELSE_DESCRIPTION:                    "Keď potrebuješ pomôct (alebo si s nami len porozprávať), príď na náš server podpory; pozvánku nájdeš v príkaze info.",
    THANKS_FOR_CHOOSING:                            "Ďakujeme, že si si vybral(a) tt.bot-a!",
    WISHING_GOOD_LUCK:                              "*Prajem ti veľa šťastia s tvojim serverom-*",
    //#endregion events

    //#region queries
    ITEM_NOT_FOUND:                                 (query, notfound) => `Nemôžem nájsť ${query}. Si si istý, že existuje? ${notfound}`,
    MULTIPLE_ITEMS_FOUND:                           "Viac vecí nájdených!",
    MULTIPLE_ITEMS_DESCRIPTION:                     (items, list) => `Našiel som ${items} ${getItemsPlural(items)}, ukazujem najviac 5 z nich.
${list}
Vyber jednu reagovaním číslom vedľa veci, ktorú chceš vybrať.
Inak, vyber ❌ pre zrušenie.
Otázka expiruje za 5 minút.`,

    //#endregion queries

    // There is going to be webserver translations soon, but currently cannot figure it out.
    // My ti pomôžeme, snáď...
    

    // Reaction menu
    REACTION_MENU_EXIT_MANUAL:                      "Opustil(a) si menu.",
    REACTION_MENU_EXIT_MESSAGE_DELETE:              "Menu ukončené, pretože správa bola zmazaná.",
    REACTION_MENU_EXIT_CHANNEL_DELETE:              "Menu ukončené, pretože kanál bol zmazaný.",
    REACTION_MENU_NO_AUTOREMOVE:                    "Chyba: Nemôžem odstrániť tvoju reakciu pretože mi chýba oprávnenie \"Spravovať správy\".\nKeď mi ho niekto dá, odstránim tvoju reakciu pre tvoje pohodlie.",

    // Modlog

    MODS_UNSTRIKABLE:                               "Nemôžeš varovať moderátora!",

    
    // General
    NONE:                                           "Žiadne",
    MEMBERS:                                        "Členovia",
    OWNER:                                          "Vlastník",
    ROLES:                                          "Role",
    STATUS:                                         "Stav",
    REASON:                                         "Dôvod",
    OP_CANCELLED:                                   "Operácia zrušená.",
    COMMAND_ERROR:                                  "Prepáč, ale nepochopil som tvoju informáciu. Prosím skontroluj tvoj vstup a znovu spusti príkaz.",
    ARGS_MISSING:                                   "Chýbajú ti vyžadované argumenty.",
    ROLE_HIERARCHY_ERROR:                           "Nemôžeš toto urobiť na tohoto používateľa.",
    ERROR:                                          err => `Jájha. Skúsil som splniť tvoj príkaz, ale mám problém. Prosím, daj toto mojim vývojárom.\n\`\`\`js\nError:\n${err}\n\`\`\``,
    OOPS:                                           "Jájha.. Mám menší problém.",
    MISSING_PERMISSIONS:                            "Nemám oprávnenia na vykonanie akcie na tomto serveri.",
    CREATED_ON:                                     "Vytvorený",
    YES:                                            "Ano",
    NO:                                             "Nie",
    TOOLONG:                                        "Príliš dlhé na ukázánie, prepáč :(",
    INVALID_ARG:                                    arg => `Neplatný argument: ${arg}`,

    // Locale info
    NATIVE_LOCALE_NAME:                             "Slovenčina",
    ENGLISH_LOCALE_NAME:                            "Slovak",
    fallbackLanguage:                               "cs-CZ"
});
