export declare const helpers: {
    stringHelper: {
        slugify: typeof import("./helpers/stringHelper").slugify;
    };
    styleHelper: {
        parseRootVars: (variables: any) => string;
        fontLoader: (font: any) => string;
    };
    viewportHelper: {
        getSize: () => {
            width: number;
            height: number;
        };
        widthGreaterThan: (width: any) => boolean;
        widthLessThan: (width: any) => boolean;
        heightGreaterhan: (height: any) => boolean;
        heightLessThan: (height: any) => boolean;
        isMobile: () => boolean;
    };
};
export declare const services: {
    brand: {
        get: () => Promise<import("./modules/brand/BrandTypes").Brand[]>;
        getById: (id: number) => Promise<import("./modules/brand/BrandTypes").Brand>;
    };
    sections: {
        get: () => Promise<Object>;
    };
    settings: {
        get: () => Promise<Object>;
    };
};
export declare const socket: {
    create(hashPreview: any, store: any): void;
};
