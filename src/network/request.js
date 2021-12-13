import axios from 'axios'


export default function request(config) {
	// 1.创建axios的实例
	const instance = axios.create({
		// baseurl代替换
		baseURL: 'http://127.0.0.1:9000',
		// 请求超时时间
		timeout: 5000
	})

	// 请求拦截
	instance.interceptors.request.use(config => {
		// 在参数合理的情况下继续往下执行
		return config
	}, err => {
		// 参数出现问题的时候返回错误信息
		return err
	})

	// 响应拦截
	instance.interceptors.response.use(response => {
		// 拿到请求返回值后可以进行数据处理后进行返回
		return response.data
	}, err => {
		// 不正常返回时进行错误处理
		if (err && err.response) {
			switch (err.response.status) {
				case 400:
					err.message = '请求错误'
					break
				case 401:
					err.message = '未授权的访问'
					break
			}
		}
		return err
	})
	// 发送请求  这里的返回值是一个Promise 在使用的时候可以直接进行使用

	/* instance(config)
	正常情况执行resolve方法 res为返回值
	.then(res => {resolve(res)})
	异常情况执行reject err为错误信息
	.catch(err => {reject(err)}) */
	return instance(config);
}
