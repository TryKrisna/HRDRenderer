import { createCanvas, GlobalFonts, loadImage } from '@napi-rs/canvas';
import { CERTIFICATE_CANVAS } from './models/canvas.model';
import _ from 'lodash';

const createCertificateCanvas = async (
    schema: CERTIFICATE_CANVAS,
    wrappedDocument = {}
) => {
    const canvas = await createTemplateCanvas(schema);
    resolveAndWrite(schema, wrappedDocument, canvas);

    return canvas;
};

const createTemplateCanvas = async (schema: CERTIFICATE_CANVAS) => {
    const templateImg = await loadImage(schema.templateImgPath);
    const canvas = createCanvas(templateImg.width, templateImg.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(templateImg, 0, 0);

    return canvas;
};

const resolveAndWrite = (schema, wrappedDocument, canvas) => {
    GlobalFonts.loadFontsFromDir(schema.fontPath);
    for (const line of schema.texts) {
        if (line.dataKeys && line.dataKeys.length > 0) {
            for (const key of line.dataKeys)
                line.text = line.text.replace(
                    `{${key}}`,
                    _.get(wrappedDocument, key, '')
                );
        }

        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        let x = line.x ? line.x : centerX; //current line.x or default to center of img

        ctx.font = resolveFont(schema, line);
        ctx.fillStyle = line.textColor
            ? line.textColor
            : schema.defaultTextColor;
        const lineSize = ctx.measureText(line.text);

        switch (line.align) {
            case 'left':
                break;

            case 'center':
                x -= lineSize.width / 2;
                break;

            case 'right':
                x -= lineSize.width;
                break;
        }

        ctx.fillText(line.text, x, line.y);
    }
};

const resolveFont = (schema, line) => {
    // 'style size fontName' ex:'bold 20px Arial'
    const space = ' ';
    let font = '';
    const fontKey = line.textFont ? line.textFont : schema.defaultTextFont;

    font += line.textStyle ? line.textStyle + space : '';
    font += line.textSize ? line.textSize : schema.defaultTextSize;
    font += 'px' + space;
    font += schema.fonts[fontKey];

    return font;
};

export const CanvasBuilder = {
    create: createCertificateCanvas
};
