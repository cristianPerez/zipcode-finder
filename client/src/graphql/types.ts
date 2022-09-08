export interface CountryType {
  code: string
  label: string
  phone: string
  suggested?: boolean
}

export interface CreateSearchType {
    zipcode: string
    country: string
}

interface Search {
  id?: string;
  zipcode?: string;
  country?: string;
  countryAbb?: string;
  city?: string;
  state?: string;
}

export interface WrapSearch {
  searches: [Search?]
}
