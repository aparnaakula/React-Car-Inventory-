const token = 'f6534ee0a7415ec78a2421748f092058273c9d7e619d1358'
export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-inventory-0e5z.onrender.com/api/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'x-access-token': `Bearer ${token}`
            } 
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://car-inventory-0e5z.onrender.com/api/cars`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id: string, data:any = {}) => {
        const response = await fetch(`https://car-inventory-0e5z.onrender.com/api/cars/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',

                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
    
            })
    
            if (!response.ok) {
                throw new Error('Failed to update data on the server')
            }
    
            return await response.json()
        },

    delete: async(id:string) => {
        const response = await fetch(`https://car-inventory-0e5z.onrender.com/api/cars/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',

                'x-access-token': `Bearer ${token}`
            }
        })
        if(!response.ok){
            throw new Error('Failed to Update data on server')
        }
    },
}