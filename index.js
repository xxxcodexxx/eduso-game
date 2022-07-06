var bgSVG = `
            <svg id="bg-svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
                height="640" viewBox="0 0 360 640.00001" width="360" version="1.1" xmlns:cc="http://creativecommons.org/ns#"
                xmlns:dc="http://purl.org/dc/elements/1.1/">
                <rect id="rect5189-8" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                    height="640" width="360" y="0" x="0" fill="#d7eef4" />
                <g fill="#333333">
                    <path id="path10590-3-7-0" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                        d="m153.94 443.28c-1.6123 0-2.9194 1.2047-2.9194 2.6916v10.868c0 5.5017-2.7017 5.5166-4.9971 5.5166v-11.866c0-2.5165-1.8644-4.5558-4.1642-4.5558-2.2999 0-4.1643 2.0393-4.1643 4.5558v20.342c-2.2954 0-4.9971-0.015-4.9971-5.5165v-9.4802c0-1.4869-1.3071-2.6916-2.9193-2.6916-1.6123 0-2.9193 1.2047-2.9193 2.6916v12.354c0 5.6939 4.6336 9.0964 10.836 9.0964v15.213h8.3285v-23.689c6.2021 0 10.836-3.4012 10.836-9.0952v-13.743c0-1.4869-1.3071-2.6916-2.9193-2.6916z" />
                    <path id="path10590-3-5-8-4" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                        d="m225.91 447.5c2.2227 0 4.0245 1.9708 4.0245 4.4028v14.293c2.2182 0 4.8292-0.0145 4.8292-5.3313v-5.9423c0-1.4369 1.2632-2.6012 2.8213-2.6012s2.8213 1.1642 2.8213 2.6012v8.7195c0 5.5027-4.4781 8.7908-10.472 8.7908v20.068h-8.0489v-40.597c0-2.432 1.8018-4.4028 4.0244-4.4028z" />
                    <path id="path10590-3-4-6-4" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                        d="m46.842 445.94c-2.2999 0-4.1643 2.0403-4.1643 4.5568v20.342c-2.2954 0-4.9971-0.0161-4.9971-5.5176v-7.2581c0-1.4869-1.307-2.6927-2.9193-2.6927s-2.9193 1.2058-2.9193 2.6927v10.133c0 5.6939 4.6337 9.0952 10.836 9.0952v15.214h8.3285v-17.648c6.2021 0 10.836-3.4013 10.836-9.0952v-5.9699c0-1.4869-1.307-2.6916-2.9193-2.6916s-2.9193 1.2047-2.9193 2.6916v3.095c0 5.5016-2.7017 5.5165-4.9971 5.5165v-17.906c0-2.5165-1.8644-4.5568-4.1642-4.5568z" />
                    <path id="path10590-3-4-6-4-6" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                        d="m320.43 445.94c-2.2998 0-4.1642 2.0403-4.1642 4.5568v20.342c-2.2954 0-4.9972-0.0161-4.9972-5.5176v-7.2581c0-1.4869-1.307-2.6927-2.9193-2.6927-1.6122 0-2.9193 1.2058-2.9193 2.6927v10.133c0 5.6939 4.6337 9.0952 10.836 9.0952v15.214h8.3285v-17.648c6.2021 0 10.836-3.4013 10.836-9.0952v-5.9699c0-1.4869-1.307-2.6916-2.9193-2.6916s-2.9193 1.2047-2.9193 2.6916v3.095c0 5.5016-2.7018 5.5165-4.9971 5.5165v-17.906c0-2.5165-1.8644-4.5568-4.1643-4.5568z" />
                </g>
            </svg>
        `;

var fgSVG = `
            <svg id="fg-svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
                height="150" viewBox="0 0 360 150" width="360" version="1.1" xmlns:cc="http://creativecommons.org/ns#"
                xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/">
                <rect style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                    height="147.5" width="360" y="2.5" x="0" fill="#ffb380" />
                <path stroke="#333333" stroke-width="5" fill="none" d="m-0.000001625 2.5h360" />
                <circle id="a" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                    cx="-9.75" cy="11" r="2.5" fill="#333333" />
                <use xlink:href="#a" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 9.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 18.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(15 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 24.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 33.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(30 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 39.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 48.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(45 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 54.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 63.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(60 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 69.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 78.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(75 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 84.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 93.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(90 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 99.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 108.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(105 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 114.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 123.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(120 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 129.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 138.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(135 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 144.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 153.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(150 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 159.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 168.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(165 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 174.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 183.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(180 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 189.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 198.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(195 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 204.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 213.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(210 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 219.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 228.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(225 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 234.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 243.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(240 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 249.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 258.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(255 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 264.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 273.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(270 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 279.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 288.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(285 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 294.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 303.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(300 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 309.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 318.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(315 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 324.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 333.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(330 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 339.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 348.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(345 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 354.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 363.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(360 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 369.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 378.05 17.2)" height="100%" width="100%" y="0" x="0" />
            </svg>
        `;

