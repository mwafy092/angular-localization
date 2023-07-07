# LocalizationApp

# Steps for configuring the app

1. ng add @angular/localize
2. ng extract-i18n --output-path folderName (this is will extract xlf file with all keys that we put i18n flag on it)
3. each trans-unit tag has a unique id and by adding i18n="@@customName" you can define the id value
4. make copy for every language and add target tag for translation
