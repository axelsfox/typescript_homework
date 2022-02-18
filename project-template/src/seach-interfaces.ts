export interface SearchFormData {
  checkin?: string
  checkout?: string
  price?: string
}

export function userFormData(userData: SearchFormData): void {
  console.log(userData);
}
