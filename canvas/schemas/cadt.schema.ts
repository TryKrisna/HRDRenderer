import path from 'path';
import { CERTIFICATE_CANVAS } from '../models/canvas.model';
import { CADT_TEXT } from '../models/text.model';

export const CADT_TEXT_COLORS = {
    black: '#122A4A'
};

export const CADT_FONTS = {
    primary: 'Niradei'
};

export const CADT_TEXTS: CADT_TEXT[] = [
    {
        text: 'វិញ្ញាបនបត្រ',
        textStyle: 'bold',
        textSize: 28,
        y: 136,
        align: 'center'
        // margin: { bottom: 5 }
    },
    {
        text: 'CERTIFICATE',
        textStyle: 'bold',
        textSize: 18,
        y: 170,
        align: 'center'
        // margin: { bottom: 12 }
    },
    {
        text: 'សូមបញ្ជាក់ថា',
        textSize: 15,
        y: 200,
        align: 'center'
        // margin: { bottom: 5 }
    },
    {
        text: 'This is to certify that',
        textSize: 11,
        y: 220,
        align: 'center'
        // margin: { bottom: 30 }
    },
    {
        dataKeys: ['recipient.name'],
        text: '{recipient.name}',
        textStyle: 'bold',
        textSize: 26,
        y: 260,
        align: 'center'
        // margin: { bottom: 8 }
    },
    {
        dataKeys: ['recipient.nameEn'],
        text: '{recipient.nameEn}',
        textStyle: 'bold',
        textSize: 20,
        y: 294,
        align: 'center'
        // margin: { bottom: 12 }
    },
    {
        dataKeys: ['certificate.course', 'certificate.examDate'],
        text: 'បានប្រឡងជាប់ដោយជោគជ័យ “{certificate.course}” នៅ{certificate.examDate} ពិតប្រាកដមែន ។',
        textSize: 15,
        y: 326,
        align: 'center'
        // margin: { bottom: 5 }
    },
    {
        dataKeys: ['certificate.courseEn', 'certificate.examDateEn'],
        text: 'has successfully passed the certification exam for “{certificate.courseEn}” on {certificate.examDateEn}.',
        textSize: 11,
        y: 346,
        align: 'center'
        // margin: { bottom: 18 }
    },
    {
        dataKeys: ['certificate.signatureDate'],
        text: '{certificate.signatureDate}',
        textSize: 12,
        y: 375,
        align: 'center'
        // margin: { bottom: 5 }
    },
    {
        dataKeys: ['certificate.signatureDateEn'],
        text: '{certificate.signatureDateEn}',
        textSize: 11,
        y: 392,
        align: 'center'
        // margin: { bottom: 18 }
    },
    {
        text: 'ប្រធានបណ្ឌិត្យសភាបច្ចេកវិទ្យាឌីជីថលកម្ពុជា',
        textSize: 12,
        y: 420,
        align: 'center'
        // margin: { bottom: 5 }
    },
    {
        text: 'President of Cambodia Academy of',
        textSize: 11,
        y: 438,
        align: 'center'
        // margin: { bottom: 5 }
    },
    {
        text: 'Digital Technology',
        textSize: 11,
        y: 454,
        align: 'center'
    }
];

export const CADT_SCHEMA: CERTIFICATE_CANVAS = {
    defaultTextFont: 'primary',
    defaultTextSize: 24,
    defaultTextColor: 'black',
    texts: CADT_TEXTS,
    templateImgPath: path.join(
        process.cwd(),
        'assets',
        'CADT',
        'cadt-frame-certificate.png'
    ),
    fontPath: path.join(process.cwd(), 'assets', 'MoEYS', 'fonts'),
    fonts: CADT_FONTS
};
