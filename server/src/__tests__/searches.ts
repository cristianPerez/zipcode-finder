import { gql } from 'apollo-server'
import { apolloServer } from '../lib/apolloServer'

it('should show trow an error because zipcode is wrong', async () => {
  const result = await apolloServer.executeOperation({
    query: gql`
      query {
        search(zipcode: "10500", country: "US") {
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
        search(zipcode: "10500", country: "TH") {
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

it('should create a search for RU country', async () => {
  const expectedObject = {
    zipcode: '101000',
    country: 'Russia',
    city: 'Москва',
    state: 'Москва',
  }
  const result = await apolloServer.executeOperation({
    query: gql`
      mutation {
        search: createSearch(input: { zipcode: "101000", country: "RU" }) {
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
