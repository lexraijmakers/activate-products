import { Selection } from '@test/components/Selection'
import { useState } from 'react'
import { OnResultFunction, QrReader } from 'react-qr-reader'

export default function Home() {
    const [qrData, setQrData] = useState<string[]>([])

    const handleScan: OnResultFunction = (result) => {
        if (result) {
            const resultText = result?.getText()
            setQrData((prevData) =>
                !prevData.includes(resultText) ? [...prevData, resultText] : prevData
            )
        }
    }

    const handleDelete = (index: number) => {
        setQrData((prevItems) => {
            const updatedItems = [...prevItems]
            updatedItems.splice(index, 1)
            return updatedItems
        })
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

            <Selection key={qrData?.length} qrData={qrData} handleDelete={handleDelete} />
        </>
    )
}
