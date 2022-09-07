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
