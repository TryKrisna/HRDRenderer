import { FramedDocumentRenderer } from '@govtechsg/decentralized-renderer-react-components';
import BACIICertificate from './BACIICertificate.js';
import {TEMPLATES} from '../canvas/templates.ts'
export default function TemplateRenderer({ preview }) {
    if (preview) {
        /* const wrappedDocument = {
            data: {
                $template: {
                    name: 'bcf82926-9a94-4370-a8f8-7ed96ba5408e:string:MOEYS_BACII_CERTIFICATE',
                    type: '44d07ef3-16aa-4a84-b195-3534b6d14280:string:EMBEDDED_RENDERER',
                    url: 'fdc56557-7618-40d0-9c41-22b3d838b029:string:https://renderer.verifykh.com',
                },
                certificate: {
                    barcode: 'c11ad6e2-e097-44c7-95df-f7f282089606:string:010401079031122000002',
                    center: {
                        id: '3ff16b1e-afbb-4ae1-ba1e-982523a156d0:string:វិ. សិរីសោភ័ណ ',
                        room: 'eda1eb2f-6902-4781-a8ed-670d9eb53679:string:3',
                        seat: '2d1d731a-dac9-432a-8267-bd1e359f916e:string:62',
                    },
                    examDate: '80f2d792-92b1-4acc-908d-05e4bbaf7e79:string:០៥ ធ្នូ ២០២២',
                    grade: '64a2f2f5-9d3c-41bf-9704-9a65f5b1bd22:string:D',
                    id: '150506c3-7563-4cd1-a9d1-959582934af1:string:៤២ ៦៨១ / ២២',
                    metadata:
                        'b26fc63e-23b1-43e5-8fea-1c11e11e848e:string:0910607039041129999362 (01/10/2023 05:49:13 PM)',
                    program: '513e43cc-9b57-4700-86a3-d948a7ec448e:string:វិទ្យាសាស្ត្រសង្គម',
                    rank: '4015e220-5f0a-477b-bd1f-8ba2a5de875b:string:66.700',
                    signatureDate:
                        '6b89aaf2-774e-40f8-a6ad-14a07b45a720:string:ថ្ងៃចន្ទ ៤កើត ខែបុស្ស ឆ្នាំខាល ចត្វាស័ក ព.ស. ២៥៦៦\nរាជធានីភ្នំពេញ ថ្ងៃទី២៦ ខែ ធ្នូ ឆ្នាំ២០២២',
                    subjectGrades: [
                        {
                            grade: '3166c8ec-b693-44b6-8f88-313825955ec3:string:F',
                            id: 'ce215ea5-2387-4397-86ea-7e3e2364cf8e:string:ភាសាបរទេស',
                        },
                        {
                            grade: '25c48206-7229-4662-b648-f043208e5b7c:string:F',
                            id: 'c95d6e61-db97-4333-8ed1-0813b238e92a:string:គណិតវិទ្យា',
                        },
                        {
                            grade: '08627c92-6360-42dc-a86a-447ddd531e04:string:D',
                            id: 'b2204dab-b7ca-4be4-a2e9-df45cb5c6763:string:អក្សរសាស្រ្តខ្មែរ',
                        },
                        {
                            grade: '24a51d50-cd38-43fd-a5e2-825a841d246b:string:C',
                            id: '0702c219-9bb0-478c-9b19-9ecb27096613:string:ប្រវត្តិវិទ្យា',
                        },
                        {
                            grade: '43bc17c2-a73f-483d-af16-4f28df7acc09:string:C',
                            id: '7454a10d-73e3-4923-95d6-996a420ecf3f:string:ភូមិវិទ្យា',
                        },
                        {
                            grade: '63fdb214-5181-4d4f-9989-36ad9a35e130:string:C',
                            id: '6a41c2b9-fc86-4555-80a1-a45c961a17e5:string:សីលធម៍-ពលរដ្ឋវិទ្យា',
                        },
                        {
                            grade: '17fb2808-dd5d-40f1-8407-4e3407b6f5d0:string:F',
                            id: '2bec5731-1d98-4a53-b18a-76281d8eded7:string:ផែនដី និងបរិស្ថានវិទ្យា',
                        },
                    ],
                    type: '954ea9a4-cbc5-4943-a594-1c65a942d863:string:BACII',
                    year: '17ada7a4-bb9c-4234-9a5a-b338443f8bb4:string:២០២២',
                },
                id: 'ab9273f1-ff84-46c7-89b5-dd47bdf39fa7:string:13562',
                issuers: [
                    {
                        documentStore:
                            'f42019ff-68c9-4f02-92f2-ddf6cfce1f7b:string:0x3a9EB1fF80d1D3BA337A3eAFF4418c9022957Fda',
                        identityProof: {
                            location: '42a59f7c-0147-4fbd-a138-b113a922b595:string:verifykh.com',
                            type: 'dab073b2-a67a-4d93-8eb4-1ddc8b7eee25:string:DNS-TXT',
                        },
                        name: '54af60ef-dad8-41aa-8d9e-93a7ece6033f:string:Digital Government Committee',
                        url: '0a606edc-2f63-4252-9735-90dae3502040:string:https://verifykh.com',
                    },
                ],
                recipient: {
                    dateOfBirth: '1726a79a-877f-42a2-942e-57c44f3edd65:string:២២ ឧសភា ២០០៤',
                    fatherName: '21e568ff-31dc-476f-8cc3-1b2697c069b3:string:រៀល ហុក',
                    gender: '1dd58de4-0ffd-4ed7-9c96-b9a3f6bf8430:string:ស្រី',
                    id: '7acedafa-8310-4247-aa7d-365a17537c8e:string:13562',
                    motherName: '0d89ba30-625e-41d8-a03a-53269907a365:string:ឈីវ ស្ដើង',
                    name: '9fbed072-8234-4f3d-b893-ede777853de9:string:ខិ គិមហ៊ុន',
                    originalPhotoPath:
                        '719e8e8d-38d3-4a58-8a67-a95976981853:string:Photos\\12\\010401079031\\010401079031122000002.jpg',
                    photoUrl:
                        'd7cb7707-722f-41fc-b77d-ceb0ef85514b:string:https://dgcuatstorage.blob.core.windows.net/dgs-bac2-photo/010401079031122000002.jpg',
                    placeOfBirth: '54bc213b-30c9-4aa4-a22f-752ae5119ed0:string:បន្ទាយមានជ័យ',
                },
            },
            signature: {
                merkleRoot: 'fd119e93a63f512067bd66c92188d842545e03f261843a173e4c4b139179ea34',
                proof: [],
                targetHash: 'fd119e93a63f512067bd66c92188d842545e03f261843a173e4c4b139179ea34',
                type: 'SHA3MerkleProof',
            },
            version: 'https://schema.openattestation.com/2.0/schema.json',
        }; */

      const wrappedDocument = {
            version: 'https://schema.openattestation.com/2.0/schema.json',
            data: {
                id: 'edb73e5a-5387-4aec-8773-75851bd6a101:string:8f6d0f12-eb4a-4799-a3ec-7686b000537a',
                certificate: {
                    id: '8639c58d-7b6e-4fac-bc70-d586c789848a:string:8f6d0f12-eb4a-4799-a3ec-7686b000537a',
                    type: '54dfb587-2a9c-4f0b-b8d2-ef5c4bdffb04:string:CADT',
                    course: '348f7a12-d148-4e9a-8569-ed6f2958b682:string:ជំនាញឌីជីថលចាំបាច់',
                    courseEn:
                        'feb12547-dd8f-4fca-adbb-97f0819b0501:string:Digital Skills Essential',
                    examDate:
                        'c459957f-6678-4be6-bbea-edf71212db21:string:ថ្ងៃទី២៨ ​ខែធ្នូ ឆ្នាំ២០២២',
                    examDateEn:
                        '46c41be4-479a-460a-9451-c0df0be1aa26:string:28 December 2022',
                    signatureDate:
                        '333996cc-a8d0-4f9b-b236-77baccc83949:string:រាជធានីភ្នំពេញ ថ្ងៃទី២២ ខែកុម្ភះ ឆ្នាំ២០២៣',
                    signatureDateEn:
                        '82a4f3b1-3013-4dc5-9052-483396b8a960:string:Phnom Penh, 22 February 2023'
                },
                recipient: {
                    id: 'a64fc692-bf3c-402d-972f-fd0344725e06:string:85cd0376',
                    name: 'fcb9246d-b56b-4ccd-8c90-4bfcd1b13cdc:string:ជេដ្ឋា សុខដេន',
                    nameEn: 'edd42794-f21d-4850-a861-548239f0c35e:string:CHETHA SOKDEN'
                },
                issuers: [
                    {
                        name: 'e047a936-e91b-4e5a-81f7-ab49c8e838cb:string:Digital Government Committee',
                        documentStore:
                            '02287bcd-90ee-49a7-8db2-b120c1ac3be8:string:0x3a9EB1fF80d1D3BA337A3eAFF4418c9022957Fda',
                        url: '31645bb6-20d9-4ece-9e2c-75d77d175f3b:string:https://verifykh.com',
                        identityProof: {
                            type: '6bd54f4d-0100-490b-8fc4-d7cdd5224739:string:DNS-TXT',
                            location:
                                '7bf403f6-a284-4ea0-931e-b5a2085a3a2f:string:verifykh.com'
                        }
                    }
                ],
                $template: {
                    name: '41f9c935-172c-49d8-abe0-f73238a70ffa:string:CADT_CERTIFICATE',
                    type: 'a098d891-3772-439a-84e4-a34cbd5755cb:string:EMBEDDED_RENDERER',
                    url: 'b6980e64-1eb4-4244-b8e9-938487d94142:string:https://renderer.verifykh.com'
                }
            },
            signature: {
                type: 'SHA3MerkleProof',
                targetHash:
                    '6fe84e8333f7370f72a59d64377223ca0b0509efc84451a7a1cbbe67e1e931dc',
                proof: [
                    '715693c5c8412ca7f2e14a7be1599e5b77465cc90a07fad8d79f250fcb84b47f',
                    'd01880b73d63979b4bdb5262091027c74220a85242cfe2c1921e87879f16adca',
                    '3d77250e8b8aec2cc7c7d656abe5494faabeb59734ea2f0bb1fdd2140a09aabc',
                    '67cff37ece0ebd24186c65dd44dbe45dd9792ff6d1b6eeb77ac0633979549c8f',
                    'dd54b0ae1e9d8f99afdbd83c0ef0e3bf7cffbf25695bacacd78d50a1f2a561b8',
                    'a526f8c3443a6905ed85f995ece2b8f4fbd381ed15bd2c1ab611d12619ee5368',
                    '8b7d3c2e0acb7238fad7a330279150789c9a81196f2dba3447beebe19cf3ab8b',
                    'c09c1df7d26e5be8fcee7d3335ad99701dcabd49ea3986f685e2c77f34056500'
                ],
                merkleRoot:
                    'c3cd2773899bcedaa46dc3eb2b6bb2571928542dc223ff0b963b3026b45ea1df'
            }
        }; 
/*
        const wrappedDocument = {
            version: 'https://schema.openattestation.com/2.0/schema.json',
            data: {
                id: 'edb73e5a-5387-4aec-8773-75851bd6a101:string:8f6d0f12-eb4a-4799-a3ec-7686b000537a',
                certificate: {
                    id: '8639c58d-7b6e-4fac-bc70-d586c789848a:string:8f6d0f12-eb4a-4799-a3ec-7686b000537a',
                    type: '54dfb587-2a9c-4f0b-b8d2-ef5c4bdffb04:string:CADT',
                    course: '348f7a12-d148-4e9a-8569-ed6f2958b682:string:Computer Science'
                },
                recipient: {
                    id: 'a64fc692-bf3c-402d-972f-fd0344725e06:string:85cd0376',
                    name: 'fcb9246d-b56b-4ccd-8c90-4bfcd1b13cdc:string:CHAN Thaily'
                },
                issuers: [
                    {
                        name: 'e047a936-e91b-4e5a-81f7-ab49c8e838cb:string:Digital Government Committee',
                        documentStore:
                            '02287bcd-90ee-49a7-8db2-b120c1ac3be8:string:0x3a9EB1fF80d1D3BA337A3eAFF4418c9022957Fda',
                        url: '31645bb6-20d9-4ece-9e2c-75d77d175f3b:string:https://verifykh.com',
                        identityProof: {
                            type: '6bd54f4d-0100-490b-8fc4-d7cdd5224739:string:DNS-TXT',
                            location:
                                '7bf403f6-a284-4ea0-931e-b5a2085a3a2f:string:verifykh.com'
                        }
                    }
                ],
                $template: {
                    name: '41f9c935-172c-49d8-abe0-f73238a70ffa:string:AUPP_CERTIFICATE',
                    type: 'a098d891-3772-439a-84e4-a34cbd5755cb:string:EMBEDDED_RENDERER',
                    url: 'b6980e64-1eb4-4244-b8e9-938487d94142:string:https://renderer.verifykh.com'
                }
            },
            signature: {
                type: 'SHA3MerkleProof',
                targetHash:
                    '6fe84e8333f7370f72a59d64377223ca0b0509efc84451a7a1cbbe67e1e931dc',
                proof: [
                    '715693c5c8412ca7f2e14a7be1599e5b77465cc90a07fad8d79f250fcb84b47f',
                    'd01880b73d63979b4bdb5262091027c74220a85242cfe2c1921e87879f16adca',
                    '3d77250e8b8aec2cc7c7d656abe5494faabeb59734ea2f0bb1fdd2140a09aabc',
                    '67cff37ece0ebd24186c65dd44dbe45dd9792ff6d1b6eeb77ac0633979549c8f',
                    'dd54b0ae1e9d8f99afdbd83c0ef0e3bf7cffbf25695bacacd78d50a1f2a561b8',
                    'a526f8c3443a6905ed85f995ece2b8f4fbd381ed15bd2c1ab611d12619ee5368',
                    '8b7d3c2e0acb7238fad7a330279150789c9a81196f2dba3447beebe19cf3ab8b',
                    'c09c1df7d26e5be8fcee7d3335ad99701dcabd49ea3986f685e2c77f34056500'
                ],
                merkleRoot:
                    'c3cd2773899bcedaa46dc3eb2b6bb2571928542dc223ff0b963b3026b45ea1df'
            }
        };
*/
        // preview only
        return <BACIICertificate wrappedDocument={wrappedDocument} />;
    }

    const registry = {
        [TEMPLATES.MOEYS_BACII_CERTIFICATE]: [
            {
                id: 'certificate-1',
                label: 'BACII Certificate',
                template: BACIICertificate
            }
        ],
        [TEMPLATES.CADT_CERTIFICATE]: [
            {
                id: 'certificate-2',
                label: 'CADT Certificate',
                template: BACIICertificate
            }
        ],
        [TEMPLATES.AUPP_CERTIFICATE]: [
            {
                id: 'certificate-4',
                label: 'AUPP Certificate',
                template: BACIICertificate
            }
        ]
    };

    return <FramedDocumentRenderer templateRegistry={registry} />;
}
