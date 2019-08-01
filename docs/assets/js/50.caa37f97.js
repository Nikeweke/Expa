(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{207:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git","aria-hidden":"true"}},[t._v("#")]),t._v(" Git")]),t._v(" "),e("h4",{attrs:{id:"содержание"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#содержание","aria-hidden":"true"}},[t._v("#")]),t._v(" Содержание")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#top-commands"}},[t._v("Top commands")])])])]),e("p"),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"top-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#top-commands","aria-hidden":"true"}},[t._v("#")]),t._v(" Top commands")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git bisect")]),t._v(" - помогает найти коммит который сломал продукт, деля коммиты постепенно и применяя их")]),t._v(" "),e("li",[e("code",[t._v("git add -A")]),t._v(" - добавить все файлы для отслеживания")]),t._v(" "),e("li",[e("code",[t._v("git add .")]),t._v(" - добавить все файлы для отслеживания")]),t._v(" "),e("li",[e("code",[t._v("git commit -m 'new'")]),t._v(" - сделать подтверждение изменение с комментарием (комментарий обязательно)")]),t._v(" "),e("li",[e("code",[t._v("git push origin master")]),t._v(" - сделать закачку файлов в репозиторий")]),t._v(" "),e("li",[e("code",[t._v("git config --list")]),t._v(" - настройки git")]),t._v(" "),e("li",[e("code",[t._v("git remote add origin https://github.com/someRepo.git")]),t._v(" - добавление адреса")]),t._v(" "),e("li",[e("code",[t._v("git remote -v")]),t._v(" - просмотр данных от адресах")]),t._v(" "),e("li",[e("code",[t._v("git checkout -b trunk")]),t._v(' - создание ветки "trunk"  и переход на нёё')]),t._v(" "),e("li",[e("code",[t._v("git branch")]),t._v(" - просмотр веток")])]),t._v(" "),e("h2",{attrs:{id:"set-credentials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-credentials","aria-hidden":"true"}},[t._v("#")]),t._v(" Set credentials")]),t._v(" "),e("p",[t._v("создаем пользователя глобального с именем и почтой")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('git config --global user.name "nikeweke"\ngit config --global user.email jxammet@gmail.com\n')])])]),e("h2",{attrs:{id:"config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config","aria-hidden":"true"}},[t._v("#")]),t._v(" Config")]),t._v(" "),e("p",[t._v("показать настройки")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git config --list\n")])])]),e("h2",{attrs:{id:"gitignore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitignore","aria-hidden":"true"}},[t._v("#")]),t._v(" .gitignore")]),t._v(" "),e("p",[t._v('Игнорирование файлов : -- создаем файл без расширения с названием ".gitignore" и там например:')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#папка лог и файле в ней игнориться\nlogs/\n\n# файлы с расширением .txt игноряться в папке docs\ndocs/*.txt\n")])])]),e("h2",{attrs:{id:"add"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add","aria-hidden":"true"}},[t._v("#")]),t._v(" Add")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('// Добавить все файлы проекта под контроль Git\ngit add .\ngit add filename\n\n// Файлы которые не проиндексированные не могут быть коммит сделать\n// если файл был изменен и его надо потом закомитить то, индиксируем\ngit add "*.php"\ngit add .\n\n// удаление файла из под контролЯ Git\ngit rm --cached filename\n')])])]),e("h2",{attrs:{id:"status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#status","aria-hidden":"true"}},[t._v("#")]),t._v(" Status")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# показ файлов в папке")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status --untracked-files"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("normal \n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status --untracked-files"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("all\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status --untracked-files"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("no\n")])])]),e("h2",{attrs:{id:"commit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit","aria-hidden":"true"}},[t._v("#")]),t._v(" Commit")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('// Закомитить файлы которы были изменены и проиндексированы\ngit commit -m"commit"\n\n// Коммит файлов и индексирование их(Инициализация файлов проекта)\ngit commit -a -m"init"\n\n\n// Эта комманда вызывает VIM, в нем в начале можно написать комментарий , \n// чтобы сохранить надо нажать ESC и в конце написать - ":x" - сохранить\ngit commit\n\n\n// Вместо VIM - можно юзать Notepad++\n// в файле .gitconfig прописывает секцию [core] и это для того чтобы открывался не VIM, а Notepad для написанния комментария\ngit config --global core.editor "\'C:\\Program Files\\Notepad++\\notepad++.exe\' - multiInst -notabbar -nosession -noPlugin"\n\n// то что прописивает в файле .gitconfig(путь к файлу:C:\\Users\\NameUser\\...)\n[core]\n   editor = \'C:\\\\Program Files\\\\Notepad++\\\\notepad++.exe\' - multiInst -notabbar -nosession -noPlugin\n')])])]),e("h2",{attrs:{id:"checkout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checkout","aria-hidden":"true"}},[t._v("#")]),t._v(" Checkout")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// Получить файл из репозитория или откатить локальный файл до файла как на репозиторие\ngit checkout -- filename\n")])])]),e("h2",{attrs:{id:"remote"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remote","aria-hidden":"true"}},[t._v("#")]),t._v(" Remote")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// Добавить удаленный репозиторий для проекта(origin - это название)\ngit remote add origin https://github.com/Nikeweke/Portal_News.git\n\n// Добавить на удаленный репозитарий без запроса пароля\ngit remote add origin https://Nickname:Password@bitbucket.org/Nickname/Project.git \n\n// Посмотреть доступные репизитории удаленные\ngit remote\ngit remote -v\n")])])]),e("h2",{attrs:{id:"push"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#push","aria-hidden":"true"}},[t._v("#")]),t._v(" Push")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// Закачать файлы на GitHGub в репозиторий\ngit push -u origin master // один раз так, так как здесь ключ: -u\ngit push                 // второй раз так можно\n")])])]),e("h2",{attrs:{id:"log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#log","aria-hidden":"true"}},[t._v("#")]),t._v(" Log")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('// Лог действией ( Если много записей то чтобы потом выйти если знак ":" - Q)\ngit log\n\n// Вывести лог в отфарматированном виде - в красивом так сказать\n// %h - № коммита;  %an  - афтар;  %ar  - дата;  %s -  комментарий;\ngit log --pretty=format:"%h - %an, %ar : %s"  \n\n\n// Показать за последние 2 недели\ngit log --since=2.weeks\n\n// Показать изменение с прошлой версией \ngit log -p -2\n')])])]),e("h2",{attrs:{id:"branches"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#branches","aria-hidden":"true"}},[t._v("#")]),t._v(" Branches")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// Создание новой ветки - trunk и сразу переключються на неё\ngit checkout -b trunk\ngit branch trunker // создание без переключение на ветку\n\n// Просмотр веток и на какой находимся\ngit branch\ngit branch -v\n\n// Переключение между ветками\ngit checkout name_branch\n")])])]),e("h2",{attrs:{id:"merge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#merge","aria-hidden":"true"}},[t._v("#")]),t._v(" Merge")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('// Например мы находимся на ветке trunk - и мержим себе ветку master\ngit merge master\n\n// выбираем инструмент для решение конфликтов при мерженге и это пишеться .gitconfig\ngit config --global merge.tool kdiff3\n\n// .ginconfig\n[merge]\n    tool = kdiff3\n\n// показать инструмент для разрешение конфликтов в мержинге,\n// если нет kadiff3 - его надо скачать\ngit mergetool \n\n// добавляет в .gitconfig расположение редактора kdiff3\ngit config --global mergetool.kdiff3.cnd \'"C:\\Program Files\\KDiff3\\kdiff3"\' $BASE $LOCAL $REMOTE -o $MERGED\n\n// .ginconfig\n[mergetool "kdiff3"]\n    cmd = \\"C:\\\\\\\\Program Files\\\\\\\\KDiff3\\\\\\\\kdiff3\\" $BASE $LOCAL $REMOTE -o $MERGED \n    \n// После разрешение кофликтов, можно перейти в ту ветку которой нужен апдейт\n// мы например в ветке trunk сделали мерже с веткой master, и хотим апдейтнуть master\ngit checkout master\ngit branch -v\ngit merge trunk\ngit status\ngit branch -v\n')])])]),e("h2",{attrs:{id:"посnедоватеnьность-работы"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#посnедоватеnьность-работы","aria-hidden":"true"}},[t._v("#")]),t._v(" Последовательность работы")]),t._v(" "),e("ol",[e("li",[t._v("пописал в файлах херни")]),t._v(" "),e("li",[t._v("проверил что там и где понаписовал: "),e("code",[t._v("git status")])]),t._v(" "),e("li",[t._v("проиндексировал херню: "),e("code",[t._v("git add .")])]),t._v(" "),e("li",[t._v("делаем коммит  "),e("code",[t._v('git commit -m "commit"')]),t._v(" - ("),e("code",[t._v('"commit"')]),t._v(" - это просто комментарий будет виден на сайте в истории)")]),t._v(" "),e("li",[t._v("делаем репозиторий на Github без Readme.md, и пишем "),e("code",[t._v("git remote add name https:// ... .git")])]),t._v(" "),e("li",[e("code",[t._v("git push")]),t._v(" (или "),e("code",[t._v("git push -u origin master")]),t._v(" - один раз)")])]),t._v(" "),e("h3",{attrs:{id:"pusher-bat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pusher-bat","aria-hidden":"true"}},[t._v("#")]),t._v(" pusher.bat")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('cd D:\\path\\to\\project\ngit init\ngit remote add origin https://Nickname:password@bitbucket.org/Nickname/project.git\ngit add .\ngit commit -m "new coomit"\ngit push -u origin master\n')])])])])},[],!1,null,null,null);a.default=n.exports}}]);