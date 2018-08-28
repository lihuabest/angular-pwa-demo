// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "syntax": "postcss-scss", // 原来postcss不支持行内注释 采用scss的语法
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        "postcss-aspect-ratio-mini": {},
        "postcss-write-svg": {
            utf8: false
        },
        "postcss-preset-env": {
            stage: 1,
            features: {
                "nesting-rules": true
            },
            autoprefixer: {
                grid: true
            }
        },
        "postcss-px-to-viewport": {
            viewportWidth: 750, // (Number) The width of the viewport.
            viewportHeight: 1334, // (Number) The height of the viewport.
            unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
            viewportUnit: 'vw', // (String) Expected units.
            selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
            minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
            mediaQuery: false // (Boolean) Allow px to be converted in media queries.
        },
        "postcss-viewport-units": {
            filterRule: rule => rule.selector.indexOf("::after") === -1 && rule.selector.indexOf("::before") === -1 && rule.selector.indexOf(":after") === -1 && rule.selector.indexOf(":before") === -1
        },
        // "cssnano": {
        //     preset: "advanced",
        //     autoprefixer: false,
        //     "postcss-zindex": false
        // },
        "postcss-mixins": {}, // postcss-mixins 和 postcss-nested 配合，可以使用宏定义
        "postcss-nested": {}
    }
}
