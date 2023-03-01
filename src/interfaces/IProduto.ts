import ICategoria from "./ICategoria";

export default interface IProduto {
  id: number;
  categoryId: number;
  description: string;
  icmsTax: number;
  ipiTax: number;
  isAvailable: boolean;
  isWarehouse: boolean;
  minPuchaseQuantity: number;
  name: string;
  productCategory: ICategoria[];
}