var boneOpen = `
            <svg id="bone" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
                height="400" viewBox="0 0 79.999993 400.00001" width="80" version="1.1" xmlns:cc="http://creativecommons.org/ns#"
                xmlns:dc="http://purl.org/dc/elements/1.1/">
        `;
var boneMid = `
            <path id="path4855-9" stroke-linejoin="round" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                d="m12.343 397.5-0.274-343.44c-0.066-8.49-9.569-14.59-9.569-27.05 0-12.457 7.957-24.615 21.609-24.551 7.448 0.0614 12.539 3.9094 15.891 8.055 3.352-4.1456 8.443-7.9937 15.891-8.055 13.652-0.0637 21.609 12.094 21.609 24.551s-9.5033 18.557-9.5692 27.044l-0.27382 343.41z"
                stroke="#333333" stroke-linecap="round" stroke-width="5" fill="#e9ddaf" />
            <g stroke-linejoin="round" stroke="#333333" stroke-linecap="round" stroke-width="5" fill="none">
                <path id="path4855-2-0" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                    d="m13.781 26.92a11.746 12.772 0 0 1 11.746 -12.78" />
                <path id="path5025" d="m56.472 115.85v78.183" />
                <path id="path5025-3-6" d="m56.472 92.06v10.609" />
                <path id="path5025-0" d="m56.472 253.62v126.19" />
                <path id="path5025-3-6-6" d="m56.472 212.25v24.515" />
            </g>
        `;
var boneClose = "</svg>";

var botBoneSVG = boneOpen + boneMid + boneClose;
var topBoneSVG =
  boneOpen +
  '<g transform="rotate(180) translate(-80, -400)">' +
  boneMid +
  "</g>" +
  boneClose;

var sprite1 = `
            <svg id="sprite-1" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
                height="59.968" viewBox="0 0 100.02518 59.967859" width="100.03" version="1.1" xmlns:cc="http://creativecommons.org/ns#"
                xmlns:dc="http://purl.org/dc/elements/1.1/">
                <g stroke-linecap="round">
                    <ellipse id="body" stroke-linejoin="round" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                        rx="27.792" transform="matrix(.97502 -.22210 .30061 .95375 0 0)" stroke="#333333" ry="14.864" cy="46.239"
                        cx="16.016" stroke-width="4.0066" fill="#d38d5f" />
                    <g id="head" transform="matrix(.5 0 0 .5 .011191 -.016144)">
                        <path id="path6767-3" stroke-linejoin="round" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                            d="m196.03 86.922s-61.739-3.1063-75.355-6.8143c-14.08-3.835-25.527-11.615-25.527-25.941 0-13.335-15.956-50.135-15.956-50.135s30.525 17.767 41.481 24.195c11.784 6.9142 75.355 44.369 75.355 58.695z"
                            stroke="#333333" stroke-width="8" fill="#d38d5f" />
                        <ellipse id="eye" stroke-linejoin="round" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                            rx="5.8902" ry="5.9862" stroke="#ffffff" cy="45.876" cx="120.32" stroke-width="5" fill="#333333" />
                        <path id="mouth" d="m194.28 84.826c-23.83-4.875-43.57-11.271-63.81-23.461" fill-rule="evenodd"
                            stroke="#333333" stroke-width="5" fill="#d38d5f" />
                    </g>
                    <path id="wing-top" stroke-linejoin="round" d="m10.252 43.445c0.8135-13.421 3.458-26.194-5.2065-41.445 22.742 0 34.917 19.591 38.055 31.493l0.0005-0.001"
                        fill-rule="evenodd" stroke="#333333" stroke-width="4" fill="#d38d5f">
                    </path>
                </g>
            </svg>
        `;

