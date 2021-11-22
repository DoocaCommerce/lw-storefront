import { OptionsGet } from '../../common/FetchTypes';
import { Brand } from './BrandTypes';
export declare function getBrands(options?: OptionsGet): Promise<Brand[]>;
export declare function getBrandByID(id: number, options?: OptionsGet): Promise<Brand>;
