chrome.contextMenus.create({
    contexts: ['selection'],
    title: 'こいつのTwitterページを開く',
    onclick: function (param){
        var id = param.selectionText.replace('@', '')
        chrome.tabs.create({
            url: 'https://twitter.com/' + id
        });
    }
});
