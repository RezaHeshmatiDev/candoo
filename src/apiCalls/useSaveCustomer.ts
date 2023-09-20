import { AxiosError, AxiosResponse } from "axios";
import { useMutation, UseMutationResult } from "react-query";
import instance from "./instance";

interface ICustomer {
  creatorID?: number;
  isMale?: boolean;
  birthDate?: Date;
  branchID?: number;
  id: number;
  workActivityID?: number;
  typeID?: number;
  firstName: string;
  name: string;
  nationalCode?: string;
  cellPhone: string;
  bankID?: number;
  webAddress?: string;
  storeName?: string | null;
  phone1: string | null;
  phone2?: string | null;
  fax?: string | null;
  email?: string | null;
  bossDescription?: string;
  relatedPositionID?: number;
  farsiBirthDate: string;
  farsiMarriageDate?: string;
  cityId?: number;
  jobID?: number;
  educationID?: number;
  customerDegreeID?: number;
  reservedID?: number;
  purchaseLocationID?: number;
  preConditionID?: number;
  city?: string;
  town?: string;
  street1?: string;
  street2?: string;
  no?: string;
  floorNo?: string;
  unitNo?: string;
  postalCode?: string;
  stateTaxOrganizationCode?: number;
  cityTaxOrganizationCode?: number;
  fromMorningTime?: number;
  toMorningTime?: number;
  fromEveningTime?: number;
  toEveningTime?: number;
  lng?: number;
  lat?: number;
  codeBK?: string;
  codeBetter?: string;
  ringNo?: string;
  address: string;
  address2?: string;
  address3?: string;
  notes?: string;
}




interface IResponse {
  newCustomer: {
    cellPhone: string;
    firstName: string;
    id: number;
    name: string;

  };
}

type UseSaveCustomer = () => UseMutationResult<
  AxiosResponse<IResponse>,
  AxiosError,
  ICustomer
>;

type SaveCustomers = (vars: ICustomer) => Promise<AxiosResponse>;

const saveCustomers: SaveCustomers = (vars) => {
  const branchID = vars.branchID;
  delete vars.branchID
  return instance().post(`basic/saveCustomer`, {
    distributionOrganization: branchID ? { branchID } : {},
    organization: { ...vars },
  });
}
const useSaveCustomer: UseSaveCustomer = () => {
  return useMutation((vars: ICustomer) => saveCustomers(vars));
};

export default useSaveCustomer;
