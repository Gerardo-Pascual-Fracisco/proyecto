const API = 'http://192.168.248.27:8000/api/category'
const SERVICES = 'http://192.168.248.27:8000/api/service'

export const getTasks=async() => { 
    const res = await fetch(API)
    return await res.json()
}
export const getServices=async() => { 
  const res = await fetch(SERVICES)
  return await res.json()
}
export const saveTask = async (newTask) => {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    return await res.json();
  };
  
export const deleteTask = async (id_category) => {
    await fetch(`${API}/${id_category}`, {
      method: "DELETE",
    });

  };