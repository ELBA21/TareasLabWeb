const api = import.meta.env.VITE_API_URL;

async function get() {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log("[DEBUG]: Error en get, de toDoApi");
    console.error(err.message);
    return err;
  }
}

async function getTodo() {
  try {
    const response = await fetch(api + "/todos");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json(); //<== aparentemente esto hace que el json sea objetio de forma automatica
    console.log(result);
    return result;
  } catch (err) {
    console.log("[DEBUG]: Error en getTodo 2, de toDoApi");
    console.error(err.message);
    throw err;
  }
}

async function post(newTodo) {
  try {
    const response = await fetch(api + "/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log("[DEBUG]: Error en post, de toDoAPi");
    console.error(err.message);
    return err;
  }
}

async function toggle(id) {
  try {
    const response = await fetch(api + `/todos/${id}/toggle`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log("[DEBUG]: Error en toggle, de toDoApi");
    console.error(err.message);
    return err;
  }
}

async function el_delete(id) {
  try {
    const response = await fetch(api + `/todos/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log("[DEBUG]: Error en Delete, de toDoApi");
    console.error(err.message);
    return err;
  }
}
function toDoApi() {
  return {
    get: () => get(),
    getTodo: () => getTodo(),
    post: (newTodo) => post(newTodo),
    toggle: (id) => toggle(id),
    el_delete: (id) => el_delete(id),
  };
}

export default toDoApi;
