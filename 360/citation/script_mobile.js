(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('begin', r, this);
                    f['call'](this);
                };
                q['bind']('begin', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['getMainViewer']();
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o !== undefined) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            try {
                                var p = n != undefined ? o['getObjective'](n, m) : o['get'](m);
                                if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    p += 0x1;
                                return p;
                            } catch (q) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"start":"this.init(); this.initGA(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_DA85D559_C0D5_713F_41DF_FEDEA2704E21_playlist])","shadow":false,"id":"rootPlayer","minWidth":20,"scrollBarOpacity":0.5,"width":"100%","verticalAlign":"top","gap":10,"definitions": [{"partial":false,"vfov":180,"data":{"label":"Merchant Suite - Ceremony"},"label":trans('panorama_48E539E9_43D9_19D1_4195_92CACB86A383.label'),"class":"Panorama","id":"panorama_48E539E9_43D9_19D1_4195_92CACB86A383","hfov":360,"frames":[{"cube":{"class":"ImageResource","levels":[{"url":"media/panorama_48E539E9_43D9_19D1_4195_92CACB86A383_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","width":24576,"class":"TiledImageResourceLevel","height":4096,"colCount":48,"rowCount":8},{"url":"media/panorama_48E539E9_43D9_19D1_4195_92CACB86A383_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","width":12288,"class":"TiledImageResourceLevel","height":2048,"colCount":24,"rowCount":4},{"url":"media/panorama_48E539E9_43D9_19D1_4195_92CACB86A383_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","width":6144,"class":"TiledImageResourceLevel","height":1024,"colCount":12,"rowCount":2},{"url":"media/panorama_48E539E9_43D9_19D1_4195_92CACB86A383_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"width":3072,"class":"TiledImageResourceLevel","height":512,"colCount":6,"rowCount":1},{"url":"media/panorama_48E539E9_43D9_19D1_4195_92CACB86A383_0/{face}/vr/0.jpg","tags":"mobilevr","width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":6,"rowCount":1}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_48E539E9_43D9_19D1_4195_92CACB86A383_t.jpg"}],"pitch":0,"hfovMax":115,"thumbnailUrl":"media/panorama_48E539E9_43D9_19D1_4195_92CACB86A383_t.jpg"},{"timeToIdle":5000,"idleSequence":"this.sequence_D218ED9F_C0B7_F133_41E5_7F1B6FFE0900","automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_49177A14_43D9_1A77_41CB_E4696FFCC93F_camera","initialSequence":"this.sequence_D218ED9F_C0B7_F133_41E5_7F1B6FFE0900","initialPosition":{"class":"PanoramaCameraPosition","yaw":-30.66,"hfov":100,"pitch":-11.77}},{"touchControlMode":"drag_rotation","zoomEnabled":true,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","class":"PanoramaPlayer","id":"MainViewer_mobilePanoramaPlayer","displayPlaybackBar":true,"viewerArea":"this.MainViewer_mobile","gyroscopeVerticalDraggingEnabled":true},{"timeToIdle":5000,"idleSequence":"this.sequence_49F6DCA4_438F_5E25_4184_DDA87FC3D154","automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_4916651E_43D9_EE73_41D0_4033D69BA3FA_camera","initialSequence":"this.sequence_49F6DCA4_438F_5E25_4184_DDA87FC3D154","initialPosition":{"class":"PanoramaCameraPosition","yaw":18.86,"hfov":100,"pitch":-2.11}},{"data":{"name":"ThumbnailList1355"},"minHeight":1,"id":"ThumbnailList_DA85D559_C0D5_713F_41DF_FEDEA2704E21","left":"0%","right":"0%","itemBackgroundOpacity":0,"gap":2,"itemLabelFontFamily":"Arial","backgroundOpacity":0.2,"itemThumbnailHeight":45,"itemOpacity":1,"itemThumbnailShadowSpread":1,"toolTipHorizontalAlign":"center","scrollBarMargin":2,"itemLabelFontWeight":"normal","backgroundColorDirection":"vertical","borderSize":0,"horizontalAlign":"center","scrollBarWidth":10,"itemVerticalAlign":"middle","backgroundColor":["#000000"],"itemBorderRadius":0,"itemHorizontalAlign":"center","itemPaddingTop":3,"height":"14.65%","itemLabelFontStyle":"normal","itemThumbnailShadowOpacity":0.8,"itemLabelGap":5,"paddingTop":10,"scrollBarColor":"#FFFFFF","itemPaddingLeft":3,"propagateClick":false,"itemLabelFontColor":"#FFFFFF","itemBackgroundColorRatios":[],"scrollBarOpacity":0.5,"scrollBarVisible":"rollOver","itemPaddingBottom":3,"shadow":false,"itemLabelTextDecoration":"none","paddingBottom":10,"itemMode":"normal","verticalAlign":"top","itemLabelPosition":"bottom","itemThumbnailScaleMode":"fit_outside","borderRadius":5,"itemLabelFontSize":14,"itemThumbnailBorderRadius":5,"backgroundColorRatios":[0],"selectedItemLabelFontWeight":"bold","paddingLeft":20,"playList":"this.ThumbnailList_DA85D559_C0D5_713F_41DF_FEDEA2704E21_playlist","bottom":"4%","itemLabelHorizontalAlign":"center","paddingRight":20,"class":"ThumbnailList","itemThumbnailOpacity":1,"itemThumbnailShadowColor":"#000000","itemPaddingRight":3,"itemThumbnailShadowBlurRadius":4,"itemThumbnailShadowHorizontalLength":3,"itemThumbnailBorderSize":0,"itemThumbnailShadowVerticalLength":3,"layout":"horizontal","itemBackgroundColorDirection":"vertical","itemThumbnailWidth":100,"itemBackgroundColor":[],"minWidth":1,"itemThumbnailShadow":true},{"class":"PlayList","id":"mainPlayList","items":[{"media":"this.panorama_48E539E9_43D9_19D1_4195_92CACB86A383","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_48E539E9_43D9_19D1_4195_92CACB86A383_camera"},{"media":"this.panorama_4933659C_43D9_6E70_41D0_B16FE19E74D3","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_4933659C_43D9_6E70_41D0_B16FE19E74D3_camera"},{"media":"this.panorama_4916651E_43D9_EE73_41D0_4033D69BA3FA","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_4916651E_43D9_EE73_41D0_4033D69BA3FA_camera"},{"media":"this.panorama_49177A14_43D9_1A77_41CB_E4696FFCC93F","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_49177A14_43D9_1A77_41CB_E4696FFCC93F_camera"},{"media":"this.panorama_491630E5_43DE_E7D1_41C1_5732EF35DC3F","end":"this.trigger('tourEnded')","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_491630E5_43DE_E7D1_41C1_5732EF35DC3F_camera"}]},{"shadow":false,"id":"Image_B89D6A94_B40D_8EBC_41DE_1C8C04C0A974_mobile","minWidth":1,"width":"18.89%","verticalAlign":"middle","right":"0.11%","borderRadius":0,"backgroundOpacity":0,"toolTipHorizontalAlign":"center","url":"skin/Image_B89D6A94_B40D_8EBC_41DE_1C8C04C0A974.png","borderSize":0,"top":"0.78%","horizontalAlign":"center","paddingLeft":0,"height":"6.984%","paddingRight":0,"class":"Image","maxHeight":848,"maxWidth":954,"propagateClick":false,"scaleMode":"fit_inside","paddingTop":0,"data":{"name":"Logo"},"paddingBottom":0,"minHeight":1},{"class":"PlayList","id":"ThumbnailList_DA85D559_C0D5_713F_41DF_FEDEA2704E21_playlist","items":[{"player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_48E539E9_43D9_19D1_4195_92CACB86A383","class":"PanoramaPlayListItem","camera":"this.panorama_48E539E9_43D9_19D1_4195_92CACB86A383_camera"},{"player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_4933659C_43D9_6E70_41D0_B16FE19E74D3","class":"PanoramaPlayListItem","camera":"this.panorama_4933659C_43D9_6E70_41D0_B16FE19E74D3_camera"},{"player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_4916651E_43D9_EE73_41D0_4033D69BA3FA","class":"PanoramaPlayListItem","camera":"this.panorama_4916651E_43D9_EE73_41D0_4033D69BA3FA_camera"},{"player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_49177A14_43D9_1A77_41CB_E4696FFCC93F","class":"PanoramaPlayListItem","camera":"this.panorama_49177A14_43D9_1A77_41CB_E4696FFCC93F_camera"},{"player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_491630E5_43DE_E7D1_41C1_5732EF35DC3F","class":"PanoramaPlayListItem","camera":"this.panorama_491630E5_43DE_E7D1_41C1_5732EF35DC3F_camera"}]},{"timeToIdle":5000,"idleSequence":"this.sequence_D2180D9F_C0B7_F133_418A_582D91552DF9","automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_491630E5_43DE_E7D1_41C1_5732EF35DC3F_camera","initialSequence":"this.sequence_D2180D9F_C0B7_F133_418A_582D91552DF9","initialPosition":{"class":"PanoramaCameraPosition","yaw":-71.5,"hfov":100,"pitch":-8.61}},{"playbackBarHeadShadowVerticalLength":0,"toolTipPaddingTop":4,"subtitlesFontWeight":"normal","playbackBarBottom":5,"progressBarBorderColor":"#000000","id":"MainViewer_mobile","left":0,"progressBarBackgroundColorRatios":[0],"width":"100%","toolTipDisplayTime":600,"subtitlesTop":0,"progressLeft":0,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesBottom":50,"progressBackgroundColorDirection":"vertical","subtitlesPaddingLeft":5,"toolTipTextShadowOpacity":0,"toolTipBorderColor":"#767676","toolTipHorizontalAlign":"center","subtitlesTextShadowColor":"#000000","subtitlesPaddingRight":5,"toolTipShadowSpread":0,"playbackBarHeight":10,"toolTipTextShadowBlurRadius":3,"doubleClickAction":"toggle_fullscreen","playbackBarHeadBackgroundColorDirection":"vertical","borderSize":0,"subtitlesPaddingBottom":5,"playbackBarHeadWidth":6,"progressBorderColor":"#000000","toolTipPaddingRight":6,"playbackBarHeadShadowHorizontalLength":0,"transitionDuration":1000,"toolTipShadowColor":"#333333","toolTipFontColor":"#606060","progressBackgroundColor":["#FFFFFF"],"progressBottom":0,"progressBarOpacity":1,"toolTipPaddingBottom":4,"firstTransitionDuration":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarBackgroundColor":["#FFFFFF"],"displayTooltipInTouchScreens":true,"subtitlesTextShadowBlurRadius":0,"subtitlesFontFamily":"Arial","playbackBarProgressBorderSize":0,"subtitlesBackgroundOpacity":0.2,"subtitlesFontSize":"3vmin","subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundColorDirection":"vertical","subtitlesTextDecoration":"none","subtitlesBorderColor":"#FFFFFF","playbackBarRight":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBorderRadius":0,"propagateClick":false,"progressHeight":10,"subtitlesTextShadowVerticalLength":1,"toolTipOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"paddingBottom":0,"subtitlesPaddingTop":5,"shadow":false,"paddingTop":0,"playbackBarHeadShadowOpacity":0.7,"subtitlesShadow":false,"height":"100%","progressBackgroundOpacity":1,"toolTipFontStyle":"normal","toolTipShadowBlurRadius":3,"progressBorderSize":0,"progressBarBorderRadius":0,"borderRadius":0,"progressBarBorderSize":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingLeft":6,"subtitlesOpacity":1,"toolTipShadowOpacity":1,"playbackBarHeadHeight":15,"vrPointerSelectionColor":"#FF6600","top":0,"paddingLeft":0,"toolTipFontFamily":"Arial","subtitlesGap":0,"playbackBarBorderColor":"#FFFFFF","toolTipFontWeight":"normal","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarBorderRadius":0,"playbackBarHeadShadowColor":"#000000","toolTipFontSize":"1.11vmin","subtitlesBackgroundColor":"#000000","playbackBarProgressBorderColor":"#000000","paddingRight":0,"class":"ViewerArea","subtitlesHorizontalAlign":"center","playbackBarHeadBorderRadius":0,"toolTipShadowVerticalLength":0,"subtitlesVerticalAlign":"bottom","playbackBarHeadBorderSize":0,"playbackBarHeadOpacity":1,"progressBackgroundColorRatios":[0],"playbackBarHeadBorderColor":"#000000","playbackBarProgressOpacity":1,"transitionMode":"fade_out_fade_in","vrPointerSelectionTime":2000,"playbackBarHeadShadow":true,"subtitlesFontColor":"#FFFFFF","playbackBarOpacity":1,"subtitlesTextShadowOpacity":1,"playbackBarBackgroundOpacity":1,"vrPointerColor":"#FFFFFF","playbackBarBorderSize":0,"progressRight":0,"subtitlesBorderSize":0,"toolTipBorderRadius":3,"toolTipBorderSize":1,"progressOpacity":1,"progressBarBackgroundColorDirection":"vertical","data":{"name":"Main Viewer"},"toolTipTextShadowColor":"#000000","playbackBarLeft":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBorderRadius":0,"minWidth":100,"toolTipShadowHorizontalLength":0,"minHeight":50},{"partial":false,"vfov":180,"data":{"label":"Taverne Bar - Dance Floor"},"label":trans('panorama_4916651E_43D9_EE73_41D0_4033D69BA3FA.label'),"class":"Panorama","id":"panorama_4916651E_43D9_EE73_41D0_4033D69BA3FA","hfov":360,"frames":[{"cube":{"class":"ImageResource","levels":[{"url":"media/panorama_4916651E_43D9_EE73_41D0_4033D69BA3FA_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","width":24576,"class":"TiledImageResourceLevel","height":4096,"colCount":48,"rowCount":8},{"url":"media/panorama_4916651E_43D9_EE73_41D0_4033D69BA3FA_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","width":12288,"class":"TiledImageResourceLevel","height":2048,"colCount":24,"rowCount":4},{"url":"media/panorama_4916651E_43D9_EE73_41D0_4033D69BA3FA_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","width":6144,"class":"TiledImageResourceLevel","height":1024,"colCount":12,"rowCount":2},{"url":"media/panorama_4916651E_43D9_EE73_41D0_4033D69BA3FA_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"width":3072,"class":"TiledImageResourceLevel","height":512,"colCount":6,"rowCount":1},{"url":"media/panorama_4916651E_43D9_EE73_41D0_4033D69BA3FA_0/{face}/vr/0.jpg","tags":"mobilevr","width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":6,"rowCount":1}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_4916651E_43D9_EE73_41D0_4033D69BA3FA_t.jpg"}],"pitch":0,"hfovMax":115,"thumbnailUrl":"media/panorama_4916651E_43D9_EE73_41D0_4033D69BA3FA_t.jpg"},{"timeToIdle":5000,"idleSequence":"this.sequence_D218AD9E_C0B7_F135_41CC_B988BE5825AB","automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_4933659C_43D9_6E70_41D0_B16FE19E74D3_camera","initialSequence":"this.sequence_D218AD9E_C0B7_F135_41CC_B988BE5825AB","initialPosition":{"class":"PanoramaCameraPosition","yaw":-2.52,"hfov":100,"pitch":0.16}},{"shadow":false,"id":"HTMLText_98B91736_88D9_DD3B_41DB_D7EA14771039_mobile","left":"0%","minWidth":1,"scrollBarOpacity":0,"width":"100%","backgroundOpacity":0,"borderRadius":0,"toolTipHorizontalAlign":"center","borderColor":"#000000","scrollBarMargin":2,"borderSize":3,"top":"9.38%","scrollBarWidth":10,"paddingLeft":20,"height":"19.266%","paddingRight":20,"class":"HTMLText","html":trans('HTMLText_98B91736_88D9_DD3B_41DB_D7EA14771039_mobile.html',null,{'title':regTextVar('HTMLText_98B91736_88D9_DD3B_41DB_D7EA14771039_mobile.html', 'title')}),"propagateClick":false,"paddingTop":0,"scrollBarColor":"#000000","scrollBarVisible":"rollOver","data":{"name":"Title"},"paddingBottom":0,"minHeight":1},{"partial":false,"vfov":180,"data":{"label":"Merchant Suite - Top Table"},"label":trans('panorama_4933659C_43D9_6E70_41D0_B16FE19E74D3.label'),"class":"Panorama","id":"panorama_4933659C_43D9_6E70_41D0_B16FE19E74D3","hfov":360,"frames":[{"cube":{"class":"ImageResource","levels":[{"url":"media/panorama_4933659C_43D9_6E70_41D0_B16FE19E74D3_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","width":24576,"class":"TiledImageResourceLevel","height":4096,"colCount":48,"rowCount":8},{"url":"media/panorama_4933659C_43D9_6E70_41D0_B16FE19E74D3_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","width":12288,"class":"TiledImageResourceLevel","height":2048,"colCount":24,"rowCount":4},{"url":"media/panorama_4933659C_43D9_6E70_41D0_B16FE19E74D3_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","width":6144,"class":"TiledImageResourceLevel","height":1024,"colCount":12,"rowCount":2},{"url":"media/panorama_4933659C_43D9_6E70_41D0_B16FE19E74D3_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"width":3072,"class":"TiledImageResourceLevel","height":512,"colCount":6,"rowCount":1},{"url":"media/panorama_4933659C_43D9_6E70_41D0_B16FE19E74D3_0/{face}/vr/0.jpg","tags":"mobilevr","width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":6,"rowCount":1}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_4933659C_43D9_6E70_41D0_B16FE19E74D3_t.jpg"}],"pitch":0,"hfovMax":115,"thumbnailUrl":"media/panorama_4933659C_43D9_6E70_41D0_B16FE19E74D3_t.jpg"},{"partial":false,"vfov":180,"data":{"label":"Portico"},"label":trans('panorama_491630E5_43DE_E7D1_41C1_5732EF35DC3F.label'),"class":"Panorama","id":"panorama_491630E5_43DE_E7D1_41C1_5732EF35DC3F","hfov":360,"frames":[{"cube":{"class":"ImageResource","levels":[{"url":"media/panorama_491630E5_43DE_E7D1_41C1_5732EF35DC3F_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","width":24576,"class":"TiledImageResourceLevel","height":4096,"colCount":48,"rowCount":8},{"url":"media/panorama_491630E5_43DE_E7D1_41C1_5732EF35DC3F_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","width":12288,"class":"TiledImageResourceLevel","height":2048,"colCount":24,"rowCount":4},{"url":"media/panorama_491630E5_43DE_E7D1_41C1_5732EF35DC3F_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","width":6144,"class":"TiledImageResourceLevel","height":1024,"colCount":12,"rowCount":2},{"url":"media/panorama_491630E5_43DE_E7D1_41C1_5732EF35DC3F_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"width":3072,"class":"TiledImageResourceLevel","height":512,"colCount":6,"rowCount":1},{"url":"media/panorama_491630E5_43DE_E7D1_41C1_5732EF35DC3F_0/{face}/vr/0.jpg","tags":"mobilevr","width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":6,"rowCount":1}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_491630E5_43DE_E7D1_41C1_5732EF35DC3F_t.jpg"}],"pitch":0,"hfovMax":115,"thumbnailUrl":"media/panorama_491630E5_43DE_E7D1_41C1_5732EF35DC3F_t.jpg"},{"partial":false,"vfov":180,"data":{"label":"Taverne Bar"},"label":trans('panorama_49177A14_43D9_1A77_41CB_E4696FFCC93F.label'),"class":"Panorama","id":"panorama_49177A14_43D9_1A77_41CB_E4696FFCC93F","hfov":360,"frames":[{"cube":{"class":"ImageResource","levels":[{"url":"media/panorama_49177A14_43D9_1A77_41CB_E4696FFCC93F_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","width":24576,"class":"TiledImageResourceLevel","height":4096,"colCount":48,"rowCount":8},{"url":"media/panorama_49177A14_43D9_1A77_41CB_E4696FFCC93F_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","width":12288,"class":"TiledImageResourceLevel","height":2048,"colCount":24,"rowCount":4},{"url":"media/panorama_49177A14_43D9_1A77_41CB_E4696FFCC93F_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","width":6144,"class":"TiledImageResourceLevel","height":1024,"colCount":12,"rowCount":2},{"url":"media/panorama_49177A14_43D9_1A77_41CB_E4696FFCC93F_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"width":3072,"class":"TiledImageResourceLevel","height":512,"colCount":6,"rowCount":1},{"url":"media/panorama_49177A14_43D9_1A77_41CB_E4696FFCC93F_0/{face}/vr/0.jpg","tags":"mobilevr","width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":6,"rowCount":1}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_49177A14_43D9_1A77_41CB_E4696FFCC93F_t.jpg"}],"pitch":0,"hfovMax":115,"thumbnailUrl":"media/panorama_49177A14_43D9_1A77_41CB_E4696FFCC93F_t.jpg"},{"class":"PanoramaCamera","id":"panorama_48E539E9_43D9_19D1_4195_92CACB86A383_camera","displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","easing":"linear","duration":1000},{"easing":"cubic_in_out","class":"TargetRotationalCameraDisplayMovement","targetHfov":100,"duration":3000,"targetPitch":0,"targetStereographicFactor":0}],"timeToIdle":5000,"automaticZoomSpeed":10,"idleSequence":"this.sequence_4B6C04D6_4686_65E3_41B9_6B2C4951335B","displayOriginPosition":{"class":"RotationalCameraDisplayPosition","yaw":0,"hfov":165,"stereographicFactor":1,"pitch":-90},"initialSequence":"this.sequence_4B6C04D6_4686_65E3_41B9_6B2C4951335B","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"hfov":100,"pitch":0}},{"label":"© Wayne A Casey @ StudioVR.uk","class":"PlayerMenuItem","id":"TDVAuthor"},{"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear"},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_D218ED9F_C0B7_F133_41E5_7F1B6FFE0900"},{"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear"},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_49F6DCA4_438F_5E25_4184_DDA87FC3D154"},{"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear"},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_D2180D9F_C0B7_F133_418A_582D91552DF9"},{"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear"},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_D218AD9E_C0B7_F135_41CC_B988BE5825AB"},{"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear"},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_4B6C04D6_4686_65E3_41B9_6B2C4951335B"}],"mediaActivationMode":"window","children":["this.MainViewer_mobile","this.Image_B89D6A94_B40D_8EBC_41DE_1C8C04C0A974_mobile","this.HTMLText_98B91736_88D9_DD3B_41DB_D7EA14771039_mobile","this.ThumbnailList_DA85D559_C0D5_713F_41DF_FEDEA2704E21"],"contentOpaque":false,"toolTipHorizontalAlign":"center","scrollBarMargin":2,"borderSize":0,"horizontalAlign":"left","scrollBarWidth":10,"paddingLeft":0,"borderRadius":0,"vrPolyfillScale":0.75,"mobileMipmappingEnabled":false,"paddingRight":0,"class":"Player","overflow":"hidden","height":"100%","lockedOrientation":"portrait","defaultVRPointer":"laser","scripts":{"getKey":TDV.Tour.Script.getKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"cloneCamera":TDV.Tour.Script.cloneCamera,"mixObject":TDV.Tour.Script.mixObject,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"openLink":TDV.Tour.Script.openLink,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getOverlays":TDV.Tour.Script.getOverlays,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setMapLocation":TDV.Tour.Script.setMapLocation,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizFinish":TDV.Tour.Script.quizFinish,"showWindow":TDV.Tour.Script.showWindow,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"historyGoForward":TDV.Tour.Script.historyGoForward,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getMediaByName":TDV.Tour.Script.getMediaByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"historyGoBack":TDV.Tour.Script.historyGoBack,"registerKey":TDV.Tour.Script.registerKey,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupImage":TDV.Tour.Script.showPopupImage,"playAudioList":TDV.Tour.Script.playAudioList,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"shareSocial":TDV.Tour.Script.shareSocial,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPixels":TDV.Tour.Script.getPixels,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"init":TDV.Tour.Script.init,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setLocale":TDV.Tour.Script.setLocale,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizShowScore":TDV.Tour.Script.quizShowScore,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getComponentByName":TDV.Tour.Script.getComponentByName,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"existsKey":TDV.Tour.Script.existsKey,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizStart":TDV.Tour.Script.quizStart,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"initQuiz":TDV.Tour.Script.initQuiz,"unregisterKey":TDV.Tour.Script.unregisterKey,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"translate":TDV.Tour.Script.translate,"setValue":TDV.Tour.Script.setValue,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"resumePlayers":TDV.Tour.Script.resumePlayers,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"initGA":TDV.Tour.Script.initGA,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"textToSpeech":TDV.Tour.Script.textToSpeech,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"isPanorama":TDV.Tour.Script.isPanorama,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth},"menu":["this.TDVAuthor"],"backgroundPreloadEnabled":true,"desktopMipmappingEnabled":false,"mouseWheelEnabled":true,"layout":"absolute","downloadEnabled":false,"data":{"name":"Player2690","defaultLocale":"en","textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"speechOnQuizQuestion":false,"rate":1,"volume":1},"locales":{"en":"locale/en.txt"}},"propagateClick":false,"paddingTop":0,"scrollBarColor":"#000000","scrollBarVisible":"rollOver","paddingBottom":0,"minHeight":20};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.4.19.js.map
//Generated with v2020.4.19, Tue Dec 8 2020