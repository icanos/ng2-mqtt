export declare namespace Paho {
    export namespace MQTT {
        export class Client {
            constructor(host: string, clientId: string);
            constructor(host: string, port: number, clientId: string);
            constructor(host: string, port: number, path: string, clientId: string);
            connect(connectOptions: Object): void;
            subscribe(filter: string, subscribeOptions: Object): void;
            unsubscribe(filter: string, unsubscribeOptions: Object): void;
            send(message: Message): void;
            disconnect(): void;
            getTraceLog(): void;
            startTrace(): void;
            stopTrace(): void;
            isConnected(): boolean;

            onConnectionLost(responseObject: Object): void;
            onMessageDelivered(): void;
            onMessageArrived(message: Message): void;
        }

        export class Message {
            constructor(payload: any);
            payloadString: string;
            payloadBytes: Array<any>;
            destinationName: string;
            qos: number;
            retained: boolean;
            duplicate: boolean;
        }

        export class WireMessage {
            encode(): ArrayBuffer;
            decodeMessage(input: ArrayBuffer, pos: number): Array<any>;
            writeUint16(input: number, buffer: ArrayBuffer, offset: number): number;
            writeString(input: string, utf8Length: number, buffer: ArrayBuffer, offset: number): number;
            readUint16(buffer: ArrayBuffer, offset: number): number;
            encodeMBI(num: number): Array<any>;
            UTF8Length(input: string): number;
            stringToUTF8(input: string, output: ArrayBuffer, start: number): ArrayBuffer;
            parseUTF8(input: ArrayBuffer, offset: number, length: number): string;
        }
    }
}
