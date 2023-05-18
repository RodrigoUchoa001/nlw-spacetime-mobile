// o typescript vai entender q todo arquivo png é um arquivo q posso importar
declare module '*.png';

//pra usar svg
declare module '*.svg' {
    import React from 'react'
    import { SvgProps } from 'react-native-svg'
    const content: React.FC<SvgProps>
    export default content
}