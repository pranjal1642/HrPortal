import CryptoJS from 'crypto-js';

export const decryptData = (req: any) => {
	try {
		const decryptData = CryptoJS.AES.decrypt(
			req.body.data,
			'LeW79Rhdjh67ZqOMvYKZAwr5kE43vwz',
		);
		const stringData = decryptData.toString(CryptoJS.enc.Utf8);
		req.body = JSON.parse(stringData);
	} catch (error) {
		console.error('Error decrypting data:', error);
		// Handle the error as per your application's requirements
	}
};

export const encryptData = (data: any) => {
	try {
		console.log(data, 'PPPPPPPPPPP');
		const stringData = JSON.stringify(data);
		const encryptData = CryptoJS.AES.encrypt(
			stringData,
			'LeW79Rhdjh67ZqOMvYKZAwr5kE43vwz',
		).toString();
		return encryptData;
	} catch (error) {
		console.error('Error encrypting data:', error);
		// Handle the error as per your application's requirements
		return null; // Return null or handle the error accordingly
	}
};
