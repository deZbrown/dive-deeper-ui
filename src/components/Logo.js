import React from 'react'
import Image from 'next/image'

const Logo = () => {
    const imageStyle = {
        borderRadius: '50%',
    }

    return (
        <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
            <Image
                src="/logo.jpeg"
                alt="Dive Deeper"
                width={200}
                height={200}
                style={imageStyle}
            />
        </div>
    )
}

export default Logo
