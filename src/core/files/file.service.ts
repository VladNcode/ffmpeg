import { stat, unlink } from 'fs/promises';
import { dirname, isAbsolute, join } from 'path';

export class FileService {
	private async isExist(path: string): Promise<boolean> {
		try {
			await stat(path);
			return true;
		} catch {
			return false;
		}
	}

	public getFilePath(path: string, name: string, exension: string): string {
		if (!isAbsolute(path)) path = join(__dirname + '/' + path);

		return join(dirname(path) + '/' + name + '.' + exension);
	}

	async deleteFileIfExists(path: string): Promise<void> {
		if (!this.isExist(path)) unlink(path);
	}
}
