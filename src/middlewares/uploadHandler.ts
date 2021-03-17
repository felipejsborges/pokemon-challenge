import { Request, Response, NextFunction } from 'express';
import formidable from 'formidable';
import path from 'path';
import { uploadConfig } from '../configs/uploadConfig'

function uploadHandler(
	request: Request,
	response: Response,
	next: NextFunction,
): void {
	const form = new formidable.IncomingForm();
	const { tempFolder } = uploadConfig

	form.uploadDir = tempFolder;
	form.multiples = false;
	form.keepExtensions = true;

	form.on('fileBegin', (name, file) => {
		if (!file) {
			throw new Error('Missing file');
		}

		const filename = (new Date()).getMilliseconds() + '-' + file.name;

		file.name = filename;

		file.path = path.join(tempFolder, filename);
	});

	form.parse(request, (err, fields, files) => {
		const file = Object.values(files)[0];

		const filename = Array.isArray(file)
			? file[0].name
			: file.name

		if (!file) {
			throw new Error('Missing file file');
		}

		request.filename = filename

		next(err);
	});
}

export default uploadHandler;
