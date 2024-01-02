import useSWR from 'swr';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosResponseTransformer } from 'axios'

type AtLeast<T, K extends keyof T> = & Pick<T, K> & Partial<T>
type AxiosResponseWithFallbackData<T> = AtLeast<AxiosResponse<T>, 'data'>

export default function useSWRAxios<T>(
	axiosRequest: AxiosRequestConfig,
	axiosFallbackData: AxiosResponseWithFallbackData<T>,
){
	const initFallbackData: AxiosResponse<T> = {
		data: axiosFallbackData.data,
		header: {},
		status: 200,
		statusText: 'Inittial',
		config:{},
	}

	const fallbackData: AxiosResponse<T> = {...initFallbackData, ...axiosFallbackData}

	return useSWR(
		JSON.stringify(axiosRequest),
		() => axios.request<T>(axiosRequest),
		{
			fallbackData,
			onErrorRetry: (error: AxiosError<T>, key, config, revalidate ,{retryCount }) => {
				// Never retry on 404.
				if(error.reponse?.status === 404) return ; 
				
				// Only retry up to `maxRetry` times.
				const maxRetry = parseInt(process.env.NEXT_PUBLIC_API_MAX_RETRY ?? '5', 10)
        		if (retryCount >= maxRetry) return

        		// Retry after `retryInterval` seconds.
		        const retryInterval = parseInt(process.env.NEXT_PUBLIC_API_RETRY_INTERVAL_IN_SECONDS ?? '5', 10)
		        setTimeout(() => revalidate({ retryCount }), retryInterval * 1000)
			}
		}
	)
}


export const tranformResponseWrapper = (tranformer: AxiosResponseTransformer) => {
	return ( [] as AxiosResponseTransformer[]).concat(
		axios.defaults.transformResponse as AxiosResponseTransformer,
		tranformer
	)as AxiosResponseTransformer[]
}