var sprite2 = `
            <svg id="sprite-2" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
                height="59.968" viewBox="0 0 100.02518 59.967859" width="100.03" version="1.1" xmlns:cc="http://creativecommons.org/ns#"
                xmlns:dc="http://purl.org/dc/elements/1.1/">
                <g stroke-linecap="round">
                    <ellipse id="body" stroke-linejoin="round" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                        rx="27.792" ry="14.864" stroke="#333333" transform="matrix(.97502 -.22210 .30061 .95375 0 0)" cy="46.239"
                        cx="16.016" stroke-width="4.0066" fill="#d38d5f" />
                    <g id="head" transform="matrix(.5 0 0 .5 .011191 -.016144)">
                        <path id="path6767-3" stroke-linejoin="round" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                            d="m196.03 86.922s-61.739-3.1063-75.355-6.8143c-14.08-3.835-25.527-11.615-25.527-25.941 0-13.335-15.956-50.135-15.956-50.135s30.525 17.767 41.481 24.195c11.784 6.9142 75.355 44.369 75.355 58.695z"
                            stroke="#333333" stroke-width="8" fill="#d38d5f" />
                        <ellipse id="eye" stroke-linejoin="round" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                            rx="5.8902" ry="5.9862" stroke="#ffffff" cy="45.876" cx="120.32" stroke-width="5" fill="#333333" />
                        <path id="mouth" d="m194.28 84.826c-23.83-4.875-43.57-11.271-63.81-23.461" fill-rule="evenodd"
                            stroke="#333333" stroke-width="5" fill="#d38d5f" />
                    </g>
                    <path id="wing-bot" stroke-linejoin="round" d="m10.252 43.445c8.7795 5.151 8.41 14.523 8.41 14.523 15.09 0 27.976-12.688 24.439-24.475l0.0005-0.0005"
                        fill-rule="evenodd" stroke="#333333" stroke-width="4" fill="#d38d5f">
                    </path>
                </g>
            </svg>
        `;

