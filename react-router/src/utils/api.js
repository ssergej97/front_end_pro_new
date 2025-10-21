export const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com${endpoint}`);
        if (!response.ok) {
            throw new Error('Помилка мережевого запиту');
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};
