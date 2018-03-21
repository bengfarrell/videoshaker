export default {
    html(elementname) {
        return `${this.stylesheet(elementname)}
                <video autoplay="true"></video>
                <canvas></canvas>`;
    },

    stylesheet(elementname) {
        return `<style>
            ${elementname} {
                display: inline-block;
                background-color: black;
                position: relative;
                overflow: hidden;
            }
            
            ${elementname} > canvas {
                position: absolute;
            }
            
            ${elementname} > video {
                position: absolute;
            }
        </style>`;
    }
}
