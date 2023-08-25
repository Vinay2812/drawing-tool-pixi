import figmaJsonString from './image-issue'
const figmaScreenUUID = 'lsadjflasdasasdfasdfasd';
const figmaFileKey = 'XMkDmsKaBsEoR4YacWCuXk';

export const uploadJson = async () => {
    const url = 'http://localhost:8000/prod/figma/uploadJson';
    const body = {
        figmaJsonString: JSON.stringify(figmaJsonString),
        figmaScreenUUID,
        figmaFileKey,
    };
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'mode': 'no-cors',
            },
        });
        const json = await response.json();
        console.log('Success:', json);
        return json;
    } catch (error) {
        console.error('Error:', error);
        return error;
    }
};