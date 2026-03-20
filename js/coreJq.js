$('#nldmag-pro-main-nav')['menunld'](), $('#nldmag-pro-main-nav .widget')['addClass']('show-menu'), $('html')['each'](function () {
    var _0x4cd164 = $(this);
    0x1 != darkMode && 0x0 != userDarkMode && ('dark' == localStorage['themeColor'] && _0x4cd164['addClass']('is-dark'), $('.darkmode-toggle')['on']('click', function () {
        'dark' != localStorage['themeColor'] ? (_0x4cd164['addClass']('is-dark'), localStorage['themeColor'] = 'dark') : (_0x4cd164['removeClass']('is-dark'), localStorage['themeColor'] = 'light')
    }))
}), data['view']['isSingleItem'] && $('.post-body b')['each'](function () {
    var _0x31f013 = _0x14d2a1,
        e = $(this),
        t = e['text'](),
        a = t['toLowerCase']()['trim']();
    a['match'](/(?:\$ads\=\{1\})/g) && e['replaceWith']('<div id="nldmag-pro-new-before-ad"/>'), a['match'](/(?:\$ads\=\{2\})/g) && e['replaceWith']('<div id="nldmag-pro-new-after-ad"/>'), a['match']('{tocnld}') && (t = 0x0 != shortCodeNld(t, 'title') ? shortCodeNld(t, 'title') : 'Table of Contents', e['replaceWith']('<div class="tocnld-wrap"><div class="tocnld-inner"><a href="javascript:;" class="tocnld-title" role="button" title="' + t + '"><span class="tocnld-title-text">' + t + '</span></a><ol id="tocnld"></ol></div></div>'), $('.tocnld-title')['each'](function (e) {
        (e = $(this))['on']('click', function () {
            var _0x53612a = _0x10fa;
            e['toggleClass']('is-expanded'), $('#tocnld')['slideToggle'](0xaa)
        })
    }), $('#tocnld')['toc']({
        'content': '#post-body',
        'headings': 'h2,h3,h4'
    }), $('#tocnld li a')['each'](function (e) {
        (e = $(this))['click'](function () {
            return $('html,body')['animate']({
                'scrollTop': $(e['attr']('href'))['offset']()['top'] - 0x14
            }, 0x1f4), !0x1
        })
    })), a['match']('{contactform}') && (e['replaceWith']('<div class=\"contact-form\"/>'), $('.contact-form')['append']($('#ContactForm1'))), a['match']('{leftsidebar}') && e['replaceWith']('<style>.is-single #content-wrapper > .container{flex-direction:row-reverse}.rtl .is-single #content-wrapper > .container{flex-direction:row}</style>'), a['match']('{rightsidebar}') && e['replaceWith']('<style>.is-single #content-wrapper > .container{flex-direction:row}.rtl .is-single #content-wrapper > .container{flex-direction:row-reverse}</style>'), a['match']('{fullwidth}') && e['replaceWith']('<style>.is-single #main-wrapper{width:100%}.is-single #sidebar-wrapper,.single-left-section{display:none}.item-post .blog-entry-header .entry-meta,.item-post #breadcrumb{justify-content:center}.entry-meta .entry-greetings{display:flex;display:-webkit-flex;align-items:center;flex-flow:row wrap;min-height:1.375rem}.entry-meta .entry-greetings:before{width:0;height:6px;margin-right:7px;margin-left:7px;content:\'\';letter-spacing:0;opacity:.2;border-left:2px solid}.item-post h1.entry-title{max-width:700px;margin-right:auto;margin-left:auto;text-align:center}.single-tagline{padding-left:0;max-width:700px;margin-right:auto;margin-left:auto;text-align:center}.single-tagline:before{content:none}.is-single.is-post #post-body{max-width:100%;width:100%}.entry-content-wrap,.post-footer,.nldmag-pro-blog-post-comments,.post-nav{max-width:780px;float:none;margin-right:auto;margin-left:auto;clear:both}.post-share{max-width:780px;float:none;margin-right:auto;margin-left:auto;clear:both;display:table}.item-post .blog-entry-header{padding:0;border:unset}</style>'), a['match']('{featureimage}') && e['replaceWith']('<style>.content-header{position:relative;list-style:none;overflow:hidden;width:100%;padding:0;border-radius:10px;background:#0a0a0a}.item-post .blog-entry-header{margin:0 auto;padding:10% 5%;z-index:1;border-bottom:unset}.single-tagline{display:none}.feat-wrap img{opacity:.5;filter:blur(2px);position:absolute;z-index:0;top:0;left:0;overflow:hidden;width:100%;height:100%;margin:0;padding:0;object-fit:cover;display:block;pointer-events:none}.entry-feat{position:unset;margin-top:0;transform:unset;-webkit-transform:unset}.feat-wrap{position:unset}#breadcrumb a,.item-post .has-meta h1.entry-title,.item-post .blog-entry-header .entry-meta{color:#fff}</style>'), a['match']('{nofeatured}') && e['replaceWith']('<style>.item-post .blog-entry-header{border-bottom:unset;background-image:linear-gradient(to right,rgba(0,0,0,.04) 66.666%,rgba(255,255,255,0) 0%);background-repeat:repeat-x;background-position:bottom;background-size:35px 5px;padding:0 0 25px}</style>') && $('.entry-feat')['remove'](), a['match']('{parallaxthumb}') && e['replaceWith']('<style>.content-header{position:relative;float:left;width:100%;overflow:visible;margin:0;display:block;padding:0}#outer-wrapper > div.content-header > div.entry-header.blog-entry-header.has-meta{position:absolute;z-index:1;top:0;right:0;bottom:0;left:0;display:flex;display:-webkit-flex;flex-flow:column nowrap;justify-content:flex-end;width:1110px;margin:0 auto;padding:0 0 30px}.entry-feat{position:relative;display:block;overflow:hidden;height:70vh;min-height:600px;background-color:#0a0a0a;pointer-events:none;z-index:0;margin:0}#outer-wrapper > div.content-header > div.entry-header.blog-entry-header.has-meta > div{justify-content:space-between;flex-flow:row nowrap;margin-top:15px;flex:inherit;color:#fff}#outer-wrapper > div.content-header > div.entry-header.blog-entry-header.has-meta > div > div.align-left,#outer-wrapper > div.content-header > div.entry-header.blog-entry-header.has-meta > div > div.align-right{display:flex;flex-wrap:wrap;align-items:center}.feat-wrap{position:relative;top:0;display:block;width:100%;height:120%;-webkit-transition:-webkit-transform 0;transition:transform 0;will-change:transform}.feat-wrap img{position:absolute;width:100%;height:100%;border-radius:0;opacity:.4;top:auto;right:auto;bottom:auto;left:auto}#outer-wrapper > div.content-header > div.entry-header.blog-entry-header.has-meta > h1,#breadcrumb a{color:#fff}#before-ad .widget{margin:0}.is-post .navbar-wrap .is-main-nav{border-bottom:unset}#header-ads-wrap{display:none}.single-tagline{max-width:700px}.single-tagline h6.h4{color:#fff}.single-tagline:before{opacity:.7}@media only screen and (min-width:1200px){#outer-wrapper > div.content-header > div.entry-header.blog-entry-header.has-meta > h1{font-size:3.2rem;max-width:900px}}@media (max-width:1170px){#outer-wrapper > div.content-header > div.entry-header.blog-entry-header.has-meta{width:100%;padding:0 15px 30px}}@media only screen and (max-width:991px){.entry-feat{height:50vh;min-height:250px}}@media (max-width:480px){.single-tagline{margin-bottom:0}}</style>') && $(document)['ready'](function () {
            $('.content-header')['insertBefore']('#content-wrapper'), $('.entry-feat')['each'](function () {
                var el = $(this),
                    wrapper = el['find']('.feat-wrap'),
                    posTop = el['offset']()['top'],
                    elHeight = el['height']();
                initParallax(wrapper, posTop, elHeight, 0x4), setTimeout(function () {
                    el['addClass']('loaded-parallax')
                }, 0x1f4);
                if (window['addEventListener']) window['addEventListener']('scroll', function () {
                    parallaxCalcAnimation(wrapper, posTop, elHeight, 0x4)
                }, !0x1);
                else window['attachEvent'] && window['attachEvent']('onscroll', function () {
                    parallaxCalcAnimation(wrapper, posTop, elHeight, 0x4)
                })
            })
        })
}), data['view']['isSingleItem'] && $('.post-body h2 strike')['each'](function () {
    var a = $(this)['parent'](),
        s = document['querySelector']('.post-body h2 strike')['innerHTML'];
    document['querySelector']('h1.entry-title')['innerHTML'] = s, a['remove']()
}), $('.sidebar .social-icons li a')['each'](function () {
    var _0x3eb36a = $(this),
        _0x5a81b2 = _0x3eb36a['attr']('href')['trim']()['split']('#');
    null != _0x5a81b2[0x1] && _0x3eb36a['append']('<span class="text">' + _0x5a81b2[0x1] + '</span>'), _0x3eb36a['attr']('href', _0x5a81b2[0x0])
}), data['view']['isSingleItem'] && $('#nldmag-pro-main-before-ad .widget')['each'](function () {
    var _0x4acf7 = $(this);
    _0x4acf7['length'] && _0x4acf7['appendTo']($('#before-ad'))
}), data['view']['isSingleItem'] && $('#nldmag-pro-main-after-ad .widget')['each'](function () {
    var _0x4675c8 = $(this);
    _0x4675c8['length'] && _0x4675c8['appendTo']($('#after-ad'))
}), data['view']['isSingleItem'] && $('#nldmag-pro-post-footer-ads .widget')['each'](function () {
    var _0x3b3ba7 = $(this);
    _0x3b3ba7['length'] && _0x3b3ba7['appendTo']($('#post-footer-ads'))
}), $('.entry-share-links .window-nld,.nldmag-pro-share-links .window-nld,.share-content .window-nld')['on']('click', function () {
    var _0x3c2e91 = (_0x145380 = $(this))['data']('url'),
        _0x562d82 = _0x145380['data']('width'),
        _0x5371e1 = _0x145380['data']('height'),
        _0x1ff296 = window['screen']['width'],
        _0x145380 = window['screen']['height'],
        _0x1ff296 = Math['round'](_0x1ff296 / 0x2 - _0x562d82 / 0x2),
        _0x145380 = Math['round'](_0x145380 / 0x2 - _0x5371e1 / 0x2);
    window['open'](_0x3c2e91, '_blank', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=' + _0x562d82 + ',height=' + _0x5371e1 + ',left=' + _0x1ff296 + ',top=' + _0x145380)['focus']()
}), data['view']['isPost'] && $('.nldmag-pro-blog-post-comments')['each'](function () {
    0x1 != darkMode && 'dark' == localStorage['themeColor'] && (fbCommentsTheme = 'dark');
    var _0xee384c = $(this),
        _0x4636af = _0xee384c['data']('shortcode'),
        _0x521d37 = 'comments-system-' + (r = shortCodeNld(_0x4636af, 'type'));
    switch (r) {
        case 'disqus':
            var _0xb2f89b = shortCodeNld(_0x4636af, 'shortname');
            0x0 != _0xb2f89b && (disqus_shortname = _0xb2f89b), disqusComments(disqus_shortname), _0xee384c['addClass'](_0x521d37)['show']();
            break;
        case 'facebook':
            _0xee384c['addClass'](_0x521d37)['find']('#comments')['html']('<div class="fb-comments" data-width="100%" data-href="' + disqus_blogger_current_url + '" order_by="time" data-colorscheme="' + fbCommentsTheme + '" data-numposts="5" data-lazy="true"></div>'), _0xee384c['show']();
            break;
        case 'hide':
            _0xee384c['hide']();
            break;
        default:
            _0xee384c['addClass']('comments-system-blogger')['show'](), $('.entry-meta .entry-comments-link')['addClass']('show')
    }
}), Defer(function () {
    var _0x454066 = _0x14d2a1;
    $('.entry-image-wrap .entry-thumb,.author-avatar-wrap .author-avatar,#footer-fbm .Image')['lazynld'](), $('.nldmag-pro-share-links')['each'](function () {
        var _0x304ffa = $(this);
        _0x304ffa['find']('.show-hid a')['on']('click', function () {
            _0x304ffa['toggleClass']('show-hidden')
        })
    }), $('#nldmag-pro-main-nav-menu li.mega-menu')['each'](function (_0x383def, _0x337210) {
        var a = $(this),
            s = a['find']('a')['data']('shortcode');
        null != s && (_0x383def = s['toLowerCase'](), ajaxMega(a, 'msimple', 0x5, shortCodeNld(s, 'label'), _0x383def))
    }), $('.nldmag-pro-widget-ready .HTML .widget-content')['each'](function (_0x3f3f74, _0xbf9c41, _0x2c09cf) {
        var _0x289fea = $(this),
            _0x2a5172 = $(window),
            _0x12e5a5 = _0x289fea['data']('shortcode');
        null != _0x12e5a5 && (_0x3f3f74 = _0x12e5a5['toLowerCase'](), _0xbf9c41 = shortCodeNld(_0x12e5a5, 'results'), _0x2c09cf = shortCodeNld(_0x12e5a5, 'label'), _0x2a5172['on']('scroll', function e() {
            _0x2a5172['scrollTop']() + _0x2a5172['height']() >= _0x289fea['offset']()['top'] && (_0x2a5172['off']('scroll', e), ajaxWidget(_0x289fea, 'list1', _0xbf9c41, _0x2c09cf, _0x3f3f74))
        })['trigger']('scroll'))
    }), $('.content-section-wrap .HTML .widget-content')['each'](function (t, a, s) {
        var o = $(this),
            e = $(window),
            e = o['data']('shortcode');
        null != e && (mtc = e['toLowerCase'](), a = shortCodeNld(e, 'results'), s = shortCodeNld(e, 'label'), 'colLeft' != (t = shortCodeNld(e, 'type')) && 'colRight' != t || o['parent']()['addClass']('column-style type-' + t), e['on']('scroll', function e() {
            e['scrollTop']() + e['height']() >= o['offset']()['top'] && (e['off']('scroll', e), ajaxBlock(o, t, a, s, mtc))
        })['trigger']('scroll'))
    }), $('#nldmag-pro-related-posts .HTML')['each'](function (i, n) {
        var l = $(this)['data']('shortcode');
        null != l && $('#related-wrap')['each'](function (t, a) {
            var e = $(this),
                s = $(window),
                o = e['find']('.nldmag-pro-related-content'),
                r = (i = shortCodeNld(l, 'title'), n = shortCodeNld(l, 'results'), [i, n]);
            t = 0x0 != r[0x1] ? r[0x1] : 0x4, 0x0 != r[0x0] && e['find']('.related-title .title')['text'](r[0x0]), a = e['find']('.related-tag')['data']('label'), s['on']('scroll', function _0x5cb331() {
                s['scrollTop']() + s['height']() >= o['offset']()['top'] && (s['off']('scroll', _0x5cb331), ajaxRelated(o, 'related', t, a, 'getrelated'))
            })['trigger']('scroll')
        })
    }), $('#nldmag-pro-mobile-menu')['each'](function () {
        var _0x2afcbc = _0x454066,
            _0x54b59b = $(this),
            _0x37ef00 = $('#nldmag-pro-main-nav-menu')['clone']();
        _0x37ef00['attr']('id', 'main-mobile-nav'), _0x37ef00['find']('.mega-items')['remove'](), _0x37ef00['find']('.mega-menu > a')['each'](function (_0x433cc2, _0x2c1a22) {
            var _0x62d511 = $(this),
                _0x45aac8 = _0x62d511['data']('shortcode');
            null != _0x45aac8 && (_0x2c1a22 = 'recent' == (_0x433cc2 = shortCodeNld(_0x45aac8['trim'](), 'label')) ? '/search' : '/search/label/' + _0x433cc2, _0x62d511['attr']('href', _0x2c1a22))
        }), _0x37ef00['appendTo'](_0x54b59b), $('.mobile-menu-toggle, .hide-nldmag-pro-mobile-menu, .overlay')['on']('click', function () {
            $('body')['toggleClass']('nav-active')
        }), $('.nldmag-pro-mobile-menu .has-sub')['append']('<div class="submenu-toggle"/>'), $('.nldmag-pro-mobile-menu .mega-menu')['find']('.submenu-toggle')['remove'](), $('.nldmag-pro-mobile-menu ul li .submenu-toggle')['on']('click', function (_0x5b56ab) {
            $(this)['parent']()['hasClass']('has-sub') && (_0x5b56ab['preventDefault'](), ($(this)['parent']()['hasClass']('show') ? $(this)['parent']()['removeClass']('show')['find']('> .m-sub') : $(this)['parent']()['addClass']('show')['children']('.m-sub'))['slideToggle'](0xaa))
        })
    }), $('.mm-footer .mm-menu')['each'](function () {
        var _0x49f1b8 = $(this);
        $('#footer-menu ul.link-list')['clone']()['appendTo'](_0x49f1b8)
    }), $('.slide-header-inner .mm-social')['each'](function () {
        var _0x5f561a = $(this),
            _0x5992a7 = $('.footer-widget-inner .section ul.social')['clone']();
        _0x5992a7['removeClass']('social-bg-hover'), _0x5992a7['appendTo'](_0x5f561a)
    }), $('.show-search')['off']('click')['on']('click', function (_0x2d4e71) {
        _0x2d4e71['preventDefault'](), _0x2d4e71['stopPropagation']();
        var _0x14027c = $(this)['next']('.main-search-wrap');
        $(this)['toggleClass']('close'), $('body')['find']('.show-searchform')['not'](_0x14027c)['removeClass']('show-searchform'), _0x14027c['toggleClass']('show-searchform')
    }), $('.section-sticky-holder')['each'](function () {
        var navOuter = $('.header-inner'),
            showPos = navOuter['offset']()['top'] + navOuter['height']() + 0x46,
            e, o = $(this);
        0x1 == fixedMenu && 0x0 < o['length'] && $(window)['width']() >= 0x3e0 && ($(this)['css']('top', '-' + $(this)['height']() + 'px'), $(window)['scroll'](function () {
            var _0x52daa2 = $(this)['scrollTop']();
            showPos < _0x52daa2 ? o['addClass']('is-show') : (_0x52daa2 < showPos || _0x52daa2 <= 0x1) && o['removeClass']('is-show') && $('body')['find']('.show-searchform')['removeClass']('show-searchform') && $('body')['find']('.show-search')['removeClass']('close')
        }))
    }), $('#nldmag-pro-main-nav-menu')['each'](function () {
        var _0xdc8bcf = $(this);
        _0xdc8bcf['length'] > 0x0 && _0xdc8bcf['each'](function () {
            var _0x57fa03 = $(this),
                _0x2e926e = _0x57fa03['find']('.sub-menu');
            _0x2e926e['length'] > 0x0 && $(_0x2e926e)['each'](function () {
                var _0x197b47 = $(this),
                    _0x5fd17 = _0x197b47['children']('li')['children']('a'),
                    _0x5ebdb9 = 0x0;
                $(_0x5fd17)['each'](function () {
                    var _0x586e89 = $(this),
                        _0x4c3618 = 0xc8 + 0x23 * _0x5ebdb9;
                    _0x586e89['css']('transition-delay', _0x4c3618 + 'ms'), _0x586e89['css']('-webkit-transition-delay', _0x4c3618 + 'ms'), _0x5ebdb9++
                });
                var _0x57340d = _0x2e926e['find']('.sub-menu2');
                _0x57340d['length'] > 0x0 && $(_0x57340d)['each'](function () {
                    var _0x16753c = $(this),
                        _0x583837 = _0x16753c['children']('li')['children']('a'),
                        _0x1ab293 = 0x0;
                    $(_0x583837)['each'](function () {
                        var _0x316583 = $(this),
                            _0x5066d0 = 0xc8 + 0x23 * _0x1ab293;
                        _0x316583['css']('transition-delay', _0x5066d0 + 'ms'), _0x316583['css']('-webkit-transition-delays', _0x5066d0 + 'ms'), _0x1ab293++
                    })
                })
            })
        })
    }), data['view']['isSingleItem'] && loadJs('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/highlight.min.js', 'hl-jspl', 'body', function () {
        $('.post-body pre')['each'](function () {
            var _0x3bc678 = $(this),
                _0xf33942 = (_0x3bc678['text']()['toLowerCase']()['trim'](), _0x3bc678['html']()),
                _0x3ea978 = _0x3bc678['attr']('class') || 'html',
                _0x387701 = _0x3bc678['attr']('data-text');
            g = _0x3bc678['is']('[data-text]') ? 'data-text="' + _0x387701 + '\"' : '', _0x3bc678['is']('[class]') && _0x3bc678['replaceWith']('<div class=\"pre ' + _0x3ea978 + '\" ' + g + '><pre class="' + _0x3ea978 + '\">' + _0xf33942 + '</pre></div>')
        }), $('.post-body .pre>pre')['each'](function (_0x5c7932, _0x2bcd92) {
            var _0x547e34 = $(this);
            _0x547e34['is']('[class]') && hljs['highlightBlock'](_0x2bcd92), _0x2bcd92['addEventListener']('dblclick', function () {
                var _0x530b70 = getSelection(),
                    _0x3467df = document['createRange']();
                _0x3467df['selectNodeContents'](this), _0x530b70['removeAllRanges'](), _0x530b70['addRange'](_0x3467df), document['execCommand']('copy'), _0x530b70['removeAllRanges'](), toastNotif(NLDtst['preCopy']['copiedMes'])
            }, !0x1)
        })
    }), data['view']['isSingleItem'] && $('.post-body a')['each'](function () {
        var _0x26b6a0 = $(this),
            _0x3d5b75 = (_0x39686c = _0x26b6a0['html']())['toLowerCase'](),
            _0x3944ac = shortCodeNld(_0x39686c, 'text'),
            _0x244610 = shortCodeNld(_0x39686c, 'icon'),
            _0x39686c = shortCodeNld(_0x39686c, 'color');
        _0x3d5b75['match']('getbutton') && 0x0 != _0x3944ac && (_0x26b6a0['addClass']('button btn')['text'](_0x3944ac), 0x0 != _0x244610 && _0x26b6a0['addClass'](_0x244610), 0x0 != _0x39686c && _0x26b6a0['addClass']('colored-button')['attr']('style', 'background-color:' + _0x39686c + ';'))
    }), data['view']['isSingleItem'] && $('.post-body blockquote')['each'](function () {
        var _0x4029d3, _0x2ccddb, _0x424da7 = $(this),
            _0x388b0e = _0x424da7['text']()['toLowerCase']()['trim'](),
            _0x44bec3 = _0x424da7['html']();
        _0x388b0e['match']('{alertsuccess}') && (_0x4029d3 = _0x44bec3['replace']('{alertSuccess}', ''), _0x424da7['replaceWith']('<div class="alert-message alert-success">' + _0x4029d3 + '</div>')), _0x388b0e['match']('{alertinfo}') && (_0x4029d3 = _0x44bec3['replace']('{alertInfo}', ''), _0x424da7['replaceWith']('<div class="alert-message alert-info">' + _0x4029d3 + '</div>')), _0x388b0e['match']('{alertwarning}') && (_0x2ccddb = _0x44bec3['replace']('{alertWarning}', ''), _0x424da7['replaceWith']('<div class="alert-message alert-warning">' + _0x2ccddb + '</div>')), _0x388b0e['match']('{alerterror}') && (_0x2ccddb = _0x44bec3['replace']('{alertError}', ''), _0x424da7['replaceWith']('<div class=\"alert-message alert-error\">' + _0x2ccddb + '</div>')), _0x388b0e['match']('{codebox}') && (_0x44bec3 = _0x44bec3['replace']('{codeBox}', ''), _0x424da7['replaceWith']('<pre class="code-box">' + _0x44bec3 + '</pre>'))
    }), data['view']['isSingleItem'] && $('#post-body iframe')['each'](function () {
        var _0x19dcd4 = $(this);
        _0x19dcd4['attr']('src')['match']('www.youtube.com') && _0x19dcd4['wrap']('<div class="responsive-video-wrap"/>')
    }), $('.section-sticky-holder aside.main-menu-wrap')['each'](function () {
        var _0x268af0 = $(this),
            _0x59ace4 = $('#nldmag-pro-main-nav')['clone']();
        _0x59ace4['appendTo'](_0x268af0), $('.section-sticky-holder #nldmag-pro-main-nav-menu li.mega-menu')['each'](function (_0x4c0854, _0x504e3e) {
            var _0x22f2ee = $(this),
                _0x399f94 = _0x22f2ee['find']('a')['data']('shortcode');
            null != _0x399f94 && (_0x4c0854 = _0x399f94['toLowerCase'](), ajaxMega(_0x22f2ee, 'msimple', 0x5, shortCodeNld(_0x399f94, 'label'), _0x4c0854))
        })
    }), data['view']['isMobile'] && $('.mobile-sticky-nav')['each'](function () {
        var _0x1234e1 = $('.header-inner'),
            _0x4967f2 = _0x1234e1['offset']()['top'] + _0x1234e1['height']() + 0x46,
            _0x479ffd, _0x19a91b = $(this);
        0x1 == fixedMenu && 0x0 < _0x19a91b['length'] && $(window)['width']() < 0x3e0 && ($(this)['css']('top', '-' + $(this)['height']() + 'px'), $(window)['scroll'](function () {
            var _0x42ef02 = $(this)['scrollTop']();
            _0x4967f2 < _0x42ef02 ? _0x19a91b['addClass']('is-show') : (_0x42ef02 < _0x4967f2 || _0x42ef02 <= 0x1) && _0x19a91b['removeClass']('is-show')
        }))
    }), $('.is-single #main-wrapper, .is-single #sidebar-wrapper')['each'](function (_0x31476d) {
        0x1 == fixedSidebar && (_0x31476d = 0x1 == fixedSidebar ? 0x58 : 0x28, $(this)['theiaStickySidebar']({
            'containerSelector': '#content-wrapper > .container',
            'additionalMarginTop': _0x31476d,
            'additionalMarginBottom': 0x28
        }))
    }), data['view']['isMultipleItems'] && $('#nldmag-pro-load-more-link')['each'](function () {
        var _0x6d28cc = $(this)['data']('load');
        _0x6d28cc && $('#nldmag-pro-load-more-link')['show'](), $('#nldmag-pro-load-more-link')['on']('click', function (_0x40540e) {
            $('#nldmag-pro-load-more-link')['hide'](), $['ajax']({
                'url': _0x6d28cc,
                'success': function (_0x214bd3) {
                    var _0x4b25f5 = $(_0x214bd3)['find']('.blog-posts');
                    _0x4b25f5['find']('.index-post')['addClass']('post-animated post-fadeInUp'), $('.blog-posts')['append'](_0x4b25f5['html']()), (_0x6d28cc = $(_0x214bd3)['find']('#nldmag-pro-load-more-link')['data']('load')) ? $('#nldmag-pro-load-more-link')['show']() : ($('#nldmag-pro-load-more-link')['hide'](), $('#blog-pager .no-more')['addClass']('show')), ld_Views(), save_all_posts()
                },
                'beforeSend': function () {
                    $('#blog-pager .loading')['show']()
                },
                'complete': function () {
                    $('#blog-pager .loading')['hide'](), $('.index-post .entry-image-wrap .entry-thumb')['lazynld'](), $('.entry-time .published')['timeago']()
                }
            }), _0x40540e['preventDefault']()
        })
    }), $('#nldmag-pro-cookie-nld')['each'](function () {
        var _0x27f4d3 = $(this),
            _0x4b99d7 = _0x27f4d3['find']('.widget.Text')['data']('shortcode');
        null != _0x4b99d7 && (ok = shortCodeNld(_0x4b99d7, 'ok'), days = shortCodeNld(_0x4b99d7, 'days'), 0x0 != ok && _0x27f4d3['find']('#nldmag-pro-cookie-nld-accept')['text'](ok), days = 0x0 != days ? Number(days) : 0x7), 0x0 < _0x27f4d3['length'] && ('1' !== $['cookie']('nldmag_pro_cookie_nld_consent') && (_0x27f4d3['css']('display', 'block'), setTimeout(function () {
            _0x27f4d3['addClass']('is-visible')
        }, 0xa)), $('#nldmag-pro-cookie-nld-accept')['off']('click')['on']('click', function (_0x241289) {
            var _0xbdd5dc = {};
            _0xbdd5dc['expires'] = days, _0xbdd5dc['path'] = '/', _0x241289['preventDefault'](), _0x241289['stopPropagation'](), $['cookie']('nldmag_pro_cookie_nld_consent', '1', _0xbdd5dc), _0x27f4d3['removeClass']('is-visible'), setTimeout(function () {
                _0x27f4d3['css']('display', 'none')
            }, 0x1f4)
        }), cookieChoices = {})
    }), $('#back-top')['each'](function () {
        var _0x540bc9 = $(this);
        $(window)['on']('scroll', function () {
            0x64 <= $(this)['scrollTop']() ? _0x540bc9['fadeIn'](0xaa) : _0x540bc9['fadeOut'](0xaa), _0x540bc9['offset']()['top'] >= $('#footer-wrapper')['offset']()['top'] - 0x22 ? _0x540bc9['addClass']('on-footer') : _0x540bc9['removeClass']('on-footer')
        }), _0x540bc9['on']('click', function () {
            $('html, body')['animate']({
                'scrollTop': 0x0
            }, 0x320)
        })
    }), $('.follow-blog')['each'](function () {
        var _0x2d2cd1 = $(this);
        $(window)['on']('scroll', function () {
            0x64 <= $(this)['scrollTop']() ? _0x2d2cd1['addClass']('show') : _0x2d2cd1['removeClass']('show')
        })
    }), $('.entry-time .published')['each'](function () {
        $(this)['timeago']()
    }), $('.nb-newsletter-form')['submit'](function () {
        var _0x3189e2 = $(this),
            _0x36bb3d = _0x3189e2['find'](':checkbox[name="nb_privacy"]');
        if (_0x36bb3d != null && _0x36bb3d['length'] > 0x0) {
            var _0x22a2b6 = _0x36bb3d['prop']('checked');
            if (!_0x22a2b6) return toastNotif('Xin vui lòng xác nhận đồng ý nhận tin!'), !0x1;
            else _0x3189e2['find']('.newsletter-submit')['addClass']('loader'), setTimeout(function () {
                _0x3189e2[0x0]['reset'](), _0x36bb3d['prop']('checked', ![]), _0x3189e2['find']('.newsletter-submit')['removeClass']('loader')
            }, 0xfa0)
        }
    }), data['view']['isPost'] && $('#greetings')['each'](function () {
        var _0x4afed0 = new Date()['getHours'](),
            _0x291f4b = ['Have a Sweet Dreams!', 'Good Morning!', 'Good Afternoon!', 'Good Evening!', 'Good Night!', 'It\'s time to sleep!'];
        let _0x2284a6 = '';
        if (_0x4afed0 < 0x4) _0x2284a6 = _0x291f4b[0x0];
        else {
            if (_0x4afed0 < 0xc) _0x2284a6 = _0x291f4b[0x1];
            else {
                if (_0x4afed0 < 0x11) _0x2284a6 = _0x291f4b[0x2];
                else {
                    if (_0x4afed0 < 0x13) _0x2284a6 = _0x291f4b[0x3];
                    else {
                        if (_0x4afed0 < 0x16) _0x2284a6 = _0x291f4b[0x4];
                        else _0x2284a6 = _0x291f4b[0x5]
                    }
                }
            }
        }
        $(this)['attr']('data-text', _0x2284a6)
    }), data['view']['isSingleItem'] && $('.comments-system-blogger')['length'] > 0x0 && $('#comments')['each'](function () {
        var _0x288473 = $(this)['attr']('data-embed'),
            _0x9bab0a = $(this)['attr']('data-allow-comments'),
            _0x18f660 = document['querySelector']('.commentForm'),
            _0x20d2c4 = '',
            _0x37b415 = '',
            _0x2f7090 = '',
            _0x5eeca2 = null,
            _0x25bf3 = '',
            _0x2ce276 = '&parentID=',
            _0x4d70cf = '';
        const _0x86f85a = $('#comment-editor-src')['attr']('href');
        if (_0x288473 == 'true' && _0x9bab0a == 'true') {
            if (url['indexOf']('#comments') != -0x1 || url['indexOf']('?showComment') != -0x1 || url['indexOf']('?commentPage') != -0x1) $(_0x18f660)['append']('<iframe class="blogger-iframe-colorize blogger-comment-from-post" id="comment-editor" name="comment-editor" src="" title="comment iframe"></iframe>'), $['getScript']('https://www.blogger.com/static/v1/jsbin/2567313873-comment_from_post_iframe.js')['done'](function () {
                BLOG_CMT_createIframe('https://www.blogger.com/rpc_relay.html'), $(_0x18f660)['removeClass']('loader')
            });
            else {
                var _0x49e61a = 0x0;
                function _0x2f6a3e() {
                    _0x49e61a == 0x0 && (_0x49e61a = 0x1, $(_0x18f660)['removeClass']('loader'), $(_0x18f660)['append']('<iframe class=\"blogger-iframe-colorize blogger-comment-from-post\" id=\"comment-editor\" name=\"comment-editor\" src=\"\" title=\"comment iframe\"></iframe>'), $['getScript']('https://www.blogger.com/static/v1/jsbin/2567313873-comment_from_post_iframe.js')['done'](function () {
                        BLOG_CMT_createIframe('https://www.blogger.com/rpc_relay.html')
                    }))
                }
                $(window)['on']('scroll', function () {
                    $(this)['scrollTop']() >= $('.post-footer')['position']()['top'] - 0x32 && _0x2f6a3e()
                })
            }
            $('.comment a.comment-reply')['click'](function (_0x3f3380) {
                _0x20d2c4 = $('#comment-editor')['attr']('src'), $('.calcel-reply')['remove'](), $('.comment-actions')['removeAttr']('style');
                var _0x2bed07 = $(this),
                    _0x313020 = _0x2bed07['attr']('data-comment-id');
                _0x25bf3 = _0x2ce276 + _0x313020, _0x5eeca2 == null && (_0x5eeca2 = $('#comment-editor'), _0x5eeca2 != null && (_0x4d70cf = _0x5eeca2['attr']('src')['split'](_0x2ce276))), _0x20d2c4 = _0x4d70cf[0x0], _0x2f7090 = _0x2bed07['parent']()['parent']()['parent']()['attr']('id'), $('#comment-editor')['attr']('src', _0x20d2c4 + _0x25bf3), _0x2bed07['parent']()['hide'](), $(_0x18f660)['appendTo']($('#' + _0x2f7090 + '>.comment-replybox-single')), $('#' + _0x2f7090 + '>.comment-replybox-single')['append']('<div class="calcel-reply"><button aria-label="Hủy" class="theme-button simple" type="button">Hủy trả lời</button></div>'), $('.calcel-reply')['click'](function () {
                    $(this)['remove'](), $('.comment-actions')['removeAttr']('style'), $(_0x18f660)['appendTo']($('.comment-form')), $('#comment-editor')[0x0]['src'] = _0x86f85a, $('html,body')['animate']({
                        'scrollTop': $(_0x18f660)['offset']()['top'] - $('#sticky-nav > div > div')['height']()
                    }, 0x3e8)
                })
            }), $('.toplevel-thread>ol>li>.comment-replies')['each'](function () {
                $(this)['find']('.comment-thread>ol>div>li')['length'] > 0x0 && $(this)['before']('<div class="view-replies"><span class="has-hover">Xem ' + $(this)['find']('.comment-thread>ol>div>li')['length'] + ' câu trả lời</span></div>'), $('.comment .view-replies>span')['click'](function () {
                    $(this)['parent']()['hide'](), $(this)['parent']()['next']()['removeClass']('hidden')
                })
            });
            if (url['indexOf']('?showComment') != -0x1) {
                if (url['indexOf']('#c') != -0x1) {
                    var _0x2f7090 = '#' + url['substring'](url['indexOf']('#c') + 0x1, url['length']);
                    0x0 < $(_0x2f7090)['length'] && ($(_0x2f7090)['parents']('li')['find']('.view-replies')['hide'](), $(_0x2f7090)['parents']('.comment-replies')['removeClass']('hidden'), $('html,body')['animate']({
                        'scrollTop': $(_0x2f7090)['offset']()['top'] - $('#sticky-nav > div > div')['height']()
                    }, 0x3e8))
                }
            }
            url['indexOf']('#comments') != -0x1 && $('html,body')['animate']({
                'scrollTop': $(_0x18f660)['offset']()['top'] - $('#sticky-nav > div > div')['height']()
            }, 0x3e8)
        }
    }), data['view']['isSingleItem'] && $('.comments .comment-header .datetime a')['each'](function () {
        var _0x144670 = $(this),
            _0x3c5881 = _0x144670['html'](),
            _0x3c5881 = _0x3c5881['replace']('SA', 'AM'),
            _0x3c5881 = _0x3c5881['replace']('CH', 'PM');
        _0x144670['attr']('datetime', _0x3c5881), _0x144670['html'](jQuery['timeago'](_0x3c5881))
    }), data['view']['isSingleItem'] && $('p.comment-content')['each'](function () {
        var _0x4f122e = $(this);
        _0x4f122e['replaceText'](/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>'), _0x4f122e['replaceText'](/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
    }), $('.pageLoading')['length'] > 0x0 && $('.pageLoading')['each'](function () {
        var _0x4c01ad = $(this);
        setTimeout(function () {
            _0x4c01ad['addClass']('done'), _0x4c01ad['on']('transitionend webkitTransitionEnd', function () {
                _0x4c01ad['remove']()
            })
        }, 0x3e8)
    }), save_all_posts(), $(document)['off']('click', '.bookmark-item', save_this_article)['on']('click', '.bookmark-item', save_this_article), $('#remove-bookmark-list')['click'](function () {
        localStorage['removeItem']('saved_data'), $('.save-all-posts')['find']('article')['remove'](), location['reload']()
    })
}, 0x64)