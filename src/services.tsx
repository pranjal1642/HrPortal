import CryptoJS from 'crypto-js';

export const decryptData = (req: any, res: any, next: any) => {
	if (process.env.encryptionBool === 'YES') {
		const decryptData = CryptoJS.AES.decrypt(
			req.body.data,
			process.env.encryptKey,
		);
		const stringData = decryptData.toString(CryptoJS.enc.Utf8);
		req.body = JSON.parse(stringData);
		next();
	}
};

export const encryptData = (data: any) => {
	if (process.env.encryptionBool === 'YES') {
		const stringData = JSON.stringify(data);
		const encryptData = CryptoJS.AES.encrypt(
			stringData,
			process.env.encryptKey,
		).toString();
		return encryptData;
	} else {
		return data;
	}
};
