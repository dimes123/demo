export const environment = {
  production: false,
  baseUrl: 'https://dummy.restapiexample.com/api/v1'
};

export enum ApiPaths {
  GET_EMPLOYEES = '/employees',
  GET_SINGLE_EMPLOYEES = '/employee',
  CREATE_EMPLOYEE = '/create',
  UPDATE_EMPLOYEE = '/update',
  DELETE_EMPLOYEE = '/delete',
}
