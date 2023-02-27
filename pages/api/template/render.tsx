import { getData, verifySignature } from '@govtechsg/open-attestation';
import {
    createBacIICanvas,
    registerFonts
} from '../../../lib/create-bacii-canvas';
import _ from 'lodash';
import { CanvasBuilder } from '../../../canvas/canvas-builder';
import { BACII_SCHEMA } from '../../../canvas/schemas/bacii.schema';
import { TEMPLATES } from '../../../canvas/templates';
import { CADT_SCHEMA } from '../../../canvas/schemas/cadt.schema';
import { AUPP_SCHEMA } from '../../../canvas/schemas/aupp.schema';

registerFonts();

/**
 * Renderer Handler
 * @param {import('next').NextApiRequest} request
 * @param {import('next').NextApiResponse} response
 */
export default async function (request, response) {
    const { qrcode, wrappedDocument: wrappedDocumentString } = request.query;
    const wrappedDocument = JSON.parse(wrappedDocumentString);

    /* if (!verifySignature(wrappedDocument)) {
        response.status(400).json({
            msg: 'invalid signature or document has been tampered with'
        });
        return;
    } */

    const data = getData(wrappedDocument);

    // handle nullish field
    const get = (fieldPath, fallback: any = '') => {
        return _.get(data, fieldPath, fallback);
    };

    let canvas;
    if (get('$template.name') === TEMPLATES.MOEYS_BACII_CERTIFICATE) {
        const signatureDate = get('certificate.signatureDate', '').split('\n');
        const certificateInfo = {
            id: get('certificate.id'),
            name: get('recipient.name'),
            gender: get('recipient.gender'),
            dateOfBirth: get('recipient.dateOfBirth'),
            placeOfBirth: get('recipient.placeOfBirth'),
            fatherName: get('recipient.fatherName'),
            motherName: get('recipient.motherName'),
            photoUrl: get('recipient.photoUrl'),
            program: get('certificate.program'),
            grade: get('certificate.grade'),
            rank: get('certificate.rank'),
            seat: get('certificate.center.seat'),
            room: get('certificate.center.room'),
            examDate: get('certificate.examDate'),
            centerName: get('certificate.center.id'),
            grades: get('certificate.subjectGrades', []),
            dates: signatureDate,
            barcode: get('certificate.barcode'),
            metadata: get('certificate.metadata'),
            originalPhotoPath: get('recipient.originalPhotoPath') || ''
        };
        canvas = await createBacIICanvas(certificateInfo, qrcode);
        response.setHeader(
            'Content-disposition',
            'inline; filename=bacii-certificate.png'
        );
    } else {
        let schema;

        switch (get('$template.name')) {
            case TEMPLATES.CADT_CERTIFICATE:
                schema = CADT_SCHEMA;
                break;
            case TEMPLATES.AUPP_CERTIFICATE:
                schema = AUPP_SCHEMA;
                break;
        }

        canvas = await CanvasBuilder.create(schema, data);
        response.setHeader(
            'Content-disposition',
            'inline; filename=certificate.png'
        );
    }

    // create JPEG buffer
    const imageBuffer = canvas.toBuffer('image/png');
    response.setHeader('Content-Type', 'image/png');
    response.send(imageBuffer);
}