var star_sprite = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="60" height="60" viewBox="0 0 60 60" xml:space="preserve">
<rect x="0" y="0" width="100%" height="100%" fill="transparent"/>
<g transform="matrix(1 0 0 1 30 30)" id="271c263f-b5a7-4c95-aba7-fcc9693db6a7">
<rect style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(243,241,12); fill-opacity: 0; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" x="-30" y="-30" rx="0" ry="0" width="60" height="60"/>
</g>
<g transform="matrix(Infinity NaN NaN Infinity 0 0)" id="321574d3-e9c7-463f-b238-0943e028c183">
</g>
<g transform="matrix(0.58 0 0 0.58 30 30)" id="b9d51809-8461-4752-b1cf-964a8d96bbb6">
<circle style="stroke: rgb(0,0,0); stroke-width: 2; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,226,0); fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" cx="0" cy="0" r="35"/>
</g>
</svg>`;

var bg = new Image();
bg.src = "data:image/svg+xml," + encodeURIComponent(bgSVG);

var fg = new Image();
fg.src = "data:image/svg+xml," + encodeURIComponent(fgSVG);

var dinoGlide = new Image();
dinoGlide.src = "data:image/svg+xml," + encodeURIComponent(sprite1);

var dinoFlap = new Image();
dinoFlap.src = "data:image/svg+xml," + encodeURIComponent(sprite2);

var star = new Image();
star.src = "data:image/svg+xml," + encodeURIComponent(star_sprite);

var topBone = new Image();
topBone.src = "data:image/svg+xml," + encodeURIComponent(topBoneSVG);

var botBone = new Image();
botBone.src = "data:image/svg+xml," + encodeURIComponent(botBoneSVG);

var normalQuestions = []; //danh sách câu hỏi thường
var starQuestions = []; //danh sách câu hỏi đặc biệt
var answerResult = {};

var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

var hitboxWidth = 60;
var hitboxHeight = 15;

var spriteOffset_X = -10;
var spriteOffset_Y = -25;

var fgPos_X = 0;

var dinoPos_X = 100;
var dinoPos_Y = 200;
var dinoAngle = 0;
var dinoState = dinoGlide;

var minBoneHeight = -330;
var maxBoneHeight = -160;

var scrollSpeed = -4; //tốc độ
var gravity = 0.3;
var lift = -8;
var velocity = 0;

var star_frequency = 3; //tần suất xuất hiện sao
var has_star = false;
var passed_star = false;
var notDieTime = 4000;

var start = false;
var pause = false;
var gameOver = false;
var score = 0;
var correct_answer = null;
var allow_increase_score = true; //cho phép tăng điểm số
var allow_close = false; //cho phép đóng dialog câu hỏi mà không cần confirm

var bone_count = 0;
var bonePtr = 0;
var boneStart = 400;
var flyGap = 200;
var boneGap = 300;
var bones = [
  { x: boneStart, y: getRandomHeight(minBoneHeight, maxBoneHeight) },
  { x: boneStart + boneGap, y: getRandomHeight(minBoneHeight, maxBoneHeight) },
  {
    x: boneStart + 2 * boneGap,
    y: getRandomHeight(minBoneHeight, maxBoneHeight),
  },
];
var starPos = { x: 0, y: 0 };

function getRandomHeight(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function playerInput() {
  if (!start) {
    $("#user-guide").hide();
    start = true;
    velocity = lift;
    dinoAngle = -20;
    document.getElementById("ctrl-ctn").style.opacity = 0;
  } else {
    if (!gameOver) {
      velocity = lift;
      dinoAngle = -20;
    }
  }
}

function checkCollision() {
  // set upper bound
  if (dinoPos_Y <= -hitboxHeight) {
    velocity = 0;
  }

  // dino hit the ground
  if (dinoPos_Y + hitboxHeight >= canvas.height - fg.height) {
    velocity = 0;
    dinoPos_Y = canvas.height - fg.height - hitboxHeight;
    setGameOver();
  }
  if ((correct_answer == null || !correct_answer) && !gameOver) {
    // dino hit bone
    if (
      dinoPos_X + hitboxWidth >= bones[bonePtr].x &&
      dinoPos_X < bones[bonePtr].x + topBone.width &&
      (dinoPos_Y <= bones[bonePtr].y + topBone.height ||
        dinoPos_Y + hitboxHeight >= bones[bonePtr].y + topBone.height + flyGap)
    ) {
      //hiển thị câu hỏi
      pause = true;
      showQuestion();
    }
  }
  //dino hit star
  if (
    !passed_star &&
    !gameOver &&
    dinoPos_X + hitboxWidth >= starPos.x &&
    dinoPos_X < starPos.x + 60 &&
    dinoPos_Y + hitboxHeight >= starPos.y &&
    dinoPos_Y < starPos.y + 60
  ) {
    pause = true;
    showStarQuestion();
  }
}

function replay() {
  $("#staticGameOver").modal("hide");
  $("#user-guide").show();
  start = false;
  gameOver = false;
  passed_star = false;
  bone_count = 0;
  $("#question-content").attr("data-close-q", 0);
  $("#star_question-content").attr("data-close-q", 0);

  score = 0;
  velocity = 0;

  dinoPos_X = 100;
  dinoPos_Y = 200;
  dinoAngle = 0;
  dinoState = dinoGlide;

  bonePtr = 0;
  bones = [
    { x: boneStart, y: getRandomHeight(minBoneHeight, maxBoneHeight) },
    {
      x: boneStart + boneGap,
      y: getRandomHeight(minBoneHeight, maxBoneHeight),
    },
    {
      x: boneStart + 2 * boneGap,
      y: getRandomHeight(minBoneHeight, maxBoneHeight),
    },
  ];
  starPos = { x: 0, y: 0 };
  document.getElementById("ctrl-ctn").style.opacity = 1;

  document.getElementById("gameover-screen").style.visibility = "hidden";
  document.getElementById("gameover-screen").style.opacity = 0;
}

function setGameOver() {
  gameOver = true;
  $("#staticGameOver").modal("show");
}

function update() {
  // foreground scroll
  if (!gameOver && !pause) {
    fgPos_X += scrollSpeed;

    if (fgPos_X <= -canvas.width) {
      fgPos_X = 0;
    }
  }

  // game started
  if (start && !pause) {
    velocity += gravity;
    dinoPos_Y += velocity;

    // if velocity is negative show dino flap sprite else show dino falling
    if (velocity < 0) {
      dinoState = dinoFlap;
    } else {
      dinoState = dinoGlide;
      dinoAngle = Math.min(dinoAngle + 2, 90);
    }

    if (!gameOver && !pause) checkCollision();

    if (!gameOver && !pause) {
      for (var i = 0; i < bones.length; i++) {
        // scroll bones across screen
        bones[i].x += scrollSpeed;

        // reassign bone object XY after it leaves screen
        if (bones[i].x <= -topBone.width) {
          if (i == 0) {
            bones[0].x = bones[bones.length - 1].x + boneGap;
          } else {
            bones[i].x = bones[i - 1].x + boneGap;
          }

          bones[i].y = getRandomHeight(minBoneHeight, maxBoneHeight);
        }
      }

      // if dino passed through the bone increase score
      if (dinoPos_X >= bones[bonePtr].x + topBone.width) {
        //cộng điểm khi không phải trả lời câu hỏi hoặc trả lời đúng
        if (allow_increase_score) score++;
        else allow_increase_score = true;
        bone_count++; //increase passed bone
        passed_star = false; //reset passed star
        if (bonePtr == 2) {
          bonePtr = 0;
        } else {
          bonePtr++;
        }
      }
    }
  }
  render();
}

function render() {
  document.getElementById("score").innerHTML = score;

  ctx.drawImage(bg, 0, 0);

  for (var i = 0; i < bones.length; i++) {
    ctx.drawImage(topBone, bones[i].x, bones[i].y);
    ctx.drawImage(botBone, bones[i].x, bones[i].y + topBone.height + flyGap);
  }
  //draw a star
  if (bone_count > 0 && (bone_count + 1) % star_frequency == 0) {
    starPos.x = bones[2].x + 10;
    starPos.y = bones[2].y + topBone.height + flyGap / 3;
    ctx.drawImage(star, starPos.x, starPos.y);
  }
  ctx.save();
  ctx.translate(
    dinoPos_X + hitboxWidth / 2 + spriteOffset_X,
    dinoPos_Y + hitboxHeight / 2
  );
  ctx.rotate((dinoAngle * Math.PI) / 180);
  ctx.drawImage(
    dinoState,
    -hitboxWidth / 2,
    -hitboxHeight / 2 + spriteOffset_Y
  );
  ctx.restore();

  // Show hitbox
  //ctx.fillStyle = "#ff00ff";
  //ctx.fillRect(dinoPos_X, dinoPos_Y, hitboxWidth, hitboxHeight);

  ctx.drawImage(fg, fgPos_X, canvas.height - fg.height);
  ctx.drawImage(fg, fgPos_X + fg.width, canvas.height - fg.height);
  window.requestAnimationFrame(update);
}
//chọn câu trả lời
function choose(element) {
  $(".d-answer").removeClass("d-answer-active");
  element.classList.add("d-answer-active");
  var qId = element.getAttribute("data-q");
  var aId = element.getAttribute("data-a");
  $("#submit-answer").html(
    `<button type="button" class="btn btn-common" onclick=submitAnswer('${qId}','${aId}')>Nộp</button>`
  );
}
function choose2(element) {
  $(".d-answer").removeClass("d-answer-active");
  element.classList.add("d-answer-active");
  var qId = element.getAttribute("data-q");
  var aId = element.getAttribute("data-a");
  $("#submit-answer").html(
    `<button type="button" class="btn btn-common" onclick=submitAnswer2('${qId}','${aId}')>Nộp</button>`
  );
}
function chooseStarAnswer(element) {
  $(".d-star-answer").removeClass("d-star-answer-active");
  element.classList.add("d-star-answer-active");
  var qId = element.getAttribute("data-q");
  var aId = element.getAttribute("data-a");
  $("#submit-star-answer").html(
    `<button type="button" class="btn btn-common" onclick=submitStarAnswer('${qId}','${aId}')>Nộp</button>`
  );
}
//hiển thị câu hỏi lần 1
function showQuestion() {
  var question = normalQuestions[0];
  var question_content = `
  <p class="p-question">${question.content}</p>
  <p class="p-answer-border"></p>
  <div class="answers-content" id="answer-content">`;
  for (var i = 0; i < question.answers.length; i++) {
    question_content += `
    <div class="d-answer" data-q="${question.id}" data-a="${question.answers[i].id}" onclick="choose(this)">
      <div class="d-answer-index"><span>${question.answers[i].title}</span></div>
      <div class="d-answer-content">${question.answers[i].content}</div>
    </div>
    <p class="p-answer-border"></p>`;
  }
  question_content += `
  </div>`;
  $("#submit-answer").html(
    '<button type="button" class="btn-submit-disable">Nộp</button>'
  );
  $("#heart-desc").html("Trả lời đúng để chơi tiếp");
  var heart = `<i class="fa-solid fa-heart"></i><i class="fa-solid fa-heart"></i>`;
  $("#heart").html(heart);
  $("#question-content").html(question_content);
  $("#questionDialog").modal("show");
  //lấy thêm câu hỏi nếu cần
  normalQuestions.splice(0, 1);
  if (normalQuestions.length == 0) {
    getNormalQuestion(current_page, page_size);
  }
}
//hiển thị câu hỏi lần 1
//chọn câu trả lời
//submit câu trả lời lần 1
function submitAnswer(qid, aid) {
  answer(qid, aid);
  var currentElement = $(".d-answer-active");
  if (answerResult.value) {
    //xử lý trả lời đúng
    currentElement.addClass("d-answer-correct");
    currentElement.removeClass("d-answer-active");
    $(".d-answer").prop("onclick", null).off("click"); //xóa onclick tại các câu trả lời
    $("#submit-answer").html(
      `<button type="button" class="btn btn-continue" onclick=submitContinue()>Tiếp tục</button>`
    ); //thay đổi nút nộp => tiếp tục
    $("#heart-desc").html("Bạn được cộng 1 điểm!"); //thay đổi thông báo dưới heart
    $("#question-content").attr("data-close-q", 1); // cho phép đóng dialog mà không cần confirm và được cộng điểm
  } else {
    //xử lý trả lời sai
    currentElement.addClass("d-answer-in_correct");
    currentElement.removeClass("d-answer-active");
    $(".d-answer").prop("onclick", null).off("click"); //xóa onclick tại các câu trả lời
    $("#submit-answer").html(
      `<button type="button" class="btn btn-retry" onclick=submitNext()>Thử lại</button>`
    ); //thay đổi nút nộp => thử lại
    //xóa 1 heart
    var heart = `<i class="fa-solid fa-heart"></i><i class="fa-regular fa-heart"></i>`;
    $("#heart").html(heart);
    $("#heart-desc").html("Trả lời đúng để chơi tiếp"); //thay đổi thông báo dưới heart
    $("#question-content").attr("data-close-q", 0); // đóng dialog mà cần confirm
  }
  //hiển thị ghi chú trả lời
  var answer_note = `<div class="answer-note">
  <p><strong>Giải thích:</strong></p>
  <p class="p-answer-note">
    ${answerResult.ex}
  </p>
