export interface CartResumeData {
    total_quantity: Number;
    subtotal: Number;
    total: Number;
    total_discount: Number;
    token: string | null;
    items: [];
}
export interface CartResumeState {
    data: CartResumeData;
    loading: boolean;
    error: string | null;
}
