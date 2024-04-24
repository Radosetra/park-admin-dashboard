import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
export  class HttpClient {
    private static  client(): AxiosInstance {
        const axiosConfig: AxiosRequestConfig = {
            baseURL: "http://192.168.43.66:3000/api",
        }
        let axiosInstance = axios.create(axiosConfig)
        axiosInstance.interceptors.request.use((config) => {
            if (config.headers['Content-Type'] === 'multipart/form-data') {
                config.headers['ContentType'] = 'multipart/form-data';
            }
             return config
            }, (error) => {
                return Promise.reject(error)
            }
        )
        return axiosInstance
    }
    public  static get(url: string): Promise<AxiosResponse>{
        return this.client().get(url);
    }
    public static post<T>(url: string, payload: T) : Promise<AxiosResponse>{
        console.log("here at axios");
        return this.client().post(url, payload);
    }
    public static put<T>(url: string, payload: T) : Promise<AxiosResponse>{
        return this.client().put(url, payload);
    }
    public static patch<T>(url: string, payload: T): Promise<AxiosResponse> {
        return this.client().patch(url, payload);
    }
    public static delete(url: string): Promise<AxiosResponse> {
        return this.client().delete(url);
    }

}
