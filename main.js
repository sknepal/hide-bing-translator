/* CHANGE LOG
1.1 (01/27/2014) : added resized images & another CSS rule to not display tweet translations along with the view translations link.
1.0 (01/22/2014) : created.

*/

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('.btn-link.js-translate-tweet  { display: none !important; }');
addGlobalStyle('.tweet-translation { display: none !important;}' );