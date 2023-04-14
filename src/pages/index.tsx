import { useState } from 'react'
import { OnResultFunction, QrReader } from 'react-qr-reader'

export default function Home() {
    const [qrData, setQrData] = useState<string[]>([])

    const handleScan: OnResultFunction = (result, error, codeReader) => {
        console.log(codeReader)

        if (result) {
            const resultText = result?.getText()
            setQrData((prevData) =>
                !prevData.includes(resultText) ? [...prevData, resultText] : prevData
            )
        }

        if (error) {
            console.error(error)
        }
    }

    return (
        <>
            <QrReader
                onResult={handleScan}
                scanDelay={1000}
                constraints={{ facingMode: 'user' }}
                containerStyle={{ width: '100%' }}
                videoContainerStyle={{ width: '100%' }}
            />

            {qrData.map((qr, index) => (
                <li key={index}>{qr}</li>
            ))}
        </>
    )
}