</div>`;
  $("#answer-content").append(answer_note);
}
function submitContinue() {
  $("#questionDialog").modal("hide");
  pause = false; //tiếp tục game
  correct_answer = true;
  allow_increase_score = true;
  playerInput(); //nhảy lên 1 nhịp
  //cho phép 3s không chết
  setTimeout(() => {
    correct_answer = null;
  }, notDieTime);
}
//submit câu trả lời lần 1
//hiển thị câu hỏi lần 2
function submitNext() {
  var question = normalQuestions[0];
  var question_content = `<p class="p-question">${question.content}</p>
  <p class="p-answer-border"></p>
  <div class="answers-content" id="answer-content">`;
  for (var i = 0; i < question.answers.length; i++) {
    question_content += `<div class="d-answer" data-q="${question.id}" data-a="${question.answers[i].id}" onclick="choose2(this)">
    <div class="d-answer-index"><span>${question.answers[i].title}</span></div>
    <div class="d-answer-content">${question.answers[i].content}</div>
  </div>
  <p class="p-answer-border"></p>`;
  }
  question_content += `
  </div>`;
  $("#question-content").html(question_content);
  $("#submit-answer").html(
    `<button type="button" class="btn-submit-disable">Nộp</button>`
  );
  //lấy thêm câu hỏi nếu cần
  normalQuestions.splice(0, 1);
  if (normalQuestions.length == 0) {
    getNormalQuestion(current_page, page_size);
  }
}
//hiển thị câu hỏi lần 2
//submit câu trả lời lần 2
function submitAnswer2(qid, aid) {
  answer(qid, aid);
  var currentElement = $(".d-answer-active");
  if (answerResult.value) {
    //xử lý trả lời đúng
    currentElement.addClass("d-answer-correct");
    currentElement.removeClass("d-answer-active");
    $(".d-answer").prop("onclick", null).off("click"); //xóa onclick tại các câu trả lời
    $("#submit-answer").html(
      `<button type="button" class="btn btn-continue" onclick=submitContinue2()>Chơi tiếp</button>`
    ); //thay đổi nút nộp => tiếp tục
    $("#heart-desc").html("Bạn không được cộng điểm."); //thay đổi thông báo dưới heart
    $("#question-content").attr("data-close-q", 3); // cho phép đóng dialog mà không cần confirm và không được cộng điểm
  } else {
    //xử lý trả lời sai
    currentElement.addClass("d-answer-in_correct");
    currentElement.removeClass("d-answer-active");
    $(".d-answer").prop("onclick", null).off("click"); //xóa onclick tại các câu trả lời
    $("#submit-answer").html(
      `<button type="button" class="btn btn-out" onclick=submitOut()>Kết thúc</button>`
    ); //thay đổi nút nộp => thử lại
    //xóa 1 heart
    var heart = `<i class="fa-regular fa-heart"></i><i class="fa-regular fa-heart"></i>`;
    $("#heart").html(heart);
    $("#heart-desc").html("Bạn đã hết lượt chơi."); //thay đổi thông báo dưới heart
    $("#question-content").attr("data-close-q", 4); // đóng dialog và gameover
  }
  //hiển thị ghi chú trả lời
  var answer_note = `<div class="answer-note">
  <p><strong>Giải thích:</strong></p>
  <p class="p-answer-note">
    ${answerResult.ex}
  </p>
