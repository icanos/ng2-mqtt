export declare module Paho {
    export module MQTT {
        export class Client {
            constructor(host: string, port: number, clientId: string);
            constructor(host: string, port: number, path: string, clientId: string);
            connect(connectOptions: Object):void;
            subscribe(filter: string, subscribeOptions: Object):void;
            unsubscribe(filter: string, unsubscribeOptions: Object):void;
            send(topic: string, payload: string, qos: number, retained: boolean):void;
            disconnect():void;
            getTraceLog():void;
            startTrace():void;
            stopTrace():void;
            isConnected():boolean;

            onConnectionLost(responseObject: Object):void;
            onMessageDelivered():void;
            onMessageArrived(message: Message):void;
        }

        export class Message {
            constructor();
            constructor(payload: string);
            
            payloadString: string;
            payloadBytes: Array<any>;

            destinationName(): string;
            destinationName(newDestinationName: string);

            qos(): number;
            qos(newQos: number);

            retained(): boolean;
            retained(newRetained: boolean);

            duplicate(): boolean;
            duplicate(newDuplicate: boolean);
        }
                   
        export class WireMessage {
            encode(): ArrayBuffer;
            decodeMessage(input: ArrayBuffer, pos: number);
            writeUint16(input: number, buffer: ArrayBuffer, offset: number);
            writeString(input: string, utf8Length: number, buffer: ArrayBuffer, offset: number);
            readUint16(buffer: ArrayBuffer, offset: number);
            encodeMBI(num: number);
            UTF8Length(input: string);
            stringToUTF8(input: string, output: ArrayBuffer, start: number);
            parseUTF8(input: ArrayBuffer, offset: number, length: number);
        }
    }
}
