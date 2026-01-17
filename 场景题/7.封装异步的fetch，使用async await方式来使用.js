async () => {
  class HttpRequestUtil {
    async _request(url, method, data = null) {
      const config = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (data) {
        config.body = JSON.stringify(data);
      }
      try {
        const res = await fetch(url, config);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return await res.json();  //是JSON.parse(await res.text())的语法糖
      } catch {
        console.error("请求失败:", error);
        throw error; // 继续向上抛出或者返回默认值
      }
    }

    async get(url) {
     return this._request(url,get)
    }

    async post(url, data) {
      return this._request(url, "POST", data);
    }

    async put(url, data) {
      return this._request(url, "PUT", data);
    }

    async delete(url, data) {
      return this._request(url, "DELETE", data);
    }
  }

  const httpRequestUtil = new HttpRequestUtil();
};
