var loadOwl = 0x0,
    dk = [],
    lk = [],
    pid = [],
    purl = [],
    pcid = [],
    urlPost, comID;

function shortCodeNld(_0x2d43a5, _0x69b880, _0x4668e4) {
    for (var _0x53af91 = _0x2d43a5['split']('$'), _0x3c156d = /[^{\}]+(?=})/g, _0x574e2b = 0x0; _0x574e2b < _0x53af91['length']; _0x574e2b++) {
        var _0xfee375 = _0x53af91[_0x574e2b]['split']('=');
        if (_0xfee375[0x0]['trim']() == _0x69b880) return null != (_0x4668e4 = _0xfee375[0x1])['match'](_0x3c156d) && String(_0x4668e4['match'](_0x3c156d))['trim']()
    }
    return !0x1
}

function msgError() {
    return '<span class=\"error-msg\"><b>Error:</b>&nbsp;No Results Found</span>'
}

function beforeLoader() {
    return '<div class="loader"></div>'
}
function getFeedUrl(_0x233f4f, _0x27b355, _0x169a98, _0x15cf2d) {
    switch (_0x169a98) {
    case 'recent':
        _0x15cf2d = '/feeds/posts/default?alt=json&max-results=' + _0x27b355;
        break;
    case random:
        var _0x78b5a2 = Math['floor'](Math['random']() * _0x27b355 + 0x1);
        _0x15cf2d = '/feeds/posts/default?max-results=' + _0x27b355 + '&start-index=' + _0x78b5a2 + '&alt=json';
        break;
    case 'comments':
        _0x15cf2d = 'list1' == _0x233f4f ?'/feeds/comments/default?alt=json&max-results=' + _0x27b355 : '/feeds/posts/default/-/' + _0x169a98 + '?alt=json&max-results=' + _0x27b355;
        break;
    default:
        _0x15cf2d = '/feeds/posts/default/-/' + _0x169a98 + '?alt=json&max-results=' + _0x27b355
    }
    return _0x15cf2d
}

function getPostLink(_0x202825, _0x1c7128) {
    for (var _0x4b72ab = 0x0; _0x4b72ab < _0x202825[_0x1c7128]['link']['length']; _0x4b72ab++)
        if ('alternate' == _0x202825[_0x1c7128]['link'][_0x4b72ab]['rel']) {
            var _0x3f0436 = data['view']['isMobile'] == 'true' ? _0x202825[_0x1c7128]['link'][_0x4b72ab]['href'] + '?m=1' : _0x202825[_0x1c7128]['link'][_0x4b72ab]['href'];
            break
        } return _0x3f0436
}

function getPostTitle(_0x1eb439, _0xc459c7, _0x179f9f) {
    var _0x227127 = _0x540a;
    return _0x1eb439[_0xc459c7]['title']['$t'] || exportnld['noTitle']
}

function getPostTag(_0x3437a6, _0x34c3f7, _0x440603) {
    if (_0x3437a6[_0x34c3f7]['category'] && 0x1 == exportnld['postLabels']) {
        for (var _0x5e6511 = 0x0; _0x5e6511 < _0x3437a6[_0x34c3f7]['category']['length']; _0x5e6511++) {
            l = _0x3437a6[_0x34c3f7]['category'][_0x5e6511]['term']
        }
        if (NLDtst['lbel']['lbO']['length'] == NLDtst['lbel']['lbR']['length'])
            for (var _0x5f598a = 0x0; _0x5f598a < NLDtst['lbel']['lbO']['length'] && _0x5f598a < NLDtst['lbel']['lbR']['length']; _0x5f598a++) {
                l == NLDtst['lbel']['lbO'][_0x5f598a] && (l = l['replace'](NLDtst['lbel']['lbO'][_0x5f598a], NLDtst['lbel']['lbR'][_0x5f598a]))
            }
    }
    return _0x3437a6[_0x34c3f7]['category'] && 0x1 == exportnld['postLabels'] ? '<span class="entry-tag">' + l + '</span>' : ''
}


function getPostAuthor(_0x2b074d, _0x1e8e11, _0x4ec722) {
        _0x209e93 = _0x2b074d[_0x1e8e11]['author'][0x0]['name']['$t'],
        _0x5d6686 = '<span class=\"entry-author\">' + _0x209e93 + '</span>';
    return _0x5d6686
}

