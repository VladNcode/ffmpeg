export class FFmpegBuilder {
	private inputPath: string;
	private options: Map<string, string> = new Map();

	constructor() {
		this.options.set('-c:v', 'libx264');
	}

	input(path: string): this {
		this.inputPath = path;
		return this;
	}

	setVideoSize(width: number, height: number): this {
		this.options.set('-s', `${width}x${height}`);
		return this;
	}

	output(outputPath: string): string[] {
		if (!this.inputPath) {
			throw new Error('Input path not provided!');
		}

		const args: string[] = ['-i', this.inputPath];
		this.options.forEach((value, key) => {
			args.push(key, value);
		});

		args.push(outputPath);
		args.push('-loglevel', 'error');

		return args;
	}
}
