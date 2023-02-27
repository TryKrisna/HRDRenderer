import { BACII_FONTS } from '../schemas/bacii.schema';
import { CADT_FONTS } from '../schemas/cadt.schema';
import { BACII_TEXT, CADT_TEXT } from './text.model';

export interface CERTIFICATE_CANVAS {
    defaultTextFont: keyof typeof BACII_FONTS | keyof typeof CADT_FONTS;
    defaultTextColor: string;
    defaultTextSize: number;
    texts: BACII_TEXT[] | CADT_TEXT[];
    templateImgPath: string;
    fontPath: string;
    fonts: {
        primary: string;
        secondary?: string;
        [key: string]: string;
    };
}
