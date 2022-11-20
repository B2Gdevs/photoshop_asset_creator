import React, { useRef, useState } from 'react';
import { PlayIcon } from '../components/Icons.jsx';
const photoshop = require('photoshop'); // eslint-disable-line

var createNewLayersAction = [
    {
        _obj: 'make',
        _target: [{ _ref: 'layer' }],
        layerID: 3,
        using: { _obj: 'layer', name: 'GeneratedLayer' },
    },
];

function createNewLayerAction(layerId) {
    return [
        {
            _obj: 'make',
            _target: [{ _ref: 'layer' }],
            using: { _obj: 'layer', name: 'GeneratedLayer' },
        },
    ];
}

async function actionCommands() {
    let command;
    let psAction = require('photoshop').action;

    // Make layer
    command = {
        _obj: 'make',
        _target: [{ _ref: 'layer' }],
        using: { _obj: 'layer', name: 'GeneratedLayer' },
    };
    await psAction.batchPlay([command], {});
}

async function runModalFunction() {
    await photoshop.core.executeAsModal(actionCommands, {
        commandName: 'Action Commands',
    });
}

export const MoreDemos = () => {
    const myStyle = {
        marginTop: '50',
    };
    var promptRef = useRef();
    var [prompText, SetPromptText] = useState('');

    return (
        <>
            <div>
                <sp-textfield
                    ref={promptRef}
                    onInput={(event) => SetPromptText(event.target.value)}
                    placeholder="Some anime art"
                >
                    <sp-label isrequired="true" slot="label">
                        Prompt
                    </sp-label>
                </sp-textfield>
            </div>
            <sp-button onClick={runModalFunction} variant="cta" style={myStyle}>
                <span>Generate Details</span>
                <span slot="icon">
                    <PlayIcon />
                </span>
            </sp-button>
            <div>{prompText}</div>
            {/* <div>{promptRef && promptRef.current.value}</div> */}
        </>
    );
};
