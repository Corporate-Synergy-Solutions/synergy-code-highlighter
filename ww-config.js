export default {
    editor: {
        label: {
            en: 'Code highlighter',
        },
    },
    properties: {
        code: {
            label: {
                en: 'Code',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
        lang: {
            label: {
                en: 'Languange',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'java', label: { en: 'Java' } },
                    { value: 'c', label: { en: 'C' } },
                    { value: 'css', label: { en: 'CSS' } },
                    { value: 'cpp', label: { en: 'C++' } },
                    { value: 'csharp', label: { en: 'C#' } },
                    { value: 'go', label: { en: 'Go' } },
                    { value: 'python', label: { en: 'Python' } },
                    { value: 'rust', label: { en: 'Rust' } },
                    { value: 'ruby', label: { en: 'Ruby' } },
                    { value: 'javascript', label: { en: 'JavaScript' } },
                    { value: 'html', label: { en: 'HTML' } },
                    { value: 'sql', label: { en: 'Sql' } },
                ],
            },
            defaultValue: 'java',
        },
        theme: {
            label: {
                en: 'Theme',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'default', label: { en: 'Default' } },
                    { value: 'dark', label: { en: 'Dark' } },
                    { value: 'funky', label: { en: 'Funky' } },
                    { value: 'okaidia', label: { en: 'Okaidia' } },
                    { value: 'solarizedlight', label: { en: 'Solarizedlight' } },
                    { value: 'tomorrow', label: { en: 'Tomorrow' } },
                    { value: 'twilight', label: { en: 'Twilight' } },
                ],
            },
            defaultValue: 'default',
        },
    },
};