function nldOwlSlider(_0x449235) {
    loadOwl == 0x0 ? (loadOwl = 0x1, loadJs('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', 'olCarousel', 'body', function () {
        _0x449235['find']('.owl-carousel')['owlCarousel']({
            'item': 0x3,
            'rtl': ![],
            'loop': !0x0,
            'center': !0x0,
            'smartSpeed': 0x1f4,
            'autoplay': 0x0,
            'autoplayTimeout': 0x1388,
            'autoplaySpeed': 0x1f4,
            'autoplayHoverPause': !0x0,
            'nav': !0x0,
            'navText': ['<i class=\"rbi rbi-angle-left\"></i><span>Trước</span>', '<i class="rbi rbi-angle-right"></i><span>Tiếp</span>'],
            'navClass': ['rb-owl-prev', 'rb-owl-next'],
            'navElement': 'div role="presentation"',
            'dots': !0x0,
            'responsive': {
                0x0: {
                    'items': 0x1
                },
                0x300: {
                    'items': 0x2
                },
                0x3e0: {
                    'items': 0x3
                }
            }
        }), $('.owl-dot')['each'](function () {
            let _0x291bf4 = $(this)['index']() + 0x1;
            $(this)['attr']('aria-label', 'Go to slide ' + _0x291bf4)
        }), $('span.entry-thumb')['lazynld']()
    })) : (_0x449235['find']('.owl-carousel')['owlCarousel']({
        'item': 0x3,
        'rtl': ![],
        'loop': !0x0,
        'center': !0x0,
        'smartSpeed': 0x1f4,
        'autoplay': 0x0,
        'autoplayTimeout': 0x1388,
        'autoplaySpeed': 0x1f4,
        'autoplayHoverPause': !0x0,
        'nav': !0x0,
        'navText': ['<i class="rbi rbi-angle-left"></i><span>Trước</span>', '<i class="rbi rbi-angle-right"></i><span>Tiếp</span>'],
        'navClass': ['rb-owl-prev', 'rb-owl-next'],
        'navElement': 'div role="presentation"',
        'dots': !0x0,
        'responsive': {
            0x0: {
                'items': 0x1
            },
            0x300: {
                'items': 0x2
            },
            0x3e0: {
                'items': 0x3
            }
        }
    }), $('.owl-dot')['each'](function () {
        let _0x6813d6 = $(this)['index']() + 0x1;
        $(this)['attr']('aria-label', 'Go to slide ' + _0x6813d6)
    }), $('span.entry-thumb')['lazynld']())
}

function getPostDate(e, t, a, s, o) {
    var r = e[t]['published']['$t'],
        i = r['substring'](0x0, 0x4),
        e = r['substring'](0x5, 0x7),
        t = r['substring'](0x8, 0xa),
        i = dateFormat['replace']('{m}', monthNames[parseInt(e, 0xa) - 0x1])['replace']('{d}', t)['replace']('{y}', i);
    return o = '' != a && 0x1 == exportnld['postLabels'] ? '<span class="on sp">-</span>' : '', 0x1 == exportnld['postDate'] ? '<span class=\"entry-time\">' + o + '<time class="published" datetime="' + r + '\">' + i + '</time></span>' : ''
}

function getPostMeta(e, t, a) {
    return 0x1 == exportnld['postLabels'] || 0x1 == exportnld['postDate'] ? '<div class=\"entry-meta mi\">' + t + e + '</div>' : ''
}

function getPostMeta(e, t, a) {
    return 0x1 == exportnld['postLabels'] || 0x1 == exportnld['postDate'] ? '<div class="entry-meta mi">' + t + e + '</div>' : ''
}

