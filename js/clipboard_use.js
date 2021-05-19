$(".highlight").wrap("<div class='code-wrapper' style='position:relative'></div>");
/*ҳ��������ɺ󣬴������ư�ť*/
!function (e, t, a) {
    /* code */
    var initCopyCode = function () {
        var copyHtml = '';
        copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
        copyHtml += '  <i class="fa fa-clipboard"></i><span></span>';
        copyHtml += '</button>';
        $(".highlight .code").before(copyHtml);
        var clipboard = new ClipboardJS('.btn-copy', {
            target: function (trigger) {
                return trigger.nextElementSibling;
            }
        });
        clipboard.on('success', function (e) {
            e.trigger.innerHTML = "<i class='fa fa-clipboard'></i><span></span>"
            setTimeout(function () {
                e.trigger.innerHTML = "<i class='fa fa-clipboard'></i><span></span>"
            }, 1000)
           
            e.clearSelection();
        });
        clipboard.on('error', function (e) {
            e.trigger.innerHTML = "<i class='fa fa-clipboard'></i><span></span>"
            setTimeout(function () {
                e.trigger.innerHTML = "<i class='fa fa-clipboard'></i><span></span>"
            }, 1000)
            e.clearSelection();
        });
    }
    initCopyCode();
}(window, document);
