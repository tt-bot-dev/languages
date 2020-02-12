"use strict";
// Říká se, že čeština je krásný, ale těžký jazyk.
// Tohle je pokus doplnit pády češtiny.

const config = require("../config"); // External reference from https://github.com/tt-bot-dev/tt.bot root
function getMessagesPlural(messages) {
    if (messages === 1) return "zpráva";
    if (messages >= 2 && messages <= 4) return "zprávy";
    return "zpráv";
}

function getDeletedPlural(messages) {
    if (messages === 1) return "Smazána";
    if (messages >= 2 && messages <= 4) return "Smazány";
    return "Smazáno";
}

function getBannedPlural(users) {
    if (users === 1) return "Zabanován";
    if (users >= 2 && users <= 4) return "Zabanováni";
    return "Zabanováno";
}

function getBannedUserPlural(users) {
    if (users === 1) return "uživatel";
    if (users >=2 && users <= 4) return "uživatelé";
    return "uživatelů";
}

function getMembersPlural(members) {
    if (members === 1) return "člen";
    if (members >= 2 && members <= 4) return "členové";
    return "členů";
}

function getItemsPlural(items) {
    if (items === 1) return "věc";
    if (items >= 2 && items <= 4) return "věci";
    return "věcí";
}


module.exports = bot => ({
    //#region commands
    //agree.js
    AGREE_FAULT:                                    owner => `Promiň, ale nemůžu ti dát roli. Prosím, řekni o tom vlastníkovi serveru (${bot.getTag(owner)})`,

    //ban.js
    BAN_DONE:                                       user => `:ok_hand: Uživatel ${bot.getTag(user)} byl zabanován.`,

    //clear.js
    CLEAR_DONE:                                     messages => `:ok_hand: ${getDeletedPlural(messages)} ${messages} ${getMessagesPlural(messages)}.`,
    CLEAR_CONFIRM:                                  "Jsi si jistý/a, že chceš smazat zprávy podle vypsaných argumentů? Pokud ano, napiš y nebo yes. Jinak napiš n nebo no. Na odpověď máš 10 sekund.",

    // config.js
    WELCOME_TO_CONFIG:                              () => `Vítej v konfiguraci tt.bot-a! Použij reakce pro přístup k jednotlivým kategoriím nastavení.
Kdykoli můžeš opustit menu pomocí reakce :stop_button:
Chceš radši použít webové rozhraní? Jdi sem: ${config.webserverDisplay("/")}`,
    CONFIG_PREFIX:                                  ":pen_fountain: Předpona (prefix)",
    CONFIG_PREFIX_DESCRIPTION:                      () => `Tady můžeš nastavit předponu (prefix) ${bot.user.username}-a. Používání \`${config.prefix}\` jako prefix bude stále fungovat.`,
    CONFIG_MODROLE:                                 ":hammer: Role moderátora",
    CONFIG_MODROLE_DESCRIPTION:                     "Můžeš si nastavit vlastní roli moderátora, kterou bude bot používat. Ber na vědomí, že tohle je jenom reference na jméno role (nerozlišují se VELKÁ a malá písmena).",
    CONFIG_FAREWELL:                                ":wave: Rozloučení",
    CONFIG_FAREWELL_DESCRIPTION:                    "Tahle funkce ti umožní vidět, kdo odešel ze serveru. Tímto nastavením upravíš zprávu, která bude posílána. Tohle používá [ttMsg](https://github.com/tt-bot-dev/tt.bot/blob/master/docs/ttMsg.md) (anglicky).",
    CONFIG_FAREWELL_CHANNEL:                        ":pen_ballpoint: Kanál pro rozloučení",    
    CONFIG_FAREWELL_CHANNEL_DESCRIPTION:            "Tímhle můžeš nastavit kde se mají posílat zprávy pro výše popsanou funkci.",
    CONFIG_AGREE_CHANNEL:                           ":white_check_mark: Kanál pro funkci souhlasu",
    CONFIG_AGREE_CHANNEL_DESCRIPTION:               "Tahle funkce umožňuje lidem si přidat roli člena použitím příkazu `agree`. Tohle si najde použití, např. když chceš zaručit, že všichni viděli pravidla serveru.",
    CONFIG_MODLOG_CHANNEL:                          ":tools: Kanál pro záznam moderátorských akcí",
    CONFIG_MODLOG_CHANNEL_DESCRIPTION:              "Umožňuje zaznamenávání moderátorských akcí (varování, vyhození, (soft)ban) vykonaných přes bota do určeného kanálu.",
    CONFIG_LOG_CHANNEL:                             ":notepad_spiral: Kanál pro záznamy",
    CONFIG_LOG_CHANNEL_DESCRIPTION:                 "Tohle je mocná funkce tt.bot-a, která umožňuje zaznamenávání některých akcí na serveru. [Zjisti o tom víc (anglicky)](https://github.com/tt-bot-dev/tt.bot/blob/master/docs/Logging-events.md)",
    CONFIG_LOG_EVENTS:                              ":pencil: Akce pro záznamy",
    CONFIG_LOG_EVENTS_DESCRIPTION:                  "Tady můžeš určit, které akce budou zaznamenávány pro výše uvedenou funkci.",
    CONFIG_GREETING:                                ":handshake: Přivítání",
    CONFIG_GREETING_DESCRIPTION:                    "Tahle funkce ti umožňuje poslat zprávu, kterou si můžeš přizpůsobit abys přivítal(a) nové členy na serveru. Tímto nastavením upravíš zprávu, která bude posílána. Tohle používá [ttMsg](https://github.com/tt-bot-dev/tt.bot/blob/master/docs/ttMsg.md) (anglicky).",
    CONFIG_GREETING_CHANNEL:                        ":pencil2: Kanál pro přivítání",
    CONFIG_GREETING_CHANNEL_DESCRIPTION:            "Tímhle můžeš nastavit kde se mají posílat zprávy pro výše popsanou funkci.",
    CONFIG_MEMBER_ROLE:                             ":busts_in_silhouette: Role člena",
    CONFIG_MEMBER_ROLE_DESCRIPTION:                 "Tato role bude používána pro členy serveru, kteří souhlasili s pravidly.",
    CONFIG_LOCALE:                                  ":speaking_head: Jazyk",
    CONFIG_LOCALE_DESCRIPTION:                      "Nastavuje jazyk, který budu používat pro ty, kteří nemají nastavený profil.",
    SETTING_CURRENT_VAL:                            val => `Aktuální hodnota nastavení je ${val}`,
    SETTING_SET:                                    ":pencil: Nastavit",
    SETTING_SET_DESCRIPTION:                        "Nastaví hodnotu tohoto nastavení na novou hodnotu.",
    SETTING_RESET:                                  ":x: Resetovat",
    SETTING_DISABLE:                                ":x: Vypnout",
    SETTING_RESET_DESCRIPTION:                      def => `Tohle zresetuje hodnotu na výchozí hodnotu (${def})`,
    SETTING_DISABLE_DESCRIPTION:                    "Tohle odstraní tuto hodnotu z konfigurace.",
    SETTING_HOME:                                   ":house: Domů",
    SETTING_HOME_DESCRIPTION:                       "Vrátí se zpátky do hlavního menu.",
    QUESTION_STRING_VAL:                            "Napiš sem novou hodnotu. Na odpoveď máš 60 sekund.",
    QUESTION_CHANNEL_VAL:                           "Napiš sem kanál, který chceš použít. Na odpoveď máš 30 sekund.",
    QUESTION_ROLE_VAL:                              "Napiš sem roli, který chceš použít. Na odpoveď máš 30 sekund.",
    QUESTION_RESET:                                 c => `Jsi si jistý/a, že chceš zresetovat ${c} na výchozí hodnotu?\nNapiš y nebo yes pro resetování. Jinak napiš n nebo no. Na odpověď máš 10 sekund.`,
    QUESTION_DISABLE:                               c => `Jsi si jistý/a, že chceš vypnout ${c}?\nNapiš y nebo yes pro resetování. Jinak napiš n nebo no. Na odpověď máš 10 sekund.`,
    

    //delpunish.js
    CANNOT_UNSTRIKE:                                err => `Nemůžu odstranit varování z tohoto důvodu: ${err}`,

    //emoji.js
    IMAGE_GENERATING:                               "Generujeme obrázek. Tohle může chvíli trvat.",
    IMAGE_NONE:                                     "Nemůžu získat obrázek. Zkontroluj tvůj vstup a zkus to znovu.",
    IMAGE_AUTO_GENERATED:                           "Tenhle obrázek je automaticky generován.",
    IMAGE_CAVEATS:                                  `Nikdo ani nic není dokonalé, tohle jsou některé problémy, o kterých víme a s kterými se můžeš setkat.
- Z výkonnostních důvodů se obrázek generuje jako animované PNG. Animace těchto obrázků není podporována Discordem.
- Tvoje emoji mohou být ořezány.`,
    IMAGE_GENERATION_TIME:                          (sec, nsec)=> `Generování tohoto obrázku trvalo ${sec} sekund a ${Math.floor(nsec / 1e6)} ms`,

    //extensions.js
    NO_EXTENSIONS:                                  "Zatím nemáš žádná rozšíření!",
    NO_MORE_EXTENSIONS:                             "Více rozšíření už tady není.",
    EXTENSION_LIST:                                 guild => `Tady jsou rozšíření ${guild.name}`,
    EXTENSION_LIST_FIELD:                           ext => `
ID: ${ext.id}
Povolené kanály: ${ext.allowedChannels.map(c => `<#${c}>`).join(", ") || "Všechny"}
Povolené role: ${ext.allowedRoles.map(r => `<@&${r}>`).join(", ") || "Všechny"}
ID uložiště: ${ext.store}`,
    QUESTION_EXTENSION_CODE:                        "Prosím nahraj svůj kód jako přílohu na Discordu. Máš na to 60 sekund.\nMěj na paměti, že kód musí být v souboru s příponou `.js`.",
    QUESTION_EXTENSION_NAME:                        "Prosím, řekni mi název tvého rozšíření. Limit je 100 znaků, na odpověď máš 60 sekund.",
    QUESTION_EXTENSION_TRIGGER:                     "Prosím, řekni mi jméno příkazu (command trigger). Limit je 20 znaků. Také nelze používat mezery. Na odpověď máš 20 sekund.",
    QUESTION_EXTENSION_CHANNEL_RESTRICT:            "Chceš omezit spouštění tvého rozšíření je na vybrané kanály? Pokud chceš, napiš y nebo yes. Jinak napiš n nebo no. Na odpověď máš 10 sekund.",
    ALLOWED_CHANNELS:                               "Povolené kanály",
    EXTENSION_MENU_SUBTEXT:                         additionalStr => `Piš sem písmena vedle akcí, abys provedl danou akci${additionalStr}`,
    ALLOWED_CHANNELS_ACTION_ADD:                    "a: Přidat",
    ALLOWED_CHANNELS_ACTION_ADD_DESCRIPTION:        role => `Přidá ${role ? "roli" : "kanál"} na seznam povolených ${role ? "rolí" : "kanálů"}`,
    ALLOWED_CHANNELS_ACTION_REMOVE:                 "r: Odebrat",
    ALLOWED_CHANNELS_ACTION_REMOVE_DESCRIPTION:     role => `Odebere ${role ? "roli" : "kanál"} na seznam povolených ${role ? "rolí" : "kanálů"}`,
    ALLOWED_CHANNELS_ACTION_DONE:                   "d: Hotovo",
    ALLOWED_CHANNELS_ACTION_DONE_DESCRIPTION:       "Ukončí toto menu a uloží úpravy",
    QUESTION_ALLOWED_CHANNELS_ADD:                  roleOrChannel => `Prosím napiš sem ${roleOrChannel ? "roli, kterou" : "kanál, který"} chceš přidat. Na odpověď máš 30 sekund.`,
    QUESTION_ALLOWED_CHANNELS_REMOVE:               roleOrChannel => `Prosím napiš sem ${roleOrChannel ? "roli, kterou" : "kanál, který"} chceš odebrat. Na odpověď máš 30 sekund.`,
    CHANNEL_ALLOWED_ALREADY:                        role => `${role ? "Tato role" : "Tento kanál"} je už povolen${role ? "a" : ""}.`,
    CHANNEL_DISALLOWED_ALREADY:                     role => `${role ? "Tato role" : "Tento kanál"} je už zakázán${role ? "a" : ""}.`,
    ALLOWED_CHANNELS_MENU_CANCELLED:                role => `Menu ukončeno kvůli neaktivitě; ${role ? "role" : "kanály"}, které byly vybrané budou použity.`,
    QUESTION_EXTENSION_ROLE_RESTRICT:               "Chceš omezit spouštění tvého rozšíření jen členům s určitými rolemi? Pokud chceš, napiš y nebo yes. Jinak napiš n nebo no. Na odpověď máš 10 sekund.",
    ALLOWED_ROLES:                                  "Povolené role",
    MENU_CURRENTLY_SELECTED:                        rolesOrChannels => `Momentálně povolené ${rolesOrChannels ? "role" : "kanály"}:`,
    QUESTION_EXTENSION_STORE:                       "Chceš použít jiné uložiště rozšíření místo výchozího. Pokud ano, napiš y nebo yes. Pokud ne, napiš n nebo no. Na odpověď máš 10 sekund.",
    QUESTION_EXTENSION_STORE_ID:                    "Napiš sem ID uložiště.",
    STORE_NONEXISTANT:                              "Toto uložiště neexistuje.",
    STORE_CREATED:                                  store => `Vytvořeno uložiště s ID ${store}`,
    EXTENSION_CREATED:                              (extensionName, id) => `Hotovo! Rozšíření ${extensionName} bylo vytvořeno! Jeho ID je ${id}.`,
    EXTENSION_NONEXISTANT:                          "Toto rozšíření neexistuje.",
    QUESTION_EXTENSION_DELETE:                      ext => `Jseš si jistý, že chceš odstranit rozšíření ${ext.name} (ID ${ext.id})? Pokud ano, napiš y nebo yes. Pokud ne, napiš n nebo no. Na odpověď máš 10 sekund.`,
    QUESTION_EXTENSION_DELETE_STORE:                ext => `Hotovo! Rozšíření ${ext.name} je smazáno.\nChceš také smazat i jeho úložiště (ID ${ext.store})? Pokud ano, napiš y nebo yes. Pokud ne, napiš n nebo no. Na odpověď máš 10 sekund.`,
    STORE_DELETE_NONEXISTANT:                       "OK, ale uložiště už bylo vymazáno.",
    STORE_DELETED:                                  ext => `Hotovo, úložiště s ID ${ext.store} bylo smazáno`,

    //getavatar.js
    AVATAR_NOT_LOADING:                             avatar => `[Obrázek se nenačítá?](${avatar})`,
    USER_AVATAR:                                    user => `Avatar uživatele ${user}`,

    //hackban.js
    HACKBANNED_USERS:                               users => `:ok_hand: ${getBannedPlural(users)} ${users} ${getBannedUserPlural(users)}.`,
    USER_NOT_FOUND:                                 ":warning: Nemohl jsem najít tohoto uživatele :(",
    USER_NOT_FOUND_DESCRIPTION:                     "Jsi si jistý, že tohle je správné ID uživatele?",

    //help.js
    HELP_PUBLIC:                                    "Veřejné příkazy",
    HELP_OWNER:                                     "Příkazy pro vlastníka",
    HELP_MOD:                                       "Příkazy pro moderátory",
    HELP_ADMIN:                                     "Příkazy pro administrátory",
    HELP_FOR_COMMAND:                               command => `Nápověda pro příkaz ${command}`,
    HELP_ARGUMENTS:                                 "Argumenty",
    HELP_ALIASES:                                   "Aliasy",
    HELP_DESCRIPTION:                               "Popis",
    HELP_HOME:                                      async (HelpMenu, permissions, msg) => `Vítej v tt.bot-ově nápovědě! Použij reakce pro přístup k nápovědě pro jednotlivé kategorie.\n:stop_button: Ukončit\n:house: Domácí stránka (tahle stránka)\n${(await HelpMenu.MESSAGES(msg)).filter((_, idx) => permissions[idx]).join("\n")}`,
    HELP_NO_DESCRIPTION:                            "Žádný popis",
    HELP_REMINDER:                                  `Použij ${config.prefix}help <příkaz> pro informace o jednotlivých příkazech (momentálně v angličtině).`,

    //info.js
    INFO_STATS:                                     "Statistiky",
    INFO_STATS_TEXT:                                () => `Serverů: ${bot.guilds.size}\nUživatelů: ${bot.users.size}\nKanálů: ${Object.keys(bot.channelGuildMap).length}`,
    INFO_AUTHORS:                                   "Autoři a pomoc",
    INFO_OWNERS:                                    ownerStrings => `${ownerStrings.join("\n")}\n[Server podpory](https://discord.gg/pGN5dMq)\n[Repozitář na GitHubu](https://github.com/tt-bot-dev/tt.bot)`,
    INFO_VERSIONS:                                  "Verze:",
    INFO_UPTIME:                                    "Doba provozu:",

    //invite.js
    BOT_INVITE:                                     "Tady máš: <https://discordapp.com/oauth2/authorize?client_id=195506253806436353&scope=bot>\n\nPokud potřebuješ pomoct s používáním bota, přijď na náš server podpory, pozvánka je příkazu info.",

    //inviteinspector.js
    CANNOT_GET_INVITE:                              "Nemůžu získat informace o pozvánce.",
    INVITE_ERR_FOOTER:                              "Jsi si jistý, že pozvánka je skutečná? Tohle nefunguje s pozvánkami do skupinových zpráv.",
    CANNOT_GET_INVITE_BANNED:                       "Nemůžu získat informace o pozvánce, protože jsem odsud zabanován.",
    CONTACT_GUILD_ADMIN:                            "Prosím kontaktuj administrátory serveru, aby mě odbanovali.",
    INV_CHANNEL_TYPE:                               "Typ kanálu",
    INV_CHANNEL_TYPE_VAL:                           (type, channelName) => `${type === 0 ? "Textový" : "Hlasový"} kanál s názvem ${bot.escapeMarkdown(channelName)}`,
    INV_GUILD_ID:                                   "ID serveru",
    INV_MEMBERS_VAL:                                (members, presences) =>  `${members} ${getMembersPlural(members)}, ${presences} online.`,
    INV_JOIN:                                       "Odkaz na server",
    INV_JOIN_LINK:                                  code =>  `Klikni na [tohle](https://discord.gg/${code})`,
    INV_INVITER:                                    user => `Pozvánka vytvořena uživatelem ${user}`,

    //kick.js
    KICK_DONE:                                      user => `:ok_hand: Uživatel ${bot.getTag(user)} byl vyhozen.`,

    //needsmorejpeg.js
    CANNOT_JPEGIFY:                                 ":x: Nemůžu JPEG-izovat obrázek",
    CANNOT_FETCH_IMAGE:                             "Obrázek nemůže být načten.",
    CANNOT_JPEGIFY_INTERNAL_ERROR:                  ":x: Nemůžu JPEG-izovat obrázek kvůli interní chybě.",

    // phone.js
    ALREADY_HAVE_NUMBER:                            "Omlouvám se, ale dosáhl jsi limitu telefonních čísel a nemůžeš registrovat víc.",
    NUMBER_RESERVED:                                "Omlouvám se, ale telefonní čísla začínající na TTBOT 0 (882660) jsou rezervovány pro vývojáře.",
    NUMBER_EXISTS:                                  "Tohle číslo už existuje, zkus jiné.",
    QUESTION_NUMBER_PRIVATE:                        "Chceš udělat svoje telefonní číslo neveřejným? Soukromá čísla se zobrazí jako registrovaná, ale ve výpisu informací o číslu nebudou žádné informace dostupné.",
    NUMBER_CREATED:                                 "OK, to je všechno. Tvoje číslo už je uloženo.",
    NUMBER_INVALID:                                 hint => `Hm.. tohle není správné telefonní číslo.${hint ? "\nTvoje číslo musí začínat na TTBOT (88268), pak 9 čísel." : ""}`,
    CALLER_NO_NUMBER:                               "Promiň, ale anonymní hovory nejsou možné.",
    NUMBER_NONEXISTANT:                             "Promiň, ale toto číslo neexistuje",
    CALLING:                                        "V pořádku, už je vytáčím...",
    CALL_ABORTED_BOT_REMOVED:                       "Hovor přerušen: Bot byl odebrán ze serveru, který voláš.",
    CALL_ABORTED_NO_PERMISSIONS:                    "Hovor přerušen: Bot nemůže psát do kanálu, který voláš",
    PRIVATE_NUMBER:                                 "Soukromé číslo",
    CHANNEL_INFORMATION:                            "Informace o kanálu",
    NUMBER_AVAILABLE:                               "Bot byl odstraněn ze serveru na kterém byl registrován. Toto číslo je uvolněno k registraci..",
    CHANNEL_INFORMATION_VALUE:                      (channel, guild) => `${channel ? `#${channel.name}` : "Neznámý kanál"} na serveru ${guild.name}`,
    NUMBER_INFORMATION:                             number => `Informace o číslu: ${number}`,
    QUESTION_DELETE_NUM:                            number => `Jsi si jistý, že chceš smazat toto telefonní číslo: ${number}? Tato akce nelze vrátit zpět.`,
    NUMBER_DELETED:                                 "Hotovo, číslo je odstraněno.",

    //ping.js
    PING_LATENCY:                                   ms => `Ping trval ${ms}ms.`,
    PING_DISCORD_LATENCY:                           ms => `Latence brány Discordu: ${ms}ms`,
    PONG:                                           ":ping_pong: Pong",

    //profile.js
    PROFILE_NONEXISTENT:                            "Ještě nemáš profil.",
    PROFILE_DELETED:                                "Tvůj profil je smazán.",
    PROFILE_CREATED:                                "OK. Tvůj profil je vytvořen.",
    PROFILE_CREATE_SETUP:                           "Ahoj! Chtěl by sis nastavit profil před tím, než ho vytvořím? Napiš y nebo yes pokud chceš, jinak napiš n nebo no. Na odpověď máš 10 sekund.\n\nMěj na paměti, že stále můžeš změnit tyto hodnoty pomocí ostatních podpříkazů.",
    PROFILE_CREATE_TIMEZONE:                        "Jaké je tvoje časové pásmo? Toto časové pásmo musí být jedna z platných položek databáze časových pásem IANA (viz <https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List>)\nNa odpověď máš 30 sekund. Napiš \"none\" pokud ji zatím nechceš nastavovat.",
    PROFILE_CREATE_LOCALE:                          () => `Kterým jazykem mluvíš? Dostupné jazyky jsou: ${Object.keys(bot.i18n.languages).join(", ")}\nPokud tady svůj jazyk nemáš, nebo ho nechceš nastavovat, napiš "none". Na výběr máš 30 sekund.\nMůžeš nám kdykoli pomoci překládat na GitHubu: <https://github.com/tt-bot-dev/languages>`,
    PROFILE_TIMEZONE:                               tz => `Tvoje časové pásmo je momentálně ${tz}.\nAbys ho změnil, napiš nové časové pásmo jako argument.`,
    INVALID_TIMEZONE:                               "Tohle časové pásmo není správné. Seznam možných časových pásem najdeš zde: <https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List>",
    INVALID_LOCALE:                                 locale => `Neplatný jazyk: \`${locale}\``,
    LOCALE_SET:                                     locale => `Tvůj jazyk byl nastaven na ${locale}.`,
    PROFILE_LOCALE_LIST:                            (currentLocale, status) => `Momentálně máš nastavený tento jazyk: \`${currentLocale}\`!\nAktuální stav jazyků:\n${status}`,

    //serverinfo.js
    GUILD_VERIFICATION_NONE:                        "Žádná",
    GUILD_VERIFICATION_LOW:                         "Nízká (Vyžaduje ověřený email)",
    GUILD_VERIFICATION_MEDIUM:                      "Střední (Vyžaduje ověřený email a musí uplynout 5 minut od registrace na Discordu)",
    //These miss their tableflips because the tableflips are not translatable.
    GUILD_VERIFICATION_TABLEFLIP:                   "(Vyžaduje ověřený email, musí uplynout 5 minut od registrace na Discordu a musí uplynout 10 minut od příchodu na server)",
    GUILD_VERIFICATION_ULTRATABLEFLIP:              "(Vyžaduje ověřené telefonní číslo)",
    GUILD_VERIFICATION_LEVEL:                       "Úrověň ověření serveru",
    ALLOWED_INVITE_SPLASH:                          "Tento server může mít vlastní pozadí na pozvánce",
    ALLOWED_VIP_REGIONS:                            "Tento server má přístup k lepším hlasovým serverům",
    ALLOWED_VANITY_URL:                             vanityURL => `Tento server může mít vlastní ${vanityURL ? "[" : ""}pozvánku${vanityURL ? `](https://discord.gg/${vanityURL})` : ""}`,
    ALLOWED_VERIFIED:                               "Tento server je ověřen",
    ALLOWED_PARTNERED:                              "Tento server má uzavřené partnerství s Discordem",
    ALLOWED_COMMERCE:                               "Tento server má přístup ke komerčním funkcím (např. obchodní kanály)",
    ALLOWED_NEWS:                                   "Tento server může mít oznamovací kanály",
    ALLOWED_LURKABLE:                               "Tento server může být prohlížen",
    ALLOWED_DISCOVERABLE:                           "Tento server může být nalezen v menu hledání serverů",
    ALLOWED_FEATURABLE:                             "Tento server může být ukázán v popředí menu hledání serverů",
    ALLOWED_ANIMATED_ICON:                          "Tento server může mít animovanou ikonu",
    ALLOWED_BANNER:                                 "Tento server může mít banner",
    FEATURES:                                       "Funkce",
    REQUIRES_ADMIN_MFA:                             "Vyžaduje 2FA pro administrativní úkony",
    MEMBER_COUNT:                                   members => `${members} ${getMembersPlural(members)}`,
    ROLE_COUNT:                                     roles => `${roles} rol${roles <5 && roles >0 ? "e": "í"}`,
    EXPLICIT_FILTERING:                             "Filtrování explicitního obsahu",
    EXPLICIT_FILTERING_OFF:                         "Vypnuto",
    EXPLICIT_FILTERING_NOROLE:                      "Zapnuto pro uživatele bez rolí",
    EXPLICIT_FILTERING_ON:                          "Zapnuto",
    DEFAULT_NOTIFICATIONS:                          "Výchozí nastavení oznámení",
    ONLY_MENTIONS:                                  "Pouze @mentions",
    ALL_MESSAGES:                                   "Všechny zprávy",
    VOICE_REGION:                                   "Lokalita serveru",
    AFK_TIMEOUT:                                    "Časový limit AFK",
    AFK_MINUTES:                                    timeout => `${timeout / 60} minut${timeout / 60 === 1 ? "a" : ""}`,
    AFK_CHANNEL:                                    "Název AFK kanálu",

    //softban.js
    SOFTBAN_DONE:                                   user => `:ok_hand: Uživatel ${bot.getTag(user)} byl softbanován.`,

    //strike.js
    BOTS_NOT_STRIKABLE:                             "Neměl bys varovat boty. Je možné, že ublížíš jejich citům :(",
    YOU_GOT_STRIKED:                                "Vypadá, že jsi dostal(a) varování.",
    STRIKE_DETAILS:                                 (issuer, reason) => `Varování bylo uděleno ${issuer} z důvodu \`${reason || "Bez důvodu"}\`.`,
    PAY_ATTENTION:                                  "Dávej si pozor na to, co děláš!",

    //strikes.js
    TOO_MUCH_STRIKES:                               "Uživatel má příliš mnoho varování na to, abych je mohl ukázat v embedu. Místo toho, tady máš textový soubor:",
    STRIKE_OVERVIEW:                                user => `Tady jsou varování uživatele ${user}`,

    //tags.js
    TAG_CREATED:                                    tag => `Vytvořen tag s názvem \`${tag}\`.`,
    TAG_EXISTS:                                     "Tenhle tag už existuje!",
    TAG_DOESNTEXIST:                                "Tenhle tag neexistuje.",
    TAG_NOTOWNER:                                   "Nevlastníš tenhle tag.",
    TAG_DELETED:                                    tag => `Smazán tag s názvem \`${tag}\`.`,
    TAG_UPDATED:                                    tag => `Upraven tag s názvem \`${tag}\`.`,
    TAG_DISPLAY:                                    tag => `Tag ${tag}`,

    //timefor.js
    NO_TZ:                                          "Tento uživatel si zatím nenastavil časové pásmo.",
    TIME_FOR:                                       (time, user) => `Je ${time} pro uživatele ${user}.`,

    //uinfo.js
    PLAYING:                                        "Hraje",
    STREAMING:                                      "Streamuje",
    LISTENING_TO:                                   "Poslouchá",
    ONLINE:                                         "Online",
    IDLE:                                           "Nečinný",
    DND:                                            "Nerušit",
    OFFLINE:                                        "Neviditelný/offline",
    USER_INFO:                                      (nickstr, limited = false) => `${limited? "Omezené i" : "I"}nformace pro uživatele ${nickstr}`,
    PLAYING_NONE:                                   "Nic",
    SPACE_UNIVERSE:                                 "si s vesmírem plných mezer.\nHodně štěstí, nalezl(a) jsi easter egg :eyes:",
    CURRENT_VOICE:                                  "Aktuální hlasový kanál",
    NO_CURRENT_VOICE:                               "Žádný",
    JOINED_ON:                                      "Připojen(a) na serveru:",

    //#endregion commands

    //#region events
    // It is possible that the server owner has a profile.
    HI_I_AM_BOT:                                    ":wave: Ahoj!",
    SOME_THINGS_SAID:                               () => `Moje jméno je ${bot.user.username} a jsem instance tt.bot-a, bota pro Discord, který se zaměřuje na moderování a nástroje. Cítil jsem potřebu popsat ti, kdo jsem.`,
    GETTING_STARTED:                                ":floppy_disk: Začínáme",
    GETTING_STARTED_DESCRIPTION:                    `Nepotřebuješ nastavovat tt.bot-a, aby sis užil(a) jeho základní funkce! Ale k používání příkazů pro moderátory, ty (nebo kdokoliv s oprávněním Spravovat server) musí použít příkaz \`${config.prefix}config\`, aby vytvořil konfiguraci serveru. A to je v podstatě všechno! Dej svým moderátorům roli "tt.bot mod" a můžou začít moderovat! Nebo si nastav roli moderátora na tu, které chceš dát moderátorská práva.`,
    EVERYTHING_ELSE:                                ":books: Všechno ostatní",
    EVERYTHING_ELSE_DESCRIPTION:                    "Pokud potřebuješ pomoct (nebo si s námi jen popovídat), přijď na náš server podpory; pozvánku najdeš v příkazu info.",
    THANKS_FOR_CHOOSING:                            "Děkujeme, že sis vybral(a) tt.bot-a!",
    WISHING_GOOD_LUCK:                              "*Přeju ti hodně štěstí s tvým serverem-*",
    //#endregion events

    //#region queries
    ITEM_NOT_FOUND:                                 (query, notfound) => `Nemůžu najít ${query}. Jsi si jistý, že existuje? ${notfound}`,
    MULTIPLE_ITEMS_FOUND:                           "Více věcí nalezeno!",
    MULTIPLE_ITEMS_DESCRIPTION:                     (items, list) => `Našel jsem ${items} ${getItemsPlural(items)}, ukazuji nejvíce 5 z nich.
${list}
Vyber jednu reagováním číslem vedle věci, kterou chceš vybrat.
Jinak, vyber ❌ pro zrušení.
Dotaz expiruje za 5 minut.`,

    //#endregion queries

    // There is going to be webserver translations soon, but currently cannot figure it out.

    // Modlog
    MODS_UNSTRIKABLE:                               "Nemůžeš varovat moderátora!",

    // Reaction menu
    REACTION_MENU_EXIT_MANUAL:                      "Opustil(a) jsi menu.",
    REACTION_MENU_EXIT_MESSAGE_DELETE:              "Menu ukončeno, protože zpráva byla smazána.",
    REACTION_MENU_EXIT_CHANNEL_DELETE:              "Menu ukončeno, protože kanál byl smazán.",
    REACTION_MENU_NO_AUTOREMOVE:                    "Chyba: Nemůžu odstranit tvoji reakci protože mi chybí oprávnění \"Spravovat zprávy\".\nPokud mi ho někdo dá, odstraním tvoji reakci pro tvoje pohodlí.",

    // General
    NONE:                                           "Žádné",
    MEMBERS:                                        "Členové",
    OWNER:                                          "Vlastník",
    ROLES:                                          "Role",
    STATUS:                                         "Stav",
    REASON:                                         "Důvod",
    OP_CANCELLED:                                   "Operace zrušena.",
    COMMAND_ERROR:                                  "Promiň, ale nepochopil jsem tvoji informaci. Prosím zkontroluj tvůj vstup a znovu spusť příkaz.",
    ARGS_MISSING:                                   "Chybí ti vyžadované argumenty.",
    ROLE_HIERARCHY_ERROR:                           "Nemůžeš tohle udělat na tohohle uživatele.",
    ERROR:                                          err => `Jejda. Zkusil jsem splnit tvůj příkaz, ale mám problém. Prosím, dej tohle mým vývojářům.\n\`\`\`js\nError:\n${err}\n\`\`\``,
    OOPS:                                           "Jejda.. Mám menší problém.",
    MISSING_PERMISSIONS:                            "Nemám oprávnění na provedení akce na tomto serveru.",
    CREATED_ON:                                     "Vytvořen",
    YES:                                            "Ano",
    NO:                                             "Ne",
    TOOLONG:                                        "Příliš dlouhé na ukázání, promiň :(",
    INVALID_ARG:                                    arg => `Neplatný argument: ${arg}`,
    PAGE:                                           page => `Strana ${page}`,
    ALL:                                            "Vše",
    SORRY:                                          "Omlouvám se.",

    // Locale info and metadata. Only uppercase strings can be used in the bot.
    NATIVE_LOCALE_NAME:                             "Čeština",
    ENGLISH_LOCALE_NAME:                            "Czech",
    fallbackLanguage:                               "en"
});