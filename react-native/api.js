
const API = 'http://192.168.1.187:8000/api/category'
const SERVICES = 'http://192.168.1.187:8000/api/service'

const MOSTRAR_SERVICES = 'http://192.168.1.187:8000/api/showById/1'

export const getTasks=async() => { 
    const res = await fetch(API)
    return await res.json()
}
export const getServices=async() => { 
  const res = await fetch(SERVICES)
  return await res.json()
}

export const getCateServices=async() => { 
  const res = await fetch(MOSTRAR_SERVICES)
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