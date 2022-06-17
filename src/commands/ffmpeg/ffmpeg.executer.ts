import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { CommandExecuter } from '../../core/executer/command.executer.js';
import { FileService } from '../../core/files/file.service.js';
import { IStreamLogger } from '../../core/handlers/stream-logger.interface.js';
import { StreamHandler } from '../../core/handlers/stream.handler.js';
import { PromptService } from '../../core/prompt/prompt.service.js';
import { FFmpegBuilder } from './ffmpeg.builder.js';
import { ICommandExecFfmpeg, IFfmpegInput } from './ffmpeg.types.js';

export class FfmpegExecuter extends CommandExecuter<IFfmpegInput> {
	private fileService: FileService = new FileService();
	private promptService: PromptService = new PromptService();

	constructor(logger: IStreamLogger) {
		super(logger);
	}

	protected async prompt(): Promise<IFfmpegInput> {
		const width = await this.promptService.input<number>('Width', 'number');
		const height = await this.promptService.input<number>('Heigth', 'number');
		const path = await this.promptService.input<string>('Path', 'input');
		const name = await this.promptService.input<string>('Name', 'input');

		return { width, height, path, name };
	}

	protected build({ width, height, path, name }: IFfmpegInput): ICommandExecFfmpeg {
		const output = this.fileService.getFilePath(path, name, 'mp4');
		const args = new FFmpegBuilder().input(path).setVideoSize(width, height).output(output);

		return { command: 'ffmpeg', args, output };
	}

	protected spawn({ output, command, args }: ICommandExecFfmpeg): ChildProcessWithoutNullStreams {
		this.fileService.deleteFileIfExists(output);

		return spawn(command, args);
	}

	protected preocessStream(stream: ChildProcessWithoutNullStreams, logger: IStreamLogger): void {
		const handler = new StreamHandler(logger);

		handler.processOutput(stream);
	}
}
