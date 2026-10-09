import {$host} from './index'

export const getCurrency = async(id: string)=> {
    const {data} = await $host.get(`/${id.key}`)
    
    console.log(data)

    return data

}