/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import9 from '../node_modules/@angular/router/src/directives/router_link_active.ngfactory';
import * as import10 from '@angular/core/src/linker/query_list';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import13 from '@angular/router/src/router';
import * as import14 from '@angular/router/src/router_state';
import * as import15 from '@angular/common/src/location/location_strategy';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/router/src/router_outlet_map';
import * as import18 from '@angular/core/src/linker/component_factory_resolver';
import * as import19 from '@angular/router/src/directives/router_link';
import * as import20 from '@angular/router/src/directives/router_link_active';
import * as import21 from '@angular/router/src/directives/router_outlet';
export class Wrapper_Demo {
  /*private*/ _eventHandler:Function;
  context:import0.Demo;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.Demo();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_Demo_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_Demo_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.Demo>;
  _Demo_0_3:Wrapper_Demo;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Demo_Host0,renderType_Demo_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'demo',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_Demo0(this.viewUtils,this,0,this._el_0);
    this._Demo_0_3 = new Wrapper_Demo();
    this.compView_0.create(this._Demo_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._Demo_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Demo) && (0 === requestNodeIndex))) { return this._Demo_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Demo_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const DemoNgFactory:import7.ComponentFactory<import0.Demo> = new import7.ComponentFactory<import0.Demo>('demo',View_Demo_Host0,import0.Demo);
const styles_Demo:any[] = ([] as any[]);
var renderType_Demo:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_Demo,{});
export class View_Demo0 extends import1.AppView<import0.Demo> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import8.Wrapper_RouterLinkWithHref;
  _RouterLinkActive_2_4:import9.Wrapper_RouterLinkActive;
  _query_RouterLink_2_0:import10.QueryList<any>;
  _query_RouterLinkWithHref_2_1:import10.QueryList<any>;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _RouterLinkWithHref_5_3:import8.Wrapper_RouterLinkWithHref;
  _RouterLinkActive_5_4:import9.Wrapper_RouterLinkActive;
  _query_RouterLink_5_0:import10.QueryList<any>;
  _query_RouterLinkWithHref_5_1:import10.QueryList<any>;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _RouterLinkWithHref_8_3:import8.Wrapper_RouterLinkWithHref;
  _RouterLinkActive_8_4:import9.Wrapper_RouterLinkActive;
  _query_RouterLink_8_0:import10.QueryList<any>;
  _query_RouterLinkWithHref_8_1:import10.QueryList<any>;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _RouterLinkWithHref_11_3:import8.Wrapper_RouterLinkWithHref;
  _RouterLinkActive_11_4:import9.Wrapper_RouterLinkActive;
  _query_RouterLink_11_0:import10.QueryList<any>;
  _query_RouterLinkWithHref_11_1:import10.QueryList<any>;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _RouterLinkWithHref_14_3:import8.Wrapper_RouterLinkWithHref;
  _RouterLinkActive_14_4:import9.Wrapper_RouterLinkActive;
  _query_RouterLink_14_0:import10.QueryList<any>;
  _query_RouterLinkWithHref_14_1:import10.QueryList<any>;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _RouterLinkWithHref_17_3:import8.Wrapper_RouterLinkWithHref;
  _RouterLinkActive_17_4:import9.Wrapper_RouterLinkActive;
  _query_RouterLink_17_0:import10.QueryList<any>;
  _query_RouterLinkWithHref_17_1:import10.QueryList<any>;
  _text_18:any;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  /*private*/ _vc_21:import11.ViewContainer;
  _RouterOutlet_21_5:import12.Wrapper_RouterOutlet;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Demo0,renderType_Demo,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'nav',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray4(4,'routerLink','/','routerLinkActive','active'),(null as any));
    this._RouterLinkWithHref_2_3 = new import8.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router,this.parentIndex),this.parentView.injectorGet(import14.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import15.LocationStrategy,this.parentIndex));
    this._RouterLinkActive_2_4 = new import9.Wrapper_RouterLinkActive(this.parentView.injectorGet(import13.Router,this.parentIndex),new import16.ElementRef(this._el_2),this.renderer,this.ref);
    this._query_RouterLink_2_0 = new import10.QueryList<any>();
    this._query_RouterLinkWithHref_2_1 = new import10.QueryList<any>();
    this._text_3 = this.renderer.createText(this._el_2,'Home',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray4(4,'routerLink','/grid','routerLinkActive','active'),(null as any));
    this._RouterLinkWithHref_5_3 = new import8.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router,this.parentIndex),this.parentView.injectorGet(import14.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import15.LocationStrategy,this.parentIndex));
    this._RouterLinkActive_5_4 = new import9.Wrapper_RouterLinkActive(this.parentView.injectorGet(import13.Router,this.parentIndex),new import16.ElementRef(this._el_5),this.renderer,this.ref);
    this._query_RouterLink_5_0 = new import10.QueryList<any>();
    this._query_RouterLinkWithHref_5_1 = new import10.QueryList<any>();
    this._text_6 = this.renderer.createText(this._el_5,'Grid',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray4(4,'routerLink','/treeview','routerLinkActive','active'),(null as any));
    this._RouterLinkWithHref_8_3 = new import8.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router,this.parentIndex),this.parentView.injectorGet(import14.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import15.LocationStrategy,this.parentIndex));
    this._RouterLinkActive_8_4 = new import9.Wrapper_RouterLinkActive(this.parentView.injectorGet(import13.Router,this.parentIndex),new import16.ElementRef(this._el_8),this.renderer,this.ref);
    this._query_RouterLink_8_0 = new import10.QueryList<any>();
    this._query_RouterLinkWithHref_8_1 = new import10.QueryList<any>();
    this._text_9 = this.renderer.createText(this._el_8,'Treeview',(null as any));
    this._text_10 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray4(4,'routerLink','/survey','routerLinkActive','active'),(null as any));
    this._RouterLinkWithHref_11_3 = new import8.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router,this.parentIndex),this.parentView.injectorGet(import14.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import15.LocationStrategy,this.parentIndex));
    this._RouterLinkActive_11_4 = new import9.Wrapper_RouterLinkActive(this.parentView.injectorGet(import13.Router,this.parentIndex),new import16.ElementRef(this._el_11),this.renderer,this.ref);
    this._query_RouterLink_11_0 = new import10.QueryList<any>();
    this._query_RouterLinkWithHref_11_1 = new import10.QueryList<any>();
    this._text_12 = this.renderer.createText(this._el_11,'Dynamic Form',(null as any));
    this._text_13 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray4(4,'routerLink','/input','routerLinkActive','active'),(null as any));
    this._RouterLinkWithHref_14_3 = new import8.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router,this.parentIndex),this.parentView.injectorGet(import14.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import15.LocationStrategy,this.parentIndex));
    this._RouterLinkActive_14_4 = new import9.Wrapper_RouterLinkActive(this.parentView.injectorGet(import13.Router,this.parentIndex),new import16.ElementRef(this._el_14),this.renderer,this.ref);
    this._query_RouterLink_14_0 = new import10.QueryList<any>();
    this._query_RouterLinkWithHref_14_1 = new import10.QueryList<any>();
    this._text_15 = this.renderer.createText(this._el_14,'Input Controls',(null as any));
    this._text_16 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray4(4,'routerLink','/sort','routerLinkActive','active'),(null as any));
    this._RouterLinkWithHref_17_3 = new import8.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router,this.parentIndex),this.parentView.injectorGet(import14.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import15.LocationStrategy,this.parentIndex));
    this._RouterLinkActive_17_4 = new import9.Wrapper_RouterLinkActive(this.parentView.injectorGet(import13.Router,this.parentIndex),new import16.ElementRef(this._el_17),this.renderer,this.ref);
    this._query_RouterLink_17_0 = new import10.QueryList<any>();
    this._query_RouterLinkWithHref_17_1 = new import10.QueryList<any>();
    this._text_18 = this.renderer.createText(this._el_17,'Insertion Sort',(null as any));
    this._text_19 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_20 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_21 = import3.createRenderElement(this.renderer,parentRenderNode,'router-outlet',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_21 = new import11.ViewContainer(21,(null as any),this,this._el_21);
    this._RouterOutlet_21_5 = new import12.Wrapper_RouterOutlet(this.parentView.injectorGet(import17.RouterOutletMap,this.parentIndex),this._vc_21.vcRef,this.parentView.injectorGet(import18.ComponentFactoryResolver,this.parentIndex),(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_2));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_5));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_8,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_8));
    var disposable_3:Function = import3.subscribeToRenderElement(this,this._el_11,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_11));
    var disposable_4:Function = import3.subscribeToRenderElement(this,this._el_14,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_14));
    var disposable_5:Function = import3.subscribeToRenderElement(this,this._el_17,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_17));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._text_20,
      this._el_21
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._RouterLinkWithHref_2_3.context; }
    if (((token === import20.RouterLinkActive) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._RouterLinkActive_2_4.context; }
    if (((token === import19.RouterLinkWithHref) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._RouterLinkWithHref_5_3.context; }
    if (((token === import20.RouterLinkActive) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._RouterLinkActive_5_4.context; }
    if (((token === import19.RouterLinkWithHref) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLinkWithHref_8_3.context; }
    if (((token === import20.RouterLinkActive) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLinkActive_8_4.context; }
    if (((token === import19.RouterLinkWithHref) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._RouterLinkWithHref_11_3.context; }
    if (((token === import20.RouterLinkActive) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._RouterLinkActive_11_4.context; }
    if (((token === import19.RouterLinkWithHref) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._RouterLinkWithHref_14_3.context; }
    if (((token === import20.RouterLinkActive) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._RouterLinkActive_14_4.context; }
    if (((token === import19.RouterLinkWithHref) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._RouterLinkWithHref_17_3.context; }
    if (((token === import20.RouterLinkActive) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._RouterLinkActive_17_4.context; }
    if (((token === import21.RouterOutlet) && (21 === requestNodeIndex))) { return this._RouterOutlet_21_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = '/';
    this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_0,throwOnChange,false);
    this._RouterLinkWithHref_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    const currVal_2_1_0:any = 'active';
    this._RouterLinkActive_2_4.check_routerLinkActive(currVal_2_1_0,throwOnChange,false);
    this._RouterLinkActive_2_4.ngDoCheck(this,this._el_2,throwOnChange);
    const currVal_5_0_0:any = '/grid';
    this._RouterLinkWithHref_5_3.check_routerLink(currVal_5_0_0,throwOnChange,false);
    this._RouterLinkWithHref_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    const currVal_5_1_0:any = 'active';
    this._RouterLinkActive_5_4.check_routerLinkActive(currVal_5_1_0,throwOnChange,false);
    this._RouterLinkActive_5_4.ngDoCheck(this,this._el_5,throwOnChange);
    const currVal_8_0_0:any = '/treeview';
    this._RouterLinkWithHref_8_3.check_routerLink(currVal_8_0_0,throwOnChange,false);
    this._RouterLinkWithHref_8_3.ngDoCheck(this,this._el_8,throwOnChange);
    const currVal_8_1_0:any = 'active';
    this._RouterLinkActive_8_4.check_routerLinkActive(currVal_8_1_0,throwOnChange,false);
    this._RouterLinkActive_8_4.ngDoCheck(this,this._el_8,throwOnChange);
    const currVal_11_0_0:any = '/survey';
    this._RouterLinkWithHref_11_3.check_routerLink(currVal_11_0_0,throwOnChange,false);
    this._RouterLinkWithHref_11_3.ngDoCheck(this,this._el_11,throwOnChange);
    const currVal_11_1_0:any = 'active';
    this._RouterLinkActive_11_4.check_routerLinkActive(currVal_11_1_0,throwOnChange,false);
    this._RouterLinkActive_11_4.ngDoCheck(this,this._el_11,throwOnChange);
    const currVal_14_0_0:any = '/input';
    this._RouterLinkWithHref_14_3.check_routerLink(currVal_14_0_0,throwOnChange,false);
    this._RouterLinkWithHref_14_3.ngDoCheck(this,this._el_14,throwOnChange);
    const currVal_14_1_0:any = 'active';
    this._RouterLinkActive_14_4.check_routerLinkActive(currVal_14_1_0,throwOnChange,false);
    this._RouterLinkActive_14_4.ngDoCheck(this,this._el_14,throwOnChange);
    const currVal_17_0_0:any = '/sort';
    this._RouterLinkWithHref_17_3.check_routerLink(currVal_17_0_0,throwOnChange,false);
    this._RouterLinkWithHref_17_3.ngDoCheck(this,this._el_17,throwOnChange);
    const currVal_17_1_0:any = 'active';
    this._RouterLinkActive_17_4.check_routerLinkActive(currVal_17_1_0,throwOnChange,false);
    this._RouterLinkActive_17_4.ngDoCheck(this,this._el_17,throwOnChange);
    this._RouterOutlet_21_5.ngDoCheck(this,this._el_21,throwOnChange);
    this._vc_21.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_2_0.dirty) {
        this._query_RouterLink_2_0.reset(([] as any[]));
        this._RouterLinkActive_2_4.context.links = this._query_RouterLink_2_0;
        this._query_RouterLink_2_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_2_1.dirty) {
        this._query_RouterLinkWithHref_2_1.reset([this._RouterLinkWithHref_2_3.context]);
        this._RouterLinkActive_2_4.context.linksWithHrefs = this._query_RouterLinkWithHref_2_1;
        this._query_RouterLinkWithHref_2_1.notifyOnChanges();
      }
      if (this._query_RouterLink_5_0.dirty) {
        this._query_RouterLink_5_0.reset(([] as any[]));
        this._RouterLinkActive_5_4.context.links = this._query_RouterLink_5_0;
        this._query_RouterLink_5_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_5_1.dirty) {
        this._query_RouterLinkWithHref_5_1.reset([this._RouterLinkWithHref_5_3.context]);
        this._RouterLinkActive_5_4.context.linksWithHrefs = this._query_RouterLinkWithHref_5_1;
        this._query_RouterLinkWithHref_5_1.notifyOnChanges();
      }
      if (this._query_RouterLink_8_0.dirty) {
        this._query_RouterLink_8_0.reset(([] as any[]));
        this._RouterLinkActive_8_4.context.links = this._query_RouterLink_8_0;
        this._query_RouterLink_8_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_8_1.dirty) {
        this._query_RouterLinkWithHref_8_1.reset([this._RouterLinkWithHref_8_3.context]);
        this._RouterLinkActive_8_4.context.linksWithHrefs = this._query_RouterLinkWithHref_8_1;
        this._query_RouterLinkWithHref_8_1.notifyOnChanges();
      }
      if (this._query_RouterLink_11_0.dirty) {
        this._query_RouterLink_11_0.reset(([] as any[]));
        this._RouterLinkActive_11_4.context.links = this._query_RouterLink_11_0;
        this._query_RouterLink_11_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_11_1.dirty) {
        this._query_RouterLinkWithHref_11_1.reset([this._RouterLinkWithHref_11_3.context]);
        this._RouterLinkActive_11_4.context.linksWithHrefs = this._query_RouterLinkWithHref_11_1;
        this._query_RouterLinkWithHref_11_1.notifyOnChanges();
      }
      if (this._query_RouterLink_14_0.dirty) {
        this._query_RouterLink_14_0.reset(([] as any[]));
        this._RouterLinkActive_14_4.context.links = this._query_RouterLink_14_0;
        this._query_RouterLink_14_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_14_1.dirty) {
        this._query_RouterLinkWithHref_14_1.reset([this._RouterLinkWithHref_14_3.context]);
        this._RouterLinkActive_14_4.context.linksWithHrefs = this._query_RouterLinkWithHref_14_1;
        this._query_RouterLinkWithHref_14_1.notifyOnChanges();
      }
      if (this._query_RouterLink_17_0.dirty) {
        this._query_RouterLink_17_0.reset(([] as any[]));
        this._RouterLinkActive_17_4.context.links = this._query_RouterLink_17_0;
        this._query_RouterLink_17_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_17_1.dirty) {
        this._query_RouterLinkWithHref_17_1.reset([this._RouterLinkWithHref_17_3.context]);
        this._RouterLinkActive_17_4.context.linksWithHrefs = this._query_RouterLinkWithHref_17_1;
        this._query_RouterLinkWithHref_17_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_2_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_5_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_8_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_11_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_14_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_17_4.context.ngAfterContentInit(); }
    }
    this._RouterLinkWithHref_2_3.checkHost(this,this,this._el_2,throwOnChange);
    this._RouterLinkWithHref_5_3.checkHost(this,this,this._el_5,throwOnChange);
    this._RouterLinkWithHref_8_3.checkHost(this,this,this._el_8,throwOnChange);
    this._RouterLinkWithHref_11_3.checkHost(this,this,this._el_11,throwOnChange);
    this._RouterLinkWithHref_14_3.checkHost(this,this,this._el_14,throwOnChange);
    this._RouterLinkWithHref_17_3.checkHost(this,this,this._el_17,throwOnChange);
  }
  destroyInternal():void {
    this._vc_21.destroyNestedViews();
    this._RouterLinkWithHref_2_3.ngOnDestroy();
    this._RouterLinkActive_2_4.ngOnDestroy();
    this._RouterLinkWithHref_5_3.ngOnDestroy();
    this._RouterLinkActive_5_4.ngOnDestroy();
    this._RouterLinkWithHref_8_3.ngOnDestroy();
    this._RouterLinkActive_8_4.ngOnDestroy();
    this._RouterLinkWithHref_11_3.ngOnDestroy();
    this._RouterLinkActive_11_4.ngOnDestroy();
    this._RouterLinkWithHref_14_3.ngOnDestroy();
    this._RouterLinkActive_14_4.ngOnDestroy();
    this._RouterLinkWithHref_17_3.ngOnDestroy();
    this._RouterLinkActive_17_4.ngOnDestroy();
    this._RouterOutlet_21_5.ngOnDestroy();
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_2_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_5_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_8(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_8_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_11(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_11_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_14(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_14_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_17(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_17_3.handleEvent(eventName,$event) && result);
    return result;
  }
}