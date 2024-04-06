import CryptoJS from 'crypto-js';

export const decryptData = (req: any,) => {
	if (true) {
		const decryptData = CryptoJS.AES.decrypt(
			req.body.data,
			"LeW79Rhdjh67ZqOMvYKZAwr5kE43vwz",
		);
		const stringData = decryptData.toString(CryptoJS.enc.Utf8);
		req.body = JSON.parse(stringData);
	}
};

export const encryptData = (data: any) => {
	if (true) {
		console.log(data, "PPPPPPPPPPP");
		const stringData = JSON.stringify(data);
		const encryptData = CryptoJS.AES.encrypt(
			stringData,
			"LeW79Rhdjh67ZqOMvYKZAwr5kE43vwz",
		).toString();
		return encryptData;
	} else {
		return data;
	}
};
