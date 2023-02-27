import path from 'path';
import { CERTIFICATE_CANVAS } from '../models/canvas.model';
import { AUPP_TEXT } from '../models/text.model';

export const AUPP_TEXT_COLORS = {
    black: '#000000'
};

export const AUPP_FONTS = {
    primary: 'Old English Text MT'
};

export const AUPP_TEXTS: AUPP_TEXT[] = [
    {
        dataKeys: ['recipient.name'],
        text: '{recipient.name}',
        textSize: 40,
        y: 180,
        align: 'center'
    },
    {
        dataKeys: ['certificate.course'],
        text: '{certificate.course}',
        textSize: 34,
        y: 268,
        align: 'center'
    }
];

export const AUPP_SCHEMA: CERTIFICATE_CANVAS = {
    defaultTextFont: 'primary',
    defaultTextSize: 24,
    defaultTextColor: 'black',
    texts: AUPP_TEXTS,
    templateImgPath: path.join(
        process.cwd(),
        'assets',
        'AUPP',
        'sample-aupp-frame.png'
    ),
    fontPath: path.join(process.cwd(), 'assets', 'AUPP', 'fonts'),
    fonts: AUPP_FONTS
};
