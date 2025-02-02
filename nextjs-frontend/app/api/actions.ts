type callAPIResponse = {
    message: string;
    success: boolean;
}


export async function callGetMethod(): Promise<callAPIResponse> {
    console.log("called the api.")
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/`, {
        method: 'GET',
    });
    
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    
    return res.json();
}

export async function getDetails(): Promise<callAPIResponse> {
    console.log("called the api 1.")
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/getDetails/55`, {
        method: 'POST',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function tellMyname(): Promise<callAPIResponse> {
    console.log("called the api. 2")
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tellMyName/alex/78`, {
        method: 'POST',
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}