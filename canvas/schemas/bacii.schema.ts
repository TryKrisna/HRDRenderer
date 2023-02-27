import path from 'path';
import { CERTIFICATE_CANVAS } from '../models/canvas.model';
import { BACII_TEXT } from '../models/text.model';

export const BACII_FONTS = {
    primary: 'Khmer OS System',
    secondary: 'Khmer OS Muol Light',
    arial: 'Arial'
};

export const BACII_TEXT_COLORS = {
    blue: '#2f3699',
    black: 'black',
    magenta: '#ff00ff',
    green: '#008000',
    red: '#ff0000'
};

const BACII_GRADE_COLORS = {
    F: '#000000',
    E: '#0000ff',
    D: '#008000',
    C: '#800000',
    B: '#ff00ff',
    A: '#ff0000'
};

export const BACII_TEXTS: BACII_TEXT[] = [
    {
        y: 347,
        x: 251,
        text: 'លេខ',
        textSize: 24
    },
    {
        dataKeys: ['certificate.id'],
        text: '{certificate.id}',
        textSize: 24
    },
    {
        text: 'កប្រឡ',
        textColor: 'blue',
        textSize: 24,
        margin: {
            left: 14
        }
    },
    {
        dataKeys: ['certificate.name'],
        text: '{certificate.name}',
        textFont: 'secondary',
        textSize: 34,
        y: 611,
        x: 753,
        align: 'center'
    }
];

export const BACII_SCHEMA: CERTIFICATE_CANVAS = {
    defaultTextFont: 'primary',
    defaultTextSize: 24,
    defaultTextColor: 'black',
    texts: BACII_TEXTS,
    templateImgPath: path.join(
        process.cwd(),
        'assets',
        'MoEYS',
        'certificate-bacii-stamp.png'
    ),
    fontPath: path.join(process.cwd(), 'assets', 'MoEYS', 'fonts'),
    fonts: BACII_FONTS
};
