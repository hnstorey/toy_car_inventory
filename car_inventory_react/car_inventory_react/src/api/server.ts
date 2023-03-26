const token = '05b0d68f701336a03e5e3f4bdbb415269b0d3f0338578fc0'

export const server_calls = { 
    get: async () => {
        const response = await fetch(`https://yummy-fifth-engine.glitch.me/api/my_cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://yummy-fifth-engine.glitch.me'
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {} ) => {
        const response = await fetch(`https://yummy-fifth-engine.glitch.me/api/my_cars`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://yummy-fifth-engine.glitch.me'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://yummy-fifth-engine.glitch.me/api/my_cars/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://yummy-fifth-engine.glitch.me'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error(`Failed to update data on server.`)
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://yummy-fifth-engine.glitch.me/api/my_cars/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://yummy-fifth-engine.glitch.me/'
            }
        })

        if (!response.ok){
            throw new Error(`Failed to delete data on server.`),
            console.log(`${id}`)
        }

        return;
    },
}