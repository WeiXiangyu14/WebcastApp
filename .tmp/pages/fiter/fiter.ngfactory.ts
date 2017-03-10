/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './fiter';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/view-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
export class Wrapper_FiterPage {
  context:import0.FiterPage;
  changed:boolean;
  constructor(p0:any) {
    this.changed = false;
    this.context = new import0.FiterPage(p0);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_FiterPage_Host:import2.RenderComponentType = (null as any);
class _View_FiterPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _FiterPage_0_4:Wrapper_FiterPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_FiterPage_Host0,renderType_FiterPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-fiter',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_FiterPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._FiterPage_0_4 = new Wrapper_FiterPage(this.parentInjector.get(import8.ViewController));
    this._appEl_0.initComponent(this._FiterPage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._FiterPage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.FiterPage) && (0 === requestNodeIndex))) { return this._FiterPage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._FiterPage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_FiterPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_FiterPage_Host === (null as any))) { (renderType_FiterPage_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_FiterPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const FiterPageNgFactory:import10.ComponentFactory<import0.FiterPage> = new import10.ComponentFactory<import0.FiterPage>('page-fiter',viewFactory_FiterPage_Host0,import0.FiterPage);
const styles_FiterPage:any[] = ([] as any[]);
var renderType_FiterPage:import2.RenderComponentType = (null as any);
class _View_FiterPage0 extends import1.AppView<import0.FiterPage> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _text_21:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_FiterPage0,renderType_FiterPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_1,'style','width: 120px; height: 165px; background-color: #75ABE9;');
    this._text_2 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'button',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','item');
    this._text_4 = this.renderer.createText(this._el_3,'只看金币',(null as any));
    this._text_5 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_1,'div',(null as any));
    this.renderer.setElementAttribute(this._el_6,'style','height: 1px; background-color: #9B9B9B; padding-left: 10px; padding-right: 10px;');
    this._text_7 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_1,'button',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','item');
    this._text_9 = this.renderer.createText(this._el_8,'只看积分',(null as any));
    this._text_10 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_1,'div',(null as any));
    this.renderer.setElementAttribute(this._el_11,'style','height: 1px; background-color: #9B9B9B; padding-left: 10px; padding-right: 10px;');
    this._text_12 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_1,'button',(null as any));
    this.renderer.setElementAttribute(this._el_13,'class','item');
    this._text_14 = this.renderer.createText(this._el_13,'只看收益',(null as any));
    this._text_15 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_1,'div',(null as any));
    this.renderer.setElementAttribute(this._el_16,'style','height: 1px; background-color: #9B9B9B; padding-left: 10px; padding-right: 10px;');
    this._text_17 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_18 = this.renderer.createElement(this._el_1,'button',(null as any));
    this.renderer.setElementAttribute(this._el_18,'class','item');
    this._text_19 = this.renderer.createText(this._el_18,'只看支出',(null as any));
    this._text_20 = this.renderer.createText(this._el_1,'\n',(null as any));
    this._text_21 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_3,'click',this.eventHandler(this._handle_click_3_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_8,'click',this.eventHandler(this._handle_click_8_0.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_13,'click',this.eventHandler(this._handle_click_13_0.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_18,'click',this.eventHandler(this._handle_click_18_0.bind(this)));
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._text_21
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    ,([] as any[]));
    return (null as any);
  }
  private _handle_click_3_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.close(this.context.goldCoin)) !== false);
    return (true && pd_0);
  }
  private _handle_click_8_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.close(this.context.points)) !== false);
    return (true && pd_0);
  }
  private _handle_click_13_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.close(this.context.income)) !== false);
    return (true && pd_0);
  }
  private _handle_click_18_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.close(this.context.payment)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_FiterPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.FiterPage> {
  if ((renderType_FiterPage === (null as any))) { (renderType_FiterPage = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,styles_FiterPage,{})); }
  return new _View_FiterPage0(viewUtils,parentInjector,declarationEl);
}