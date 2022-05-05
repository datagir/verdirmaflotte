import { useQuery } from 'react-query'
import axios from 'axios'

export default function useTruckComparison(search) {
  const { data: token } = useToken()
  console.log('token', token)
  return useQuery(
    ['truckComparison'],
    () =>
      axios
        .get(
          `https://staging--tco2.netlify.app/.netlify/functions/getTruckComparison`
          /*  {
          vehicle: { vehicleCategory: 'RIGIDTRUCK-12T' },
          use: {
            operatingRange: 'URBAN',
            usesRepartition: [20, 30, 50],
            OriginDestination: {
              origin: { latitude: null, longitude: null },
              destination: { latitude: null, longitude: null },
            },
            totalAnnualDistance: 100000,
            payload: 60,
          },
          tcoParameters: { possessionDuration: 10, fuelConsumption: 0 },
          echartsConfiguration: true,
        }*/
        )
        .then((res) => res.data),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )
}

export function useToken() {
  return useQuery(
    ['token'],
    () =>
      axios
        .get(`https://staging--tco2.netlify.app/.netlify/functions/getToken`)
        .then((res) => res.data),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )
}
