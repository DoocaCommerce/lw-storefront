declare function getSize(): {
    width: number;
    height: number;
};
declare function widthGreaterThan(width: any): boolean;
declare function widthLessThan(width: any): boolean;
declare function heightGreaterhan(height: any): boolean;
declare function heightLessThan(height: any): boolean;
declare function isMobile(): boolean;
declare const _default: {
    getSize: typeof getSize;
    widthGreaterThan: typeof widthGreaterThan;
    widthLessThan: typeof widthLessThan;
    heightGreaterhan: typeof heightGreaterhan;
    heightLessThan: typeof heightLessThan;
    isMobile: typeof isMobile;
};
export default _default;