</div>`;
  $("#answer-content").append(answer_note);
}
function submitContinue2() {
  $("#questionDialog").modal("hide");
  pause = false; //tiếp tục game
  allow_increase_score = false;
  correct_answer = true;
  playerInput(); //nhảy lên 1 nhịp
  //cho phép 3s không chết
  setTimeout(() => {
    correct_answer = null;
  }, notDieTime);
}
function submitOut() {
  $("#questionDialog").modal("hide");
  pause = false;
  setGameOver();
}
//submit câu trả lời lần 2
//hiển thị câu hỏi star
function showStarQuestion() {
  var question = starQuestions[0];
  var content = `<p class="p-question">${question.content}</p>
  <p class="p-answer-border"></p>
  <div class="answers-content" id="star-answer-content">`;
  for (var i = 0; i < question.answers.length; i++) {
    content += `<div class="d-star-answer" data-q="${question.id}" data-a="${question.answers[i].id}" onclick="chooseStarAnswer(this)">
    <div class="d-star-answer-index"><span>${question.answers[i].title}</span></div>
    <div class="d-star-answer-content">${question.answers[i].content}</div>
  </div>
  <p class="p-answer-border"></p>`;
  }
  content += `
  </div>
  <div class="d-bottom flex-row-reverse">
    <div class="d-star-button" id="submit-star-answer">
      <button type="button" class="btn-submit-disable">
        Nộp
      </button>
    </div>
  </div>`;
  $("#star_question-content").html(content);
  $("#starQuestionDialog").modal("show");
  //lấy thêm câu hỏi nếu cần
  starQuestions.splice(0, 1);
  if (starQuestions.length == 0) {
    getStarQuestion(current_star_page, page_size);
  }
}
//hiển thị câu hỏi star
//submit câu trả lời star
function submitStarAnswer(qid, aid) {
  answer(qid, aid);
  var currentElement = $(".d-star-answer-active");
  if (answerResult.value) {
    //xử lý trả lời đúng
    currentElement.addClass("d-star-answer-correct");
    currentElement.removeClass("d-star-answer-active");
    $(".d-star-answer").prop("onclick", null).off("click"); //xóa onclick tại các câu trả lời
    $("#submit-star-answer").html(
      `<button type="button" class="btn btn-continue" onclick=submitStarContinue(true)>Chơi tiếp</button>`
    ); //thay đổi nút nộp => Chơi tiếp
    var star_desc = `<div class="text-center">
    <span class="star-desc"
      >Chúc mừng! Bạn được cộng 3 điểm!</span
    >
  </div>`;
    $("#star_question-content").append(star_desc);
    $("#star_question-content").attr("data-close-q", 1); // cho phép dialog và được cộng điểm
  } else {
    //xử lý trả lời sai
    currentElement.addClass("d-star-answer-in_correct");
    currentElement.removeClass("d-star-answer-active");
    $(".d-star-answer").prop("onclick", null).off("click"); //xóa onclick tại các câu trả lời
    $("#submit-star-answer").html(
      `<button type="button" class="btn btn-continue" onclick=submitStarContinue(false)>Chơi tiếp</button>`
    ); //thay đổi nút nộp => Chơi tiếp
    var star_desc = `<div class="text-center">
    <span class="star-desc"
      >Bạn không được cộng điểm.</span
    >
  </div>`;
    $("#star_question-content").append(star_desc);
    $("#star_question-content").attr("data-close-q", 2); // cho phép dialog nhưng không được cộng điểm
  }
  //hiển thị ghi chú trả lời
  var answer_note = `<div class="answer-note">
  <p><strong>Giải thích:</strong></p>
  <p class="p-answer-note">
    ${answerResult.ex}
  </p>
