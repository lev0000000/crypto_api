import {$host} from './index'

export const getAll = async()=> {
    const {data} = await $host.get('')

    const datamap = [
        data.data.map((item) => {
            return {
                key: String(item.id),
                label: item.name,
            }
        })
    ]

    console.log(datamap)

    return datamap

}