# languages
This repository serves as a git submodule for [tt.bot][tt.bot repo] that serves the locale files without granting the translators the permissions to tamper with the main bot repository unknowingly.
## Current languages
| Language | Native name                    | English name                | Maintainers             | Fallback language |
|:-------- |:------------------------------ |:--------------------------- |:----------------------- | :---------------- |
| cs-CZ    | Čeština                        | Czech                       | @tt-bot-dev/cs-cz       | en                |
| en       | English                        | English                     | @tt-bot-dev/maintainers | none              |
| ro-RO    | Română                         | Romanian                    | @tt-bot-dev/ro-ro       | en                |
| sk-NR    | Slovenčina (Nitránske nárečí)  | Slovak (Nitránske nárečí)   | @TheMorc                | sk-SK             |
| sk-SK    | Slovenčina                     | Slovak                      | @tt-bot-dev/sk-sk       | cs-CZ             |
| trans    | NATIVE_LOCALE_NAME             | ENGLISH_LOCALE_NAME         | @TTtie                  | none              |


## Adding languages
To add a language to tt.bot, you need following:
- Basic understanding of the [ICU message format][icu-format]
- Basic understanding of how Discord works
- Basic understanding of how to control your computer

### How-to
1. Make a copy of `en.json` and rename it appropriately. The format is `xx-YY`, where the `xx` stands for the language, and the `YY` stands for the region/dialect of the language.
2. Translate the strings into your native language.
3. Create a pull request.
4. ???
5. Profit - after approval, we will create a new team for your language and add you to the `tt-bot-dev` organization.

### What is the context of the strings?
To see which strings are used in which places, switch your locale to `trans`.  
This will switch you to a special locale that will show the term names instead of the actual strings. However, arguments are ignored and in some strings, you won't see what you want to see. If this is the case, go to [tt.bot's repository][tt.bot repo] and look for code similar to one of these:  
> ```js
> await ctx.t("TERM_NAME", args, moreArgs)
> await bot.i18n.getTranslation("TERM_NAME", "LOCALE", args, moreArgs)
> await this.sosamba.getTranslation("TERM_NAME", "LOCALE", args, moreArgs);
> ```

[tt.bot repo]: https://github.com/tt-bot-dev/tt.bot
[icu-format]: https://support.crowdin.com/icu-message-syntax/