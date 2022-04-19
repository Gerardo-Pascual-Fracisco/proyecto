

const API = 'http://192.168.1.72:8000/api/category'
const SERVICES = 'http://192.168.1.72:8000/api/service'

const MOSTRAR_SERVICES = 'http://192.168.92.27:8000/api/showById'

//obtener categorias
export const getTasks = async () => {
  const res = await fetch(API)
  return await res.json();
}
//obtener servicios
export const getServices = async () => {
  const res = await fetch(SERVICES)
  return await res.json();
}


//obtener servicios de categoria
export const getCateServices = async (id) => {
  const res = await fetch(`${MOSTRAR_SERVICES}/${id}`);
  return await res.json();
};

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

//eliminar categoria
export const deleteTask = async (id_category) => {
  await fetch(`${API}/${id_category}`, {
    method: "DELETE",
  });

};