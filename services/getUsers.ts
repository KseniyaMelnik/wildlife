export const getAllUsers = async () => {
    const response = await fetch('/api/users');
    if (!response.ok) throw new Error ('Unable to fetch sponsors.')
    return response.json();
}