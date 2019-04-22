/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface LiRating {
    'color': string;
    'fillMode': string;
    'fontSize': any;
    'opacity': any;
    'setSvgString': (svgHtml: any) => void;
    'strokeColor': string;
    'strokeWidth': string;
    'svgIconPath': any;
    'textIcon': any;
    'totalIcons': any;
    'value': string;
  }
  interface LiRatingAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'fillMode'?: string;
    'fontSize'?: any;
    'onInput'?: (event: CustomEvent) => void;
    'opacity'?: any;
    'strokeColor'?: string;
    'strokeWidth'?: string;
    'svgIconPath'?: any;
    'textIcon'?: any;
    'totalIcons'?: any;
    'value'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'LiRating': Components.LiRating;
  }

  interface StencilIntrinsicElements {
    'li-rating': Components.LiRatingAttributes;
  }


  interface HTMLLiRatingElement extends Components.LiRating, HTMLStencilElement {}
  var HTMLLiRatingElement: {
    prototype: HTMLLiRatingElement;
    new (): HTMLLiRatingElement;
  };

  interface HTMLElementTagNameMap {
    'li-rating': HTMLLiRatingElement
  }

  interface ElementTagNameMap {
    'li-rating': HTMLLiRatingElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
