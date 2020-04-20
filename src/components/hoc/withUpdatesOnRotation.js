import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'

export const withUpdatesOnRotation = (Component) => {
    return (props) => {
        const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width)
        const [deviceHeight, setDeviceHeight] = useState(Dimensions.get('window').height)

        useEffect(() => {
            const update = () => {
                const width = Dimensions.get('window').width
                const height = Dimensions.get('window').height
                setDeviceWidth(width)
                setDeviceHeight(height)
            }
            Dimensions.addEventListener('change', update)

            return () => Dimensions.removeEventListener('change', update)
        })

        return <Component {...props} vh={deviceHeight / 100} vw={deviceWidth / 100} />
    }
}
