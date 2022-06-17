export const col = {
	black: (...args: any) => `\x1b[40m${`\x1b[30m${args.join(' ')}`}\x1b[0m`,
	red: (...args: any) => `\x1b[41m${`\x1b[30m${args.join(' ')}`}\x1b[0m`,
	green: (...args: any) => `\x1b[42m${`\x1b[30m${args.join(' ')}`}\x1b[0m`,
	yellow: (...args: any) => `\x1b[43m${`\x1b[30m${args.join(' ')}`}\x1b[0m`,
	blue: (...args: any) => `\x1b[44m${`\x1b[30m${args.join(' ')}`}\x1b[0m`,
	magenta: (...args: any) => `\x1b[45m${`\x1b[30m${args.join(' ')}`}\x1b[0m`,
	cyan: (...args: any) => `\x1b[46m${`\x1b[30m${args.join(' ')}`}\x1b[0m`,
	white: (...args: any) => `\x1b[47m${`\x1b[30m${args.join(' ')}`}\x1b[0m`,
};
