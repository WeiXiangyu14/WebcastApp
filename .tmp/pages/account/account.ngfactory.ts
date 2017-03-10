/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './account';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '../../providers/storage';
import * as import5 from '../../providers/user-data';
import * as import6 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/change_detection';
import * as import10 from '@angular/http/src/http';
import * as import11 from 'ionic-angular/navigation/nav-controller';
import * as import12 from 'ionic-angular/components/alert/alert';
import * as import13 from '@angular/core/src/metadata/view';
import * as import14 from '@angular/core/src/linker/component_factory';
import * as import15 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import19 from '@angular/core/src/linker/query_list';
import * as import20 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import21 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import22 from '../../node_modules/ionic-angular/components/slides/slides.ngfactory';
import * as import23 from '../../node_modules/ionic-angular/components/grid/grid.ngfactory';
import * as import24 from 'ionic-angular/config/config';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from 'ionic-angular/navigation/view-controller';
import * as import27 from 'ionic-angular/components/app/app';
import * as import28 from 'ionic-angular/components/toolbar/toolbar';
import * as import29 from 'ionic-angular/util/keyboard';
import * as import30 from '@angular/core/src/zone/ng_zone';
import * as import31 from 'ionic-angular/components/tabs/tabs';
import * as import32 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import33 from 'ionic-angular/components/button/button';
import * as import34 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import35 from 'ionic-angular/components/navbar/navbar';
import * as import36 from 'ionic-angular/components/grid/grid';
import * as import37 from 'ionic-angular/components/slides/slides';
import * as import38 from 'ionic-angular/components/content/content';
export class Wrapper_AccountPage {
  context:import0.AccountPage;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this.changed = false;
    this.context = new import0.AccountPage(p0,p1,p2,p3);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_AccountPage_Host:import2.RenderComponentType = (null as any);
class _View_AccountPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Storage_0_4:import4.Storage;
  _UserData_0_5:import5.UserData;
  _AccountPage_0_6:Wrapper_AccountPage;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import3.AppElement) {
    super(_View_AccountPage_Host0,renderType_AccountPage_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-account',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AccountPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Storage_0_4 = new import4.Storage();
    this._UserData_0_5 = new import5.UserData(this.parentInjector.get(import10.Http));
    this._AccountPage_0_6 = new Wrapper_AccountPage(this.parentInjector.get(import11.NavController),this.parentInjector.get(import12.AlertController),this._Storage_0_4,this._UserData_0_5);
    this._appEl_0.initComponent(this._AccountPage_0_6.context,([] as any[]),compView_0);
    compView_0.create(this._AccountPage_0_6.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import4.Storage) && (0 === requestNodeIndex))) { return this._Storage_0_4; }
    if (((token === import5.UserData) && (0 === requestNodeIndex))) { return this._UserData_0_5; }
    if (((token === import0.AccountPage) && (0 === requestNodeIndex))) { return this._AccountPage_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AccountPage_0_6.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AccountPage_Host0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_AccountPage_Host === (null as any))) { (renderType_AccountPage_Host = viewUtils.createRenderComponentType('',0,import13.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_AccountPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const AccountPageNgFactory:import14.ComponentFactory<import0.AccountPage> = new import14.ComponentFactory<import0.AccountPage>('page-account',viewFactory_AccountPage_Host0,import0.AccountPage);
const styles_AccountPage:any[] = ([] as any[]);
var renderType_AccountPage:import2.RenderComponentType = (null as any);
class _View_AccountPage0 extends import1.AppView<import0.AccountPage> {
  _el_0:any;
  _Header_0_3:import15.Wrapper_Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Navbar_2_4:import16.Wrapper_Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _ToolbarTitle_4_4:import17.Wrapper_ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _ToolbarItem_7_3:import18.Wrapper_ToolbarItem;
  _query_Button_7_0:import19.QueryList<any>;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import3.AppElement;
  _Button_9_4:import20.Wrapper_Button;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  /*private*/ _appEl_15:import3.AppElement;
  _Content_15_4:import21.Wrapper_Content;
  _text_16:any;
  _el_17:any;
  /*private*/ _appEl_17:import3.AppElement;
  _Slides_17_4:import22.Wrapper_Slides;
  _text_18:any;
  _el_19:any;
  _Grid_19_3:import23.Wrapper_Grid;
  _text_20:any;
  _el_21:any;
  _Row_21_3:import23.Wrapper_Row;
  _text_22:any;
  _el_23:any;
  _Col_23_3:import23.Wrapper_Col;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _el_30:any;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  _el_34:any;
  _Col_34_3:import23.Wrapper_Col;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _text_38:any;
  _el_39:any;
  _text_40:any;
  _el_41:any;
  _text_42:any;
  _text_43:any;
  _text_44:any;
  _text_45:any;
  _el_46:any;
  _text_47:any;
  _el_48:any;
  _Row_48_3:import23.Wrapper_Row;
  _text_49:any;
  _el_50:any;
  _Col_50_3:import23.Wrapper_Col;
  _text_51:any;
  _el_52:any;
  _text_53:any;
  _text_54:any;
  _el_55:any;
  _text_56:any;
  _text_57:any;
  _text_58:any;
  _el_59:any;
  _Col_59_3:import23.Wrapper_Col;
  _text_60:any;
  _el_61:any;
  _text_62:any;
  _text_63:any;
  _el_64:any;
  _text_65:any;
  _text_66:any;
  _text_67:any;
  _text_68:any;
  _el_69:any;
  _text_70:any;
  _el_71:any;
  _text_72:any;
  _el_73:any;
  /*private*/ _appEl_73:import3.AppElement;
  _Button_73_4:import20.Wrapper_Button;
  _text_74:any;
  _text_75:any;
  _text_76:any;
  _text_77:any;
  _text_78:any;
  _text_79:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import3.AppElement) {
    super(_View_AccountPage0,renderType_AccountPage,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import15.Wrapper_Header(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import26.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this.renderer.setElementAttribute(this._el_2,'color','blue');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import16.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import16.Wrapper_Navbar(this.parentInjector.get(import27.App),this.parentInjector.get(import26.ViewController,(null as any)),this.parentInjector.get(import11.NavController,(null as any)),this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this.renderer.setElementAttribute(this._el_4,'style','font-size: 18px;');
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import17.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import17.Wrapper_ToolbarTitle(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import28.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'我的账户',(null as any));
    compView_4.create(this._ToolbarTitle_4_4.context,[([] as any[]).concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_7 = this.renderer.createElement((null as any),'ion-buttons',(null as any));
    this.renderer.setElementAttribute(this._el_7,'end','');
    this._ToolbarItem_7_3 = new import18.Wrapper_ToolbarItem(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_7),this.renderer,this.parentInjector.get(import28.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._query_Button_7_0 = new import19.QueryList<any>();
    this._text_8 = this.renderer.createText(this._el_7,'\n      ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_7,'button',(null as any));
    this.renderer.setElementAttribute(this._el_9,'ion-button','');
    this.renderer.setElementAttribute(this._el_9,'style','font-size: 16px;');
    this._appEl_9 = new import3.AppElement(9,7,this,this._el_9);
    var compView_9:any = import20.viewFactory_Button0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Button_9_4 = new import20.Wrapper_Button((null as any),'',this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_9),this.renderer);
    this._appEl_9.initComponent(this._Button_9_4.context,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'历史记录',(null as any));
    compView_9.create(this._Button_9_4.context,[([] as any[]).concat([this._text_10])],(null as any));
    this._text_11 = this.renderer.createText(this._el_7,'\n    ',(null as any));
    this._text_12 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([this._el_7]),
      ([] as any[]).concat([
        this._text_3,
        this._el_4,
        this._text_6,
        this._text_12
      ]
      )
    ]
    ,(null as any));
    this._text_13 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_14 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_15 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this._appEl_15 = new import3.AppElement(15,(null as any),this,this._el_15);
    var compView_15:any = import21.viewFactory_Content0(this.viewUtils,this.injector(15),this._appEl_15);
    this._Content_15_4 = new import21.Wrapper_Content(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_15),this.renderer,this.parentInjector.get(import27.App),this.parentInjector.get(import29.Keyboard),this.parentInjector.get(import30.NgZone),this.parentInjector.get(import26.ViewController,(null as any)),this.parentInjector.get(import31.Tabs,(null as any)));
    this._appEl_15.initComponent(this._Content_15_4.context,([] as any[]),compView_15);
    this._text_16 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_17 = this.renderer.createElement((null as any),'ion-slides',(null as any));
    this.renderer.setElementAttribute(this._el_17,'class','contentGray');
    this.renderer.setElementAttribute(this._el_17,'style','width: 100%; height: 100%;');
    this._appEl_17 = new import3.AppElement(17,15,this,this._el_17);
    var compView_17:any = import22.viewFactory_Slides0(this.viewUtils,this.injector(17),this._appEl_17);
    this._Slides_17_4 = new import22.Wrapper_Slides(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_17),this.renderer);
    this._appEl_17.initComponent(this._Slides_17_4.context,([] as any[]),compView_17);
    this._text_18 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_19 = this.renderer.createElement((null as any),'ion-grid',(null as any));
    this.renderer.setElementAttribute(this._el_19,'class','no-padding');
    this.renderer.setElementAttribute(this._el_19,'style','width: 100%; height: 372px;');
    this._Grid_19_3 = new import23.Wrapper_Grid();
    this._text_20 = this.renderer.createText(this._el_19,'\n      ',(null as any));
    this._el_21 = this.renderer.createElement(this._el_19,'ion-row',(null as any));
    this.renderer.setElementAttribute(this._el_21,'center','');
    this.renderer.setElementAttribute(this._el_21,'style','height: 165px; background-color: #75ABE9;');
    this._Row_21_3 = new import23.Wrapper_Row();
    this._text_22 = this.renderer.createText(this._el_21,'\n        ',(null as any));
    this._el_23 = this.renderer.createElement(this._el_21,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_23,'text-center','');
    this.renderer.setElementAttribute(this._el_23,'width-50','');
    this._Col_23_3 = new import23.Wrapper_Col();
    this._text_24 = this.renderer.createText(this._el_23,'\n          ',(null as any));
    this._el_25 = this.renderer.createElement(this._el_23,'div',(null as any));
    this.renderer.setElementAttribute(this._el_25,'style','color: #FFFFFF; font-size: 14px;');
    this._text_26 = this.renderer.createText(this._el_25,'今日金币收益',(null as any));
    this._text_27 = this.renderer.createText(this._el_23,'\n          ',(null as any));
    this._el_28 = this.renderer.createElement(this._el_23,'br',(null as any));
    this._text_29 = this.renderer.createText(this._el_23,'\n          ',(null as any));
    this._el_30 = this.renderer.createElement(this._el_23,'div',(null as any));
    this.renderer.setElementAttribute(this._el_30,'style','color: #FFFFFF; font-size: 48px;');
    this._text_31 = this.renderer.createText(this._el_30,'',(null as any));
    this._text_32 = this.renderer.createText(this._el_23,'\n        ',(null as any));
    this._text_33 = this.renderer.createText(this._el_21,'\n        ',(null as any));
    this._el_34 = this.renderer.createElement(this._el_21,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_34,'text-center','');
    this.renderer.setElementAttribute(this._el_34,'width-50','');
    this._Col_34_3 = new import23.Wrapper_Col();
    this._text_35 = this.renderer.createText(this._el_34,'\n          ',(null as any));
    this._el_36 = this.renderer.createElement(this._el_34,'div',(null as any));
    this.renderer.setElementAttribute(this._el_36,'style','color: #FFFFFF; font-size: 14px;');
    this._text_37 = this.renderer.createText(this._el_36,'今日积分收益',(null as any));
    this._text_38 = this.renderer.createText(this._el_34,'\n          ',(null as any));
    this._el_39 = this.renderer.createElement(this._el_34,'br',(null as any));
    this._text_40 = this.renderer.createText(this._el_34,'\n          ',(null as any));
    this._el_41 = this.renderer.createElement(this._el_34,'div',(null as any));
    this.renderer.setElementAttribute(this._el_41,'style','color: #FFFFFF; font-size: 48px;');
    this._text_42 = this.renderer.createText(this._el_41,'',(null as any));
    this._text_43 = this.renderer.createText(this._el_34,'\n        ',(null as any));
    this._text_44 = this.renderer.createText(this._el_21,'\n      ',(null as any));
    this._text_45 = this.renderer.createText(this._el_19,'\n      ',(null as any));
    this._el_46 = this.renderer.createElement(this._el_19,'div',(null as any));
    this.renderer.setElementAttribute(this._el_46,'style','height: 8px; background-color: #F5F5F5;');
    this._text_47 = this.renderer.createText(this._el_19,'\n      ',(null as any));
    this._el_48 = this.renderer.createElement(this._el_19,'ion-row',(null as any));
    this.renderer.setElementAttribute(this._el_48,'center','');
    this.renderer.setElementAttribute(this._el_48,'style','height: 107px; background-color: #FFFFFF;');
    this._Row_48_3 = new import23.Wrapper_Row();
    this._text_49 = this.renderer.createText(this._el_48,'\n        ',(null as any));
    this._el_50 = this.renderer.createElement(this._el_48,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_50,'text-center','');
    this.renderer.setElementAttribute(this._el_50,'width-50','');
    this._Col_50_3 = new import23.Wrapper_Col();
    this._text_51 = this.renderer.createText(this._el_50,'\n          ',(null as any));
    this._el_52 = this.renderer.createElement(this._el_50,'div',(null as any));
    this.renderer.setElementAttribute(this._el_52,'style','color: #4A4A4A; font-size: 14px;');
    this._text_53 = this.renderer.createText(this._el_52,'我的金币',(null as any));
    this._text_54 = this.renderer.createText(this._el_50,'\n          ',(null as any));
    this._el_55 = this.renderer.createElement(this._el_50,'div',(null as any));
    this.renderer.setElementAttribute(this._el_55,'style','color: #4990E2; font-size: 36px;');
    this._text_56 = this.renderer.createText(this._el_55,'',(null as any));
    this._text_57 = this.renderer.createText(this._el_50,'\n        ',(null as any));
    this._text_58 = this.renderer.createText(this._el_48,'\n        ',(null as any));
    this._el_59 = this.renderer.createElement(this._el_48,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_59,'text-center','');
    this.renderer.setElementAttribute(this._el_59,'width-50','');
    this._Col_59_3 = new import23.Wrapper_Col();
    this._text_60 = this.renderer.createText(this._el_59,'\n          ',(null as any));
    this._el_61 = this.renderer.createElement(this._el_59,'div',(null as any));
    this.renderer.setElementAttribute(this._el_61,'style','color: #4A4A4A; font-size: 14px;');
    this._text_62 = this.renderer.createText(this._el_61,'我的积分',(null as any));
    this._text_63 = this.renderer.createText(this._el_59,'\n          ',(null as any));
    this._el_64 = this.renderer.createElement(this._el_59,'div',(null as any));
    this.renderer.setElementAttribute(this._el_64,'style','color: #4990E2; font-size: 36px;');
    this._text_65 = this.renderer.createText(this._el_64,'',(null as any));
    this._text_66 = this.renderer.createText(this._el_59,'\n        ',(null as any));
    this._text_67 = this.renderer.createText(this._el_48,'\n      ',(null as any));
    this._text_68 = this.renderer.createText(this._el_19,'\n      ',(null as any));
    this._el_69 = this.renderer.createElement(this._el_19,'div',(null as any));
    this.renderer.setElementAttribute(this._el_69,'style','height: 48px; background-color: #F5F5F5;');
    this._text_70 = this.renderer.createText(this._el_19,'\n      ',(null as any));
    this._el_71 = this.renderer.createElement(this._el_19,'div',(null as any));
    this.renderer.setElementAttribute(this._el_71,'style','height: 44px; padding-left: 17px; padding-right: 17px;');
    this._text_72 = this.renderer.createText(this._el_71,'\n        ',(null as any));
    this._el_73 = this.renderer.createElement(this._el_71,'button',(null as any));
    this.renderer.setElementAttribute(this._el_73,'block','');
    this.renderer.setElementAttribute(this._el_73,'color','blue');
    this.renderer.setElementAttribute(this._el_73,'ion-button','');
    this.renderer.setElementAttribute(this._el_73,'style','font-size: 18px; height: 44px;');
    this._appEl_73 = new import3.AppElement(73,71,this,this._el_73);
    var compView_73:any = import20.viewFactory_Button0(this.viewUtils,this.injector(73),this._appEl_73);
    this._Button_73_4 = new import20.Wrapper_Button((null as any),'',this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_73),this.renderer);
    this._appEl_73.initComponent(this._Button_73_4.context,([] as any[]),compView_73);
    this._text_74 = this.renderer.createText((null as any),'我想充值',(null as any));
    compView_73.create(this._Button_73_4.context,[([] as any[]).concat([this._text_74])],(null as any));
    this._text_75 = this.renderer.createText(this._el_71,'\n      ',(null as any));
    this._text_76 = this.renderer.createText(this._el_19,'\n    ',(null as any));
    this._text_77 = this.renderer.createText((null as any),'\n  ',(null as any));
      compView_17.create(this._Slides_17_4.context,[([] as any[]).concat([
        this._text_18,
        this._el_19,
        this._text_77
      ]
    )],(null as any));
    this._text_78 = this.renderer.createText((null as any),'\n',(null as any));
    compView_15.create(this._Content_15_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_16,
        this._el_17,
        this._text_78
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_79 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_1 = import9.UNINITIALIZED;
    this._expr_2 = import9.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_9,'click',this.eventHandler(this._handle_click_9_0.bind(this)));
    this._expr_4 = import9.UNINITIALIZED;
    this._expr_5 = import9.UNINITIALIZED;
    this._expr_6 = import9.UNINITIALIZED;
    this._expr_7 = import9.UNINITIALIZED;
    this._expr_8 = import9.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_73,'click',this.eventHandler(this._handle_click_73_0.bind(this)));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._text_32,
      this._text_33,
      this._el_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._text_38,
      this._el_39,
      this._text_40,
      this._el_41,
      this._text_42,
      this._text_43,
      this._text_44,
      this._text_45,
      this._el_46,
      this._text_47,
      this._el_48,
      this._text_49,
      this._el_50,
      this._text_51,
      this._el_52,
      this._text_53,
      this._text_54,
      this._el_55,
      this._text_56,
      this._text_57,
      this._text_58,
      this._el_59,
      this._text_60,
      this._el_61,
      this._text_62,
      this._text_63,
      this._el_64,
      this._text_65,
      this._text_66,
      this._text_67,
      this._text_68,
      this._el_69,
      this._text_70,
      this._el_71,
      this._text_72,
      this._el_73,
      this._text_74,
      this._text_75,
      this._text_76,
      this._text_77,
      this._text_78,
      this._text_79
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import32.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4.context; }
    if (((token === import33.Button) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._Button_9_4.context; }
    if (((token === import34.ToolbarItem) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._ToolbarItem_7_3.context; }
    if (((token === import35.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._Navbar_2_4.context; }
    if (((token === import28.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._Header_0_3.context; }
    if (((token === import36.Col) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 32)))) { return this._Col_23_3.context; }
    if (((token === import36.Col) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 43)))) { return this._Col_34_3.context; }
    if (((token === import36.Row) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 44)))) { return this._Row_21_3.context; }
    if (((token === import36.Col) && ((50 <= requestNodeIndex) && (requestNodeIndex <= 57)))) { return this._Col_50_3.context; }
    if (((token === import36.Col) && ((59 <= requestNodeIndex) && (requestNodeIndex <= 66)))) { return this._Col_59_3.context; }
    if (((token === import36.Row) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 67)))) { return this._Row_48_3.context; }
    if (((token === import33.Button) && ((73 <= requestNodeIndex) && (requestNodeIndex <= 74)))) { return this._Button_73_4.context; }
    if (((token === import36.Grid) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 76)))) { return this._Grid_19_3.context; }
    if (((token === import37.Slides) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 77)))) { return this._Slides_17_4.context; }
    if (((token === import38.Content) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 78)))) { return this._Content_15_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    const currVal_0:any = 'blue';
    this._Navbar_2_4.check_color(currVal_0,throwOnChange,false);
    this._Navbar_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    if (this._ToolbarTitle_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    this._ToolbarItem_7_3.detectChangesInternal(this,this._el_7,throwOnChange);
    if (this._Button_9_4.detectChangesInternal(this,this._el_9,throwOnChange)) { this._appEl_9.componentView.markAsCheckOnce(); }
    if (this._Content_15_4.detectChangesInternal(this,this._el_15,throwOnChange)) { this._appEl_15.componentView.markAsCheckOnce(); }
    if (this._Slides_17_4.detectChangesInternal(this,this._el_17,throwOnChange)) { this._appEl_17.componentView.markAsCheckOnce(); }
    this._Grid_19_3.detectChangesInternal(this,this._el_19,throwOnChange);
    this._Row_21_3.detectChangesInternal(this,this._el_21,throwOnChange);
    this._Col_23_3.detectChangesInternal(this,this._el_23,throwOnChange);
    this._Col_34_3.detectChangesInternal(this,this._el_34,throwOnChange);
    this._Row_48_3.detectChangesInternal(this,this._el_48,throwOnChange);
    this._Col_50_3.detectChangesInternal(this,this._el_50,throwOnChange);
    this._Col_59_3.detectChangesInternal(this,this._el_59,throwOnChange);
    const currVal_10:any = '';
    this._Button_73_4.check_block(currVal_10,throwOnChange,false);
    const currVal_11:any = 'blue';
    this._Button_73_4.check_color(currVal_11,throwOnChange,false);
    if (this._Button_73_4.detectChangesInternal(this,this._el_73,throwOnChange)) { this._appEl_73.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_7_0.dirty) {
        this._query_Button_7_0.reset([this._Button_9_4.context]);
        this._ToolbarItem_7_3.context._buttons = this._query_Button_7_0;
        this._query_Button_7_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Button_9_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_73_4.context.ngAfterContentInit(); }
    }
    const currVal_1:any = this._Navbar_2_4.context._hidden;
    if (import6.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Navbar_2_4.context._sbPadding;
    if (import6.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_4:any = this._Content_15_4.context._sbPadding;
    if (import6.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_15,'statusbar-padding',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = import6.interpolate(1,'',this.context.myWallet.todayGoldCoin,'');
    if (import6.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_31,currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = import6.interpolate(1,'',this.context.myWallet.todayPoint,'');
    if (import6.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setText(this._text_42,currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = import6.interpolate(1,'',this.context.myWallet.totalGoldCoin,'');
    if (import6.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setText(this._text_56,currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = import6.interpolate(1,'',this.context.myWallet.totalPoint,'');
    if (import6.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setText(this._text_65,currVal_8);
      this._expr_8 = currVal_8;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_15_4.context.ngOnDestroy();
  }
  private _handle_click_9_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.history()) !== false);
    return (true && pd_0);
  }
  private _handle_click_73_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.recharge()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_AccountPage0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import3.AppElement):import1.AppView<import0.AccountPage> {
  if ((renderType_AccountPage === (null as any))) { (renderType_AccountPage = viewUtils.createRenderComponentType('',0,import13.ViewEncapsulation.None,styles_AccountPage,{})); }
  return new _View_AccountPage0(viewUtils,parentInjector,declarationEl);
}