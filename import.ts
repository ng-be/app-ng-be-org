import {promises as fs} from 'fs';
import * as path from 'path';
import * as firebase from 'firebase';
import {environment} from './src/environments/environment.ngbe';

firebase.initializeApp(environment.firebase);

const db = firebase.firestore();

(async (): Promise<void> => {
	const files = await fs.readdir('data');

	for (const file of files) {
		const {name} = path.parse(file);
		const items = JSON.parse(await fs.readFile(path.join('data', file), 'utf8'));

		for (const {id, ...item} of items) {
			await db.collection(name).doc(id).set(item);
		}
	}
})();