</div>`;
  $("#star-answer-content").append(answer_note);
}
function submitStarContinue(result) {
  if (result) {
    score += 3;
    allow_increase_score = false;
  }
  $("#starQuestionDialog").modal("hide");
  pause = false; //tiếp tục game
  correct_answer = null;
  passed_star = true; //đã qua câu hỏi star
}
//submit câu trả lời star
//show leaderboard
function showLeaderboard() {
  showTab("class");
  $("#leaderBoardDialog").modal("show");
}
function showTab(type) {
  var _rankName = type == "class" ? "Xếp hạng Lớp" : "Top 50 Khối";
  var _name = `Nguyễn Quang Đại`;
  var _score = 1124;
  var _rank = 4;
  var classContent = `<div class="board-content">
  <div class="current-rank">
    <div class="user">
      <div class="image"><img width="60" height="60" src="https://axiecdn.axieinfinity.com/axies/8973740/axie/axie-full-transparent.png"/></div>
      <div class="infor">
        <div class="name">${_name}</div>
        <div class="score">${_score}</div>
      </div>
    </div>
    <div class="rank">
      <div class="rank-title">Xếp hạng</div>
      <div class="rank-score">${_rank}</div>
    </div>
  </div>
  <div class="t-ranking-title"><h5>${_rankName}</h5></div>
  <div class="board-list" id="board-list">`;
  for (var i = 1; i < 10; i++) {
    var active = "";
    if (i == 4) active = "item-active";
    var item = `<div class="board-item ${active}">
    <div class="index"><div class="d-text">${i}</div></div>
    <div class="separate-left"></div>
    <div class="infor"><div class="avatar"><img src="https://marketplace.axieinfinity.com/static/image/axie-sold.png"/></div>
    <div class="name">Nguyễn Quang Đại ${i}</div></div>
    <div class="score">${100 + i}</div>
    </div>`;
    item += `<p class="p-answer-border"></p>`;
    classContent += item;
  }
  classContent += `</div></div>`;
  $(".tab-pane").removeClass("show active");
  if (type == "class") {
    $("#class-ranking").html(classContent);
    $("#class-ranking").addClass("show active");
  } else {
    $("#grade-ranking").html(classContent);
    $("#grade-ranking").addClass("show active");
  }
}
//show leaderboard
//đóng dialog
function closeFirstNoti() {
  $("#staticBackdrop").modal("hide");
}
function closeQuestion() {
  var data_close = $("#question-content").attr("data-close-q");
  if (data_close == "1") {
    submitContinue(); //trường hợp trả lời đúng và được cộng điểm
  } else if (data_close == "0") {
    $("#closeQuestionDialog").modal("show"); //hiển thị confirm
  } else if (data_close == "4") {
    submitOut(); //gameover
  } else {
    submitContinue2(); //tiếp tục game mà không được cộng điểm
  }
}
function closeStarQuestion() {
  var data_close = $("#star_question-content").attr("data-close-q");
  if (data_close == "0") {
    $("#closeStarQuestionDialog").modal("show");
  } else if (data_close == "1") {
    submitStarContinue(true); //tiếp tục và được cộng điểm
  } else {
    submitStarContinue(false); //tiếp tục nhưng không được cộng điểm
  }
}
function chooseNo() {
  $("#closeQuestionDialog").modal("hide");
}
function chooseStarNo() {
  $("#closeStarQuestionDialog").modal("hide");
}
function chooseYes() {
  $("#closeQuestionDialog").modal("hide");
  submitOut();
}
function chooseStarYes() {
  var data_close = $("#star_question-content").attr("data-close-q");
  if (data_close == "1") submitStarContinue(true);
  else submitStarContinue(false);
  $("#closeStarQuestionDialog").modal("hide");
}
function closeLeaderboard() {
  $("#leaderBoardDialog").modal("hide");
}
//đóng dialog
document.addEventListener("DOMContentLoaded", function (event) {
  //do work
  //showLeaderboard();
});

document.addEventListener("keydown", function (e) {
  var char = e.which || e.keyCode;
  if (char == 32 || char == 38) {
    e.preventDefault();
    playerInput();
  }
});

document.getElementById("c").addEventListener("click", function () {
  playerInput();
});

document.addEventListener("touchstart", function () {
  playerInput();
});

document.getElementById("replay").addEventListener("click", function () {
  replay();
});

$(document).on("show.bs.modal", ".modal", function () {
  const zIndex = 1040 + 10 * $(".modal:visible").length;
  $(this).css("z-index", zIndex);
  setTimeout(() =>
    $(".modal-backdrop")
      .not(".modal-stack")
      .css("z-index", zIndex - 1)
      .addClass("modal-stack")
  );
});

update();

function setConfig(data) {
  scrollSpeed = data.config.speed - 24;
  $("#target-point").html(data.config.targetPoint);
}
function setNormalQuestion(data) {
  normalQuestions = data.data;
  current_page++;
}
function setStarQuestion(data) {
  starQuestions = data.data;
  current_star_page++;
}
function getResultAnswer(data) {
  answerResult = data.data;
}
