import { useEffect, useState } from 'react';

export default function BACIICertificate(props) {
    const imageRatio = 1440 / 2037;
    const [imageSize, setImageSize] = useState([0, 0]);
    const url = `/api/template/render?wrappedDocument=${encodeURIComponent(
        JSON.stringify(props.wrappedDocument)
    )}`;

    console.log("This is the url",url);
    useEffect(() => {
        const observer = new ResizeObserver(() => {
            const width = clamp(document.body.clientWidth, 0, 720);
            setImageSize([width, width / imageRatio]);
        });
        observer.observe(document.body);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div
                className="fixed-canvas-wrapper"
                style={{ background: '#aaa', padding: '30px 0' }}
            >
                <img
                    src={url} /* width={imageSize[0]} height={imageSize[1]} */
                />
            </div>
        </>
    );
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
