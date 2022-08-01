import React from 'react'
import Button from './Button'
import { action } from '@storybook/addon-actions'

export default {
    title: "Button",
    component: Button
}

export const ButtonStandardStyle = () => (
    <Button 
        onClickHandler={ action('You press click') } />
)

export const ButtonPrimaryStyle = () => (
    <Button
        onClickHandler={ action('You press click') }
        addStyle='primary'
        fontDim={3}
        btnHeight={35}
        btnWidht={150} />
)

export const ButtonSecundaryStyle = () => (
    <Button
        onClickHandler={ action('You press click') }
        addStyle='secundary' />
)

export const ButtonThirdStyle = () => (
    <Button
        onClickHandler={ action('You press click') }
        addStyle='third' />
)

export const ButtonCircularStyle = () => (
    <Button
        onClickHandler={ action('You press click') }
        icon={true}
        addStyle='circular'
        fontDim={2} />
)