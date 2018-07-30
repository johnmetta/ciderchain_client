export default class {
  async get(url, {expects = [200]} = {}) {
    const res = await fetch(`http://localhost:3000${url}`)
    const data = await res.json()
    const {status} = res

    if (!expects.includes(status)) {
      const error = new Error(data.message)
      error.status = status
      error.data = data
      //throw error
    }

    return {data, status}
  };

 async post(url, params, {expects = [200]} = {}) {
    const res = await fetch(`http://localhost:3000${url}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    const data = await res.json();
    const {status} = res;

    if (!expects.includes(status)) {
      const error = new Error(data.message)
      error.status = status
      error.data = data
      throw error
    }

    return {data, status}
  };
};
