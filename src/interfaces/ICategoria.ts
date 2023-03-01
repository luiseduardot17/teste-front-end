export default interface ICategoria {
  id: number;
  allowAttachments: boolean;
  allowQuantityVariation: boolean;
  description: string;

  hasShipping: boolean;
  limitRequest: number;
  limitRequestsPerMonth: boolean;
  name: string;

  validateClient: boolean;
  valueVariation: number;
  allowValueVariation: boolean;
}