/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './contact-us';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import15 from 'ionic-angular/config/config';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from 'ionic-angular/navigation/view-controller';
import * as import18 from 'ionic-angular/components/app/app';
import * as import19 from 'ionic-angular/components/toolbar/toolbar';
import * as import20 from 'ionic-angular/util/keyboard';
import * as import21 from '@angular/core/src/zone/ng_zone';
import * as import22 from 'ionic-angular/components/tabs/tabs';
import * as import23 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import24 from 'ionic-angular/components/navbar/navbar';
import * as import25 from 'ionic-angular/components/content/content';
export var Wrapper_ContactUsPage = (function () {
    function Wrapper_ContactUsPage(p0) {
        this.changed = false;
        this.context = new import0.ContactUsPage(p0);
    }
    Wrapper_ContactUsPage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_ContactUsPage;
}());
var renderType_ContactUsPage_Host = null;
var _View_ContactUsPage_Host0 = (function (_super) {
    __extends(_View_ContactUsPage_Host0, _super);
    function _View_ContactUsPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ContactUsPage_Host0, renderType_ContactUsPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ContactUsPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-contact-us', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ContactUsPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ContactUsPage_0_4 = new Wrapper_ContactUsPage(this.parentInjector.get(import8.NavController));
        this._appEl_0.initComponent(this._ContactUsPage_0_4.context, [], compView_0);
        compView_0.create(this._ContactUsPage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ContactUsPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ContactUsPage) && (0 === requestNodeIndex))) {
            return this._ContactUsPage_0_4.context;
        }
        return notFoundResult;
    };
    _View_ContactUsPage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ContactUsPage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ContactUsPage_Host0;
}(import1.AppView));
function viewFactory_ContactUsPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ContactUsPage_Host === null)) {
        (renderType_ContactUsPage_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_ContactUsPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ContactUsPageNgFactory = new import10.ComponentFactory('page-contact-us', viewFactory_ContactUsPage_Host0, import0.ContactUsPage);
var styles_ContactUsPage = [];
var renderType_ContactUsPage = null;
var _View_ContactUsPage0 = (function (_super) {
    __extends(_View_ContactUsPage0, _super);
    function _View_ContactUsPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ContactUsPage0, renderType_ContactUsPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ContactUsPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_1_3 = new import11.Wrapper_Header(this.parentInjector.get(import15.Config), new import16.ElementRef(this._el_1), this.renderer, this.parentInjector.get(import17.ViewController, null));
        this._text_2 = this.renderer.createText(this._el_1, '\n\n  ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_3, 'color', 'blue');
        this._appEl_3 = new import3.AppElement(3, 1, this, this._el_3);
        var compView_3 = import12.viewFactory_Navbar0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Navbar_3_4 = new import12.Wrapper_Navbar(this.parentInjector.get(import18.App), this.parentInjector.get(import17.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import15.Config), new import16.ElementRef(this._el_3), this.renderer);
        this._appEl_3.initComponent(this._Navbar_3_4.context, [], compView_3);
        this._text_4 = this.renderer.createText(null, '\n    ', null);
        this._el_5 = this.renderer.createElement(null, 'ion-title', null);
        this.renderer.setElementAttribute(this._el_5, 'style', 'font-size: 18px;');
        this._appEl_5 = new import3.AppElement(5, 3, this, this._el_5);
        var compView_5 = import13.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(5), this._appEl_5);
        this._ToolbarTitle_5_4 = new import13.Wrapper_ToolbarTitle(this.parentInjector.get(import15.Config), new import16.ElementRef(this._el_5), this.renderer, this.parentInjector.get(import19.Toolbar, null), this._Navbar_3_4.context);
        this._appEl_5.initComponent(this._ToolbarTitle_5_4.context, [], compView_5);
        this._text_6 = this.renderer.createText(null, '联系我们', null);
        compView_5.create(this._ToolbarTitle_5_4.context, [[].concat([this._text_6])], null);
        this._text_7 = this.renderer.createText(null, '\n  ', null);
        compView_3.create(this._Navbar_3_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_4,
                this._el_5,
                this._text_7
            ])
        ], null);
        this._text_8 = this.renderer.createText(this._el_1, '\n\n', null);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_10 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'contentGray');
        this.renderer.setElementAttribute(this._el_10, 'padding', '');
        this._appEl_10 = new import3.AppElement(10, null, this, this._el_10);
        var compView_10 = import14.viewFactory_Content0(this.viewUtils, this.injector(10), this._appEl_10);
        this._Content_10_4 = new import14.Wrapper_Content(this.parentInjector.get(import15.Config), new import16.ElementRef(this._el_10), this.renderer, this.parentInjector.get(import18.App), this.parentInjector.get(import20.Keyboard), this.parentInjector.get(import21.NgZone), this.parentInjector.get(import17.ViewController, null), this.parentInjector.get(import22.Tabs, null));
        this._appEl_10.initComponent(this._Content_10_4.context, [], compView_10);
        this._text_11 = this.renderer.createText(null, '\n  ', null);
        this._el_12 = this.renderer.createElement(null, 'div', null);
        this._text_13 = this.renderer.createText(this._el_12, '\n    ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'p', null);
        this._text_15 = this.renderer.createText(this._el_14, '\n      亲爱的测试用户您好\n    ', null);
        this._text_16 = this.renderer.createText(this._el_12, '\n    ', null);
        this._el_17 = this.renderer.createElement(this._el_12, 'p', null);
        this._text_18 = this.renderer.createText(this._el_17, '\n      GoBoard直播平台是一个以用户需求为导向的任务型直播平台，在这里，你可以发布直播任务，领取直播任务，以及围观直播任务，满足学习，生活，娱乐等需求。\n    ', null);
        this._text_19 = this.renderer.createText(this._el_12, '\n    ', null);
        this._el_20 = this.renderer.createElement(this._el_12, 'p', null);
        this._text_21 = this.renderer.createText(this._el_20, '\n      我们的团队成员来自清华大学计算机系人机交互与媒体集成研究所，本平台的搭建用于科学研究，不涉及任何商业目的，我们将对您的隐私进行严格的保密。\n    ', null);
        this._text_22 = this.renderer.createText(this._el_12, '\n    ', null);
        this._el_23 = this.renderer.createElement(this._el_12, 'p', null);
        this._text_24 = this.renderer.createText(this._el_23, '\n      如您在使用过程中遇到任何问题，或有任何疑问，请随时联系我们。\n    ', null);
        this._text_25 = this.renderer.createText(this._el_12, '\n    ', null);
        this._el_26 = this.renderer.createElement(this._el_12, 'p', null);
        this._text_27 = this.renderer.createText(this._el_26, '\n      请随时给我们发送邮件：goboard2017@126.com\n    ', null);
        this._text_28 = this.renderer.createText(this._el_12, '\n    ', null);
        this._el_29 = this.renderer.createElement(this._el_12, 'p', null);
        this._text_30 = this.renderer.createText(this._el_29, '\n      GoBoard直播平台敬上\n    ', null);
        this._text_31 = this.renderer.createText(this._el_12, '\n  ', null);
        this._text_32 = this.renderer.createText(null, '\n\n', null);
        compView_10.create(this._Content_10_4.context, [
            [],
            [].concat([
                this._text_11,
                this._el_12,
                this._text_32
            ]),
            []
        ], null);
        this._text_33 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._text_33
        ], [], []);
        return null;
    };
    _View_ContactUsPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.ToolbarTitle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._ToolbarTitle_5_4.context;
        }
        if (((token === import24.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Navbar_3_4.context;
        }
        if (((token === import19.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Header_1_3.context;
        }
        if (((token === import25.Content) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._Content_10_4.context;
        }
        return notFoundResult;
    };
    _View_ContactUsPage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_1_3.detectChangesInternal(this, this._el_1, throwOnChange);
        var currVal_0 = 'blue';
        this._Navbar_3_4.check_color(currVal_0, throwOnChange, false);
        this._Navbar_3_4.detectChangesInternal(this, this._el_3, throwOnChange);
        if (this._ToolbarTitle_5_4.detectChangesInternal(this, this._el_5, throwOnChange)) {
            this._appEl_5.componentView.markAsCheckOnce();
        }
        if (this._Content_10_4.detectChangesInternal(this, this._el_10, throwOnChange)) {
            this._appEl_10.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = this._Navbar_3_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_3, 'hidden', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Navbar_3_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_3, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this._Content_10_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_10, 'statusbar-padding', currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_3_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ContactUsPage0.prototype.destroyInternal = function () {
        this._Content_10_4.context.ngOnDestroy();
    };
    return _View_ContactUsPage0;
}(import1.AppView));
export function viewFactory_ContactUsPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ContactUsPage === null)) {
        (renderType_ContactUsPage = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_ContactUsPage, {}));
    }
    return new _View_ContactUsPage0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=contact-us.ngfactory.js.map