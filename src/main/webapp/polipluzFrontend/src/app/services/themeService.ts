import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _renderer: Renderer2;
  private _theme = new BehaviorSubject<boolean>(false);
  
  constructor(
   private readonly _rendererFactory: RendererFactory2,
   @Inject(DOCUMENT) public document: Document
  ) {
   if (!this.storageMode) {
     this.storageMode = false;
   }
   this._renderer = this._rendererFactory.createRenderer(null, null);
   this.setMode(this.storageMode !== 'false');
  }
  
  setMode(value: boolean): void {
    this.storageMode = value;
    this._theme.next(value);
    this._renderer.removeClass(this.document.body, 'dark');
    this._renderer.removeClass(this.document.body, 'light');
    this._renderer.addClass(this.document.body, this._modeClass);
  }
  
  get mode(): boolean {
    return this._theme.value;
  }
  
  get storageMode(): any {
    return localStorage.getItem('theme');
  }
  
  set storageMode(value: any) {
    localStorage.setItem('theme', value);
  }
  
  private get _modeClass(): string {
    return this._theme.value ? 'dark' : 'light';
  }
}