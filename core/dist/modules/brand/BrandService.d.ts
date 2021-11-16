import { Brand } from './BrandTypes';
declare function get(): Promise<Brand[]>;
declare function getById(id: number): Promise<Brand>;
declare const _default: {
    get: typeof get;
    getById: typeof getById;
};
export default _default;
