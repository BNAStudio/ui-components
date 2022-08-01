import React from 'react';
import Button from './Button'

import {render, fireEvent} from '@testing-library/react'
import '@storybook/testing-library';

const validStylesSelector = [
    "standard",
    "primary",
    "secundary",
    "third",
    "circular"
]

test( 'Button component testing event click', async() => {
    const clickOnItem = jest.fn()
    const { findAllByRole } = render( <Button onClickHandler={clickOnItem} /> )
    const item = await findAllByRole("button");
    fireEvent.click(item[0]);
    expect(clickOnItem).toHaveBeenCalledTimes(1)
})

test( 'Button component testing iconSize', async() => {
    const { findAllByRole } = render( <Button addStyle={validStylesSelector} /> )
    const item = await findAllByRole("button");
    expect(item).toHaveLength(1);
})

// test( 'Button component testing addStyle', async() => {
//     const { findAllByRole } = render( <Button iconSize={1} /> )
//     const item = await findAllByRole("button");
//     expect(item).toHaveTextContent("1");
// })