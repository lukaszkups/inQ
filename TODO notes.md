1. Compiler first go to `/content/pages` folder, compile all files, search theme file with same name as page filename, if it doesn't exists checks if there's default theme file for pages, if it doesn't exists too then it goes to default theme folder and uses default theme file for pages. It works the same for lists files.
2. Theme search process - example for `/pages/home.md` page:
- check if `theme/currentTheme/pages/home.pug` exists
- check if `theme/currentTheme/pages/default.pug` exists
- check if `theme/default/pages/default.pug` exists
- compile page as themed HTML file
3. Theme search process - example for `lists/blog/2017-09-17-hello-world.md` list entry:
- check if `theme/currentTheme/lists/blog.pug` exists
- check if `theme/currentTheme/lists/default.pug` exists
- check if `theme/default/lists/default.pug` exists
- add current entry to the list of entries and compile as themed HTML file
- check if `theme/currentTheme/lists-entry/blog.pug` exists
- check if `theme/currentTheme/list-entry/default.pug` exists
- check if `theme/default/list-entry/default.pug` exists
- compile single blog entry as themed HTML file