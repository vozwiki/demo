!(function () {
    var _0xa1fa30, _0x3c5dc9, _0x25ac1f, _0x29d951, _0x4ab868 = qSell('.safeL');
    0x0 < _0x4ab868['length'] && _0x4ab868['forEach'](_0x4f6f73 => {
        _0x4f6f73['addEventListener']('click', function (_0x10d1de) {
            _0x10d1de['preventDefault']();
            var _0x54c930 = _0x10d1de['target']['getAttribute']('href'),
                _0x10d1de = _0x10d1de['target']['getAttribute']('data-href');
            null != (_0x10d1de = null != _0x54c930 && '/' != _0x54c930 && '#' != _0x54c930 && '' != _0x54c930 ? _0x54c930 : null != _0x10d1de && '#' != _0x10d1de && '' != _0x10d1de ? _0x10d1de : void 0x0) && (_0x10d1de = nBc['e'](_0x10d1de), _0x10d1de = data['blog']['blogUrl'] + '#?' + aSl['par'] + '=' + _0x10d1de, 0x1 == aSl['nwt'] ? window['open'](_0x10d1de, '_blank') : window['location']['href'] = _0x10d1de)
        })
    }), null == nBc['pUH'](aSl['par']) && null == nBc['pU'](aSl['par']) || (_0x4ab868 = null != nBc['pUH'](aSl['par']) ? nBc['d'](nBc['pUH'](aSl['par'])) : nBc['d'](nBc['pU'](aSl['par'])), _0xa1fa30 = data['blog']['blogUrl']['replace'](/.*?:\/\//g, '//') + 'feeds/posts/summary?alt=json&orderby=' + aSl['sby'] + '&max-results=' + aSl['mxr'], nBc['sSS']('SAFE_L', _0x4ab868), 0x0 < (_0x4ab868 = window['location']['toString']())['indexOf']('#') && (_0x4ab868 = _0x4ab868['substring'](0x0, _0x4ab868['indexOf']('#')), window['history']['replaceState']({}, document['title'], _0x4ab868)), nBc['gAj']({
        'url': _0xa1fa30,
        'async': !0x0,
        'success': function (_0x39dbd5) {
            if ((_0x39dbd5 = JSON['parse'](_0x39dbd5)['feed'])['entry'] && 0x0 !== _0x39dbd5['entry']['length']) {
                for (var _0x303bf9, _0x34c108, _0x24c6ef = (_0x39dbd5 = _0x39dbd5['entry'])[Math['floor'](Math['random']() * _0x39dbd5['length'])], _0x4b69a2 = 0x0, _0x5235e0 = _0x24c6ef['link']['length']; _0x4b69a2 < _0x5235e0; _0x4b69a2++) 'alternate' == (_0x34c108 = _0x24c6ef['link'][_0x4b69a2])['rel'] && (_0x303bf9 = _0x34c108['href']);
                remCt(getid('hmVrfy'), 'hidden'), qSel('#hmVrfy .pstL')['href'] = _0x303bf9, setTimeout(function () {
                    addCt(getid('hmVrfy'), 'alt')
                }, aSl['hcd'])
            } else toastNotif('No post was found')
        }
    })), null != nBc['gSS']('SAFE_L') && !![] == data['view']['isPost'] && (_0xa1fa30 = nBc['gSS']('SAFE_L'), _0x3c5dc9 = Math['floor'](aSl['gcd'] / 0x3e8), _0x25ac1f = _0x3c5dc9, qSel('.safeGoL')['href'] = _0xa1fa30, 0x1 == aSl['nwt'] && qSel('.safeGoL')['setAttribute']('target', '_blank'), addCt(getid('aSlCnt'), 'vsbl'), _0x29d951 = setInterval(function () {
        var _0x22452b = --_0x25ac1f / _0x3c5dc9 * 0x64;
        qSel('.aSlW')['style']['width'] = 0x64 - _0x22452b + '%', qSel('.aSlCd')['innerHTML'] = Math['floor'](_0x25ac1f), _0x25ac1f <= 0x0 && (clearInterval(_0x29d951), qSel('.aSlCd')['innerHTML'] = '0', setTimeout(() => {
            qSel('.aSlC')['innerHTML'] = aSl['pwt']
        }, 0x3e8), setTimeout(() => {
            addCt(qSel('.aSlB'), 'vsbl'), addCt(getid('aSlCnt'), 'alt')
        }, 0xfa0))
    }, 0x3e8), qSel('.safeGoL')['addEventListener']('click', function () {
        nBc['rSS']('SAFE_L')
    }))
}())

