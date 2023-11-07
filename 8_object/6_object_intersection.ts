/**
 * Object Intersection
 */
type PrimitiveIntersection = string & number; // never

type PersonType = {
  name: string;
  age: number;
};

type CompanyType = {
  company: string;
  companyRegistrationNumber: string;
};

type PersonAndCompany = PersonType & CompanyType; // 얘는 동시에 충족 가능

const jisoo: PersonAndCompany = {
  name: "지수",
  age: 32,
  company: "YG",
  companyRegistrationNumber: "xyz",
};

type PetType = {
  petName: string;
  petAge: number;
};

type CompanyOrPet = PersonType & (CompanyType | PetType);

const companyOrPet: CompanyOrPet = {
  // PersonType
  name: "코드팩토리",
  age: 32,

  // 밑에 애들은 둘 중 하나만 있어도 되고, 둘 다 있어도 됨. 근데 둘 다 없으면 안됨.

  // CompanyType
  company: "주식회사 코드팩토리",
  companyRegistrationNumber: "xyz",

  // PetType
  petName: "오리",
  petAge: 8,
};
