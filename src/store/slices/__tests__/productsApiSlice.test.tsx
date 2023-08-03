import type { ReactNode } from 'react'
import { renderHook, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { store } from '../../store'
import { useGetProductsByBrandQuery, useGetProductsByCategoryQuery, useGetProductsQuery } from '../productsApiSlice'

import { 
  foodData,
  treatsData, 
  toysData, 
  suppliesData, 
  productsData, 
  kongBrandData 
} from '../../../__mocks__/data/productsData'

function wrapper({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}

describe('useGetProductsQuery', () => {
  let server: ReturnType<typeof setupServer>

  beforeAll(() => {
    server = setupServer(
      rest.get('http://localhost:54321/products', (req, res, ctx) => {
        return res(ctx.json(productsData))
      })
    )
    server.listen()
  })

  afterAll(() => {
    server.close()
  })

  it('should fetch all products', async () => {
    const { result } = renderHook(() => useGetProductsQuery({}), { wrapper })

    await waitFor(() => {
      expect(result.current.data.productsData).toHaveLength(4)
      expect(result.current.data.productsData[0].id).toBe(1)
    })
  })
})

describe('useGetProductsByCategoryQuery', () => {
  let server: ReturnType<typeof setupServer>

  beforeAll(() => {
    server = setupServer(
      rest.get('http://localhost:54321/products/category/:category', (req, res, ctx) => {
        const { category } = req.params
        let dynamicResponse: any

        if (category === 'Food') {
          dynamicResponse = foodData
        } else if (category === 'Supplies') {
          dynamicResponse = suppliesData
        } else if (category === 'Toys') {
          dynamicResponse = toysData
        } else if (category === 'Treats') {
          dynamicResponse = treatsData
        }

        return res(ctx.json(dynamicResponse))
      })
    )
    server.listen()
  })

  afterAll(() => {
    server.close()
  })

  it('should fetch products by category "Food"', async () => {
    const { result } = renderHook(() => useGetProductsByCategoryQuery('Food'), { wrapper })

    await waitFor(() => {
      const name = 'Red Meat, Liver & Whole Oats Recipe Dog Food'

      expect(result.current.data.productsByCategory).toHaveLength(4)
      expect(result.current.data.productsByCategory[0].name).toBe(name)
    })
  })

  it('should fetch products by category "Toys"', async () => {
    const { result } = renderHook(() => useGetProductsByCategoryQuery('Toys'), { wrapper })

    await waitFor(() => {
      const name = 'Squeaky Plush Dog Toy'

      expect(result.current.data.productsByCategory).toHaveLength(4)
      expect(result.current.data.productsByCategory[0].name).toBe(name)
    })
  })
  
  it('should fetch products by category "Supplies"', async () => {
    const { result } = renderHook(() => useGetProductsByCategoryQuery('Supplies'), { wrapper })

    await waitFor(() => {
      const name = 'Marble Dog Bowl'

      expect(result.current.data.productsByCategory).toHaveLength(4)
      expect(result.current.data.productsByCategory[0].name).toBe(name)
    })
  })

  it('should fetch products by category "Treats"', async () => {
    const { result } = renderHook(() => useGetProductsByCategoryQuery('Treats'), { wrapper })

    await waitFor(() => {
      const name = 'Bully stick'

      expect(result.current.data.productsByCategory).toHaveLength(4)
      expect(result.current.data.productsByCategory[0].name).toBe(name)
    })
  })
})

describe('useGetProductsByBrandQuery', () => {
  let server: ReturnType<typeof setupServer>

  beforeAll(() => {
    server = setupServer(
      rest.get('http://localhost:54321/products/brand/:brand', (req, res, ctx) => {
        const { brand } = req.params
        let brandResponse: any

        if (brand === 'KONG') {
          brandResponse = kongBrandData
        }

        return res(ctx.json(brandResponse))
      })
    )
    server.listen()
  })

  afterAll(() => {
    server.close()
  })

  it('should fetch products by brand "KONG"', async () => {
    const { result } = renderHook(() => useGetProductsByBrandQuery('KONG'), { wrapper })

    await waitFor(() => {
      const name = 'Squeaky Plush Dog Toy'

      expect(result.current.data.productsByBrand).toHaveLength(4)
      expect(result.current.data.productsByBrand[0].name).toBe(name)
    })
  })
})