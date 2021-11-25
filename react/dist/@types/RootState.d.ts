import { CartResumeState } from '../store/modules/cart-resume/type';
import { BaseState } from './BaseState';
export interface RootState {
    settings: BaseState;
    cartResume: CartResumeState;
}
