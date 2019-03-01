import {Injectable} from '@angular/core';
import qrCode from 'qrcode';
import jsQR from "jsqr";
import {Camera} from "@ionic-native/camera";

@Injectable()
export class QrCodeProvider {

    constructor(private camera: Camera) {}

    generate(text: string): Promise<string> {
        return Promise.resolve(
            qrCode.toDataURL(text, { errorCorrectionLevel: 'H' })
        );
    }

    private getImageData(url): Promise<ImageData> {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.src = url;

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            image.onload = () => {
                try {
                    canvas.width = image.width;
                    canvas.height = image.height;
                    context.drawImage(image, 0, 0);
                } catch (e) {
                    reject(e);
                }

                const data = context.getImageData(0, 0, canvas.width, canvas.height);

                return resolve(data);
            };

            image.onerror = (error: ErrorEvent) => {
                return reject(error);
            };
        });
    }

    async decodeFromImage() {
        const imageBase64 = await this.camera.getPicture({
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        });

        const imageData = await this.getImageData('data:image/jpeg;base64,' + imageBase64);
        const qrCode = jsQR(imageData.data, imageData.width, imageData.height);

        if (qrCode && qrCode.data !== undefined) {
            return qrCode.data;
        }
    }
}