function getFirstImage(e, t) {
    var a = $("<div>")['html'](e)['find']('img:first')['attr']('src'),
        s = a['lastIndexOf']('/') || 0x0,
        o = a['lastIndexOf']('/', s - 0x1) || 0x0,
        e = a['substring'](0x0, o),
        o = a['substring'](o, s),
        s = a['substring'](s);
    return (o['match'](/\/s[0-9]+/g) || o['match'](/\/w[0-9]+/g) || '/d' == o) && (o = '/w72-h72-p-k-no-nu'), e + o + s
}
function getPostImage(e, t, a, s) {
    var o = e[t]['content']['$t'];
    return a = e[t]['media$thumbnail'] ? e[t]['media$thumbnail']['url'] : 'https://resources.blogblog.com/img/blank.gif', -0x1 < o['indexOf'](o['match'](/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) ? !(-0x1 < o['indexOf']('<img')) || o['indexOf'](o['match'](/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < o['indexOf']('<img') ? a['replace']('img.youtube.com', 'i.ytimg.com')['replace']('/default.', '/maxresdefault.') : getFirstImage(o) : -0x1 < o['indexOf']('<img') ? getFirstImage(o) : 'https://resources.blogblog.com/img/blank.gif'
}


function getPostImageType(e, t) {
    return e['match']('i.ytimg.com') ? 'is-video' : 'is-image'
}

function commentClick(e) {
    urlPost = purl[e - 0x1], comID = pcid[e - 0x1], $['ajax']({
        'url': '/feeds/' + pid[e - 0x1] + '/comments/summary',
        'type': 'GET',
        'dataType': 'json',
        'data': {
            'max-results': 0x0,
            'alt': 'json'
        },
        'success': function (_0x481e2f) {
            var t = '';
            num = _0x481e2f['feed']['openSearch$totalResults']['$t'], i = parseInt((num - 0x1) / 0xc8) + 0x1, i == 0x1 ? t = '?showComment#c' : t = '?showComment&commentPage=' + i + '#c', location['href'] = urlPost + t + comID
        }
    })
}

function getPostComments(e, t, a, s) {
    dk = e[t]['thr$in-reply-to']['href']['split']('/'), lk = e[t]['link'][0x0]['href']['split']('/'), pid[t] = lk[0x5], cid = lk[0x8], purl[t] = '/' + dk[0x3] + '/' + dk[0x4] + '/' + dk[0x5], pcid[t] = cid;
    var o = e[t]['author'][0x0]['name']['$t'],
        r = e[t]['author'][0x0]['gd$image']['src']['replace']('/s113', '/s72-c')['replace']('/s220', '/s72-c'),
        p = e[t]['published']['$t']['substring'](0x0, 0xa),
        z = nldSettings['listAdmin']['includes'](e[t]['author'][0x0]['uri'] ? e[t]['author'][0x0]['uri']['$t'] : 'javascript:void(0)') ? '<span class=\'icon user blog-author\'></span>' : '',
        e = e[t]['title']['$t']['replace'](/<\S[^>]*>/g, ' ');
    return (r['match']('//img1.blogblog.com/img/blank.gif') || r['match']('//img1.blogblog.com/img/b16-rounded.gif')) && (r = '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w72-h72-p-k-no-nu-rw-e30/avatar.jpg'), '<div class="cmm1-item item-' + t + '"><div class="entry-header"><span class="entry-image-wrap cmm-avatar"><span class="entry-thumb" data-image="' + r + '"></span></span><div class="entry-cmm-info"><span class="entry-title cmm-title">' + o + '</span>' + z + '<span class=\"entry-published cmm-published\">' + jQuery['timeago'](p) + '</span></div></div><p class="cmm-snippet excerpt">' + e + ' <a onclick=\"commentClick(' + (t + 0x1) + ');return false" href="' + a + '" title="' + o + '\">' + data['messages']['readMore'] + '</a></p></div>'
}
function getAjax(f, h, e, p) {
    switch (h) {
    case 'msimple':
    case 'trending':
    case 'list1':
    case 'randompost':
    case 'listpost':
    case 'carouselpost':
    case 'mcarouselpost':
    case 'sectionpost':
    case 'featuredpost':
    case 'related':
        0x0 == p && (p = 'geterror404');
        var t = getFeedUrl(h, e, p);
        $['ajax']({
            'url': t,
            'type': 'GET',
            'dataType': 'json',
            'cache': !0x0,
            'beforeSend': function (_0x2023a3) {
                switch (h) {
                case 'trending':
                case 'list1':
                case 'featuredpost':
                case 'sectionpost':
                case 'mcarouselpost':
                case 'carouselpost':
                case 'listpost':
                case 'randompost':
                    f['html'](beforeLoader());
                    break;
                case 'related':
                    f['html'](beforeLoader())['parent']()['addClass']('show-nld')
                }
            },
            'success': function (e) {
                var t = '';
                switch (h) {
                case 'msimple':
                    t = '<div class="ul mega-items">';
                    break;
                case 'trending':
                    t = '<div class="trending-items">';
                    break;
                case 'list1':
                    t ='comments' != p ? '<div class="list1-items sidebar-posts">' : '<div class="cmm1-items">';
                    break;
                case 'featuredpost':
                    t = '<div class=\"featuredpost-inner\">';
                    break;
                case 'listpost':
                    t = '<div class="listpost-inner">';
                    break;
                case 'sectionpost':
                    t = '<div class=\"sectionpost-inner\">';
                    break;
                case 'mcarouselpost':
                    t = '<div class="mcarouselpost-inner owl-carousel">';
                    break;
                case 'carouselpost':
                    t = '<div class="carouselpost-inner owl-carousel">';
                    break;
                case 'randompost':
                    t = '<div class="randompost-inner">';
                    break;
                case 'related':
                    t = '<div class="related-posts">'
                }
                if (null != (e = e['feed']['entry']))
                    for (var a = 0x0, s = e; a < s['length']; a++) {
                        var o = getPostLink(s, a),
                            r = getPostTitle(s, a),
                            i = getPostTag(s, a),
                            g = getPostAuthor(s, a),
                            n = getPostDate(s, a, i),
                            l = getPostImage(s, a),
                            c = getPostImageType(l, a),
                            d = getPostMeta(n, i),
                            m = '';
                        switch (h) {
                        case 'msimple':
                            m += '<div class="mega-item post"><div class="mega-content"><a title="' + r + '\" class=\"entry-image-wrap ' + c + '" href="' + o + '\"><span class=\"entry-thumb\" data-image=\"' + l + '"></span></a><h2 class="entry-title"><a href="' + o + '" title="' + r + '\">' + r + '</a></h2></div></div>';
                            break;
                        case 'trending':
                            m += 0x0 === a ? '<div class=\"trending-left\"><div class=\"trending-item item-' + a + '"><a title="' + r + '" class="entry-image-wrap ' + c + '" href="' + o + '\"><span class=\"entry-thumb\" data-image=\"' + l + '\"></span></a><div class=\"entry-header\">' + d + '<h2 class="entry-title"><a title="' + r + '" href="' + o + '\">' + r + '</a></h2></div></div></div><div class="trending-right">' : '<div class="trending-item item-' + a + '"><a title="' + r + '" class="entry-image-wrap ' + c + '\" href=\"' + o + '\"><span class=\"entry-thumb lazy\" data-image=\"' + l + '"></span></a><div class="entry-header">' + d + '<h2 class="entry-title"><a title="' + r + '" href="' + o + '\">' + r + '</a></h2></div></div>';
                            break;
                        case 'list1':
                            m += 'comments' === p ? getPostComments(s, a, o) : '<div class="list1-item post item-' + a + '\"><a title=\"' + r + '\" class=\"entry-image-wrap ' + c + '" href="' + o + '"><span class="entry-thumb" data-image="' + l + '"></span></a><div class="entry-header"><h2 class="entry-title"><a href="' + o + '\" title=\"' + r + '\">' + r + '</a></h2></div></div>';
                            break;
                        case 'mcarouselpost':
                            m += '<div class="mcarouselpost-item post item-' + a + '"><div class="entry-feat-mobile"><a title="' + r + '" class="entry-image-wrap ' + c + '" href="' + o + '"><span class="entry-thumb" data-image="' + l + '"></span></a><div class="entry-overlay"><div class="entry-holder"><aside class="category-info">' + i + '</aside><div class="entry-header"><h3 class="entry-title"><a href="' + o + '" title="' + r + '\">' + r + '</a></h3></div></div></div></div></div>';
                            break;
                        case 'carouselpost':
                            m += 0x0 === a % 0x2 ? '<div class=\"carouselpost-item post item-' + a + '\"><div class=\"entry-feat-slide\"><a title=\"' + r + '" class="entry-image-wrap ' + c + '" href="' + o + '"><span class="entry-thumb" data-image="' + l + '\"></span></a></div><div class=\"entry-content-wrap\"><aside class=\"category-info\">' + i + '</aside><div class="entry-header"><h3 class="entry-title"><a href="' + o + '\" title=\"' + r + '\">' + r + '</a></h3></div></div></div>' : '<div class="carouselpost-item reverse-post post item-' + a + '"><div class="entry-feat-slide"><a title="' + r + '" class="entry-image-wrap ' + c + '" href="' + o + '"><span class="entry-thumb" data-image="' + l + '"></span></a></div><div class="entry-content-wrap"><aside class="category-info">' + i + '</aside><div class=\"entry-header\"><h3 class=\"entry-title\"><a href=\"' + o + '" title="' + r + '\">' + r + '</a></h3></div></div></div>';
                            break;
                        case 'listpost':
                            m += 0x0 === a ? '<div class=\"listpost-item feat-post post item-' + a + '"><a title="' + r + '" class="entry-image-wrap ' + c + '\" href=\"' + o + '"><span class="entry-thumb" data-image="' + l + '\"></span></a><div class=\"list-overlay\"><div class=\"list-holder\"><aside class=\"category-info\">' + i + '</aside><div class=\"entry-header\"><h2 class=\"entry-title\"><a href=\"' + o + '\" title=\"' + r + '\">' + r + '</a></h2></div></div></div></div>' : 
                            + a + '\"><div class=\"entry-header\"><span class=\"list-dot\"><i class=\"list-dot-info\"></i></span><h2 class=\"entry-title\"><a href=\"' + o + '\" title=\"' + r + '\">' + r + '</a></h2></div></div>';
                            break;
                        case 'sectionpost':
                            m += '<div class="sectionpost-item post item-' + a + '\"><div class=\"entry-holder\"><div class=\"entry-feat-section\"><a title=\"' + r + '" class="entry-image-wrap ' + c + '\" href=\"' + o + '"><span class="entry-thumb" data-image="' + l + '"></span></a></div><aside class="category-info">' + i + '</aside></div><div class="entry-header"><h4 class="entry-title"><a href="' + o + '" title="' + r + '\">' + r + '</a></h4></div></div>';
                            break;
                        case 'featuredpost':
                            m += '<div class="randompost-item post item-' + a + '"><div class="entry-holder"><a title="' + r + '\" class=\"entry-image-wrap ' + c + '" href="' + o + '"><span class="entry-thumb" data-image="' + l + '\"></span></a><aside class=\"category-info\">' + i + '</aside></div><div class=\"entry-header\"><h2 class=\"entry-title\"><a href=\"' + o + '" title="' + r + '\">' + r + '</a></h2></div><div class="entry-footer"><div class="post-meta-info"><span class="meta-info-author">' + g +'</span><span class="meta-info-date">' + n + '</span></div><a class="meta-link" title="' + r + '" href="' + o + '"><span>Đọc tiếp</span><i class="rbi rbi-arrow-right"></i></a></div></div>';
                            break;
                        case 'randompost':
                            m += '<div class=\"randompost-item post item-' + a + '"><div class="entry-holder"><a title="' + r + '" class="entry-image-wrap ' + c + '" href="' + o + '"><span class="entry-thumb" data-image="' + l + '\"></span></a><aside class=\"category-info\">' + i + '</aside></div><div class="entry-header"><h2 class="entry-title"><a href="' + o + '" title="' + r + '\">' + r + '</a></h2></div></div>';
                            break;
                        case 'related':
                            m += '<div class="related-item post item-' + a + '"><div class="entry-holder"><a title="' + r + '" class="entry-image-wrap ' + c + '\" href=\"' + o + '\"><span class=\"entry-thumb\" data-image=\"' + l + '"></span></a><aside class="category-info">' + i + '</aside></div><div class="entry-header"><h2 class="entry-title"><a href="' + o + '" title="' + r + '\">' + r + '</a></h2></div></div>'
                        }
                        t += m
                    } else t = 'msimple' === h ? '<div class="ul mega-items no-items">' + msgError() + '</div>' : msgError();
                'msimple' === h ? (t += '</div>', f['append'](t)['addClass']('msimple'), f['find']('a:first')['attr']('href', function (e, t) {
                    return 'recent' === p ? t['replace'](t, '/search') : t['replace'](t, '/search/label/' + p)
                })) : (t += '</div>', f['html'](t)), ('carouselpost' === h || 'mcarouselpost' === h) && nldOwlSlider(f), f['find']('span.entry-thumb')['lazynld'](), f['find']('.entry-time .published')['timeago']()
            },
            'error': function () {
                'msimple' === h ? f['append']('<div class="ul mega-items no-items">' + msgError() + '</div>') : f['html'](msgError())
            }
        })
    }
}
function ajaxMega(e, t, a, s, o) {
    if (o['match']('getmega')) {
        if ('msimple' == t) return getAjax(e, t, a, s);
        e['append']('<div class=\"ul mega-items no-items\">' + msgError() + '</div>')
    }
}
function ajaxTrending(e, t, a, s, o) {
    if (o['match']('gettrending')) {
        if ('trending' == t) return getAjax(e, t, a, s);
        e['html'](msgError())['parent']()['addClass']('show-nld')
    }
}
function ajaxBlock(e, t, a, s, o) {
    if (o['match']('getcontent')) {
        if ("mcarouselpost" == t || "carouselpost" == t || "featuredpost" == t || "sectionpost" == t || "listpost" == t || "randompost" == t) return getAjax(e, t, a, s);
        e['html'](msgError())
    }
}
function ajaxWidget(e, t, a, s, o) {
    if (o.match("getwidget")) {
        if ("list1" == t) return getAjax(e, t, a, s);
        e.html(msgError())
    }
}
function ajaxRelated(e, t, a, s, o) {
    if (o['match']('getrelated')) return getAjax(e, t, a, s)
}
function disqusComments(e) {
    var t = document.createElement("script");
    t.type = "text/javascript", t.async = !0, t.src = "//" + e + ".disqus.com/blogger_item.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t)
}
function initParallax(wrapper, posTop, elHeight, percent) {
    var scrollTop = $(document).scrollTop();
    if (Math.abs(scrollTop - posTop) <= elHeight) {
        var parallaxMove = Math.round((scrollTop - posTop) / percent);
        wrapper.css('transform', 'translate3d(0,' + parallaxMove + 'px, 0)');
        wrapper.css('-webkit-transform', 'translate3d(0,' + parallaxMove + 'px, 0)')
    }
}
function parallaxCalcAnimation(wrapper, posTop, elHeight, percent) {
    var scrollTop = $(document).scrollTop();
    if (Math.abs(scrollTop - posTop) <= elHeight) {
        var parallaxMove = Math.round((scrollTop - posTop) / percent);
        wrapper.css('transform', 'translate3d(0,' + parallaxMove + 'px, 0)');
        wrapper.css('-webkit-transform', 'translate3d(0,' + parallaxMove + 'px, 0)')
    }
}

function save_this_article(e) {
    e['preventDefault']();
    var _0x106fa2 = $('.save-all-posts'),
        _0x96c779 = $(this)['parents']('.blog-post'),
        _0x2ba622 = $(this)['attr']('data-bookmarkid'),
        _0x13cf65 = Number($(_0x106fa2)['attr']('data-items-added')),
        _0x31f85f = '<article class="blog-post hentry index-post" data-id="' + _0x2ba622 + '\">' + _0x96c779['html']() + '</article>';
    $(this)['toggleClass']('added');
    $(this)['hasClass']('added') ? ($(_0x106fa2)['attr']('data-items-added', _0x13cf65 + 0x1), $(_0x31f85f)['appendTo'](_0x106fa2), $(_0x106fa2)['find']('article .bookmark-item[data-bookmarkid=' + _0x2ba622 + ']')['addClass']('added'), $('.bookmark-icon')['attr']('data-counter', _0x13cf65 + 0x1)) : ($(_0x106fa2)['attr']('data-items-added', _0x13cf65 - 0x1), $(_0x106fa2)['find']('article[data-id=' + _0x2ba622 + ']')['remove'](), $('.bookmark-icon')['attr']('data-counter', _0x13cf65 - 0x1));
    var _0x35cdb8 = $(_0x106fa2)['html']();
    localStorage['setItem']('saved_data', _0x35cdb8)
}

function save_all_posts() {
    var _0xe0a4bc = '',
        _0x5e7d2a = $('.save-all-posts'),
        _0x259ea0 = [];
    if (_0xe0a4bc = localStorage['getItem']('saved_data')) {
        $(_0x5e7d2a)['html'](_0xe0a4bc);
        var _0x59f7c0 = $('.save-all-posts>article');
        for (var _0x13e76d = 0x0; _0x13e76d < _0x59f7c0['length']; _0x13e76d++) _0x259ea0['push']($(_0x59f7c0[_0x13e76d])['attr']('data-id'));
        $(_0x5e7d2a)['attr']('data-items-added', _0x259ea0['length']), $('.bookmark-icon')['attr']('data-counter', _0x259ea0['length']), $('.bookmark-item')['each'](function (_0x29b25e, _0x4a8176) {
            var _0x340868 = $(_0x4a8176)['attr']('data-bookmarkid');
            if (_0x259ea0['includes'](_0x340868)) $(_0x4a8176)['addClass']('added')
        }), data['blog']['pageName'] == 'archive' && ($('.bookmark-list')['append'](_0xe0a4bc)['removeClass']('loader')['addClass']('index-post-wrap'), ld_Views())
    } else {
        if (data['blog']['pageName'] == 'archive') $('.bookmark-list')['removeClass']('loader')['html']('<div class="bookmark-empty"><div class="bookmark-empty-icon"><i class="rbi rbi-warning"></i></div><h6 class="h3">Không tìm thấy</h6><p>Vui lòng thêm một số bài viết để lưu vào Bookmark.</p></div>')
    }
}