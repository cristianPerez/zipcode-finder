import { gql } from 'apollo-server'
import { apolloServer } from '../lib/apolloServer'

it('should show trow an error because zipcode is wrong', async () => {
  const result = await apolloServer.executeOperation({
    query: gql`
      query {
        search(zipcode: "10500", countryAbb: "US") {
          zipcode
          country
          city
          state
        }
      }
    `,
  })
  expect(result).toBeTruthy()
  const { errors = [] } = result
  expect(errors).toBeTruthy()
  expect(errors).toHaveLength(1)
  const errorMessages = errors.map((error) => error.message)
  expect(errorMessages[0]).toBe('Not Found')
})

it('should request the right information from TH country', async () => {
  const expectedObject = {
    zipcode: '10500',
    country: 'Thailand',
    city: 'Bang Rak',
    state: 'Bangkok',
  }
  const result = await apolloServer.executeOperation({
    query: gql`
      query {
        search(zipcode: "10500", countryAbb: "TH") {
          zipcode
          country
          city
          state
        }
      }
    `,
  })
  expect(result).toBeTruthy()
  expect(result.errors).toBeFalsy()
  expect(result.data).toBeTruthy()
  expect(result.data).toHaveProperty('search')
  expect(Object.assign({}, result?.data?.search)).toStrictEqual(expectedObject)
})