qSel('.aScr') !== null && qSel('.aScr')['addEventListener']('click', () => {
    setTimeout(() => {
        qSel('.safeGoL')['scrollIntoView']({
            'behaviour': 'smooth',
            'block': 'center',
            'inline': 'center'
        })
    }, 0xc8)
});

function idPlug(_0x5918ac) {
    _0x5918ac ? cxPlug(nBc['d'](_0x5918ac)) : nBc['gAj']({
        'url': '/feeds/posts/summary/?alt=json&max-results=0',
        'async': !0x0,
        'success': function (_0x1fedda) {
            cxPlug(JSON['parse'](_0x1fedda)['feed']['id']['$t']['split']('-')[0x1])
        },
        'error': function (_0x5a3042) {
            cxPlug(blogId)
        }
    })
}

function cxPlug(_0x445849) {
    nBc['gAj']({
        'url': 'https://script.google.com/macros/s/AKfycbzoqzQldFzeONe5JS-9N_C7tLVWFtOZN5j6to9NCTUaBZ56bcwnODeH1PQGFfapXcUS/exec',
        'async': !0x0,
        'success': function (_0x3dad93) {
            var _0x20d5b1 = JSON['parse'](_0x3dad93)['plugin'],
                _0x5b0195 = _0x20d5b1['findIndex'](function (_0x1a3d5a) {
                    return _0x1a3d5a['id'] == _0x445849
                });
            _0x5b0195 >= 0x0 ? (console['group']('%cPlugin NLD', 'color:#57956A;font-size:12px'), _0x20d5b1[_0x5b0195]['shortlink'] ? console['log']('Shortlink: Registered') : console['log']('Shortlink: Unregistered'), _0x20d5b1[_0x5b0195]['safelink'] ? console['log']('Safelink: Registered') : console['log']('Safelink: Unregistered'), console['groupEnd'](), _0x20d5b1[_0x5b0195]['safelink'] ? null != getid('nld_safelink') && void 0x0 !== safeSet && (getid('safeIn')['addEventListener']('blur', function () {
                var _0x5cabf3 = this['value'];
                return ~_0x5cabf3['indexOf']('https://') || ~_0x5cabf3['indexOf']('http://') || '' == _0x5cabf3 || (_0x5cabf3 = 'https://' + _0x5cabf3), this['value'] = _0x5cabf3, this
            }), getid('safeGen')['addEventListener']('click', function () {
                var _0x525b87, _0x5a50c2, _0x3cf883 = getid('safeIn'),
                    _0x1b4984 = getid('safeOut');
                '' != _0x3cf883['value'] ? (_0x525b87 = nBc['e'](_0x3cf883['value']), _0x5a50c2 = data['blog']['blogUrl'] + safeSet['safePar'] + '=' + _0x525b87, _0x1b4984['value'] = _0x5a50c2, _0x1b4984['setAttribute']('data-text', 'fl'), getid('safeViw')['onclick'] = function () {
                    window['open'](_0x5a50c2, '_blank')
                }, remCt(getid('safeCpy'), 'hidden'), remCt(getid('safeViw'), 'hidden'), toastNotif(safeSet['succNtf']), getid('safeCpy')['addEventListener']('click', function () {
                    var _0x194495 = getid('safeOut');
                    _0x194495['value'];
                    var _0x47b60a = getSelection();
                    _0x47b60a['removeAllRanges'](), _0x194495['select'](), document['execCommand']('copy'), _0x47b60a['removeAllRanges'](), toastNotif(safeSet['cpydNtf'])
                })) : toastNotif(safeSet['entrNtf'])
            })) : toastNotif('Safelink: Unregistered'), _0x20d5b1[_0x5b0195]['shortlink'] ? null != getid('nld_shortlink') && void 0x0 !== shrtSet && (getid('shrtIn')['addEventListener']('blur', function () {
                var _0x244a86 = this['value'];
                return ~_0x244a86['indexOf']('https://') || ~_0x244a86['indexOf']('http://') || '' == _0x244a86 || (_0x244a86 = 'https://' + _0x244a86), this['value'] = _0x244a86, this
            }), getid('shrtGen')['addEventListener']('click', function () {
                var _0xa39503 = getid('shrtIn'),
                    _0x333e6d = getid('shrtOut');
                '' != _0xa39503['value'] ? (_0xa39503['value'], fdyLnk(_0xa39503['value'], shrtSet['pageLink'], shrtSet['apiKey'], function (_0x3f108b) {
                    var _0x2a08eb = sSafeSet['rdrct'] ? sSafeSet['rdrct'] + _0x3f108b['replace'](sSafeSet['pageLink'], '') : _0x3f108b;
                    _0x333e6d['value'] = _0x2a08eb, _0x333e6d['setAttribute']('data-text', 'fl'), getid('shrtViw')['onclick'] = function () {
                        window['open'](_0x2a08eb, '_blank')
                    }, remCt(getid('shrtCpy'), 'hidden'), remCt(getid('shrtViw'), 'hidden'), toastNotif(shrtSet['succNtf']), getid('shrtCpy')['addEventListener']('click', function () {
                        _0x333e6d['value'];
                        var _0x86aada = getSelection();
                        _0x86aada['removeAllRanges'](), _0x333e6d['select'](), document['execCommand']('copy'), _0x86aada['removeAllRanges'](), toastNotif(shrtSet['cpydNtf'])
                    })
                })) : toastNotif(shrtSet['entrNtf'])
            })) : toastNotif('Shortlink: Unregistered'), _0x20d5b1[_0x5b0195]['shortlink'] && _0x20d5b1[_0x5b0195]['safelink'] ? null != getid('nld_sslink') && void 0x0 !== sSafeSet && (getid('sSafeIn')['addEventListener']('blur', function () {
                var _0x3c943a = this['value'];
                return ~_0x3c943a['indexOf']('https://') || ~_0x3c943a['indexOf']('http://') || '' == _0x3c943a || (_0x3c943a = 'https://' + _0x3c943a), this['value'] = _0x3c943a, this
            }), getid('sSafeGen')['addEventListener']('click', function () {
                var _0x5b543 = getid('sSafeIn'),
                    _0x28942e = getid('sSafeOut');
                '' != _0x5b543['value'] ? (n = nBc['e'](_0x5b543['value']), fdyLnk(n = data['blog']['blogUrl'] + sSafeSet['sSafePar'] + '=' + n, shrtSet['pageLink'], shrtSet['apiKey'], function (_0x3b1754) {
                    var _0x4acfa5 = sSafeSet['rdrct'] ? sSafeSet['rdrct'] + _0x3b1754['replace'](sSafeSet['pageLink'], '') : _0x3b1754;
                    _0x28942e['value'] = _0x4acfa5, _0x28942e['setAttribute']('data-text', 'fl'), getid('sSafeViw')['onclick'] = function () {
                        window['open'](_0x4acfa5, '_blank')
                    }, remCt(getid('sSafeCpy'), 'hidden'), remCt(getid('sSafeViw'), 'hidden'), toastNotif(sSafeSet['succNtf']), getid('sSafeCpy')['addEventListener']('click', function () {
                        _0x28942e['value'];
                        var _0x49ded9 = getSelection();
                        _0x49ded9['removeAllRanges'](), _0x28942e['select'](), document['execCommand']('copy'), _0x49ded9['removeAllRanges'](), toastNotif(sSafeSet['cpydNtf'])
                    })
                })) : toastNotif(sSafeSet['entrNtf'])
            })) : toastNotif('Plugin: Unregistered')) : (alert('Inactive plugin for this Blog'), window['location']['href'] = 'https://www.nldblog.com/?ref=' + window['location']['href'])
        }
    })
}
Defer(function () {
    for (var _0x35ab39 = qSell('.widget input[type=text], .widget input[type=email], .widget textarea'), _0x3f946e = 0x0; _0x3f946e < _0x35ab39['length']; _0x3f946e++) _0x35ab39[_0x3f946e]['addEventListener']('input', function () {
        var _0x12b2e2 = this['value'] ? 'fl' : 'nfl';
        this['setAttribute']('data-text', _0x12b2e2)
    });
    null != getid('admCheck')['getAttribute']('xid') ? idPlug(getid('admCheck')['getAttribute']('xid')) : idPlug(0x0)
});